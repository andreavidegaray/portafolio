function sendMessage()
{
   
    let username = document.contactMe.uname.value;
    let phoneNum = document.contactMe.phone.value; 
    let content = document.contactMe.message.value;

    if(username is = "" || content == "")
    {
        alert("Required fields empty. Please fill out name and message");
     }   
     else if (content.lenght <=6)
     {
        alert("Message too short");
     }
     else {
        alert("Composing email");
        let subject =`Message through Portfolio from ${username}`;

        let body = `${content}\n\nFrom: ${username}\nPhone {phoneNum}`;

        let mailToLink = 'mailto:andrea.videgaray01@utrgv.edu?subject=${endcodeURIComponent(subject)}&body=${endcodeURIComponent(body)}`;

        window.location.href= mailToLink;


     }
}