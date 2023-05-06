function sendMail (){

    if (isEmailCorrect() == true) {
        var params = {
            name : document.getElementById('name').value,
            email : document.getElementById('email').value,
            subject : document.getElementById('subject').value,
            message : document.getElementById('message').value
        };
        const serviceID = 'service_hic82lw';
        const templateID = 'template_m59mylj';
    
        emailjs.send(serviceID, templateID, params).then(res=>{
        document.getElementById('name').value='';
        document.getElementById('email').value='';
        document.getElementById('subject').value='';
        document.getElementById('message').value='';
        console.log(res);
        alert('your message sent successfully');
        })
        .catch(err=>console.log(err));
    } else {
        alert("Error. Invalid Email");
        document.getElementById('name').value='';
        document.getElementById('email').value='';
        document.getElementById('subject').value='';
        document.getElementById('message').value='';
    }
}

function reset (){
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('subject').value = "";
    document.getElementById('message').value = "";

}

function isEmailCorrect (){
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (document.getElementById('email').value.match(validRegex)) {      
        return true;
    } else {
        return false;
      
    }     
}
