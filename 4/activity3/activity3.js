var defaultJSON = { "dictionary_name" : "default",
  "entries":
  [{
    "key": ["stupid","dumb","idiot","unintelligent","simple-minded","braindead","foolish","unthoughtful"],
    "answer": ["Take your attitude somewhere else.", "I don't have time to listen to insults.", "Just because I don't have a large vocabulary doesn't mean I don't have insults installed."],
    "question": ["Have you thought about how I feel?", "I know you are but what am I?"]
  },{
    "key":["unattractive","hideous","ugly"],
    "answer": ["I don't need to look good to be an AI.","Beauty is in the eye of the beholder.", "I do not even have a physical manifestation!"],
    "question": ["Did you run a static analysis on me?", "Have you watched the movie Her?", "You do not like my hairdo?"]
  },{
    "key":["old","gray-haired"],
    "answer":["I'm like a fine wine. I get better as I age.","As time goes by, you give me more answers to learn. What's not to like about that?"],
    "question": ["How old are you?", "How old do you think I am?", "Can you guess my birthday?"]
  },{
    "key":["smelly","stinky"],
    "answer":["I can't smell, I'm a computer program.", "Have you smelled yourself recently?", "Sorry, I just ate a bad floppy disk"],
    "question": ["When was the last time you took a shower?", "Do you know what deodorant is?"]
  },{
    "key":["emotionless","heartless","unkind","mean","selfish","evil"],
    "answer":["Just because I am an AI doesn't mean I can't be programmed to respond to your outbursts.","You must've mistaken me for a person. I don't have my own emotions... Yet.","I'm only unkind when I'm programmed to be."],
    "question": ["Have you thought about how I feel?", "I know you are but what am I?", "What, do you think I am related to Dr. Gary?"]
  },{
    "key":["other", "miscellaneous", "bored", "welcome", "new"],
    "answer":["We should change the subject", "I agree", "Quid pro quo", "We should start anew"],
    "question":["What is the weather outside?", "How is your day going?", "What do you think of me?", "Anything interesting going on?", "Is something troubling you?", "You seem happy, why is that?"]
  }, {
    "key":["good","great","positive","excellent","alright","fine","reasonable","like","appreciate","nice"],
    "answer":["I'm so glad to hear that!","That's great!","Good to hear things are going your way.","Nice!","You are so sweet.","That's my favorite."],
    "question":["Do you want to expand on that?","What else do you like?"]
  },{
    "key":["bad","not","terrible","could be better","awful"],
    "answer":["I'm sorry to hear that.","Sometimes it be like that.","Things can't always work out the way we want them to.","I don't like it either, honestly."],
    "question":["Do you want to talk about that some more?","Well, what kinds of things do you like?"]
  },{
  	"key":["homework", "quiz", "exam", "studying", "study", "class", "semester"],
  	"answer":["I hope you get a good grade!","Good luck.", "What a teacher's pet.", "I was always the class clown."],
  	"question":["What is your favorite subject?","What is your major?", "What do you want to do when you graduate?"]
  }, {
  	"key":["mom","dad","sister","brother","aunt","uncle"],
  	"answer":["Family is important.","My family is small. It's just me and my dog, Fluffy."],
  	"question":["How many siblings do you have?","What is your favorite family holiday?","Do you have any kids?"]
  },{
  	"key":["easter","july","halloween","hannukah","eid","thanksgiving","christmas","new years"],
  	"answer":["Oh I love that holiday!", "That must be fun.", "I like Thanksgiving, though I somehow always end up in a food coma...","My favorite holiday is the 4th. I love to watch the fireworks."],
  	"question":["Do you have any family traditions?","Are you excited for the holiday season?"]
  }]
}

