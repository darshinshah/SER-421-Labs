var fs = require('fs')
var options = {encoding:'utf8', flag:'r'};
var lab3survey;
var datastore={}
fs.readFile('./data/survey.json', options, function(err, data) {
  if (err){
    console.log("Failed to open survey file.");
  } else {
    lab3survey = JSON.parse(data);
  }
});

fs.readFile('./data/datastore.json', 'utf8', (err, jsonString) => {
    if (err) {
        return
    }
	try{
	datastore=JSON.parse(jsonString)
	}
	catch(err){
		datastore={}
	}
})


var express = require('express'),
	ejs = require('ejs'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	session = require('express-session');

var app = express();
app.set('views', './views');
app.engine('html', ejs.renderFile);
app.set("view engine", 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(function(req,res,next){
	res.set('Cache-Control','no-cache, no-store, max-stale=0, private, must-revalidate')
	next();
})

app.use(session({
	secret: 'MAGICALEXPRESSKEY',
	resave: true,
	saveUninitialized: true,
}));

app.get('/',function(req,res) {
	res.redirect(301,"/landing")
})

app.get('/landing', function(req, res){
	req.session.destroy()
	var username=req.cookies.username
	res.render("landing",{username: username});
});

app.all('/landing',function(req,res){
	res.status(405);
    res.send('405 - Method not Allowed');
})

function setchoice(req, res) {
    var page = req.session.currentPage;
    var questions = req.session.questions;
    var questionid = questions[page].id;

    req.session.selectedChoices[questionid] = req.body.choice === undefined ? -1 : req.body.choice;
}

function renderSurvey(req, res) {
	var page = req.session.currentPage;
    var questions = req.session.questions;
    var questionid = questions[page].id
    var selectedChoice = req.session.selectedChoices[questionid]

    res.render("survey", {
        question: questions[page].question,
        choices: questions[page].choices,
        page: page + 1,
        selectedChoice: selectedChoice === undefined ? -1 : selectedChoice,
        username: req.cookies.username,
        preference: req.cookies.preference,
        prevFlag: page == 0 ? false : true
    })
}

function isCompleted(req, res) {
    let questions = req.session.questions;
    if (req.body.submit != "previous" && req.session.currentPage == questions.length - 1) {
		var key=req.cookies.username+"$"+req.session.surveyid
		datastore[key]=req.session.selectedChoices
		fs.writeFile("./data/datastore.json",JSON.stringify(datastore),function(err,res){
			if(err){
				console.log(err)
			}
		})
		return true
    }
	return false
}

app.post("/survey", function(req,res){
	if (getUsername(req)==''){
		req.session.currentPage=0
		var surveyid=""
		for (let x of lab3survey.questions){
			surveyid+=x.id
		}
		req.session.surveyid=surveyid
		req.session.selectedChoices = datastore[req.body.username+"$"+req.session.surveyid] == undefined ? {} : datastore[req.body.username+"$"+req.session.surveyid]
		req.session.username=req.body.username
		req.session.questions=lab3survey.questions
		res.cookie("username", req.body.username)
    	res.cookie("preference", req.cookies.preference == undefined ? "horizontal" : req.cookies.preference)
		res.redirect("/survey")
		return
	}

	setchoice(req,res)
	var exit=isCompleted(req,res)
	if(exit==true){
		res.render("thankyou")
		req.session.destroy()
	}
	else
	{
		if(req.body.submit=="previous"){
			req.session.currentPage--;
		}
		else if(req.body.submit=="next"){
			req.session.currentPage++;
		}
		renderSurvey(req,res)
	}

})

app.get("/survey", function (req, res) {
	if(req.header('Referrer')=="http://localhost:3000/landing" || req.header('Referrer')=="http://localhost:3000/preferences" ){
    	renderSurvey(req, res)}
	else{
		res.status(400);
		res.send('400 - Bad Request');
	}

})

app.all("/survey",function(req,res){
	res.status(405);
	res.send('405 - Method not Allowed');
})


app.get("/preferences",function(req,res){
	res.render("preferences",{preference:req.cookies.preference})
})

app.post("/preferences",function(req, res){
	res.cookie("preference",req.body.preference)
	if(req.session.username!=undefined){
		res.redirect("/survey")
	}
	else{
		res.redirect('/landing')
	}
})

app.all("/preferences",function(req,res){
	res.status(405);
	res.send('405 - Method not Allowed');
})

function sortMatches(obj)
{
	var sortable=[];
	for(var key in obj)
		if(obj.hasOwnProperty(key))
			sortable.push([key, obj[key]]); 
	
	sortable.sort(function(a, b)
	{
	  return b[1]-a[1];
	});
	return sortable;
}

app.post("/match",function(req,res){
	var username=req.body.username
	if(username==undefined){
		res.status(400);
		res.send('400 - Bad Request');
		return
	}
	var matchesfound={}
	var surveyid=""
	for (let x of lab3survey.questions){
		surveyid+=x.id
	}
	var id=req.body.username+"$"+surveyid

	if(datastore[id]==undefined){
		res.render("match",{username:username,users:undefined})
		return
	}

	for(let x in datastore){
		var count=0
		var entries=x.toString().split("$")
		if(entries[1]==surveyid){
			if(entries[0]==req.body.username){
				continue
			}
			else{
				for(let y in datastore[x]){
					if(datastore[x][y]==datastore[id][y]){
						count+=1
					}
				}
				matchesfound[entries[0]]=count
			}
		}

	}
	// console.log("Helldasdfadfsdfsdafsfdfdso",matchesfound)
	sortedusers=sortMatches(matchesfound)
	// console.log("Helldasdfadfsdfsdafsfdfdso",sortedusers)
	res.render("match",{username: username, users:sortedusers})
})

app.all("/match",function(req,res){
	res.status(405);
	res.send('405 - Method not Allowed');
})

function getUsername(req) {
    if (req.session.username==undefined){
		return ''
	}
	else{
		return req.session.username
	}
}

app.all('*', (req, res, next) => {
    res.status(404);
    res.send('404: Page Not Found');
});

app.use((err, req, res, next) => {
    res.status(500);
	console.log(err)
    res.send('500: Internal Server Error');
});

app.listen(3000);