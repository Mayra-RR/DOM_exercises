//DOM1//
//1
var links = document.getElementsByTagName("a").length;
var element1 = document.createElement("li");
var li1 = document.createTextNode(links);
element1.appendChild(li1);
document.getElementById("list").appendChild(element1);
console.log(links);

//2
var lastlink = document.getElementsByTagName("a")[6];
var element1 = document.createElement("li");
var li2 = document.createTextNode(lastlink);
element1.appendChild(li2);
document.getElementById("list").appendChild(element1);
console.log(lastlink.href);

//3
var secondlast = document.getElementsByTagName("a")[5];
var element1 = document.createElement("li");
var li3 = document.createTextNode(secondlast);
element1.appendChild(li3);
document.getElementById("list").appendChild(element1);
console.log(secondlast.href);

//4
var sendlinks = document.querySelectorAll('a[href="https://wemanconnect.com"]')
  .length;
var element1 = document.createElement("li");
var li4 = document.createTextNode(sendlinks);
element1.appendChild(li4);
document.getElementById("list").appendChild(element1);
console.log(sendlinks);

//5
var thirdP = document.getElementsByTagName("p")[2];
var thirdPlinks = thirdP.getElementsByTagName("a").length;
var element1 = document.createElement("li");
var li5 = document.createTextNode(thirdPlinks);
element1.appendChild(li5);
document.getElementById("list").appendChild(element1);
console.log(thirdP);

///DOM2///

function display() {
  var deleteH = document.getElementsByClassName("aditional hidden");
  return deleteH[0].classList.remove("hidden");
  
}
display(deleteH[0]);

///DOM3///

function add() {
    var addnew = document.createElement("li");
    var next = document.createTextNode("I'm the next one!!!");
    addnew.appendChild(next);
    document.getElementById("list").appendChild(addnew);
          
  }
 add(addnew);