img = "";
status = "";
function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status - Detecting the objects!";

}
function modelLoaded()
{
    console.log("Model is Loaded!");
    status = true;
    objectDetector.detect(img,gotResults);
}
function gotResults(error,results)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
    console.log(results);
    }
}
function preload()
{
    img = loadImage("thumb_720_450_Jungledreamstime_l_56902828.jpg");
}
function draw()
{
    image(img,0,0,640,420);
    fill("white");
    text("Trees",45,75);
    noFill();
    stroke("white");
    rect(30,60,300,350);

    
    fill("white");
    text("Water",450,75);
    noFill();
    stroke("white");
    rect(400,60,200,300);
}
function back()
{
    window.open("index.html");
}
