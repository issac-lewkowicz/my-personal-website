const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2); 

document.getElementById("myButton1").onclick = function()
{
    alert("Liked!");
}
document.getElementById("myButton2").onclick = function()
{
    alert("Liked!");
}
document.getElementById("myButton3").onclick = function()
{
    alert("Liked!");
}

/*const like = document.getElementsByClassName("button");
like.addEventListener('click', function() {
  alert('Liked!');
});*/


/*function clickAlert() {
    alert('Liked!');
  }
const like = document.getElementsByTagName('button');
for (const key in like) {
like.addEventListener('click', clickAlert);
}*/