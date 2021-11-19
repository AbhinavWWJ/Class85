canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
nasa_array=["nasa_image_1.jpg", "nasa_image_2.jpeg", "nasa_image_3.jpg", "nasa_image_4.jpg", "mars.jpg"]
random_number=Math.floor(Math.random()*4);

background_image=nasa_array[random_number];
rover_image="rover.png";
rover_x=10;
rover_y=10;
function add(){
 background_imgTag=new Image();
 background_imgTag.onload=uploadbackground;
 background_imgTag.src=background_image;

 rover_imgTag=new Image();
 rover_imgTag.onload=uploadrover;
 rover_imgTag.src=rover_image;
 
}


function uploadbackground(){
 ctx.drawImage(background_imgTag, 0,0,canvas.width,canvas.height);
 
}
function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x,rover_y,rover_width,rover_height);
    
   }
   window.addEventListener("keydown",my_keydown);
   function my_keydown(e){
       keypressed=e.keyCode;
       if(keypressed=='38'){
           up();
       }
       if(keypressed=='40'){
        down();
    }
    if(keypressed=='37'){
        left();
    }
    if(keypressed=='39'){
        right();
    }
   }

   function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        uploadbackground(); 
        uploadrover();
    }
   }
   function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        uploadbackground();
        uploadrover();

    }
   }
   function left(){
       if(rover_x>=0){
           rover_x=rover_x-10;
           uploadbackground();
           uploadrover();
       }
   }
   function right(){
       if(rover_x<=700){
           rover_x=rover_x+10;
           uploadbackground();
           uploadrover();
       }
   }