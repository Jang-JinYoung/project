import {useEffect} from "react";
import api from "../api";


const BoardDetail = (match) => {

    const id = match.match.params.id;
    const [board, setBoard] = useEffect({});

    //글내용 가져오기
    useEffect(() => {
        fetch(api.serverAPI+"/board/boardDetail?id="+id)
            .then(res=>res.json())
            .then(data=> {
                setBoard(data);
            });
    }, []);

    return(
      <div>
          {board.id}
          {board.id}
          {board.id}
          {board.id}
          {board.id}
          {board.id}
          {board.id}
          {board.id}
          {board.id}
          {board.id}
          {board.id}
          {board.id}
          {board.id}
          {board.id}
          {board.id}
          {board.id}
          {board.id}
      </div>
    );
}


export default BoardDetail;