var animate = 1;

function animateValue(id,start,end,duration) {
    if(animate==1)
    {
        var range = end-start;
        var current = start;
        var increment = end>start?1:-1;
        var stepTime = Math.abs(Math.floor(duration/range));
        var obj = document.getElementById(id);
        var timer = setInterval(function() {
            current+=increment;
            obj.innerHTML = current;
            if(current==end) {
                clearInterval(timer);
            }
        }, stepTime);
    }
}

window.onscroll = function() {
    if (document.body.scrollTop > 280 || document.documentElement.scrollTop > 280)
    {
        animateValue("reviews", 0, 420, 2000);
        animateValue("projs", 0, 228, 2000);
        animateValue("employees", 0, 50, 2000);
        animateValue("partners", 0, 148, 2000);
        animate=0;
    }
    
    // Emergency top button
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)
    {
        document.getElementById("topButton").style.visibility = "visible";
        document.getElementById("topButton").style.opacity = 1;
    }
    else
    {
        document.getElementById("topButton").style.visibility = "hidden";
        document.getElementById("topButton").style.opacity = 0;
    }
}

function topFunction()
{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}