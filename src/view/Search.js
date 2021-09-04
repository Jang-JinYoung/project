import React from 'react';
import "../css/search.css";

const Search = () => {

    const onclick = (e) => {
        console.log(e);
    }
    return(
        <div className="content">
            <div className="searchBox">
                <ul className="menu_wrap" role="tablist">
                    <li className="menu_item" role="presentation">
                        <a href="#none" id="loinid" className="menu_id on" role="tab" aria-selected="true">
                            <span className="menu_text"><span className="text">ID 찾기</span></span>
                        </a>
                    </li>
                    <li className="menu_item" role="presentation">
                        <a href="#none" id="loinid" className="menu_id on" role="tab" aria-selected="true">
                            <span className="menu_text"><span className="text">PW 찾기</span></span>
                        </a>
                    </li>
                </ul>
                <ul className="panel_wrap">
                    <li className="panel_item" >
                        <div className="panel_inner" role="tabpanel" aria-controls="loinid">
                            <div className="id_pw_wrap">
                                <div className="input_row" id="id_line">
                                    <input type="text" id="id" className="input_text" placeholder="아이디" onClick={onclick}/>
                                </div>
                                <div className="input_row" id="pw_line">
                                    <input type="text" id="pw" className="input_text" placeholder="비밀번호" onClick={onclick}/>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Search;