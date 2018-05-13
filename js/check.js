function Check() {
    CheckName();
    CheckEmail();
    CheckTelephone();
    CheckSubject();
    CheckMessage();
    event.preventDefault();
}

function CheckName() {    
    var nameTemplate;
    var name = document.getElementById("name").value;
    
    nameTemplate = /^[a-zA-Z][a-zA-Z]+( +[a-zA-Z]+)*$/;
    
    if(!(name.match(nameTemplate)))
    {
        document.getElementById("name").style.background = "linear-gradient(rgba(0,0,0,0) 0%, #a50000 300%)";
    }
    else
    {
        document.getElementById("name").style.background = "none";
    }
}

function CheckEmail() {
    var emailTemplate;
    var email = document.getElementById("email").value;
    
    emailTemplate = /[A-Za-z0-9._-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}/;
    
    if(!(email.match(emailTemplate)))
    {
        document.getElementById("email").style.background = "linear-gradient(rgba(0,0,0,0) 0%, #a50000 300%)";
    }
    else
    {
        document.getElementById("email").style.background = "none";
    }
}

function CheckTelephone() {
    var telephoneTemplate = /^\+\d{11}$/;
    var telephone = document.getElementById("telephone").value;
    
    if(!(telephone.match(telephoneTemplate)))
    {
        document.getElementById("telephone").style.background = "linear-gradient(rgba(0,0,0,0) 0%, #a50000 300%)";
    }
    else
    {
        document.getElementById("telephone").style.background = "none";
    }
}

function CheckSubject() {
    var subjectTemplate;
    var subject = document.getElementById("subject").value;
    
    subjectTemplate = /^[a-zA-Z][a-zA-Z]+( +[a-zA-Z]+)*$/;
    
    if(!(subject.match(subjectTemplate)))
    {
        document.getElementById("subject").style.background = "linear-gradient(rgba(0,0,0,0) 0%, #a50000 300%)";
    }
    else
    {
        document.getElementById("subject").style.background = "none";
    }
}

function CheckMessage() {
    var message = document.getElementById("message");
    
    if(message.value === "")
    {
        message.style.background = "linear-gradient(rgba(0,0,0,0) 0%, #a50000 300%)";
    }
    else
    {
        message.style.background = "none";
    }
}

function CheckSubscription() {
    var emailTemplate;
    var email = document.getElementById("subEmail").value;
    
    emailTemplate = /[A-Za-z0-9._-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}/;
    
    if(!(email.match(emailTemplate)))
    {
        document.getElementById("subEmail").style.background = "linear-gradient(#ffffff 0%, #a50000 180%)";
        event.preventDefault();
    }
    else
    {
        document.getElementById("subEmail").style.background = "#ffffff";
        event.preventDefault();
    }
}