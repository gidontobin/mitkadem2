import { useRef } from "react";
import Users from "./Users";
function Login(props) {

    const usernameBox = useRef(null);
    const passwordBox = useRef(null);

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

        // check if username exists in the system
        let isExists = 0
        let passwordFlag = 0
        props.usersList.map((user) => {
            if (user.id == usrname.value) {
                isExists = 1
                if (user.password == password.value)
                    passwordFlag = 1
            }
        })
        if (!isExists) {
            usrname.setCustomValidity("There's no such username")
            console.log('not exists')
            btn.click()
            return;
        }
        else {
            usrname.setCustomValidity('')
        }

        // vaidate password existance
        if (password.value.length < 1) {
            password.setCustomValidity("This is a requierd field")
            console.log('length')
            btn.click()
            return;
        }
        else {
            password.setCustomValidity('')
        }

        // check if password match username
        if (!passwordFlag) {
            password.setCustomValidity("password don't match username")
            console.log('not match')
            btn.click()
            return;
        }
        else {
            password.setCustomValidity('')
        }

        console.log('Passed all tests!')
        var path = '/Chat/' + usrname.value;
        window.location.href = path;
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
                            <a href="/Register" class="link-primary">not registered yet? click here!</a>
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