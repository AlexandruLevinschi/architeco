window.onscroll = function()
{
    scrollFunction();
}

function scrollFunction()
{
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