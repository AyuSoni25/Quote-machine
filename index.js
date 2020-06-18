const quotes = [
{
	id: 1,
	text: "We are all here for some special reason. Stop being a prisoner of your past. Become the architect of your future.",
	author: "— Robin Sharma"
},
{
	id: 2,
	text: "Always turn a negative situation into a positive situation.",
	author: "— Michael Jordan"
},
{
	id: 3,
	text: "The best revenge is massive success.",
	author: "— Frank Sinatra"
},
{
	id: 4,
	text: "If we’re growing, we’re always going to be out of our comfort zone.",
	author: "— John C. Maxwell"
},
{
	id: 5,
	text: "There are always flowers for those who want to see them.",
	author: "— Henri Matisse"
},
{
	id: 6,
	text: "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
	author: "— Vince Lombardi"
},
{
	id: 7,
	text: "If you realized how powerful your thoughts are, you would never think a negative thought.",
	author: "— Peace Pilgrim"
},
{
	id: 8,
	text: "Even if you are on the right track, you’ll get run over if you just sit there.",
	author: "— Will Rogers"
},
{
	id: 9,
	text: "Nurture your mind with great thoughts, for you will never go any higher than you think.",
	author: "— Benjamin Disraeli"
},
{
	id: 10,
	text: "The only way of finding the limits of the possible is by going beyond them into the impossible.",
	author: "— Arthur C. Clarke"
}
];

const clr=["#184d47", "#393e46", "#10375c", "#cf7500", "#127681", "#9a1f40", "#06623b", "#584153", "#512b58", "#7d5e2a"];


let currentItem=0;

document.querySelector(".prev-btn").addEventListener("click", function(){

	currentItem--;

 	if(currentItem<0)
 	{
 		currentItem=9;
 	}

 	var randomNum = Math.floor((Math.random()*10));

 	document.querySelector(".text").innerHTML=quotes[currentItem].text;
 	document.querySelector(".author").innerHTML=quotes[currentItem].author;
 	document.querySelector(".card").style.backgroundColor=clr[randomNum];

});

document.querySelector(".next-btn").addEventListener("click", function(){

	currentItem++;

 	if(currentItem>9)
 	{
 		currentItem=0;
 	}
 	
 	var randomNum = Math.floor((Math.random()*10));

 	document.querySelector(".text").innerHTML=quotes[currentItem].text;
 	document.querySelector(".author").innerHTML=quotes[currentItem].author;
 	document.querySelector(".card").style.backgroundColor=clr[randomNum];

});

document.querySelector(".random-btn").addEventListener("click", function(){
 	
 	var randomNum = Math.floor((Math.random()*10));
 	currentItem = randomNum;
 	document.querySelector(".text").innerHTML=quotes[currentItem].text;
 	document.querySelector(".author").innerHTML=quotes[currentItem].author;
 	document.querySelector(".card").style.backgroundColor=clr[randomNum];

});