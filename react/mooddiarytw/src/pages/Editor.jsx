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
    };
    const handleSubmit = ()=>{
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
            <div className='editor_selection mb-[40px]'>
                <h4 className='text-[22px] font-bold mb-[15px]'>오늘의 날짜</h4>
                <div className='input_wrapper'>
                    <input 
                        type="date" 
                        name="date" 
                        value={state.date} 
                        onChange={handleChangeState} 
                        className='bg-[rgb(236,236,236)] border-none rounded-[10px] text-[20px] px-[20px] py-[10px] outline-none cursor-pointer' 
                    />
                </div>
            </div>
            {/* ----------------------------------------- */}
            <div className='editor_selection mb-[40px]'>
                <h4 className='text-[22px] font-bold mb-[15px]'>오늘의 감정</h4>
                <div className='input_wrapper emotion_list_wrapper flex justify-between gap-[1%]'>
                    {getEmotionList.map((item)=> (
                        <EmotionItem key={item.id} id={item.id} name={item.name} img={item.img}
                            onClick={handleChangeEmotion}
                            isSelected={String(state.emotionId) === String(item.id)}/>
                    ))}
                </div>
            </div>
            {/* ----------------------------------------- */}
            <div className='editor_selection mb-[40px]'>
                <h4 className='text-[22px] font-bold mb-[15px]'>오늘의 일기</h4>
                <div className='input_wrapper'>
                    <textarea 
                        placeholder="오늘은 어땠나요?" 
                        value={state.content}
                        name="content"
                        onChange={handleChangeState} 
                        className='bg-[rgb(236,236,236)] border-none rounded-[10px] text-[20px] p-[20px] w-full min-h-[200px] resize-y box-border outline-none' 
                    />
                </div>
            </div>
            {/* ----------------------------------------- */}
            <div className='editor_selection flex justify-between items-center gap-[20px]'>
                <Button text={"취소하기"} onClick={handleGoBack}/>
                <Button text={"작성완료"} onClick={handleSubmit} type={"POSITIVE"} />
            </div>
        </div>
    )
}

export default Editor