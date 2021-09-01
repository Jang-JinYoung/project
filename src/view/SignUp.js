import React, {useState} from "react";
import {use} from "express/lib/router";
import axios from "axios";

const SignUp = () => {

    let [elem, setElem] = useState({
    });
    const {id, pw} = elem;


    const handleChange = e => {
        const name = e.target.className;
        const value = e.target.value;
        // const {name, value} = e.target;
        setElem({
            ...elem, [name]: value
        });
    }


    const handleSubmit = e => {
        e.preventDefault();

        axios.post('http://localhost:3001/api/member/signup', elem)
            .then(res => {
            })
            .catch(err => {
                console.error(err);
            });
    }

    return (
        <div className="container">
            <div className="login">
                <form className="" onSubmit={handleSubmit}>
                    {/*<fieldset className="login">*/}
                    <div className="logo">Trip Planner</div>
                    <input type="text" className="id" onChange={handleChange} placeholder="아이디" value={id}/> <br/>
                    <input type="password" className="pw" onChange={handleChange} placeholder ="비밀번호" value={pw}/> <br/>
                    <input type="submit" className="btn" value="로그인"/>
                    {/*</fieldset>*/}
                </form>
            </div>
        </div>
    );
}

export default SignUp;