import { useRef } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainChat from './MainChat';
import users from "./Users";

function Register(props) {

    const usernameBox = useRef(null);
    const passwordBox = useRef(null);
    const confirmPassBox = useRef(null);
    const nicknameBox = useRef(null);

    function containsAnyLetter(str) {
        return /[a-zA-Z]/.test(str);
    }

    function containsAnyNumber(str) {
        return /[0-9]/.test(str);
    }

    /*
    function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
          if ((new Date().getTime() - start) > milliseconds){
            break;
          }
        }
      }
*/

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

        // vaidate username existance
        if (usrname.value.length < 1) {
            usrname.setCustomValidity("This is a requierd field")
            console.log('length')
            btn.click()
            return;
        }
        else {
            usrname.setCustomValidity('')
        }

        // check if username is unique
        let isExists = 0
        users.map((user) => {
            if (user.id == usrname.value) {
                isExists = 1
            }
        })
        if (isExists) {
            usrname.setCustomValidity("Username is already taken")
            console.log('already exists')
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

        /*
        // add user to users list
        let user = {id: usrname.value, password: password1.value}
        props.usersList.push(user)
        let index = props.usersList.indexOf(user)
        */

        users.push({id: usrname.value, password: password1.value})
    
        
        /*
        // check adding
        console.log("index is: " + index)
        console.log("elemnt in index is: " + props.usersList[index].id)
        console.log("password in index is: " + props.usersList[index].password)

        // add path to users paths
        var p = "/Chat/" + usrname.value
        props.paths.push(<Route path={p} element={<MainChat userInfo={props.usersList[index]} />}></Route>)

        //window.location.href = p
        */

        window.location.href = "/Chat"
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
                            <a href="/" class="link-primary">already registered? click here!</a>
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