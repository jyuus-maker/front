import Button from '../components/Button'
import EmotionItem from '../components/EmotionItem';
import { getFormattedDate } from '../util/getFormattedDate.js'
import { getEmotionList } from '../util/getEmotionList.js';
import { useNavigate } from 'react-router'
import { useState, useEffect } from "react";

function Editor({initData, onSubmit}) {
    const navigate = useNavigate();
    
    const [state, setState] = useState({
        date:getFormattedDate(new Date()),
        emotionId:3,
        content:""
    });
    useEffect(()=>{
        if(initData){
            setState({
                ...initData, 
                date: getFormattedDate(new Date(parseInt(initData.date)))
            })
        }
    }, [initData]);
    
    //버튼 액션 //취소하기, 저장하기
    const handleGoBack = ()=>{
        navigate(-1); //-1은 이전페이지로 이동할 경우.
        // navigate(1); //1은 다음페이지로 이동할 경우.
        // navigate("/home"); //특정 페이지로 이동
        // navigate("/login", {replace:true}); //특정페이지이동, 뒤로 가기 못하게
    };
    const handleSubmit = ()=>{
        // onSubmit(state);
        onSubmit({
            ...state,
            date: new Date(state.date.replaceAll("-", "/")).getTime()
        });
    };

    //수정내용들
    const handleChangeState = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };
    const handleChangeEmotion = (emotionId) => {
        setState({ ...state, emotionId })
    }

    return (
        <div className='Editor'>
            <div className='editor_selection'>
                <h4>오늘의 날짜</h4>
                <div className='input_wrapper'>
                    {/* {console.log(state.date)} */}
                    <input type="date" name="date" value={state.date} onChange={handleChangeState} />
                </div>
            </div>
            {/* ----------------------------------------- */}
            <div className='editor_selection'>
                <h4>오늘의 감정</h4>
                <div className='input_wrapper emotion_list_wrapper'>
                    {getEmotionList.map((item)=> (
                        // <img key={item.id} src={item.img} alt={`emotion : ${item.id}`} />
                        <EmotionItem key={item.id} id={item.id} name={item.name} img={item.img}
                            onClick={handleChangeEmotion}
                            isSelected={String(state.emotionId) === String(item.id)}/> // 맵의 요소를 확인해서 변수를 넣어주는것임
                    ))}
                </div>
            </div>
            {/* ----------------------------------------- */}
            <div className='editor_selection'>
                <h4>오늘의 일기</h4>
                <div className='input_wrapper'>
                    <textarea placeholder="오늘은 어땠나요?" 
                        value={state.content}
                        name="content"
                        onChange={handleChangeState} />
                </div>
            </div>
            {/* ----------------------------------------- */}
            <div className='editor_selection FLEX'>
                <Button text={"취소하기"} onClick={handleGoBack}/>
                <Button text={"작성완료"} onClick={handleSubmit} type={"POSITIVE"} />
            </div>
        </div>
    )
}

export default Editor