import React, {useEffect, useState} from 'react';
import { Route} from "react-router-dom";
import BoardList from "./BoardList";
import BoardDetail from "./BoardDetail";
import Header from "./Header";

const Board = ({match}) => {

    return (
        <div>
            <Header/>
            <Route exact path={match.path} component={BoardList}/>
            <Route path={`${match.path}/:id`} component={BoardDetail}/>
        </div>
    );
};

export default Board;