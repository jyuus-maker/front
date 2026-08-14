import './App.css'
import "./css/Button.css"
import "./css/Header.css"

import Header from './components/Header'
import Home from './pages/Home'
import DiaryList from './components/DiaryList'
import New from './pages/New'
import Edit from './pages/Edit'
import Diary from './pages/Diary'
import Notfound from './pages/Notfound'

// import { useParams } from 'react-router'
import { Routes, Route } from "react-router";
import { useReducer, useRef, useState, useContext, createContext } from 'react'


//리듀서(기능 모음집)----------------
const reducer = (state, action)=> {
  //state = 원본data
  switch(action.type){
    case "CREATE" : return [action.data, ...state];
    case "UPDATE" : return state.map   ((item)=>String(item.id) === String(action.data.id) ? action.data : item);
    case "DELETE" : return state.filter((item)=>String(item.id) !== String(action.id)); //강제로 스트링형변환 String() 상태로 비교.
    default : return state; //받은거 그대로 돌려주란 뜻
  }
}

//밖에서도 써야함
const DiaryStateContext = createContext();
const DiaryDispatchContext = createContext();

// 목 데이터는 전역으로 처리한다----------------
const mockData = [
  //isDone : 체크박스 확인. false는 unchecked.
  { id : 0, date:new Date().getTime(), emotionId : 5, content : "나의 감정을 선택해보세요."},
  { id : 1, date:new Date().getTime(), emotionId : 2, content : "하루의 기분을 적어보세요."},
  { id : 2, date:new Date().getTime(), emotionId : 3, content : "자유롭게 일기를 써봐요!!"}
]

function App() {
  //리액트 훅 활용----------------
  const [data, dispatch] = useReducer(useReducer, mockData); //목데이터가 없으면 대신 []를 넣어줌.
  const idRef = useRef(3); //목데이터 다음 번호를 부여


  //기능 펑션----------------
  const onCreate = (createDate, emotionId, content)=> { //데이터추가
    dispatch({
      type:"CREATE",
      data:{
        id : idRef.current, //아이디값 증감은 리듀스에서 처리.
        createDate,
        emotionId, 
        content
      }
    });
    idRef.current +=1;
    //디스패치 내에서 id : idRef.current++,와 같이 쓰면 리듀서에서 적용이 안되기 때문에 디스패치 밖으로 뺌
  }
  const onUpdate = (id, createDate, emotionId, content)=> { //데이터 수정(스테이트 처리)
    dispatch({
      type:"UPDATE",
      data:{
        id,
        createDate,
        emotionId, 
        content
      }
    });
  }
  const onDelete = (id)=> { //삭제는 아이디만 가지고 판단함.
    dispatch({
      type:"DELETE",
      data:{id}
    });
  }

  return (
    <div className='Home'>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>
          <Routes> {/* 끝에 -s가 붙어야 함 */}
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/diary" element={<Diary />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
          <DiaryList />
          <div className='FLEX'>
            <button className='btn_POSITIVE'>버튼</button>
            <button className='btn_NEGATIVE'>버튼</button>
            <button className=''>버튼</button>
            <button className='btn_POSITIVE bt_LIST'>수정하기</button>
            <button className='btn_NEGATIVE bt_LIST'>수정하기</button>
            <button className='bt_LIST'>수정하기</button>
          </div>
          <div className='FLEX'>
            <button className='btn_POSITIVE bt_CIRCLE'>◀&nbsp;</button>
            <button className='btn_POSITIVE bt_CIRCLE'>&nbsp;▶</button>
            <button className='btn_NEGATIVE bt_CIRCLE'>◀&nbsp;</button>
            <button className='btn_NEGATIVE bt_CIRCLE'>&nbsp;▶</button>
            <button className='bt_CIRCLE'>◀&nbsp;</button>
            <button className='bt_CIRCLE'>&nbsp;▶</button>
          </div>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>

    </div>
  )
}

export default App;
export {DiaryStateContext, DiaryDispatchContext};
