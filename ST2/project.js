function sumDigits() {
    var value = document.getElementById("number").value,
        sum = 0;
 if(value <=99999 && value>9999 ){
  while (value) {
      sum += value % 10;
      value = Math.floor(value / 10);
  }
  
   document.getElementById("box").innerHTML = "Height and width of the box is " + sum +" px";
   
 
   var side = (5*sum) +"px";
   var rad = (sum/5) + "px";
   document.getElementById("box1").innerHTML = "Border radius of the box is " + rad;
   var a = document.getElementById("demo");
   a.style.height = side;
   a.style.width = side;
   a.style.borderRadius = rad;
   a.style.borderWidth = "0.01rem";
   a.style.display=  "flex";
   a.style.marginLeft = "25%";
 
 
 }
 
   else{
     alert("please enter a five digit number!");
   }
 }