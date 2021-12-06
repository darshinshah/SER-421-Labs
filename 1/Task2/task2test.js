var t1json = '{"tournament":{"name":"British Open","Cyear":2001,"award":840000,"yardage":6905,"par":71,"players":[{"lastname":"Montgomerie","firstinitial":"C","score":-3,"hole":17},{"lastname":"Fulke","firstinitial":"P","score":-5,"hole":"finished"},{"lastname":"Owen","firstinitial":"G","score":-1,"hole":"finished"},{"lastname":"Parnevik","firstinitial":"J","score":0,"hole":12},{"lastname":"Ogilvie","firstinitial":"J","score":-1,"hole":7},{"lastname":"Cejka","firstinitial":"A","score":-2,"hole":15},{"lastname":"Romero","firstinitial":"E","score":-4,"hole":11},{"lastname":"Fasth","firstinitial":"N","score":4,"hole":"finished"}]}}';
var t2json = '{"tournament":{"name":"British Open","year":2001,"award":840000,"yardage":6905,"par":71,"players":[{"lastname":"Montgomerie","firstinitial":"C","score":1,"hole":12},{"lastname":"Fulke","firstinitial":"P","score":-2,"hole":3},{"lastname":"Owen","firstinitial":"G","score":-1,"hole":7},{"lastname":"Parnevik","firstinitial":"J","score":-3,"hole":"finished"},{"lastname":"Ogilvie","firstinitial":"J","score":1,"hole":"finished"},{"lastname":"Cejka","firstinitial":"A","score":-2,"hole":9},{"lastname":"Romero","firstinitial":"E","score":0,"hole":"finished"},{"lastname":"Fasth","firstinitial":"N","score":-4,"hole":16}]}}';
var t3json = '{"tournament":{"name":"British Open","year":2001,"award":840000,"yardage":6905,"par":71,"round":3,"players":[{"lastname":"Montgomerie","firstinitial":"C","score":-2,"hole":14},{"lastname":"Fulke","firstinitial":"P","score":3,"hole":"finished"},{"lastname":"Owen","firstinitial":"G","score":0,"hole":0},{"lastname":"Parnevik","firstinitial":"J","score":1,"hole":9},{"lastname":"Ogilvie","firstinitial":"J","score":-1,"hole":3},{"lastname":"Cejka","firstinitial":"A","score":2,"hole":17},{"lastname":"Romero","firstinitial":"E","score":-1,"hole":"finished"},{"lastname":"Fasth","firstinitial":"N","score":1,"hole":11}]}}';
var t4json = '{"tournament":{"name":"British Open","year":2001,"award":840000,"yardage":6905,"par":71,"round":4,"players":[{"lastname":"Montgomerie","firstinitial":"C","score":0,"hole":0},{"lastname":"Fulke","firstinitial":"P","score":0,"hole":0},{"lastname":"Owen","firstinitial":"G","score":0,"hole":0},{"lastname":"Parnevik","firstinitial":"J","score":0,"hole":0},{"lastname":"Ogilvie","firstinitial":"J","score":0,"hole":0},{"lastname":"Cejka","firstinitial":"A","score":0,"hole":0},{"lastname":"Romero","firstinitial":"E","score":-1,"hole":"finished"},{"lastname":"Fasth","firstinitial":"N","score":0,"hole":0}]}}';
var t5json = '{"tournament":{"name":"British Open","year":2001,"award":840000,"yardage":6905,"par":71,"players":[{"lastname":"Montgomerie","firstinitial":"C","score":-3,"hole":17},{"lastname":"Fulke","firstinitial":"P","score":-3,"hole":"finished"},{"lastname":"Owen","firstinitial":"G","score":-1,"hole":"finished"},{"lastname":"Parnevik","firstinitial":"J","score":-3,"hole":12},{"lastname":"Ogilvie","firstinitial":"J","score":-1,"hole":7},{"lastname":"Cejka","firstinitial":"A","score":-2,"hole":15},{"lastname":"Romero","firstinitial":"E","score":-4,"hole":11},{"lastname":"Fasth","firstinitial":"N","score":4,"hole":"finished"}]}}';
var t6json = '{"tournament":{"name":"British Open","year":2001,"award":840000,"yardage":6905,"par":71,"players":[{"lastname":"Montgomerie","firstinitial":"C","score":-3,"hole":"finished"},{"lastname":"Fulke","firstinitial":"P","score":-3,"hole":"finished"},{"lastname":"Owen","firstinitial":"G","score":-1,"hole":"finished"},{"lastname":"Parnevik","firstinitial":"J","score":-3,"hole":"finished"},{"lastname":"Ogilvie","firstinitial":"J","score":-1,"hole":"finished"},{"lastname":"Cejka","firstinitial":"A","score":-2,"hole":"finished"},{"lastname":"Romero","firstinitial":"E","score":-4,"hole":"finished"},{"lastname":"Fasth","firstinitial":"N","score":4,"hole":"finished"}]}}';
var t7json = '{"tournament":{"name":"British Open","year":2001,"award":840000,"yardage":6905,"par":71,"players":[{"lastname":"Montgomerie","firstinitial":"C","score":1,"hole":"finished"},{"lastname":"Fulke","firstinitial":"P","score":-2,"hole":"finished"},{"lastname":"Owen","firstinitial":"G","score":-1,"hole":"finished"},{"lastname":"Parnevik","firstinitial":"J","score":-3,"hole":"finished"},{"lastname":"Ogilvie","firstinitial":"J","score":1,"hole":"finished"},{"lastname":"Cejka","firstinitial":"A","score":-2,"hole":"finished"},{"lastname":"Romero","firstinitial":"E","score":0,"hole":"finished"},{"lastname":"Fasth","firstinitial":"N","score":-4,"hole":"finished"}]}}';


