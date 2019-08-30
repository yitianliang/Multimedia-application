 //create canvas
 var canvas = document.getElementById("myCanvas");
 var ctx = canvas.getContext("2d");

 //initialization dot
 var dot_x=canvas.width/3;
 var dot_y=canvas.height/4;

 //initialization stroke
 var stroke_x=canvas.width/3;
 var stroke_y=canvas.height/4;
 
 var stroke_x2=canvas.width/3;
 var stroke_y2=canvas.height/4;

 //velocity
 var dx=2;
 var dy=2;

 //iteration
 var iter=3;

 //initialization random data 
 var arr=[0,1,2,3,4];
 var index = Math.floor((Math.random()*arr.length)); 

 //refresh canvas
 setInterval(draw, 10);

 //define dot
 function drawdot(x, y){
     ctx.beginPath();
     ctx.arc(x, y, 7, 0, Math.PI*2, true);
     ctx.fillStyle = "black";
     ctx.fill();
     ctx.closePath();
 }
 
 //define stroke
 function Stroke (x,y){
     ctx.beginPath();
     var grd = ctx.createLinearGradient(0, 0, 0, canvas.height);
     grd.addColorStop(0, "Yellow");
     grd.addColorStop(0.7, "blue");
     grd.addColorStop(1, "red"); 
     ctx.arc(x, y, 3.5, 0, Math.PI*2, true);
     ctx.fillStyle = grd;
     ctx.fill();
     ctx.closePath();
 } 
 function Stroke2 (x,y){
     ctx.beginPath();
     var grd = ctx.createLinearGradient(0, 0, 0, canvas.height);
     grd.addColorStop(0, "Yellow");
     grd.addColorStop(0.5, "blue");
     grd.addColorStop(1, "red"); 
     ctx.arc(x, y, 3.5, 0, Math.PI*2, false);
     ctx.fillStyle = grd;
     ctx.fill();
     ctx.closePath();
 }

 //draw stroke 
 function draw_stroke(){
     for (var i=0;i<200; i++){
         Stroke (stroke_x,stroke_y);

         if (stroke_x<=canvas.width/3+90&&i==0&&stroke_y<=canvas.height/4+84){
             stroke_x+=1;
             stroke_y+=1;
         }
         else if (stroke_x>=canvas.width/3+84&&stroke_x<canvas.width/3+260&&i==1&&stroke_y<=canvas.height/4+84){
             stroke_x+=1;
             stroke_y-=1;
         }
         if (stroke_x>=canvas.width/3+260&&stroke_x<+canvas.width/3+440&&i==2&&stroke_y<=canvas.height/4+86){
             stroke_x+=1;
             stroke_y+=1;
         }
         else if (stroke_x>=canvas.width/3+260&&stroke_x<canvas.width/3+440&&i==3&&stroke_y>=canvas.height/4+86){
             stroke_x-=1;
             stroke_y+=1;
         }
         if (stroke_x>=canvas.width/3+90&&stroke_x<canvas.width/3+261&&i==4&&stroke_y>=canvas.height/4+86){
             stroke_x-=1;
             stroke_y-=1;
         }
         else if (stroke_x<=canvas.width/3+90&&i==5&&stroke_y>=canvas.height/4+84&&stroke_y<=canvas.height/4+170){
             stroke_x-=1;
             stroke_y+=1;
         }
     }
 }

 function draw_stroke2(){
     for(var i=0;i<2;i++){
         Stroke(stroke_x2,stroke_y2);
         if(stroke_y2>=canvas.height/4&&stroke_y2<=canvas.height/4+170&&stroke_x2<=canvas.width/3+7&&i==0){
            stroke_x2+=0;
             stroke_y2+=1;
            }
     }
 }

 function draw_stroke3(){
     for (var i=0; i<1020; i++)
     {
         Stroke(dot_x,dot_y);
         if (i<255){
             dot_x+=1;
             dot_y+=1;
         }
         else if (i>=255&&i<425)
         {
             dot_x+=1;
             dot_y-=1;
         }
         if (i>=425&&i<595){
             dot_x-=1;
             dot_y-=1;
         }
         else if (i>=595&&i<850){
             dot_x-=1;
             dot_y+=1;
         }
         if (i>=850&&i<1020){
             dot_y-=1;
         }

     }
 }
 
 //50 dots 
 function draw_dots(){
     //50 dots
     for (var i=0; i<60; i++)
     {
         drawdot(dot_x,dot_y);
         if (i<15){
             dot_x+=17;
             dot_y+=17;
         }
         else if (i>=15&&i<25)
         {
             dot_x+=17;
             dot_y-=17;
         }
         if (i>=25&&i<35){
             dot_x-=17;
             dot_y-=17;
         }
         else if (i>=35&&i<50){
             dot_x-=17;
             dot_y+=17;
         }
         if (i>=50&&i<60){
             dot_y-=17;
         }
     }
 }

 var cleck=0;
 //creating
 function draw(){
     //start drawing
     if (cleck==1){
         draw_stroke();
         draw_stroke2();
     
         //50 dots
         draw_dots();
         drawdot(dot_x+350,dot_y+50);
     }

    //animation
     else if(cleck==2){
         ctx.clearRect(0, 0, canvas.width, canvas.height);
         draw_stroke3();
         draw_dots();
         drawdot(dot_x+350,dot_y+50)

         if (random==0){
             dot_x-=dx;
             dot_y+=dy;
         }
         else if (random==1){
             dot_y+=dy;
         }
         if (random==2){
             dot_x+=dx;
             dot_y+=dy;
         }
         else if (random==3){
             dot_x-=dx;
             dot_y-=dy;
         }
         if (random==4){
             dot_x+=dx;
             dot_y-=dy;
         }
         direction();
     }

     //stop
     if(cleck==3){ 
     }

     //clear
     else if (cleck==4){
         ctx.clearRect(0, 0, canvas.width, canvas.height);
     }
 }
 
 //Limitation 
 function direction(){
     //control x
     if (dot_x > canvas.width-430|| dot_x < 7){
         dx=-dx;
     }
     //control y
     else if (dot_y>canvas.height-260||dot_y < 90){
         dy=-dy;
     }
 }
 
 //initialization dat_x, dot_y, stroke_x,stroke_y, stroke_x2,stroke_y2
 function initialization(){
     context.clearRect(0, 0, canvas.width, canvas.height);
     dot_x=canvas.width/3;
     dot_y=canvas.height/4;
     // stroke_x=canvas.width/3;
     // stroke_y=canvas.height/4;
     // stroke_x2=canvas.width/3;
     // stroke_y2=canvas.height/4;
     // draw_stroke();
     // draw_stroke2();
     draw_dots();
     drawdot(dot_x+350,dot_y+50);
 }

    var random;
 //animation button
 function c_move(){
     if (iter==0){
         cleck=2;
         iter=1;
         random=arr[index];
         document.getElementById("button1").innerHTML="Stop Animation";//change button
     }
     else if (iter==1){
         cleck=3;
         iter=0;
         document.getElementById("button1").innerHTML="Begin Animation";//change button
     }
     if (iter==3){
        cleck=1;
        iter=0;
     }
 }

 //clear canvas
 function clearCanvas()
 {  	
     cleck=4;
     if (iter==1){
         document.getElementById("button1").innerHTML="Begin Animation";//change button
         iter=0;
     }
     else{
         document.getElementById("button1").innerHTML="Begin Animation";//change button
     }
 }  