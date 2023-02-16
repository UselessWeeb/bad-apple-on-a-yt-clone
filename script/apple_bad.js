//Run the frame each by each in the frame folder by the id A
var A=1;
var FrameRate=100;

function Animation(){
    A++;
    document.getElementById("A").src = "frame/A_" + A + ".png";
    document.getElementById("A1").src = "frame/A1_" + A + ".png";
    document.getElementById("B").src = "frame/B_" + A + ".png";
    document.getElementById("B1").src= "frame/B1_" + A + ".png";
    document.getElementById("C").src = "frame/C_" + A + ".png";
    document.getElementById("C1").src = "frame/C1_" + A + ".png";
    document.getElementById("D").src = "frame/D_" + A + ".png";
    document.getElementById("D1").src = "frame/D1_" + A + ".png";
    document.getElementById("E").src = "frame/E_" + A + ".png";
    document.getElementById("E1").src = "frame/E1_" + A + ".png";
    document.getElementById("F").src = "frame/F_" + A + ".png";
    document.getElementById("F1").src = "frame/F1_" + A + ".png";
    document.getElementById("G").src = "frame/G_" + A + ".png";
    document.getElementById("G1").src = "frame/G1_" + A + ".png";
    document.getElementById("H").src = "frame/H_" + A + ".png";
    document.getElementById("H1").src = "frame/H1_" + A + ".png";
    document.getElementById("I").src = "frame/I_" + A + ".png";
    document.getElementById("I1").src = "frame/I1_" + A + ".png";
    document.getElementById("J").src = "frame/J_" + A + ".png";
    document.getElementById("J1").src = "frame/J1_" + A + ".png";
    document.getElementById("K").src = "frame/K_" + A + ".png";
    document.getElementById("K1").src = "frame/K1_" + A + ".png";
    document.getElementById("L").src = "frame/L_" + A + ".png";
    document.getElementById("L1").src = "frame/L1_" + A + ".png";
    setTimeout(Animation, FrameRate);
    //change color(Bad apple exclusive)
    if (A==151 || A== 424 || A == 581|| A==931|| A==1210||A==1227||A==1422||A==1804||A==2174) Dark();
    if (A==277 || A== 565 || A== 917 || A==1110 || A==1219 ||A==1261||A==1546||A==2158) Light();
}
Animation();
//bonus,swtich the youtube theme when the dark background is shown
function Dark(){
    document.getElementById("Home").src="icon/darkyt.png";
    document.getElementById("header").style.backgroundColor="black";
    document.getElementById("side").style.backgroundColor="black";
    document.getElementById("content").style.backgroundColor="black";
    document.getElementById("search").style.backgroundColor="black"; 
    document.getElementById("button").style.backgroundColor="rgb(10, 10, 10)"  
    document.getElementById("filter").style.backgroundColor="black";
    document.getElementById("All").style.color="black";
    document.getElementById("main").style.backgroundColor="black";
    var active=document.getElementsByClassName("active");
    active[0].style.backgroundColor="rgb(82, 82, 82)";
    active[1].style.backgroundColor="rgb(220, 220, 220)";
    var changeColor = document.getElementsByClassName("changeColor");
    for (i=0;i<=changeColor.length-1;i++){
        changeColor[i].style.color="white";
    }
    var inactive=document.getElementsByClassName("inactive");
    for (i=0;i<=inactive.length-1;i++){
        inactive[i].style.backgroundColor="rgb(82, 82, 82)";
    }
    var changeColorGray = document.getElementsByClassName("changeColorGray");
    for (i=0;i<=changeColorGray.length-1;i++){
        changeColorGray[i].style.color="rgb(132, 132, 132)";
    }
    const Icon = document.querySelectorAll(".material-icons");
    for (i=0;i<=Icon.length-1;i++){
        Icon[i].style.color="white";
    }
}
function Light(){
    document.getElementById("Home").src="icon/lightyt.png";
    document.getElementById("header").style.backgroundColor="white";
    document.getElementById("side").style.backgroundColor="white";
    document.getElementById("content").style.backgroundColor="white";
    document.getElementById("search").style.backgroundColor="white";
    document.getElementById("button").style.backgroundColor="rgb(220, 220, 220)";
    document.getElementById("filter").style.backgroundColor="white";
    document.getElementById("All").style.color="white";
    document.getElementById("main").style.backgroundColor="#f5f5f5";
    var active=document.getElementsByClassName("active");
    active[0].style.backgroundColor="rgb(226, 226, 226)";
    active[1].style.backgroundColor="rgb(96, 96, 96)";
    
    var changeColor = document.getElementsByClassName("changeColor");
    for (i=0;i<=changeColor.length-1;i++){
        changeColor[i].style.color="rgb(96, 96, 96)";
    }
    var inactive=document.getElementsByClassName("inactive");
    for (i=0;i<=inactive.length-1;i++){
        inactive[i].style.backgroundColor="#f0f0f0";
    }
    var changeColorGray = document.getElementsByClassName("changeColorGray");
    for (i=0;i<=changeColorGray.length-1;i++){
        changeColorGray[i].style.color="rgb(82, 82, 82)";
    }
    const Icon = document.querySelectorAll(".material-icons");
    for (i=0;i<=Icon.length-1;i++){
        Icon[i].style.color="rgb(96, 96, 96)";
    }
}