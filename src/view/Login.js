import React, {Component} from 'react';
import axios from 'axios';
import "../css/login.css";


class Login extends Component {
// const Login = () => {
//
    constructor(props) {
        super(props);
        this.state = {
            id : '',
            pw : ''
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.className]: e.target.value
        });
    };

   handleSubmit = e => {
        //페이지 이동 막아줌
        e.preventDefault();

        const {id, pw} = this.state;
        const auth = { id, pw };
        console.log(auth);

        axios.post('http://localhost:3001/api/member/auth', auth)
            .then(res => {
                if(res.data[0].id === auth.id) {
                    console.log("로그인");
                    //세션처리
                    window.sessionStorage.setItem('id', auth.id);
                    document.location.href = '/';
                } else {
                    console.log("로그인 실패")
                }
            })
            .catch(err => {
                console.error(err);
            });
    }
    render() {
        return (
            <div className="container">
                <div className="login">
                    <form className="" onSubmit={this.handleSubmit}>
                        {/*<fieldset className="login">*/}
                            <div className="logo">Trip Planner</div>
                            <input type="text" className="id" onChange={this.handleChange} placeholder="아이디"/> <br/>
                            <input type="password" className="pw" onChange={this.handleChange} placeholder ="비밀번호"/> <br/>
                            <input type="submit" className="btn" value="로그인"/>
                        {/*</fieldset>*/}
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;