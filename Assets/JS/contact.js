function sendFeedback(){
    event.preventDefault();
    let form = document.getElementById("contactForm");
    var templateParams = {
        fname: form.fname.value,
        lname: form.lname.value,
        phone: form.phone.value,
        email: form.email.value,
        message: form.message.value
    };
    
    emailjs.send('service_znm21iq', 'template_vf2qvra', templateParams)
        .then(function(response) {
        }, function(error) {
            console.log('FAILED...', error);
    });
    document.getElementById("thanksmsg").classList.remove('hidden');
    form.fname.value = ""
    form.lname.value = ""
    form.phone.value = ""
    form.email.value = ""
    form.message.value = ""
}