console.log("\n-----------------------------------------------TESTS STARTS HERE-----------------------------------------------")
console.log("\nTesting requirement A that parses JSON string to Tournament and Player objects")
var t1=parseJSON(t1json);
var t2=parseJSON(t2json);
var t3=parseJSON(t3json);
var t4=parseJSON(t4json);
var t5=parseJSON(t5json);
var t6=parseJSON(t6json);
var t7=parseJSON(t7json);

console.log("\n-----------------------------------------------Printing Tournament Object t1-----------------------------------------------")
console.log(JSON.stringify(t1))
console.log("\n-----------------------------------------------Printing Tournament Object t2-----------------------------------------------")
console.log(JSON.stringify(t2))


console.log("\nTesting requirement B that shows us the leaderboard - players sorted according to their scores and holes")
var leaderboard1=t1.leaderboard();
console.log(leaderboard1)
console.log("\nDoes it change in place or not ? - No it works on a copy of the Tournament Object - You need to compare it to above output")
console.log(JSON.stringify(t1))


console.log("\nTesting requirement C that does - projectScoreByIndividual")
console.log("\nWhat if the individual does not exist in the Tournament? - Should show appropriate message")
var c1=projectScoreByIndividual(t2,"Darshin","Shah");
console.log(c1)
console.log("\nWhat if he/she already finished? -  It should print the score he/she holds currently")
var c2=projectScoreByIndividual(t2,"Parnevik","J")
console.log(c2)
console.log("\nA normal case - should return an integer")
var c3=projectScoreByIndividual(t2,"Montgomerie","C")
console.log(c3)

console.log("\nTesting requirement D that does - projectScoreByHole")
console.log("\nWhat if the individual does not exist in the Tournament? - Should show appropriate message")
var d1=projectScoreByHole(t2,"Darshin","Shah");
console.log(d1)
console.log("\nWhat if he/she already finished? -  It should print the score he/she holds currently")
var d2=projectScoreByHole(t2,"Parnevik","J")
console.log(d2)
console.log("\nA normal case - should return an integer")
var d3=projectScoreByHole(t2,"Montgomerie","C")
console.log(d3)

console.log("\nTesting requirement E that does - projectedLeaderboard")
var e1=t2.projectedLeaderboard(projectScoreByHole);
console.log(e1)
console.log("\nDoes it change in place or not ? - No it works on a copy of the Tournament Object - You need to compare it to above output")
console.log(JSON.stringify(t2))

console.log("\nTesting requirement F that does - printLeaderboard")
console.log("Showing normal functionality here. This function runs well as far as the structure of Tournament objects is good. Nothing is being returned. Just Displayed.")
t2.printLeaderboard();
console.log("\nCan this function take projectScoreByHole and projectScoreByIndividual functions as parameters ? - Yes")
t2.printLeaderboard(projectScoreByIndividual);

console.log("\nTesting requirement G that does - postScore(s)")
console.log("\nWhat if the individual has already finished ? - Should show appropriate message")
var g1=t2.players[4].postScore(1)
console.log(g1)
console.log("\nNormal case with the scores coming in finishing the holes")
var g2=t2.players[7].postScore(1)
console.log(g2)
var g3=t2.players[7].postScore(1)
console.log(g3)
console.log("Printing the player details to show score 18 represents->finished")
console.log(t2.players[7])
var g4=t2.players[7].postScore(1)
console.log(g4)

console.log("\nTesting requirement H that does - isTournamentComplete()")
console.log("Does it give me the winner for Tournament t7? - Yes")
console.log(t7.isTournamentComplete())
console.log(t7.winner)
console.log(t7.getWinner())

console.log("\nDo other tournament have winner specific data members/methods if it is incomplete? - No")
console.log(t2.isTournamentComplete())
console.log(t2.winner) //should be undefined by default




