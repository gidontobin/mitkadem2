import { useRef } from "react";

function Register() {

    const usernameBox = useRef(null);
    const passwordBox = useRef(null);
    const confirmPassBox = useRef(null);
    const nicknameBox = useRef(null);

    const old_user = function () {
        console.log("hi old user")
    }

    function containsAnyLetter(str) {
        return /[a-zA-Z]/.test(str);
    }

    function containsAnyNumber(str) {
        return /[0-9]/.test(str);
    }

    function checkValidity() {

        //console.log(usernameBox.current.value)
        //console.log(passwordBox.current.value)
        //console.log(confirmPassBox.current.value)
        //console.log(nicknameBox.current.value)

        console.log('inside checkValidity!')

        const usrname = document.getElementById('RegisterUsernameID')
        const password1 = document.getElementById('registerPassword')
        const password2 = document.getElementById('confirmPassword')
        const nickname = document.getElementById('nicknameID')
        const btn = document.getElementById('hiddenBtn')

        // vaidate username
        if (usrname.value.length < 1) {
            usrname.setCustomValidity("This is a requierd field")
            console.log('length')
            btn.click()
            return;
        }
        else {
            usrname.setCustomValidity('')
        }

        // vaidate password
        if (password1.value.length < 4 || !containsAnyLetter(password1.value) || !containsAnyNumber(password1.value)) {
            password1.setCustomValidity('Must contain at least one number and one letter, and in length of 4 or more characters')
            console.log('length')
            btn.click()
            return;
        }
        else {
            password1.setCustomValidity('')
        }

        // vaidate confirm password
        if (password1.value === password2.value) {
            password2.setCustomValidity('')
            console.log('match')
        } else {
            password2.setCustomValidity('Passwords must match')
            console.log('not match')
            btn.click()
            return;
        }

        // vaidate nickname
        if (nickname.value.length < 1) {
            nickname.setCustomValidity('This is a requierd field')
            console.log('length')
            btn.click()
            return;
        }
        else {
            nickname.setCustomValidity('')
        }

        console.log('Passed all tests!')
        window.location.href = '/Chat'
    }


    return (
        <div class="p-3 mb-2 bg-success text-black">
            <span className="d-flex justify-content-center">
                <div className="row g-2 col-6 border  border-3 bg-light mt-5 mb-2 rounded">
                    <form>
                        <div class="mb-3">
                            <label for="InputUsername" class="form-label">Username</label>
                            <input ref={usernameBox} type="text" class="form-control" id="RegisterUsernameID"></input>
                        </div>
                        <div class="mb-3">
                            <label for="InputPassword" class="form-label">Password</label>
                            <input ref={passwordBox} type="password" class="form-control" id="registerPassword" required></input>
                        </div>
                        <div class="mb-3">
                            <label for="InputPassword" class="form-label">Confirm password</label>
                            <input ref={confirmPassBox} type="password" class="form-control" id="confirmPassword" required></input>
                        </div>
                        <div class="mb-3">
                            <label for="InputNickname" class="form-label">Nickname</label>
                            <input ref={nicknameBox} type="text" class="form-control" id="nicknameID" required></input>
                        </div>
                        <div class="form-group mb-3">
                            <label for="myPicture"></label>
                            <input type="file" class="form-control-file" id="pictureID"></input>
                        </div>
                        <span className="d-flex justify-content-center">
                            <a href="/" class="link-primary" onClickCapture={old_user}>already registered? click here!</a>
                        </span>
                        <button type="submit" id="hiddenBtn" hidden></button>
                    </form>
                    <button onClick={checkValidity} class="btn btn-primary">Register</button>
                </div>
            </span>
        </div>
    );
}
export default Register;