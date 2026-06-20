const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark-mode");

});


const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        darkBtn.innerHTML = "☀️ Light Mode";
    }
    else{
        darkBtn.innerHTML = "🌙 Toggle Dark Mode";
    }

});
 const welcomebtn=
 dovumnet.getElementdbyId("welcomebtn");
    welcomebtn.addEvemtListener("click",function()
{
    documrnt.getelementbyId("message").innerHTML=
    "Welcome to BlushBloom Beauty 💄";
});
 
 const tips =[
    "Always remove makeup before sleeping",
    "Clean your makeup brushes weekly",
    "Use sunscreen everyday",
    "Stay hydrated for healthy skin",
    "Moisturize before applying makup"
 ];
 const tipbtn=
 document.getelemntbyId("tipbtn");
 tipbtn.addeventlistener("click",function(){
    const randomTip=tips[Math.floor(Math.random()*tips.length)];
    document.getelemnetbyId("tip").innerhtml=random.Tip;
 }
);
document.getElementById("changeTitle")
.addEventListener("click", function(){

document.querySelector(".interactive h2")
.innerHTML =
"Welcome To BlushBloom Beauty 💄";

});

 