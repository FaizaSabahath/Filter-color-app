function preload(){}
function setup(){
    canvas = createCanvas(550,450);
    canvas.position(400,260);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}
function draw(){
    image(video,0,0,550,450);
    tint(tint_color);
}
function take_snapshot(){
    save("your_name.png");
}
function apply_filter(){
    tint_color = document.getElementById("filter_color").value;
}