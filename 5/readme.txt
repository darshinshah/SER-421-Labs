Part 1: All 12 Endpoints implemented along with extra credits
Part 2: Requirement : 1(partial), 2, 3, 5, 6 completed

Have Node, Express installed to run the server.
Run the server using command: node lab5.js

For Part 2 open the lab5.html page on your browser

Note: I have attempted all the extra credits for the REST API section.

1. Create a Tournament from JSON: This will only take a json input.
Endpoint URL: http://localhost:8000/Tournament 
Method: POST
Body: The JSON input for the tournament(s).
The Output will be a JSON stating success or not.

2. Add a Player to a Tournament: This will take form data input. (x-www-form-urlencoded)
Endpoint URL: http://localhost:8000/Player
Method:POST
Body: This will be a x-www-form-urlencoded form body. You need to input lastName, firstInitial, score, hole to add a new player. Tournament name needs to be added to add the particular player to a particular tournament. It can be left undefined to push the player into a player store without assigining any tournament.
The Output will be a JSON stating success or not.

3. Remove a Player from a Tournament: This will take form data input. (x-www-form-urlencoded)
Endpoint URL: http://localhost:8000/Player
Method: DELETE
Body: The Output will be a JSON stating success or not. We will need lastname, and firstinitial to uniquely identify a player and then to remove from a tournament we will need a tournament name. 
The Output will be a JSON stating success or not.

5. Retrieve all Tournaments:
Endpoint URL: http://localhost:8000/Tournament
Method: GET
Body: None
The output will be a json containing all the tournaments without player data. All the meta data about the tournaments will be retrieved in a json format. 

6. Retrieve all Players in a given Tournament:
Endpoint URL: http://localhost:8000/Player
Method:GET
Body: We need to provide the tournamentname through a x-www-form-urlencoded form body to retrive a list of players in the given tournament.
The output will be retrieved players in json format.

7. Retrieve all Tournaments in a given year range, i.e. lb < YEAR < ub
Endpoint URL:http://localhost:8000/Tournament
Method:GET
Body: The upperrange and lowerrange values through querystring. No Body for GET requests.
The output will be a list of tournaments in json format that satisfy the upper and lower range specified.

9. Create a Player (the new Player will not be in any Tournament)
Endpoint URL: http://localhost:8000/Player
Method: POST
Body: We will require parameters: firstinitial and lastname from a x-www-form-urlencoded form body.
The Output will be a JSON stating success or not. Score and Hole will be 0 in this case.

11. Update the Player’s score if the Player is in a Tournament (see Lab 1 “postScore()”)
Endpoint URL: http://localhost:8000/Player/postScore
Method: POST
Body: We will require lastname and firstname to uniquely identify a player and then a new score through a x-www-form-urlencoded form to update the original score.
The Output will be a JSON stating success or not. 

----------------------------------
EXTRA CREDIT ENDPOINTS EXPLAINED:
----------------------------------

4. Allow modifications to the award and yardage attributes of a Tournament
Endpoint: http://localhost:8000/Tournament/AwardYardage
Method: POST
Body: New Yardage, New award and tournament name to uniquely identify the tournament to be modified through a x-www-form-urlencoded form body. 
The Output will be a JSON stating success or not. 

8. Retrieve all Players in a Tournament with a score less than or equal to a given parameter, i.e. score < param
Endpoint example: http://localhost:8000/Player/filterscore?tournamentname=British Open&filter=2
Method: GET
Body: No body for get requests, querystring is appended. It will need tournament name to uniquely find the tournament and the filter value to find all the players scoring less than that value.
Output is a json object which lists out all the players of a particular tournament with score less than input value.

10.Delete a Player only if that Player is not in any Tournament
Endpoint: http://localhost:8000/Player/unassigned
Method: DELETE
Body: We require lastname and firstinitial to uniquely identify a player done through a x-www-form-urlencoded form body.
The Output will be a JSON stating success or not.

12. Retrieve all Players not in any Tournament.
Endpoint: http://localhost:8000/Player/unassigned
Method: GET
Body: No body for get request
The output will be a JSON containing list of all unassigned players with score and hole 0




