import React from 'react';
import "../css/login.css";

const Login = () => {
    return(
        <section>
            <form method='POST' action="http://localhost:3001/api/member/auth">
                <fieldset>
                    아이디 : <input type="text" name="id"/> <br/>
                    패스워드 : <input type="password" name="pw"/>
                    <input type="submit" value="로그인"/>
                </fieldset>
            </form>
        </section>
    );
}

export default Login;