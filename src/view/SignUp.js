import React, {useState} from "react";
import  "../css/signup.css";
import axios from "axios";

const SignUp = () => {

    const [elem, setElem] = useState({
        id: "",
        pw: "",
        re_pw: ""
    });
    const {id, pw, re_pw} = elem;

    const [btnDisabled, setBtnDisabled] = useState(false);


    const checkDuplication = () => {//아이디 중복확인
        if(!elem.id) {//입력된 정보가 없다
            alert("입력된 정보가 없습니다. 다시 입력해주세요");
        } else {
            fetch('http://localhost:3001/api/member/checkDuplicate?id='+elem.id)
                .then(res => res.json())
                .then((result) => {
                    // console.log(result[0].cnt);
                    if (result[0].cnt >= 1) {
                        alert("이미 있는 아이디입니다.");
                    } else {
                        alert("가입 가능한 아이디입니다.");
                        setBtnDisabled(true);
                    }
                })
                .catch(error => {
                        console.error(error);
                    }
                )
        }
    }
    
    const handleChange = e => {//아이디, 비밀번호 값
        const name = e.target.className;
        const value = e.target.value;
        // const {name, value} = e.target;
        setElem({
            ...elem, [name]: value
        });
        setBtnDisabled(false);
    }

    const handleSubmit = e => {//회원가입
        e.preventDefault();

        if(pw !== re_pw) {
            alert("비밀번호가 일치하지 않습니다");
        } else if(btnDisabled === false) {
            alert("아이디 중복확인을 해주세요.");
        } else {
            axios.post('http://localhost:3001/api/member/signup', elem)
            .then(res => {
                console.log("회원가입");
            })
            .catch(err => {
                console.error(err);
            });
        }
    }


    return (
        <div className="container">
            <div className="login">
                <form className="" onSubmit={handleSubmit}>
                    {/*<fieldset className="login">*/}
                    <div className="logo">Trip Planner</div>
                    <span>
                        아이디<br/>
                        <input type="text" className="id" onChange={handleChange} value={id}/>
                        <button type="button" onClick={checkDuplication} id="btnDuplication" disabled={btnDisabled}>중복확인</button><br/>
                    </span>
                    비밀번호<br/>
                    <input type="password" className="pw" onChange={handleChange} value={pw}/> <br/>
                    비밀번호 확인<br/>
                    <input type="password" className="re_pw" onChange={handleChange} value={re_pw}/> <br/>
                    <input type="submit" className="btn" value="회원가입"/>
                    {/*</fieldset>*/}
                </form>
            </div>
        </div>
    );
}

export default SignUp;