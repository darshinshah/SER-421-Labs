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



console.log("RUNNING CERTAIN COMMANDS TO CHECK IF THE EXTRA CREDIT IS RUNNING - It runs perfectly fine on Tournament t4")
console.log("\nCommand run: \nvar projectScoreByHole_bind=t1.projectScoreByHole.bind(t1) ")
console.log("var result=t1.projectedLeaderboard(projectScoreByHole_bind)\n")
var projectScoreByHole_bind=t1.projectScoreByHole.bind(t1)
var result=t1.projectedLeaderboard(projectScoreByHole_bind)
console.log(result)


console.log("\nThis is exactly same if you run this command on normal version (task2.js):> t1.projectedLeaderboard(projectScoreByHole)")
