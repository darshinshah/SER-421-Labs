const task2 = require('./task2sol');
const express = require('express');
const { json } = require('stream/consumers');
const bodyParser = require('body-parser');

players_store=[]
tournaments_store={}

const app = express();
app.use(express.json({
    verify : (req, res, buf, encoding) => {
      try {
        console.log("Verified")
        JSON.parse(buf);
      } catch(e) {
        res.status(400).send('Invalid JSON');
        throw Error('invalid JSON');
      }
    }
  }));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(express.urlencoded({extended:false}));

app.post("/Tournament",function(req,res){
    res.set('Access-Control-Allow-Origin', '*')
    res.set('Access-Control-Allow-Credentials', 'true')
    if(req.is('application/json')){
        console.log("INSIDE")
        try{
            var data = new task2.Tournament(JSON.stringify(req.body))
            // console.log("dataaaaaaa",data)
        }
        catch(err){
            console.log("BAD JSON1")
            console.log(err)
            res.status(400).json({"Added Tournament":"No"})
            return
        }
    }
    if(data==undefined){
        console.log(req.body)
    }
    console.log("DATA",data)
    var tournament = req.body.tournament
    var name=tournament.name
    tournaments_store[name]=tournament
    console.log(tournaments_store)
    res.status(201).json({"Added Tournament":"yes"})
})

app.get("/Player/filterscore",function(req,res){
    try{
        var tournamentname=req.query.tournamentname
        var filter=req.query.filter
    }
    catch(e){
        res.status(400).json({"message":"Cannot retrieve players, bad request"})
        return
    }
    if(tournamentname==undefined || filter==undefined){
        res.status(400).json({"message":"Cannot retrieve players, bad request"})
        return
    }
    result={}
    for (const [key, value] of Object.entries(tournaments_store)){
        if(key==tournamentname){
            for (let i of value["players"]){
                if(i.score<=parseInt(filter)){
                    result[i.firstinitial+i.lastname]=i
                }
            }
            res.status(200).json(result)
        }
    }
    res.status(400).json({"message":"Cannot retrieve players, bad request"})
})

app.get("/Player/unassigned",function(req,res){
    if(players_store===[]){
        res.status(200).json({"players_unassigned":"empty, all players are assigned"})
        return
    }
    res.status(200).json({"players_unassigned":players_store})
})

app.delete("/Player/unassigned",function(req,res){
    try{
        var first=req.body.firstinitial
        var last=req.body.lastname
    }
    catch(e){
        res.status(400).json({"Deleted Player":"No, bad request"})
        return
    }
    if(first==undefined || last==undefined){
        res.status(400).json({"Deleted Player":"No, bad request"})
        return
    }
    for(let i of players_store){
        if(i.firstinitial==first && i.lastname==last){
            players_store.splice(players_store.indexOf(i),1)
            res.status(200).json({"Deleted Player":"Yes"})
            return
        }
    }
    res.status(400).json({"Deleted Player":"No, bad request"})
    return
})

app.post("/Tournament/AwardYardage",function(req,res){
    try{
        var yardage=req.body.yardage
        var award=req.body.award
        var tournamentname=req.body.tournamentname
    }
    catch(e){
        res.status(400).json({"Modified AwardYardage":"No, bad request"})
        return
    }
    if(award==undefined || yardage==undefined){
        res.status(400).json({"Modified AwardYardage":"No, bad request"})
        return
    }
    found=false
    for (const [key, value] of Object.entries(tournaments_store)){
        if (key==tournamentname){
            found=true
            value["yardage"]=yardage
            value["award"]=award
            res.status(200).json({"Modified AwardYardage":"Yes"})
            return
        }
    }
    if(found==false){
        res.status(400).json({"Modified AwardYardage":"No, Tournament not found"})
        return
    }

})

