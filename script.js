console.log('JS is working!!\n\n');

var mv=document.getElementById("unse");
var cn=document.getElementById("conv");
// var pr=document.getElementsByClassName("div2");

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
            // pr.style.display="none";
            for(var i=0;i<div2.length;i++) div2[i].style.display="block"; 
        }
        // else if(mv.value == "Digital Storage"){ 
        //     var div2=document.querySelectorAll("[id='digi']");
        //     for(var i=0;i<div2.length;i++) div2[i].style.display="block"; 
        // }
    }
}