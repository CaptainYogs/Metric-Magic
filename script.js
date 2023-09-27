console.log('JS is working!!\n\n');

var mv=document.getElementById("unse");
var cn=document.getElementById("conv");
var pr=document.getElementsByClassName("div2");
var cnvrtbtn=document.getElementById("cnvrtbtn");

if(mv.value == "Select Unit"){    
    cn.style.display="none";
}

mv.onchange=function myScript() {
    if(mv.value == "Select Unit"){    
        cn.style.display="none";
    }
    else{
        cn.style.display="block";
        if(mv.value == "Area"){ 
            var div2=document.querySelectorAll("[id='area']");
            for(var i=0;i<pr.length;i++) pr[i].style.display="none";
            div2[0].style.display="block";
            div2[1].style.display="block";
        }
        else if(mv.value == "Digital Storage"){ 
            var div2=document.querySelectorAll("[id='digi']");
            for(var i=0;i<pr.length;i++) pr[i].style.display="none";
            div2[0].style.display="block";
            div2[1].style.display="block"; 
        }
        else if(mv.value == "Frequency"){ 
            var div2=document.querySelectorAll("[id='freq']");
            for(var i=0;i<pr.length;i++) pr[i].style.display="none";
            div2[0].style.display="block";
            div2[1].style.display="block"; 
        }
        else if(mv.value == "Length"){ 
            var div2=document.querySelectorAll("[id='leng']");
            for(var i=0;i<pr.length;i++) pr[i].style.display="none";
            div2[0].style.display="block";
            div2[1].style.display="block"; 
        }
        else if(mv.value == "Mass"){ 
            var div2=document.querySelectorAll("[id='mass']");
            for(var i=0;i<pr.length;i++) pr[i].style.display="none";
            div2[0].style.display="block";
            div2[1].style.display="block"; 
        }
        else if(mv.value == "Angle"){ 
            var div2=document.querySelectorAll("[id='degr']");
            for(var i=0;i<pr.length;i++) pr[i].style.display="none";
            div2[0].style.display="block";
            div2[1].style.display="block"; 
        }
        else if(mv.value == "Speed"){ 
            var div2=document.querySelectorAll("[id='sped']");
            for(var i=0;i<pr.length;i++) pr[i].style.display="none";
            div2[0].style.display="block";
            div2[1].style.display="block"; 
        }
        else if(mv.value == "Temperature"){ 
            var div2=document.querySelectorAll("[id='temp']");
            for(var i=0;i<pr.length;i++) pr[i].style.display="none";
            div2[0].style.display="block";
            div2[1].style.display="block"; 
        }
        else if(mv.value == "Time"){ 
            var div2=document.querySelectorAll("[id='time']");
            for(var i=0;i<pr.length;i++) pr[i].style.display="none";
            div2[0].style.display="block";
            div2[1].style.display="block"; 
        }
        else { 
            var div2=document.querySelectorAll("[id='volm']");
            for(var i=0;i<pr.length;i++) pr[i].style.display="none";
            div2[0].style.display="block";
            div2[1].style.display="block"; 
        }
    }
}

cnvrtbtn.onclick=function myScript() {
    //Converting Area
    if(mv.value == "Area"){
        var div2=document.querySelectorAll("[id='area']");
    }
        
}