app.post("/Player",function(req,res){
    res.set('Access-Control-Allow-Origin', '*')
    res.set('Access-Control-Allow-Credentials', 'true')
    try{
        console.log(req.body)
        var lastname=req.body.lastName
        var firstinitial=req.body.firstInitial
        var score = req.body.score
        var hole=req.body.hole
        var tournamentname=req.body.tournamentname
        console.log(lastname,firstinitial)
    }
    catch(e){
        res.status(400).json({"Added Player":"No, bad request"})
        return
    }
    if(lastname==undefined || firstinitial==undefined){
        res.status(400).json({"Added Player":"No, bad request"})
        return
    }
    player = new task2.Player(lastname,firstinitial,parseInt(score),parseInt(hole))
    console.log(player)
    if(tournamentname==undefined){
        players_store.push(new task2.Player(lastname,firstinitial,0,0))
        console.log("Player Store is: ",players_store)
    }
    else{
        for(const [key, value] of Object.entries(tournaments_store)){
            if (key==tournamentname){
                value["players"].push(player)
            }
        }
    }

    res.status(201).json({"Added Player":"Yes"})

})

app.delete("/Player",function(req,res){
    try{
        var last=req.body.lastName
        var first=req.body.firstInitial
        var tournamentname=req.body.tournamentname
    }
    catch(e){
        res.status(400).json({"Deleted Player":"No, bad request"})
        return
    }
    console.log(last,first,tournamentname)
    for (const [key, value] of Object.entries(tournaments_store)){
        if(key==tournamentname){
            console.log(value)
            for (let i of value["players"]){
                if(i.lastname==last && i.firstinitial==first){
                    value["players"].splice(value["players"].indexOf(i),1)
                    res.status(200).json({"Deleted Player":"Yes"})
                    return
                }
            }
        }
    }
    res.status(400).json({"Deleted Player":"No, Bad Request"})

})

app.get("/Tournament",function(req,res){
    res.set('Access-Control-Allow-Origin', null)
    res.set('Access-Control-Allow-Credentials', 'true')
    var lowerrange=req.query.lowerrange
    var upperrange=req.query.upperrange
    copy=JSON.parse(JSON.stringify(tournaments_store))
    for (const [key, value] of Object.entries(copy)){
        delete value["players"]
    }
    if(lowerrange!=undefined && upperrange!=undefined){
        newcopy={}
        for (const [key, value] of Object.entries(copy)){
            if(lowerrange>value["year"] || upperrange<value["year"]){
                console.log("Deleting")
            }
            else{
                newcopy[key]=value
            }
        }
        res.status(200).json(newcopy)
    }
    else{
        res.status(200).json(copy)
    }
})

app.get("/Player",function(req,res){
    try{
        var tournamentname=req.body.tournamentname
    }
    catch(e){
        res.status(400).json({"Retrieved Player":"No"})
        return
    }
    if(tournamentname==undefined){
        res.status(400).json({"Retrieved Player":"No"})
        return
    }
    for (const [key, value] of Object.entries(tournaments_store)){
        if(key==tournamentname){
            res.status(200).json(value["players"])
            return
        }
    }
    res.status(400).json({"Retrieved Player":"No"})
    return
})

app.post("/Player/postScore",function(req,res){
    try{
        var last=req.body.lastName
        var first=req.body.firstInitial
        var s=req.body.score
    }
    catch(e){
        res.status(400).json({"Posted Score":"No, Bad request"})
        return
    }
    if(last==undefined || first==undefined || s==undefined){
        res.status(400).json({"Posted Score":"No, Bad request"})
        return
    }
    var flag=false
    for (const [key, value] of Object.entries(tournaments_store)){
        for (let i of value["players"]){
            if(i.lastname==last && i.firstinitial==first){
                flag=true
                task2.Player.prototype.postScore.call(i,parseInt(s))
            }

        }
    }
    if(flag==false){
        res.status(400).json({"Posted Score":"No, Bad request"})
        return
    }
    res.status(200).json({"Posted Score":"Yes"})

})

app.listen(8000);