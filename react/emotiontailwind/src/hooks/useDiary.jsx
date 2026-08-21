import { useContext, useState, useEffect } from "react";
import { DiaryStateContext } from '../App';
import { useNavigate } from "react-router";

const useDiary = (id) => {
    //리액트 훅----------------------------
    const data = useContext(DiaryStateContext);
    const [diary, setDiary] = useState();
    const navigate = useNavigate();
    
    useEffect(()=>{
        const matchDiary = data.find((item)=> String(item.id) === String(id));
        if(matchDiary){
            setDiary(matchDiary);
        }else{
            alert("일기가 존재하지 않습니다.");
            navigate("/", {replace:true});
        }
    },[id]);
    
    return diary;
}

export default useDiary