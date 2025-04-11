function sendEmail()  {
    const Data = {
        to_email :"apc12345do@gmail.com",
        from_name : document.getElementById("name").value,
        from_email : "pc12345do@gmail.com",
        subject : "Support" ,
        massage : `
        name : ${document.getElementById("name").value}
        email : ${document.getElementById("email").value}
        massage: ${document.getElementById("massage").value}
        `,
    };
    emailjs.send("service_a8mv54q" , "template_vfj5t7s", Data).then((response) => {
        alert("success");
    })
    .catch((error) => {
       alert("فشل الاتصال" , error); 
    });
}

document.getElementById("btn").addEventListener("click" , () => {
    sendEmail();
});