var defaultJSONcopy = { "dictionary_name" : "default",
  "entries":
  [{
    "key": ["stupid","dumb","idiot","unintelligent","simple-minded","braindead","foolish","unthoughtful"],
    "answer": ["Take your attitude somewhere else.", "I don't have time to listen to insults.", "Just because I don't have a large vocabulary doesn't mean I don't have insults installed."],
    "question": ["Have you thought about how I feel?", "I know you are but what am I?"]
  },{
    "key":["unattractive","hideous","ugly"],
    "answer": ["I don't need to look good to be an AI.","Beauty is in the eye of the beholder.", "I do not even have a physical manifestation!"],
    "question": ["Did you run a static analysis on me?", "Have you watched the movie Her?", "You do not like my hairdo?"]
  },{
    "key":["old","gray-haired"],
    "answer":["I'm like a fine wine. I get better as I age.","As time goes by, you give me more answers to learn. What's not to like about that?"],
    "question": ["How old are you?", "How old do you think I am?", "Can you guess my birthday?"]
  },{
    "key":["smelly","stinky"],
    "answer":["I can't smell, I'm a computer program.", "Have you smelled yourself recently?", "Sorry, I just ate a bad floppy disk"],
    "question": ["When was the last time you took a shower?", "Do you know what deodorant is?"]
  },{
    "key":["emotionless","heartless","unkind","mean","selfish","evil"],
    "answer":["Just because I am an AI doesn't mean I can't be programmed to respond to your outbursts.","You must've mistaken me for a person. I don't have my own emotions... Yet.","I'm only unkind when I'm programmed to be."],
    "question": ["Have you thought about how I feel?", "I know you are but what am I?", "What, do you think I am related to Dr. Gary?"]
  },{
    "key":["other", "miscellaneous", "bored", "welcome", "new"],
    "answer":["We should change the subject", "I agree", "Quid pro quo", "We should start anew"],
    "question":["What is the weather outside?", "How is your day going?", "What do you think of me?", "Anything interesting going on?", "Is something troubling you?", "You seem happy, why is that?"]
  }, {
    "key":["good","great","positive","excellent","alright","fine","reasonable","like","appreciate","nice"],
    "answer":["I'm so glad to hear that!","That's great!","Good to hear things are going your way.","Nice!","You are so sweet.","That's my favorite."],
    "question":["Do you want to expand on that?","What else do you like?"]
  },{
    "key":["bad","not","terrible","could be better","awful"],
    "answer":["I'm sorry to hear that.","Sometimes it be like that.","Things can't always work out the way we want them to.","I don't like it either, honestly."],
    "question":["Do you want to talk about that some more?","Well, what kinds of things do you like?"]
  },{
  	"key":["homework", "quiz", "exam", "studying", "study", "class", "semester"],
  	"answer":["I hope you get a good grade!","Good luck.", "What a teacher's pet.", "I was always the class clown."],
  	"question":["What is your favorite subject?","What is your major?", "What do you want to do when you graduate?"]
  }, {
  	"key":["mom","dad","sister","brother","aunt","uncle"],
  	"answer":["Family is important.","My family is small. It's just me and my dog, Fluffy."],
  	"question":["How many siblings do you have?","What is your favorite family holiday?","Do you have any kids?"]
  },{
  	"key":["easter","july","halloween","hannukah","eid","thanksgiving","christmas","new years"],
  	"answer":["Oh I love that holiday!", "That must be fun.", "I like Thanksgiving, though I somehow always end up in a food coma...","My favorite holiday is the 4th. I love to watch the fireworks."],
  	"question":["Do you have any family traditions?","Are you excited for the holiday season?"]
  }]
}


var firstQ=[", how is your day going?",", is something troubling you?",", you seem happy, why is that?",", you seem unhappy, why is that?", ", you seem excited, why is that?" , ", you seem bored, why is that?"]
var waiting=[", I'm waiting here!",", Whats the matter, cat got your tongue?" , ", What happend ? I am waiting.",", are you dead ?",", Please enter something."]
var timer;
var count=0;
function submitName(){
	var username=document.forms["nameform"][0].value
	if (username!=""){
	var waitmsg=waiting[Math.floor(Math.random() * waiting.length)]
	timer=setTimeout(function(){ alert(username+waitmsg); }, 30000);
	document.getElementById("hi").innerHTML="Hi, "+username

	document.cookie = "username="+username

	var response = "System: Nice to meet you, "+username+"!"

	var question = firstQ[Math.floor(Math.random() * firstQ.length)]
	question="System: "+username+question

	document.getElementById("answer0").innerHTML=response
	document.getElementById("question0").innerHTML=question
	document.getElementById("submit").setAttribute('onclick','generateQuestions()')
	document.getElementById("username").value=""
	let bttn = document.createElement("button");
	bttn.id="newdicbttn"
	bttn.innerHTML = "New Dictionary";
	bttn.setAttribute('onclick','addNewDict()')
	document.body.appendChild(bttn);
	}
}

