import { useContext, useEffect } from "react";
import { DiaryStateContext } from '../App';
import { useNavigate } from "react-router";

const useDiary = (id) => {
    const data = useContext(DiaryStateContext);
    const navigate = useNavigate();
    
    const matchDiary = data.find((item) => String(item.id) === String(id));

    useEffect(() => {
        if (data.length > 0 && !matchDiary) {
            alert("일기가 존재하지 않습니다.");
            navigate("/", { replace: true });
        }
    }, [id, data, matchDiary, navigate]);
    
    return matchDiary;
}

export default useDiary;