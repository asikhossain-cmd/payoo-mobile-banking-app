
const phnNumber = '01886324296';
const phnNumberToNum = Number(phnNumber);
const passWord = 1234;

// Lets program the log in button and redirect to the log in page

document.getElementById('login-btn')
    .addEventListener('click', () => {
        // get the phn and password input field

        const getPhnInput = parseInt(document.getElementById('phn-number').value);
        const getPassWord = parseInt(document.getElementById('password').value);

        //lets Check the Phn No and Pass and redirect to the home page
        console.log('Button Clicked')

        if(getPhnInput == undefined) {
            alert('Provide The Phone Number')
            return
        }else if(getPhnInput !== phnNumberToNum) {
            alert('Your Phone No Did Not Matched')
            return
        }else if(passWord !== getPassWord) {
            alert('Password did not matched')
            return
        }

        if(phnNumberToNum == getPhnInput && passWord === getPassWord) {
            window.location.href = 'home.html'
            return
        } else {
            alert('Your Id or Pass Word is Wrong')
            return
        }
    })
