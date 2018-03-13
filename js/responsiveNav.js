function dropdownMenu()
{
    var x = document.getElementById("dropdownClick");
    if(x.className === "responsiveNav")
    {
        x.className += " responsive";
    }
    else
    {
        x.className = "responsiveNav";
    }
}