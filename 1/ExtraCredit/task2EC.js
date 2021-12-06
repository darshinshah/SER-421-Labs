class Tournament{
	
	constructor(json){
		this.name=json.name;
		this.year=json.year;
		this.award=json.award;
		this.yardage=json.yardage;
		this.par=json.par;
		this.players=[]
		for (let i in json.players){
			this.players.push(new Player(json.players[i].lastname,json.players[i].firstinitial,json.players[i].score,json.players[i].hole));
		}
		
		}

	//Task 2.b
	leaderboard(){
		var deepcopy=new Tournament(JSON.parse(JSON.stringify(this)));
		deepcopy.players.sort(function(a,b){
			if(a.score>b.score){
				return 1;
			}
			else if(a.score<b.score){
				return -1;
			}
			else{
				if(a.hole=='finished'){
					return -1;
				}
				if(b.hole=='finished'){
					return 1;
				}
				if(a.hole>b.hole){
					return -1;
				}
				else{
					return 1;
				}
			}

		})
		
		return JSON.stringify(deepcopy.players)
	}

	//Task2.e
	projectedLeaderboard(func_name){
		var deepcopy=new Tournament(JSON.parse(JSON.stringify(this)));

		for (let pl of deepcopy.players){
			pl.score=func_name(this,pl.lastname,pl.firstinitial)
		}

		return deepcopy.leaderboard()

	}

	//Task2.h
	isTournamentComplete(){
		for(let pl of this.players){
			if(pl.hole!="finished"){
				return false
			}
		}
		var deepcopy=new Tournament(JSON.parse(JSON.stringify(this)));
		this.winner=JSON.parse(deepcopy.leaderboard())[0]
		console.log("Tournament is Over!!")
		this.getWinner=function(){
			return this.winner.lastname+" is the winner with score "+this.winner.score
		}
		return true
	}

	//Task2.c EXTRA CREDIT
	projectScoreByIndividual(a=this,lastname,firstinitial){
	for (let pl of a.players){
		if(pl.lastname==lastname && pl.firstinitial==firstinitial){
			if(pl.hole=='finished'){
				return pl.score;
			}
			else{
			return Math.round((pl.score/pl.hole)*18);
			}
		}
	}
	return "Not Found!!";
	}

	//Task2.d EXTRA CREDIT
	projectScoreByHole(a=this,lastname,firstinitial){
	var score=0;
	var holes=0;

	var currScore;
	var currHole;
	var flag=0;

	for(let pl of a.players){
		if(pl.lastname==lastname && pl.firstinitial==firstinitial){
			if(pl.hole=='finished'){
				return pl.score;
			}
			currScore=pl.score
			currHole=pl.hole
			flag=1;
			continue;
		}

		if(pl.hole=="finished"){
			holes+=18
			score+=pl.score;
			continue;
		}

		score+=pl.score;
		holes+=pl.hole;

	}
	var avg=score/holes
	if (flag==0){
		return "Not Found!!"
	}
	return currScore+Math.round((18-currHole)*avg)
	}

}

class Player{
	constructor(lastname,firstinitial,score,hole){
		this.lastname=lastname;
		this.firstinitial=firstinitial;
		this.score=score;
		this.hole=hole;
	}

	//Task2.g
	postScore(s){
		if(this.hole=="finished"){
			return "Already Finished, Cannot Update !!"
		}
		else{
			this.score+=s
			if(this.hole==17){
				this.hole="finished"
			}
			else{
				this.hole+=1
			}
			return "Updated !!"
		}

	}
}

//Task 2.a
function parseJSON(string){
	return new Tournament(JSON.parse(string).tournament);
}

//Task2.c
//THIS IS MOVED INSIDE THE TOURNAMENT CLASS

//Task2.d
//THIS IS MOVED INSIDE THE TOURNAMENT CLASS

//Task2.f
Tournament.prototype.printLeaderboard=function(func_name="Default"){
	if(func_name=="Default"){
		leaderboard=JSON.parse(this.leaderboard());
	}
	else{
		leaderboard=JSON.parse(this.projectedLeaderboard(func_name))
	}
	console.log("----------LEADERBOARD----------");
	console.log("Player Name".padEnd(15)+"|"+"Score".padStart(5)+"|"+"Hole".padStart(8)+"|")
	console.log("-------------------------------");
	for (let pl of leaderboard){
		var fname=pl.firstinitial+"."+pl.lastname
		console.log(fname.padEnd(15)+"|"+pl.score.toString().padStart(5)+"|"+pl.hole.toString().padStart(8)+"|")
	}
	console.log("-------------------------------");

}
