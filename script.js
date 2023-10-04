// console.log('JS is working!!\n\n');

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

cnvrtbtn.onclick=function myScript1() {
    var mv=document.getElementById("unse");
    var val = document.getElementById("val").value;
    if(mv.value == "Area"){
        var div2=document.querySelectorAll("[id='area']");
        if(div2[0].value == "Square Kilometer"){
            if(div2[1].value == "Square Mile") document.getElementById("ans").value = (val/2.59).toFixed(3);
            else if(div2[1].value == "Square Meter") document.getElementById("ans").value = String(val)+"e+6";
            else if(div2[1].value == "Square Foot") document.getElementById("ans").value = String(val*1.076)+"e+6";
            else if(div2[1].value == "Acre") document.getElementById("ans").value = (val*247.105).toFixed(3);
            else if(div2[1].value == "Square Kilometer") document.getElementById("ans").value = val;
        }
        else if(div2[0].value == "Square Meter"){
            if(div2[1].value == "Square Mile") document.getElementById("ans").value = String(val*3.861)+"e-7";
            else if(div2[1].value == "Square Meter") document.getElementById("ans").value = val;
            else if(div2[1].value == "Square Foot") document.getElementById("ans").value = (val*10.7639).toFixed(3);
            else if(div2[1].value == "Acre") document.getElementById("ans").value = (val/4047).toFixed(3);
            else if(div2[1].value == "Square Kilometer") document.getElementById("ans").value = String(val)+"e-6";
        }
        else if(div2[0].value == "Square Mile"){
            if(div2[1].value == "Square Mile") document.getElementById("ans").value = val;
            else if(div2[1].value == "Square Meter") document.getElementById("ans").value = String(val*2.59)+"e+6";
            else if(div2[1].value == "Square Foot") document.getElementById("ans").value = String(val*2.788)+"e+6";
            else if(div2[1].value == "Acre") document.getElementById("ans").value = val*640;
            else if(div2[1].value == "Square Kilometer") document.getElementById("ans").value = (val*2.58999).toFixed(3);
        }
        else if(div2[0].value == "Square Foot"){
            if(div2[1].value == "Square Mile") document.getElementById("ans").value = String(val*3.587)+"e-8";
            else if(div2[1].value == "Square Meter") document.getElementById("ans").value = (val/10.764).toFixed(3);
            else if(div2[1].value == "Square Foot") document.getElementById("ans").value = val;
            else if(div2[1].value == "Acre") document.getElementById("ans").value = String(val*2.2957)+"e-5";
            else if(div2[1].value == "Square Kilometer") document.getElementById("ans").value = String(val*9.2903)+"e-8";
        }
        else {
            if(div2[1].value == "Square Mile") document.getElementById("ans").value = (val/640).toFixed(3);
            else if(div2[1].value == "Square Meter") document.getElementById("ans").value = (val*4046.86).toFixed(3);
            else if(div2[1].value == "Square Foot") document.getElementById("ans").value = val*43560;
            else if(div2[1].value == "Acre") document.getElementById("ans").value = val;
            else if(div2[1].value == "Square Kilometer") document.getElementById("ans").value = (val/247.1).toFixed(3);
        }
    }
    else if(mv.value == "Digital Storage"){ 
        var div2=document.querySelectorAll("[id='digi']");
        if(div2[0].value == "Bit"){
            if(div2[1].value == "Bit") document.getElementById("ans").value = val;
            else if(div2[1].value == "Byte") document.getElementById("ans").value = (val/8).toFixed(3);
            else if(div2[1].value == "Kilobyte(KB)") document.getElementById("ans").value = (val/8192).toFixed(3);
            else if(div2[1].value == "Megabyte(MB)") document.getElementById("ans").value = (val/(8192*1024)).toFixed(3);
            else if(div2[1].value == "Gigabyte(GB)") document.getElementById("ans").value = String(val*1.25)+"e-10";
            else if(div2[1].value == "Terabyte(TB)") document.getElementById("ans").value = String(val*1.25)+"e-13";
            else if(div2[1].value == "Petabyte(PB)") document.getElementById("ans").value = String(val*1.25)+"e-16";  
        }
        else if(div2[0].value == "Byte"){
            if(div2[1].value == "Bit") document.getElementById("ans").value = val*8;
            else if(div2[1].value == "Byte") document.getElementById("ans").value = val;
            else if(div2[1].value == "Kilobyte(KB)") document.getElementById("ans").value = (val/1024).toFixed(3);
            else if(div2[1].value == "Megabyte(MB)") document.getElementById("ans").value = (val/(1024*1024)).toFixed(3);
            else if(div2[1].value == "Gigabyte(GB)") document.getElementById("ans").value = (val/(1024*1024*1024)).toFixed(3);
            else if(div2[1].value == "Terabyte(TB)") document.getElementById("ans").value = String(val)+"e-12";
            else if(div2[1].value == "Petabyte(PB)") document.getElementById("ans").value = String(val)+"e-15";
        }
        else if(div2[0].value == "Kilobyte(KB)"){
            if(div2[1].value == "Bit") document.getElementById("ans").value = val*8192;
            else if(div2[1].value == "Byte") document.getElementById("ans").value = val*1024;
            else if(div2[1].value == "Kilobyte(KB)") document.getElementById("ans").value = val;
            else if(div2[1].value == "Megabyte(MB)") document.getElementById("ans").value = (val/1024).toFixed(3);
            else if(div2[1].value == "Gigabyte(GB)") document.getElementById("ans").value = (val/(1024*1024)).toFixed(3);
            else if(div2[1].value == "Terabyte(TB)") document.getElementById("ans").value = (val/(1024*1024*1024)).toFixed(3);
            else if(div2[1].value == "Petabyte(PB)") document.getElementById("ans").value = String(val)+"e-15";
        }
        else if(div2[0].value == "Megabyte(MB)"){
            if(div2[1].value == "Bit") document.getElementById("ans").value = val*8192*1024;
            else if(div2[1].value == "Byte") document.getElementById("ans").value = val*1024*1024;
            else if(div2[1].value == "Kilobyte(KB)") document.getElementById("ans").value = val*1024;
            else if(div2[1].value == "Megabyte(MB)") document.getElementById("ans").value = val;
            else if(div2[1].value == "Gigabyte(GB)") document.getElementById("ans").value = (val/1024).toFixed(3);
            else if(div2[1].value == "Terabyte(TB)") document.getElementById("ans").value = (val/(1024*1024)).toFixed(3);
            else if(div2[1].value == "Petabyte(PB)") document.getElementById("ans").value = (val/(1024*1024*1024)).toFixed(3);
        }
        else if(div2[0].value == "Gigabyte(GB)"){
            if(div2[1].value == "Bit") document.getElementById("ans").value = val*8192*1024*1024;
            else if(div2[1].value == "Byte") document.getElementById("ans").value = val*1024*1024*1024;
            else if(div2[1].value == "Kilobyte(KB)") document.getElementById("ans").value = val*1024*1024;
            else if(div2[1].value == "Megabyte(MB)") document.getElementById("ans").value = val*1024;
            else if(div2[1].value == "Gigabyte(GB)") document.getElementById("ans").value = val;
            else if(div2[1].value == "Terabyte(TB)") document.getElementById("ans").value = (val/(1024)).toFixed(3);
            else if(div2[1].value == "Petabyte(PB)") document.getElementById("ans").value = (val/(1024*1024)).toFixed(3);
        }
        else if(div2[0].value == "Terabyte(TB)"){
            if(div2[1].value == "Bit") document.getElementById("ans").value = val*8192*1024*1024*1024;
            else if(div2[1].value == "Byte") document.getElementById("ans").value = val*1024*1024*1024*1024;
            else if(div2[1].value == "Kilobyte(KB)") document.getElementById("ans").value = val*1024*1024*1024;
            else if(div2[1].value == "Megabyte(MB)") document.getElementById("ans").value = val*1024*1024;
            else if(div2[1].value == "Gigabyte(GB)") document.getElementById("ans").value = val*1024;
            else if(div2[1].value == "Terabyte(TB)") document.getElementById("ans").value = val;
            else if(div2[1].value == "Petabyte(PB)") document.getElementById("ans").value = (val/1024).toFixed(3);
        }
        else{
            if(div2[1].value == "Bit") document.getElementById("ans").value = val*8192*1024*1024*1024*1024;
            else if(div2[1].value == "Byte") document.getElementById("ans").value = val*1024*1024*1024*1024*1024;
            else if(div2[1].value == "Kilobyte(KB)") document.getElementById("ans").value = val*1024*1024*1024*1024;
            else if(div2[1].value == "Megabyte(MB)") document.getElementById("ans").value = val*1024*1024*1024;
            else if(div2[1].value == "Gigabyte(GB)") document.getElementById("ans").value = val*1024*1024;
            else if(div2[1].value == "Terabyte(TB)") document.getElementById("ans").value = val*1024;
            else if(div2[1].value == "Petabyte(PB)") document.getElementById("ans").value = val;
        }
    }
    else if(mv.value == "Frequency"){  
        var div2=document.querySelectorAll("[id='freq']"); 
        if(div2[0].value == "Hertz"){
            if(div2[1].value == "Hertz") document.getElementById("ans").value = val;
            else if(div2[1].value == "Kilohertz") document.getElementById("ans").value = (val/1000).toFixed(3);
            else if(div2[1].value == "Megahertz") document.getElementById("ans").value = String(val)+"e-6";
            else if(div2[1].value == "Gigahertz") document.getElementById("ans").value = String(val)+"e-9";
        }
        else if(div2[0].value == "Kilohertz"){
            if(div2[1].value == "Hertz") document.getElementById("ans").value = val*1000;
            else if(div2[1].value == "Kilohertz") document.getElementById("ans").value = val;
            else if(div2[1].value == "Megahertz") document.getElementById("ans").value = (val/1000).toFixed(3);
            else if(div2[1].value == "Gigahertz") document.getElementById("ans").value = String(val)+"e-6";
        }
        else if(div2[0].value == "Megahertz"){
            if(div2[1].value == "Hertz") document.getElementById("ans").value = String(val)+"e+6";
            else if(div2[1].value == "Kilohertz") document.getElementById("ans").value = val*1000;
            else if(div2[1].value == "Megahertz") document.getElementById("ans").value = val;
            else if(div2[1].value == "Gigahertz") document.getElementById("ans").value = (val/1000).toFixed(3);
        }
        else {
            if(div2[1].value == "Hertz") document.getElementById("ans").value = String(val)+"e+9";
            else if(div2[1].value == "Kilohertz") document.getElementById("ans").value = String(val)+"e+6";
            else if(div2[1].value == "Megahertz") document.getElementById("ans").value = (val/1000).toFixed(3);
            else if(div2[1].value == "Gigahertz") document.getElementById("ans").value = val;
        }
    }
    else if(mv.value == "Length"){ 
        var div2=document.querySelectorAll("[id='leng']"); 
        if(div2[0].value == "Kilometre"){
            if(div2[1].value == "Kilometre") document.getElementById("ans").value = val;
            else if(div2[1].value == "Meter") document.getElementById("ans").value = val*1000;
            else if(div2[1].value == "Centimeter") document.getElementById("ans").value = val*100000;
            else if(div2[1].value == "Milimetre") document.getElementById("ans").value = val*1000000;
            else if(div2[1].value == "Nanometre") document.getElementById("ans").value = String(val)+"e+12";
            else if(div2[1].value == "Mile") document.getElementById("ans").value = (val/1.609).toFixed(3);
            else if(div2[1].value == "Yard") document.getElementById("ans").value = (val*1093.61).toFixed(3);
            else if(div2[1].value == "Foot") document.getElementById("ans").value = (val*3280.84).toFixed(3);
            else if(div2[1].value == "Inch") document.getElementById("ans").value = (val*39370.1).toFixed(3);
            else if(div2[1].value == "Nautical Mile") document.getElementById("ans").value = (val/1.852).toFixed(3);
        }
        else if(div2[0].value == "Meter"){
            if(div2[1].value == "Kilometre") document.getElementById("ans").value = (val/1000).toFixed(3);
            else if(div2[1].value == "Meter") document.getElementById("ans").value = val;
            else if(div2[1].value == "Centimeter") document.getElementById("ans").value = val*100;
            else if(div2[1].value == "Milimetre") document.getElementById("ans").value = val*1000;
            else if(div2[1].value == "Nanometre") document.getElementById("ans").value = String(val)+"e+9";
            else if(div2[1].value == "Mile") document.getElementById("ans").value = (val/1609).toFixed(3);
            else if(div2[1].value == "Yard") document.getElementById("ans").value = (val*1.094).toFixed(3);
            else if(div2[1].value == "Foot") document.getElementById("ans").value = (val*3.281).toFixed(3);
            else if(div2[1].value == "Inch") document.getElementById("ans").value = (val*39.37).toFixed(3);
            else if(div2[1].value == "Nautical Mile") document.getElementById("ans").value = (val/1852).toFixed(3);
        }
        else if(div2[0].value == "Centimeter"){
            if(div2[1].value == "Kilometre") document.getElementById("ans").value = (val/100000).toFixed(3);
            else if(div2[1].value == "Meter") document.getElementById("ans").value = (val/100).toFixed(3);
            else if(div2[1].value == "Centimeter") document.getElementById("ans").value = val;
            else if(div2[1].value == "Milimetre") document.getElementById("ans").value = val*10;
            else if(div2[1].value == "Nanometre") document.getElementById("ans").value = String(val)+"e+7";
            else if(div2[1].value == "Mile") document.getElementById("ans").value = (val/160900).toFixed(3);
            else if(div2[1].value == "Yard") document.getElementById("ans").value = (val/91.44).toFixed(3);
            else if(div2[1].value == "Foot") document.getElementById("ans").value = (val/30.48).toFixed(3);
            else if(div2[1].value == "Inch") document.getElementById("ans").value = (val/2.54).toFixed(3);
            else if(div2[1].value == "Nautical Mile") document.getElementById("ans").value = (val/185200).toFixed(3);
        }
        else if(div2[0].value == "Milimetre"){
            if(div2[1].value == "Kilometre") document.getElementById("ans").value = String(val)+"e-6";
            else if(div2[1].value == "Meter") document.getElementById("ans").value = (val/1000).toFixed(3);
            else if(div2[1].value == "Centimeter") document.getElementById("ans").value = (val/10).toFixed(3);
            else if(div2[1].value == "Milimetre") document.getElementById("ans").value = val;
            else if(div2[1].value == "Nanometre") document.getElementById("ans").value = String(val)+"e+6";
            else if(div2[1].value == "Mile") document.getElementById("ans").value = String(val*6.2137)+"e-7";
            else if(div2[1].value == "Yard") document.getElementById("ans").value = (val/914.4).toFixed(3);
            else if(div2[1].value == "Foot") document.getElementById("ans").value = (val/304.8).toFixed(3);
            else if(div2[1].value == "Inch") document.getElementById("ans").value = (val/25.4).toFixed(3);
            else if(div2[1].value == "Nautical Mile") document.getElementById("ans").value = String(val*5.3996)+"e-7";
        }
        else if(div2[0].value == "Nanometre"){
            if(div2[1].value == "Kilometre") document.getElementById("ans").value = String(val)+"e-12";
            else if(div2[1].value == "Meter") document.getElementById("ans").value = String(val)+"e-9";
            else if(div2[1].value == "Centimeter") document.getElementById("ans").value = String(val)+"e-7";
            else if(div2[1].value == "Milimetre") document.getElementById("ans").value = String(val)+"e-6";
            else if(div2[1].value == "Nanometre") document.getElementById("ans").value = val;
            else if(div2[1].value == "Mile") document.getElementById("ans").value = String(val*6.2137)+"e-13";
            else if(div2[1].value == "Yard") document.getElementById("ans").value = String(val*1.0936)+"e-9";
            else if(div2[1].value == "Foot") document.getElementById("ans").value = String(val*3.2808)+"e-9";
            else if(div2[1].value == "Inch") document.getElementById("ans").value = String(val*3.937)+"e-8";
            else if(div2[1].value == "Nautical Mile") document.getElementById("ans").value = String(val*5.3996)+"e-13";
        }
        else if(div2[0].value == "Mile"){
            if(div2[1].value == "Kilometre") document.getElementById("ans").value = (val*1.60934).toFixed(3);
            else if(div2[1].value == "Meter") document.getElementById("ans").value = (val*1609.34).toFixed(3);
            else if(div2[1].value == "Centimeter") document.getElementById("ans").value = val*160934;
            else if(div2[1].value == "Milimetre") document.getElementById("ans").value = String(val*1.60934)+"e+6";
            else if(div2[1].value == "Nanometre") document.getElementById("ans").value = String(val*1.60934)+"e+12";
            else if(div2[1].value == "Mile") document.getElementById("ans").value = val;
            else if(div2[1].value == "Yard") document.getElementById("ans").value = val*1760;
            else if(div2[1].value == "Foot") document.getElementById("ans").value = val*5280;
            else if(div2[1].value == "Inch") document.getElementById("ans").value = val*63360;
            else if(div2[1].value == "Nautical Mile") document.getElementById("ans").value = (val/1.151).toFixed(3);
        }
        else if(div2[0].value == "Yard"){
            if(div2[1].value == "Kilometre") document.getElementById("ans").value = (val/1094).toFixed(3);
            else if(div2[1].value == "Meter") document.getElementById("ans").value = (val/1.094).toFixed(3);
            else if(div2[1].value == "Centimeter") document.getElementById("ans").value = (val*91.44).toFixed(3);
            else if(div2[1].value == "Milimetre") document.getElementById("ans").value = (val*914.4).toFixed(3);
            else if(div2[1].value == "Nanometre") document.getElementById("ans").value = String(val*9.144)+"e+8";
            else if(div2[1].value == "Mile") document.getElementById("ans").value = (val/1760).toFixed(3);
            else if(div2[1].value == "Yard") document.getElementById("ans").value = val;
            else if(div2[1].value == "Foot") document.getElementById("ans").value = val*3;
            else if(div2[1].value == "Inch") document.getElementById("ans").value = val*36;
            else if(div2[1].value == "Nautical Mile") document.getElementById("ans").value = (val/2025).toFixed(3);
        }
        else if(div2[0].value == "Foot"){
            if(div2[1].value == "Kilometre") document.getElementById("ans").value = (val/3281).toFixed(5);
            else if(div2[1].value == "Meter") document.getElementById("ans").value = (val/3.281).toFixed(5);
            else if(div2[1].value == "Centimeter") document.getElementById("ans").value = (val*30.48).toFixed(5);
            else if(div2[1].value == "Milimetre") document.getElementById("ans").value = (val*304.8).toFixed(5);
            else if(div2[1].value == "Nanometre") document.getElementById("ans").value = String(val*3.048)+"e+8";
            else if(div2[1].value == "Mile") document.getElementById("ans").value = (val/5280).toFixed(5);
            else if(div2[1].value == "Yard") document.getElementById("ans").value = (val/3).toFixed(5);
            else if(div2[1].value == "Foot") document.getElementById("ans").value = val;
            else if(div2[1].value == "Inch") document.getElementById("ans").value = val*12;
            else if(div2[1].value == "Nautical Mile") document.getElementById("ans").value = (val/6076).toFixed(5);
        }
        else if(div2[0].value == "Inch"){
            if(div2[1].value == "Kilometre") document.getElementById("ans").value = (val/39370).toFixed(5);
            else if(div2[1].value == "Meter") document.getElementById("ans").value = (val/39.37).toFixed(5);
            else if(div2[1].value == "Centimeter") document.getElementById("ans").value = (val*2.54).toFixed(5);
            else if(div2[1].value == "Milimetre") document.getElementById("ans").value = (val*25.4).toFixed(5);
            else if(div2[1].value == "Nanometre") document.getElementById("ans").value = String(val*2.54)+"e+7";
            else if(div2[1].value == "Mile") document.getElementById("ans").value = (val/63360).toFixed(5);
            else if(div2[1].value == "Yard") document.getElementById("ans").value = (val/36).toFixed(5);
            else if(div2[1].value == "Foot") document.getElementById("ans").value = (val/12).toFixed(5);
            else if(div2[1].value == "Inch") document.getElementById("ans").value = val;
            else if(div2[1].value == "Nautical Mile") document.getElementById("ans").value = (val/72910).toFixed(5);
        }
        else {
            if(div2[1].value == "Kilometre") document.getElementById("ans").value = (val/1.852).toFixed(5);
            else if(div2[1].value == "Meter") document.getElementById("ans").value = (val/1852).toFixed(5);
            else if(div2[1].value == "Centimeter") document.getElementById("ans").value = (val*185200).toFixed(5);
            else if(div2[1].value == "Milimetre") document.getElementById("ans").value = String(val*1.852)+"e+6";
            else if(div2[1].value == "Nanometre") document.getElementById("ans").value = String(val*1.852)+"e+12";
            else if(div2[1].value == "Mile") document.getElementById("ans").value = (val*1.15078).toFixed(5);
            else if(div2[1].value == "Yard") document.getElementById("ans").value = (val*2025.37).toFixed(5);
            else if(div2[1].value == "Foot") document.getElementById("ans").value = (val*6076.12).toFixed(5);
            else if(div2[1].value == "Inch") document.getElementById("ans").value = val*72913.4;
            else if(div2[1].value == "Nautical Mile") document.getElementById("ans").value = val;
        }
    } 
    else if(mv.value == "Mass"){ 
        var div2=document.querySelectorAll("[id='mass']"); 
        if(div2[0].value == "Kilogram"){
            if(div2[1].value == "Kilogram") document.getElementById("ans").value = val;
            else if(div2[1].value == "Gram") document.getElementById("ans").value = val*1000;
            else if(div2[1].value == "Milligram") document.getElementById("ans").value = String(val)+"e+6";
            else if(div2[1].value == "Tonne") document.getElementById("ans").value = (val/1000).toFixed(5);
            else if(div2[1].value == "Pound") document.getElementById("ans").value = (val*2.205).toFixed(5);
            else if(div2[1].value == "Ounce") document.getElementById("ans").value = (val*35.274).toFixed(5);
        }
        else if(div2[0].value == "Gram"){
            if(div2[1].value == "Kilogram") document.getElementById("ans").value = (val/1000).toFixed(5);
            else if(div2[1].value == "Gram") document.getElementById("ans").value = val;
            else if(div2[1].value == "Milligram") document.getElementById("ans").value = val*1000;
            else if(div2[1].value == "Tonne") document.getElementById("ans").value = String(val)+"e-6";
            else if(div2[1].value == "Pound") document.getElementById("ans").value = (val/453.6).toFixed(5);
            else if(div2[1].value == "Ounce") document.getElementById("ans").value = (val/28.35).toFixed(5);
        }
        else if(div2[0].value == "Milligram"){
            if(div2[1].value == "Kilogram") document.getElementById("ans").value = String(val)+"e-6";
            else if(div2[1].value == "Gram") document.getElementById("ans").value = (val/1000).toFixed(5);
            else if(div2[1].value == "Milligram") document.getElementById("ans").value = val;
            else if(div2[1].value == "Tonne") document.getElementById("ans").value = String(val)+"e-9";
            else if(div2[1].value == "Pound") document.getElementById("ans").value = (val/453600).toFixed(5);
            else if(div2[1].value == "Ounce") document.getElementById("ans").value = (val/28350).toFixed(5);
        }
        else if(div2[0].value == "Tonne"){
            if(div2[1].value == "Kilogram") document.getElementById("ans").value = val*1000;
            else if(div2[1].value == "Gram") document.getElementById("ans").value = val*1000000;
            else if(div2[1].value == "Milligram") document.getElementById("ans").value = String(val)+"e+9";
            else if(div2[1].value == "Tonne") document.getElementById("ans").value = val;
            else if(div2[1].value == "Pound") document.getElementById("ans").value = (val*2204.62).toFixed(5);
            else if(div2[1].value == "Ounce") document.getElementById("ans").value = val*35274;
        }
        else if(div2[0].value == "Pound"){
            if(div2[1].value == "Kilogram") document.getElementById("ans").value = (val/2.205).toFixed(5);
            else if(div2[1].value == "Gram") document.getElementById("ans").value = (val*453.6).toFixed(5);
            else if(div2[1].value == "Milligram") document.getElementById("ans").value = val*453600;
            else if(div2[1].value == "Tonne") document.getElementById("ans").value = (val/2205).toFixed(5);
            else if(div2[1].value == "Pound") document.getElementById("ans").value = val;
            else if(div2[1].value == "Ounce") document.getElementById("ans").value = val*16;
        }
        else {
            if(div2[1].value == "Kilogram") document.getElementById("ans").value = (val/35.274).toFixed(5);
            else if(div2[1].value == "Gram") document.getElementById("ans").value = (val*28.35).toFixed(5);
            else if(div2[1].value == "Milligram") document.getElementById("ans").value = val*28349.5;
            else if(div2[1].value == "Tonne") document.getElementById("ans").value = (val/35270).toFixed(5);
            else if(div2[1].value == "Pound") document.getElementById("ans").value = (val/16).toFixed(5);
            else if(div2[1].value == "Ounce") document.getElementById("ans").value = val;
        }
    }
    else if(mv.value == "Angle"){ 
        var div2=document.querySelectorAll("[id='degr']"); 
        if(div2[0].value == "Radian"){
            if(div2[1].value == "Degree") document.getElementById("ans").value = (val*(180/Math.PI)).toFixed(5);
            else document.getElementById("ans").value = val;
        }
        else {
            if(div2[1].value == "Radian") document.getElementById("ans").value = (val*(Math.PI/180)).toFixed(5);
            else document.getElementById("ans").value = val;
        }
    }
    else if(mv.value == "Speed"){ 
        var div2=document.querySelectorAll("[id='sped']"); 
        if(div2[0].value == "Mile per Hour"){
            if(div2[1].value == "Mile per Hour") document.getElementById("ans").value = val;
            else if(div2[1].value == "Meter per Second") document.getElementById("ans").value = (val/2.237).toFixed(5);
            else if(div2[1].value == "Kilometer per Hour") document.getElementById("ans").value = val*1.60934;
            else if(div2[1].value == "Knot") document.getElementById("ans").value = (val/1.151).toFixed(5);
        }
        else if(div2[0].value == "Meter per Second"){
            if(div2[1].value == "Mile per Hour") document.getElementById("ans").value = val*2.237;
            else if(div2[1].value == "Meter per Second") document.getElementById("ans").value = val;
            else if(div2[1].value == "Kilometer per Hour") document.getElementById("ans").value = val*3.6;
            else if(div2[1].value == "Knot") document.getElementById("ans").value = val*1.94384;
        }
        else if(div2[0].value == "Kilometer per Hour"){
            if(div2[1].value == "Mile per Hour") document.getElementById("ans").value = (val/1.609).toFixed(5);
            else if(div2[1].value == "Meter per Second") document.getElementById("ans").value = (val/3.6).toFixed(5);
            else if(div2[1].value == "Kilometer per Hour") document.getElementById("ans").value = val;
            else if(div2[1].value == "Knot") document.getElementById("ans").value = (val/1.852).toFixed(5);
        }
        else {
            if(div2[1].value == "Mile per Hour") document.getElementById("ans").value = val*1.151;
            else if(div2[1].value == "Meter per Second") document.getElementById("ans").value = (val/1.944).toFixed(5);
            else if(div2[1].value == "Kilometer per Hour") document.getElementById("ans").value = val*1.852;
            else if(div2[1].value == "Knot") document.getElementById("ans").value = val;
        }
    }
    else if(mv.value == "Temperature"){ 
        var div2=document.querySelectorAll("[id='temp']"); 
        if(div2[0].value == "Celsius"){
            if(div2[1].value == "Celsius") document.getElementById("ans").value = val;
            else if(div2[1].value == "Fahrenheit") document.getElementById("ans").value = ((val*(9/5))+32).toFixed(5);
            else if(div2[1].value == "Fahrenheit") document.getElementById("ans").value = (val+273.15).toFixed(5);
        }
        else if(div2[0].value == "Fahrenheit"){
            if(div2[1].value == "Celsius") document.getElementById("ans").value = ((val-32)*(5/9)).toFixed(5);
            else if(div2[1].value == "Fahrenheit") document.getElementById("ans").value = val;
            else if(div2[1].value == "Fahrenheit") document.getElementById("ans").value = (((val-32)*(5/9))+273.15).toFixed(5);
        }
        else {
            if(div2[1].value == "Celsius") document.getElementById("ans").value = (val-273.15).toFixed(5);
            else if(div2[1].value == "Fahrenheit") document.getElementById("ans").value = (((val-273.15)*(9/5))+32).toFixed(5);
            else if(div2[1].value == "Fahrenheit") document.getElementById("ans").value = val;
        }
    }
    else if(mv.value == "Time"){ 
        var div2=document.querySelectorAll("[id='time']"); 
        if(div2[0].value == "Millisecond"){
            if(div2[1].value == "Millisecond") document.getElementById("ans").value = val;
            else if(div2[1].value == "Second") document.getElementById("ans").value = (val/1000).toFixed(5);
            else if(div2[1].value == "Minute") document.getElementById("ans").value = (val/60000).toFixed(5);
            else if(div2[1].value == "Hour") document.getElementById("ans").value = (val/(60000*60)).toFixed(5);
            else if(div2[1].value == "Day") document.getElementById("ans").value = (val/(60000*60*24)).toFixed(5);
            else if(div2[1].value == "Week") document.getElementById("ans").value = (val/(60000*60*24*7)).toFixed(5);
            else if(div2[1].value == "Month") document.getElementById("ans").value = 0;
            else if(div2[1].value == "Calendar Year") document.getElementById("ans").value = 0;
        }
        else if(div2[0].value == "Second"){
            if(div2[1].value == "Millisecond") document.getElementById("ans").value = val*1000;
            else if(div2[1].value == "Second") document.getElementById("ans").value = val;
            else if(div2[1].value == "Minute") document.getElementById("ans").value = (val/60).toFixed(5);
            else if(div2[1].value == "Hour") document.getElementById("ans").value = (val/3600).toFixed(5);
            else if(div2[1].value == "Day") document.getElementById("ans").value = (val/86400).toFixed(5);
            else if(div2[1].value == "Week") document.getElementById("ans").value = (val/(86400*7)).toFixed(5);
            else if(div2[1].value == "Month") document.getElementById("ans").value = 0;
            else if(div2[1].value == "Calendar Year") document.getElementById("ans").value = 0;
        }
        else if(div2[0].value == "Minute"){
            if(div2[1].value == "Millisecond") document.getElementById("ans").value = val*60000;
            else if(div2[1].value == "Second") document.getElementById("ans").value = val*60;
            else if(div2[1].value == "Minute") document.getElementById("ans").value = val;
            else if(div2[1].value == "Hour") document.getElementById("ans").value = (val/60).toFixed(5);
            else if(div2[1].value == "Day") document.getElementById("ans").value = (val/1440).toFixed(5);
            else if(div2[1].value == "Week") document.getElementById("ans").value = (val/10080).toFixed(5);
            else if(div2[1].value == "Month") document.getElementById("ans").value = (val/43800).toFixed(5);
            else if(div2[1].value == "Calendar Year") document.getElementById("ans").value = (val/525600).toFixed(5);
        }
        else if(div2[0].value == "Hour"){
            if(div2[1].value == "Millisecond") document.getElementById("ans").value = String(val*3.6)+"e+6";
            else if(div2[1].value == "Second") document.getElementById("ans").value = val*3600;
            else if(div2[1].value == "Minute") document.getElementById("ans").value = val*60;
            else if(div2[1].value == "Hour") document.getElementById("ans").value = val;
            else if(div2[1].value == "Day") document.getElementById("ans").value = (val/24).toFixed(5);
            else if(div2[1].value == "Week") document.getElementById("ans").value = (val/168).toFixed(5);
            else if(div2[1].value == "Month") document.getElementById("ans").value = (val/730).toFixed(5);
            else if(div2[1].value == "Calendar Year") document.getElementById("ans").value = (val/8760).toFixed(5);
        }
        else if(div2[0].value == "Day"){
            if(div2[1].value == "Millisecond") document.getElementById("ans").value = String(val*8.64)+"e+7";
            else if(div2[1].value == "Second") document.getElementById("ans").value = val*86400;
            else if(div2[1].value == "Minute") document.getElementById("ans").value = val*1440;
            else if(div2[1].value == "Hour") document.getElementById("ans").value = val*24;
            else if(div2[1].value == "Day") document.getElementById("ans").value = val;
            else if(div2[1].value == "Week") document.getElementById("ans").value = (val/7).toFixed(5);
            else if(div2[1].value == "Month") document.getElementById("ans").value = (val/30.417).toFixed(5);
            else if(div2[1].value == "Calendar Year") document.getElementById("ans").value = (val/365).toFixed(5);
        }
        else if(div2[0].value == "Week"){
            if(div2[1].value == "Millisecond") document.getElementById("ans").value = String(val*6.048)+"e+8";
            else if(div2[1].value == "Second") document.getElementById("ans").value = val*604800;
            else if(div2[1].value == "Minute") document.getElementById("ans").value = val*10080;
            else if(div2[1].value == "Hour") document.getElementById("ans").value = val*168;
            else if(div2[1].value == "Day") document.getElementById("ans").value = val*7;
            else if(div2[1].value == "Week") document.getElementById("ans").value = val;
            else if(div2[1].value == "Month") document.getElementById("ans").value = (val/4.345).toFixed(5);
            else if(div2[1].value == "Calendar Year") document.getElementById("ans").value = (val/52.143).toFixed(5);
        }
        else if(div2[0].value == "Month"){
            if(div2[1].value == "Millisecond") document.getElementById("ans").value = String(val*2.628)+"e+9";
            else if(div2[1].value == "Second") document.getElementById("ans").value = String(val*2.628)+"e+6";
            else if(div2[1].value == "Minute") document.getElementById("ans").value = val*43800;
            else if(div2[1].value == "Hour") document.getElementById("ans").value = val*730.001;
            else if(div2[1].value == "Day") document.getElementById("ans").value = val*30.417;
            else if(div2[1].value == "Week") document.getElementById("ans").value = val*4.345;
            else if(div2[1].value == "Month") document.getElementById("ans").value = val;
            else if(div2[1].value == "Calendar Year") document.getElementById("ans").value = (val/12).toFixed(5);
        }
        else {
            if(div2[1].value == "Millisecond") document.getElementById("ans").value = String(val*3.154)+"e+10";
            else if(div2[1].value == "Second") document.getElementById("ans").value = val*(365*24*60*60);
            else if(div2[1].value == "Minute") document.getElementById("ans").value = val*(365*24*60);
            else if(div2[1].value == "Hour") document.getElementById("ans").value = val*(365*24);
            else if(div2[1].value == "Day") document.getElementById("ans").value = val*365;
            else if(div2[1].value == "Week") document.getElementById("ans").value = val*52.1429;
            else if(div2[1].value == "Month") document.getElementById("ans").value = val*12;
            else if(div2[1].value == "Calendar Year") document.getElementById("ans").value = val;
        }
    }
    else { 
        var div2=document.querySelectorAll("[id='volm']"); 
        if(div2[0].value == "Liter"){
            if(div2[1].value == "Milliliter") document.getElementById("ans").value = val*1000;
            else document.getElementById("ans").value = val;
        }
        else {
            if(div2[1].value == "Liter") document.getElementById("ans").value = (val/1000).toFixed(5);
            else document.getElementById("ans").value = val;
        }
    }
}

var cpybtn = document.getElementById("cpybtn");
cpybtn.onclick = function(){   
    var copyText = document.getElementById("ans");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
}

var swpbtn = document.getElementById("swpbtn");
swpbtn.onclick = function(){
    var val = document.getElementById("val");
    var cpybtn = document.getElementById("ans");
    var act = Array.from(document.querySelectorAll('.div2')).filter(s =>
        window.getComputedStyle(s).getPropertyValue('display') != 'none'
     );
    var a = act[0].value;
    act[0].value = act[1].value;
    act[1].value = a;
    val.value=cpybtn.value;
    cpybtn.value="";
}