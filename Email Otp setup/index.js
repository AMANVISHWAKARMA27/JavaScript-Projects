function sendOTP() {
    const email = document.getElementById('email');
    const otpVerify = document.getElementsByClassName('otpverify')[0];
    let otp_val = Math.floor(Math.random() * 10000);
    let emailBody = `<h2>Your OTP to verify email is</h2>${otp_val}`;
    Email.send({
        SecureToken: "9eb7dd08-4d6f-42c1-aef1-f9addf6c795d",
        To: email.value,
        From: "vishwakarmarambhawan576@gmail.com",
        Subject: "Email verification",
        Body: emailBody
    }).then(
        message => {
            if (message === 'OK') {
                alert("OTP sent to your email" + email.value);

                otpVerify.style.display = "flex";
                const otp_inp = document.getElementById('otp_inp');
                const otp_btn = document.getElementById('otp_btn');

                //console.log(otp_val);

                otp_btn.addEventListener('click', () => {
                    if (otp_inp.value === otp_val.toString())
                        alert("Email address verified successfully!");
                    else
                        alert("Invalid email");
                })
            }
        }
    );
}