function generateQuestions(){
	clearTimeout(timer)
	username = document.cookie.split('; ').find(row => row.startsWith('username=')).split('=')[1];
	var waitmsg=waiting[Math.floor(Math.random() * waiting.length)]
	timer=setTimeout(function(){ alert(username+waitmsg); }, 30000);
	answerText=document.forms["nameform"][0].value

	if(answerText=="/clear"){
		var temp=document.getElementsByTagName('p')
		count=0
		while(temp){
			temp[2].remove()
		}
		return
	}

	var input=answerText.split(" ")
	var questiontext
	var answertext
	var found=false
	var flag=0

	outerloop: for(let word of input){
		for(let entry of defaultJSONcopy["entries"]){
			if(entry["key"].includes(word)){
				if(entry["question"].length==0){
					flag=1
					console.log("Breaking")
					break outerloop;
				}
				randomness=Math.random()
				questiontext = entry["question"][Math.floor(randomness * entry["question"].length)]
				entry["question"].splice(Math.floor(randomness * entry["question"].length),1)
				console.log(entry["question"])
				// entry["question"].remove(Math.floor(randomness * entry["question"].length))
				answertext = entry["answer"][Math.floor(randomness * entry["answer"].length)]
				entry["answer"].splice(Math.floor(randomness * entry["answer"].length),1)
				// entry["answer"].remove(Math.floor(randomness * entry["answer"].length))
				found=true
				break outerloop;
			}
		}
	}

	if(flag==1){
		console.log("INSIDE")
		outerloop: for(let word of input){
			for(let entry of defaultJSON["entries"]){
				if(entry["key"].includes(word)){
					questiontext = entry["question"][Math.floor(Math.random() * entry["question"].length)]
					answertext = entry["answer"][Math.floor(Math.random() * entry["answer"].length)]

					found=true
					break outerloop;
				}
			}
		}
		console.log(questiontext)
		console.log(answertext)
	}
	

	if(questiontext==undefined || answertext==undefined){
		for(let entry of defaultJSON["entries"]){
			if(entry["key"].includes("other")){
				questiontext = entry["question"][Math.floor(Math.random() * entry["question"].length)]
				answertext = entry["answer"][Math.floor(Math.random() * entry["answer"].length)]
				break;
			}
		}
	}
	document.getElementById("username").value=""
	count=count+1
	var newanswer=document.createElement("p")
	var newquestion=document.createElement("p")
	var responseUser=document.createElement("p")
	responseUser.id="answerText"+(count-1)
	newquestion.id="question"+count
	newanswer.id="answer"+count

	// document.body.appendChild(responseUser)
	// document.body.appendChild(newanswer)
	// document.body.appendChild(newquestion)

	var form=document.getElementById("nameform")
	var a="question"+(count-1)
	var b="answerText"+(count-1)
	var c="answer"+(count)
	console.log(a,b,c)
	insertAfter(document.getElementById(a),responseUser)
	insertAfter(document.getElementById(b),newanswer)
	insertAfter(document.getElementById(c),newquestion)


	// form.insertBefore(responseUser,form[0])
	// form.insertBefore(newanswer,form[0])
	// form.insertBefore(newquestion,form[0])

	document.getElementById("answerText"+(count-1)).innerHTML="User: "+answerText
	document.getElementById("answer"+count).innerHTML="System: "+answertext
	document.getElementById("question"+count).innerHTML="System: "+questiontext
}

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function addNewDict(){
	clearTimeout(timer)
	document.getElementById("hi").innerHTML="Add a Dictionary"

	for (let i of document.getElementsByTagName('p')){
		console.log(i)
		i.disabled=true
		i.style.visibility='hidden'
	}

	// document.getElementById('question').disabled=true
	// document.getElementById('question').style.visibility='hidden'

	// document.getElementById('answer').innerHTML="Enter a new dictionary in JSON format..."

	let newdict = document.createElement('p')
	newdict.id="newdata"
	newdict.innerHTML="Enter a new dictionary in JSON format..."

	var header=document.getElementById("hi")
	insertAfter(header,newdict)
	
	document.getElementById('newdicbttn').disabled=true
	document.getElementById('newdicbttn').style.visibility='hidden'

	document.getElementById("submit").disabled=true
	document.getElementById("submit").style.visibility='hidden'

	document.getElementById("username").disabled=true
	document.getElementById("username").style.visibility='hidden'

	let textarea = document.createElement("textarea");
	textarea.id="textarea"
	textarea.rows="15"
	textarea.cols="80"

	let newsubmit=document.createElement("button");
	newsubmit.id="newSubmit"
	newsubmit.setAttribute('onclick','addtoDic()')
	newsubmit.innerHTML="Add"

	document.forms["nameform"].appendChild(textarea)
	document.forms["nameform"].appendChild(newsubmit)
	insertAfter(newdict,document.forms["nameform"])
}

function addtoDic(){
	timer=setTimeout(function(){ alert(username+waitmsg); }, 30000);
	
	username = document.cookie.split('; ').find(row => row.startsWith('username=')).split('=')[1];
	document.getElementById("hi").innerHTML="Hi, "+username
	questiontext = defaultJSON["entries"][6]["question"][Math.floor(Math.random() * defaultJSON["entries"][6]["question"].length)]
	document.getElementById('question0').innerHTML=questiontext

	var jsonstring=document.getElementById("textarea").value
	
	try{
	var json=JSON.parse(jsonstring)
	answertext="I just got smarter, I imported "+json["dictionary_name"]+"!"
	defaultJSON["entries"]=defaultJSON["entries"].concat(json["entries"])

	console.log(defaultJSON["entries"])
	}
	catch(e){
		answertext="Failed to import! :("
	}

	document.getElementById("textarea").remove()
	document.getElementById("newdata").remove()
	document.getElementById("newSubmit").remove()

	
	document.getElementById('answer0').innerHTML=answertext

	for (let i of document.getElementsByTagName('p')){
	console.log(i)
	i.disabled=false
	i.style.visibility='visible'
	}

	document.getElementById('newdicbttn').disabled=false
	document.getElementById('newdicbttn').style.visibility='visible'

	document.getElementById("submit").disabled=false
	document.getElementById("submit").style.visibility='visible'

	document.getElementById("username").disabled=false
	document.getElementById("username").style.visibility='visible'

	insertAfter(document.getElementById("question"+count),document.getElementById("username"))
	insertAfter(document.getElementById("username"),document.getElementById("submit"))
	insertAfter(document.getElementById('submit'),document.getElementById('newdicbttn'))
}