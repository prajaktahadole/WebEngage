let user = JSON.parse(localStorage.getItem('myData'))
user.map((el) => {
    let email = document.getElementById('email')
    email.innerText =  "Email Address : " + el.email
    let mobile = document.getElementById('mobile')
    mobile.innerText = "Contact Number : " + el.Dialcode.s.dialCode + ' ' + el.mobile
})