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
            [e.target.name]: e.target.value
        });
    };

   handleSubmit = e => {
        //페이지 이동 막아줌
        e.preventDefault();

        const {id, pw} = this.state;
        const auth = {
            id,
            pw
        };

        axios.post('http://localhost:3001/api/member/auth', auth)
            .then(res => {
                if(res.data[0].id === auth.id) {
                    console.log("로그인");
                } else {
                    console.log("로그인 실패")
                }
                document.location.href = '/';
            })
            .catch(err => {
                console.error(err);
            });
    }
    render() {
        return (
            <section>
                <div className="container">
                    <form className="" onSubmit={this.handleSubmit}>
                        {/*<fieldset className="login">*/}
                            <div className="logo">Trip<br/> Planner</div>
                            <input type="text" className="id" onChange={this.handleChange} placeholder="아이디"/> <br/>
                            <input type="password" className="pw" onChange={this.handleChange} placeholder ="비밀번호"/> <br/>
                            <input type="submit" className="btn" value="로그인"/>
                        {/*</fieldset>*/}
                    </form>
                </div>
            </section>
        );
    }
}

export default Login;