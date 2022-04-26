import { useRef } from "react";

function Login(props) {

    const usernameBox = useRef(null);
    const passwordBox = useRef(null);

    function containsAnyLetter(str) {
        return /[a-zA-Z]/.test(str);
    }

    function containsAnyNumber(str) {
        return /[0-9]/.test(str);
    }

    function checkValidity() {

        //console.log(usernameBox.current.value)
        //console.log(passwordBox.current.value)

        console.log('inside checkValidity!')

        const usrname = document.getElementById('usernameID')
        const password = document.getElementById('loginPassword')
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
        if (password.value.length < 4 || !containsAnyLetter(password.value) || !containsAnyNumber(password.value)) {
            password.setCustomValidity('Must contain at least one number and one letter, and in length of 4 or more characters')
            console.log('length')
            btn.click()
            return;
        }
        else {
            password.setCustomValidity('')
        }

        console.log('Passed all tests!')
        //console.log(usrname.value)
        props.name(usrname.value)    
        window.location.href = '/Chat'
    }

    const newUser = function () {
        console.log("Hello new user!")
    }

    return (
        <div class="p-3 mb-2 bg-success text-black">
            <span className="d-flex justify-content-center">
                <div className="row g-2 col-6 border  border-3 bg-light mt-5 mb-2 rounded">
                    <form>
                        <div class="mb-3">
                            <label for="InputUsername" class="form-label">Username</label>
                            <input ref={usernameBox} type="text" class="form-control" id="usernameID"></input>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input ref={passwordBox} type="password" class="form-control" id="loginPassword"></input>
                        </div>
                        <span className="d-flex justify-content-center">
                            <a href="/Register" class="link-primary" onClickCapture={newUser}>not registered yet? click here!</a>
                        </span>
                        <button type="submit" id="hiddenBtn" hidden></button>
                    </form>
                    <button onClick={checkValidity} class="btn btn-primary">Login</button>
                </div>
            </span>
        </div>
    );
}
export default Login;