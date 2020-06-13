var ball;
var database;
var hypnoticBall, potition;
var lineArray = [];
var i = 0;

var drawing = [];

function setup(){
    //should be the first line
    database = firebase.database();

    createCanvas(500,500);
    /*
    hypnoticBall = createSprite(250,250,10,10);
    hypnoticBall.shapeColor = "red";
    //.ref to refer to the position
    var hypnoticBallPosition = database.ref('ball/position');
    //reading the value from the ball's positions.
    //readpoition - read the current position.
    //show error - to show the error.
    hypnoticBallPosition.on("value",readPosition, showError);
*/
}

function draw(){
    background("white");
    //so that it only workd when the values have been defined ( not undefined)
    //otherwise it will disappear.
    /*
    if(position !== undefined){
        if(keyDown(LEFT_ARROW)){
            writePosition(-1,0);
        }
        else if(keyDown(RIGHT_ARROW)){
            writePosition(1,0);
        }
        else if(keyDown(UP_ARROW)){
            writePosition(0,-1);
        }
        else if(keyDown(DOWN_ARROW)){
            writePosition(0,+1);
        }
        drawSprites();
    } 
    i = i+1;
   if(i%2 === 0){
    //strokeWeight(4);
    //line(mouseX, mouseY, mouseX, mouseY);
    fill("black");
    var point = ellipse(mouseX, mouseY, 10,10)
    lineArray.push(point);
    console.log(lineArray);
   }
   */
}



function mouseDragged(){
    fill("black");
    var point = rect(mouseX, mouseY, 20, 20);
    drawing.push(point);


}






/*
function readPosition(data){
    //read the data in the position ( which has the x and y values) 
    //these values are being passed.
    position = data.val();
    hypnoticBall.x = position.x;
    hypnoticBall.y = position.y;

    function mouseDragged(){
    fill("black");
    var point = ({x: mouseX, y: mouseY},10,10);
    ellipse(point.x, point.y, 10, 10);
    lineArray.push(point.x, point.y);
    console.log(lineArray);

   
}
}
function writePosition(x,y){
    //update the values to the database - always be in sync.
    database.ref('ball/position').set({
        'x': position.x + x, 
        'y': position.y + y
    })
}
function showError(){
    console.log("Error is : writing the value is the database.")
}
*/