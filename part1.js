let button1 = document.getElementById("button1");
let sound = document.getElementById("sound")
let imgbutton = document.getElementById("giftcard");
let page1 = document.getElementById("page1");
let page0 = document.getElementById("page0") 
let page3 = document.getElementById("page3")
let button3 = document.getElementById("button3")
imgbutton.addEventListener("click", function() {

    console.log("GIFT CLICKED!");

    sound.play();

    imgbutton.style.display = "none";

    page1.style.display = "flex";
    page1.style.flexDirection = "column";

    page0.style.display = "flex";

    page1.style.opacity = "0";
    page1.style.transition = "opacity 1s ease-in-out";

    setTimeout(function() {
        page1.style.opacity = "1";
    }, 10);

});
button1.addEventListener("click", function(){
    page1.style.display = "none";
    sound.play();
    page3.style.display = "flex";
    page3.style.opacity = "0";
    page3.style.transition = "opacity 1s ease-in-out";

    setTimeout(function() {
        page3.style.opacity = "1";
    }, 10);
});
button3.addEventListener("click", function(){
    page3.style.display = "none";
    page4.style.opacity = "0";
    page4.style.display = "flex";
    page4.style.transition = "opacity 1s ease-in-out";

    setTimeout(function() {
        page4.style.opacity = "1";
    }, 10);
});

let button2 = document.getElementById("button2");

let size = 30;

button2.addEventListener("click", function(){

    // 📱 PHONE
    if (window.innerWidth <= 600) {

        if (size < 40) {

            size = 45;

            button1.style.width = "60%";
            button1.style.height = "45px";
            button1.style.paddingLeft = "10px";
            button1.style.fontSize = "12px";
            button1.style.color = "black";
            button1.textContent = "sure?";

        }
        else if (size < 50) {

            size = 50;

            button1.style.width = "60%";
            button1.style.height = "50px";
            button1.style.fontSize = "20px";
            button1.style.color = "black";
            button1.textContent = ":(";

        }
        else if (size < 60) {

            size = 60;

            button1.style.width = "82%";
            button1.style.height = "60px";
            button1.style.fontSize = "17px";
            button1.style.color = "black";
            button1.textContent = "please";

        }
        else if (size < 70) {

            size = 70;

            button2.style.display = "none";

            button1.textContent = "PLEASE 😭";
            button1.style.fontSize = "20px";
            button1.style.width = "88%";
            button1.style.height = "80px";
        }

    }

    // 💻 DESKTOP
    else {

        if (size < 40) {

            size = 40;

            button1.style.width = "40%";
            button1.style.height = "40px";
            button1.style.fontSize = "15px";
            button1.style.color = "black";
            button1.textContent = "sure?";

        }
        else if (size < 50) {

            size = 50;

            button1.style.width = "50%";
            button1.style.height = "50px";
            button1.style.fontSize = "25px";
            button1.style.color = "black";
            button1.textContent = ":(";

        }
        else if (size < 60) {

            size = 60;

            button1.style.width = "60%";
            button1.style.height = "60px";
            button1.style.fontSize = "25px";
            button1.style.color = "black";
            button1.textContent = "please";
              
        }
        else if (size < 70) {

            size = 70;

            button2.style.display = "none";

            button1.textContent = "PLEASE 😭";
            button1.style.fontSize = "35px";
            button1.style.width = "300px";
            button1.style.height = "100px";
        }
    }
    
    
});