const button=document.getElementById("btn");
const body=document.body;



    var colours=["red","blue","yellow","green","pink","purple"];
    body.style.background=colours[0];
    button=addEventListener("click",changeColours);
    function changeColours(){
    const colourIndex=Math.floor(Math.random()*colours.length);
     body.style.backgroundColor=colours[colourIndex];   
}
