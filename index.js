var randomNumber1=Math.random();
randomNumber1=Math.floor(randomNumber1*6)+1;
var randomNumber2=Math.random();
randomNumber2=Math.floor(randomNumber2*6)+1;

var randomImage="dice"+randomNumber1+".png";
var randomImageSource="images//"+randomImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

var randomImage1="dice"+randomNumber2+".png";
var randomImageSource1="images//"+randomImage1;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource1);
// // left dice image
// if(randomNumber1==1)
// document.querySelector(".img1").setAttribute("src","images//dice1.png");
// else if(randomNumber1==2)
// document.querySelector(".img1").setAttribute("src","images//dice2.png");
// else if(randomNumber1==3)
// document.querySelector(".img1").setAttribute("src","images//dice3.png");
// else if(randomNumber1==4)
// document.querySelector(".img1").setAttribute("src","images//dice4.png");
// else if(randomNumber1==5)
// document.querySelector(".img1").setAttribute("src","images//dice5.png");

if(randomNumber1>randomNumber2)
document.querySelector("h1").innerHTML="✔ Player 1 Wins";
else if(randomNumber1<randomNumber2)
document.querySelector("h1").innerHTML="Player 2 Wins ✔";
else if(randomNumber1=randomNumber2)
document.querySelector("h1").innerHTML="Draw";
