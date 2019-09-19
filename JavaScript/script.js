var ball_x = 0;
var ball_y = 0;
var ms_x = 0;
var ms_y = 0;

document.addEventListener("mousemove", (event) => {
    ms_x = event.clientX;
    ms_y = event.clientY;

    //console.log("mx"+ms_x);
    //console.log("bx"+ball_x);

});

function delayMotion() {
    var distance_x = ms_x - ball_x;
    var distance_y = ms_y - ball_y;

    distance_x *= 0.15;
    distance_y *= 0.15;


    ball_x += distance_x;
    ball_y += distance_y;

    //console.log(distance_x+distance_y);
    document.documentElement.style.setProperty("--mouse_x", ms_x);
    document.documentElement.style.setProperty("--mouse_y", ms_y);
    document.documentElement.style.setProperty("--scale", (distance_x + distance_y) * 0.15);
    requestAnimationFrame(delayMotion);
}

delayMotion();
