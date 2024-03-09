//create right html icon for closing todo list
var myNodeList = document.getElementsByTagName("LI");
var i;

for (i = 0; i < myNodeList.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodeList[i].appendChild(span);
}

//create iterable on close on click method
var close = document.getElementsByClassName("close");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

//create icon check at left side of iterable todo list
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
    }
  },
  false
);

//create function to add todo list
function addFunc() {
  var li = document.createElement("LI");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.className = "close";
  li.appendChild(t);

  if (inputValue === "") {
    alert("please insert some message");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
}
