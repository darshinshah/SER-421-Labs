var fs = require('fs');
var http = require('http');
var url = require('url').URL;
var ROOT_DIR = "html/";
var qs = require('querystring');


function IsItJSON(string) {
    try {
        JSON.parse(string);
    } 
    catch (e) {
        return false;
    }
    return true;
}

var database=[];

http.createServer(function (req, res) {
	try
	{
	let urlObj = new URL(req.url, "http://localhost:3000");
	if (req.method == "GET") {
		if(urlObj.pathname=="/my_groceries"){


			var aisle=urlObj.searchParams.get('aisle');
			var diet=urlObj.searchParams.getAll('custom');
			var cookie=urlObj.searchParams.get('cookies')

			if(!urlObj.searchParams.get('aisle') && !urlObj.searchParams.get('custom') && !urlObj.searchParams.get('cookies') && Array.from(urlObj.searchParams).length >0 ){
				res.writeHead(400)
				res.end("400 Bad Request - Invalid Query/QueryString")
				return;
			}

			var msg=""
			if(aisle==null && diet.length==0){
				msg="No filters applied on grocery list."
			}
			else if(aisle==null){
				msg="Successfully filtered on: diet for value: "+diet.toString();
			}
			else if(diet.length==0){
				msg="Successfully filtered on: aisle for value: "+aisle;
			}
			else{
				msg="Successfully filtered on: diet for value: "+diet.toString()+ " and aisle for value: "+aisle;
			}

			var filtered=[]

			var cookieset=[]
			
			try{
				var j=""
			for(let i of req.headers.cookie){
					j=j+i
					if(i==","){
						cookieset.push(parseInt(j))
						j="";
					}
					
				}
			cookieset.push(parseInt(j))
			}
			catch(e){
				console.log("Cookie Not Yet Set")
			}

			if(aisle==null && diet.length==0 && cookie!="true"){
				filtered=database
				}
			else{
				var k=1;
				for (let obj of database){
					if(cookie=="true" && !(cookieset.includes(k))){
						k+=1
						continue;
					}
					k+=1;
					if (aisle!=null & diet.length==0){
						if (obj.aisle==aisle){
							filtered.push(obj)
							continue;
						}
					}
					if(diet.length!=0 && aisle==null){
						if(obj.custom!=null){
							var common = diet.filter(x => obj.custom.indexOf(x) !== -1)
							if(common.length>0){
								filtered.push(obj)
								continue;
							}

						}
						if (diet.indexOf(obj.custom)!=-1){
							filtered.push(obj)
							continue;
						}
					}
					else{
						if(aisle==null && diet.length==0){
							filtered.push(obj)
							continue;
						}

						if(obj.aisle==aisle && obj.custom!=null){
							console.log("ISNDIE")
							var common = diet.filter(x => obj.custom.indexOf(x) !== -1)
							if(common.length>0){
								filtered.push(obj)
								continue;
							}

						}
					}
				}
			}
			
			if(req.headers.accept=="application/json"){
				res.writeHead(200,{
					'Content-Type':'application/json',
				});

				var jsonobject={}
				jsonobject.landing="/my_groceries";
				jsonobject.filterMessages=msg;

				var grocerylist=[]

				for(let x of filtered){
					if(cookieset.includes(x.id)){
					grocerylist.push(["True",x.name,x.brand,x.aisle,x.quantity,x.custom,x.deliverydate])
					}
					else{
					grocerylist.push(["False",x.name,x.brand,x.aisle,x.quantity,x.custom,x.deliverydate])
				}
				}


				var grocerylistjson={}
				grocerylistjson.headers=["Favourites","Product Name","Brand Name","Aisle Number","Quantity","Diet Type","Delivery Date"]
				grocerylistjson.data=grocerylist
				jsonobject.grocerylist=grocerylistjson;
				res.end(JSON.stringify(jsonobject));
				return;
			}

			if(req.headers.accept=="text/plain"){
				res.writeHead(200,{
					'Content-Type':'text/plain',
				});

				var grocerylist=""
				grocerylist+="Grocery List"+"\n\n"+msg+"\n\n";
				grocerylist+="Favourites"+"\t\t"+"Product"+"\t\t"+"Brand"+"\t\t"+"Aisle"+"\t\t"+"Quantity"+"\t\t"+"Diet"+"\t\t"+"Date"+"\n\n";
				for(let x of filtered){
					if(cookieset.includes(x.id)){
					grocerylist+="True"+"\t\t"+x.name+"\t\t"+x.brand+"\t\t"+x.aisle+"\t\t"+x.quantity+"\t\t"+x.custom+"\t\t"+x.deliverydate+"\n\n";
				}
				else{
					grocerylist+="False"+"\t\t"+x.name+"\t\t"+x.brand+"\t\t"+x.aisle+"\t\t"+x.quantity+"\t\t"+x.custom+"\t\t"+x.deliverydate+"\n\n";

				}
				}


				res.end(grocerylist)
				return;
			}

			var datastring=""
			


			for(let x of filtered){
				if(cookieset.includes(x.id)){
					datastring+='<tr><td><input type="checkbox" id="'+x.id+'" name="favourites" value="'+x.id+'" checked> </td><td>'+x.name+'</td><td>'+x.brand+'</td><td>'+x.aisle+'</td><td>'+x.quantity+'</td><td>'+x.custom+'</td><td>'+x.deliverydate+'</td><td></tr>'
				}
				else{
					datastring+='<tr><td><input type="checkbox" id="'+x.id+'" name="favourites" value="'+x.id+'"> </td><td>'+x.name+'</td><td>'+x.brand+'</td><td>'+x.aisle+'</td><td>'+x.quantity+'</td><td>'+x.custom+'</td><td>'+x.deliverydate+'</td><td></tr>'
				}
			}

			var response=`
				<html>

					<head>
						<title>Grocery List</title>
					</head>

					<body>
						<span>`+msg+`</span></br></br>
						<form action="favourites" method="post">
						<table cellspacing="35">
							<tr>
								<th>Favourites</th>
								<th>Product Name</th>
								<th>Brand Name</th>
								<th>Aisle Number</th>
								<th>Quantity</th>
								<th>Diet Type</th>
								<th>Delivery Date</th>
							</tr>`+datastring+`
						</table>
						<input type="submit" value="Mark as Favourites">
						</form>
						<span>Add More: <a href="/index.html">here</a></span>
					</form>
					</body>
				</html>`

			res.writeHead(200, {  // 5. in case of success, set 200, Content-Type
				'Content-Type': 'text/html',
			});
			res.end(response);   // 6. Write out the payload

		}

			fs.readFile(ROOT_DIR + urlObj.pathname, function (err, data) {
				// 4. Assmble payload, either no file found error or get content
				if (err) {
					res.writeHead(501);  // 5. In case of error, set response code
					res.end("501 Not Implemented");
					return;
				}
				res.writeHead(200, {  // 5. in case of success, set 200, Content-Type
					'Content-Type': 'text/html',
				});
				res.end(data);   // 6. Write out the payload
			});
		}

	else if(req.method == "POST" && urlObj.pathname=="/groceries" ){
		var body='';

		req.on('data',function(data){
			body+=data;
		});


		req.on('end',function(){
			if(IsItJSON(body)==true){
				formdata=JSON.parse(body);
			}
			else{
				formdata=qs.parse(body);
			}
			const regex = new RegExp("^[A-Z][A-Za-z]+");

			if(!formdata.name || formdata.name.length<5 || !regex.test(formdata.name)){
				res.writeHead(400)
				res.end("400 Bad Request - Required Key: 'name' not present in sent blueprint or invalid")
				return;
			}

			if(!formdata.brand || formdata.brand.length>10){
				res.writeHead(400)
				res.end("400 Bad Request - Required Key: 'brand' not present in sent blueprint or invalid")
				return;
			}

			if(!formdata.quantity || !(parseInt(formdata.quantity)>0 && parseInt(formdata.quantity)<=12)){
				res.writeHead(400)
				res.end("400 Bad Request - Required Key: 'quantity' not present in sent blueprint or invalid")
				return;
			}

			if(!formdata.aisle || !(parseInt(formdata.aisle)>1 && parseInt(formdata.aisle)<=20)){
				res.writeHead(400)
				res.end("400 Bad Request - Required Key: 'aisle' not present in sent blueprint or invalid")
				return;
			}


			if(!formdata.custom){
				formdata.custom=null;
			}
			if(!formdata.deliverydate){
				formdata.deliverydate=null;
			}

			var output= '<html><head><title>Grocery List</title></head><body><p>Successfully added:'+formdata.name+'</p><p>Total items in grocery list: '+(database.length+1)+'</p><a href="/index.html">Add More</a><br></body></html>'
			database.push(formdata);
			var counter=1
			for (let entry of database){
				entry.id=counter;
				counter+=1;
			}
			res.writeHead(200, {  // 5. in case of success, set 200, Content-Type
				'Content-Type': 'text/html'});
			res.end(output);
		})

	}

	else if(req.method == "POST" && urlObj.pathname=="/favourites" ){
		var body='';

		req.on('data',function(data){
			body+=data;
		});


		req.on('end',function(){
			if(IsItJSON(body)==true){
				formdata=JSON.parse(body);
			}
			else{
				formdata=qs.parse(body);
			}
			console.log("BODY",body)
			if(body==""){
				res.writeHead(403);  // 5. In case of error, set response code
				res.end("403 Forbidden");
				return;
			}
			res.writeHead(200, {
				'Content-Type': 'text/html',
				'Set-Cookie': formdata.favourites+";Max-Age=600"});
			res.end('<html><head><title>Favourites Page</title><meta HTTP-EQUIV="REFRESH" content="3; url=/my_groceries"></head><body>Your Favourite were recorded!<br><a href="/index.html">Add More</a></body></html>');
		})
	}


	else {
		res.writeHead(405);  // 5. In case of error, set response code
		res.end("405 Method Not Allowed: " + req.method+" with "+urlObj.pathname);
		return;
	}
}
catch(e){
	res.writeHead(500)
	res.end("500 Internal Server Error"+e)
	return;
}
}).listen(3000, 'localhost', 3, function () {
	console.log('Ready!');
});
