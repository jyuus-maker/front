import Home from './pages/Home'
import New from './pages/New'
import Edit from './pages/Edit'
import Diary from './pages/Diary'
import Notfound from './pages/Notfound'

import { Routes, Route } from "react-router";
// import { useReducer, useRef, useState, createContext, useEffect } from 'react'


// //리듀서(기능 모음집) : 로컬스토리지 적용버전----------------
// const reducer = (state, action)=> {
//   //state = 원본data
//   switch(action.type){
//     //스위치문에서 const 변수를 중복으로 써야 하는 경우, {}로 막아서 오류를 방지.
//     case "INIT"   : return action.data;
//     case "CREATE" : {const newState = [action.data, ...state];
//                     localStorage.setItem("diary", JSON.stringify(newState));
//                     return newState;}
//     case "UPDATE" : {const newState = state.map((item)=>
//                         Number(item.id) === Number(action.data.id) ? action.data : item);
//                     localStorage.setItem("diary", JSON.stringify(newState));
//                     return newState;}
//     case "DELETE" : {const newState = state.filter((item)=>
//                         Number(item.id) !== Number(action.id)); //강제로 스트링형변환 String() 상태로 비교.
//                     localStorage.setItem("diary", JSON.stringify(newState));
//                     return newState;}
//     default : return state; //받은거 그대로 돌려주란 뜻
//   }
// }

// //밖에서도 써야함
// const DiaryStateContext = createContext();
// const DiaryDispatchContext = createContext();

function App() {
  // //리액트 훅 활용----------------
  // const [isDataLoaded, setDataLoaded] = useState(false);
  // const [data, dispatch] = useReducer(reducer, []); //목데이터를 안만들었다면 [](빈 배열)을 넣어줌.
  // const idRef = useRef(0); //목데이터 다음 번호를 부여

  // useEffect(()=>{
  //   const rawData = localStorage.getItem("diary"); //로컬스토리지의 다이어리 데이터를 읽어온다.
  //   //로컬스토리지가 비어있을 경우
  //   if(!rawData){
  //       setDataLoaded(true);
  //       return;
  //     }
  //   const localData = JSON.parse(rawData); //로컬데이터가 비어있지 않다면 데이터를 파싱함
  //   if(localData.length===0) { //가져온 로컬데이터 배열이 0이라면 데이터가 없는 것으로 취급..(당연??)
  //       setDataLoaded(true);
  //       return;
  //   } 

  //   localData.sort((a, b)=> Number(b.id) - Number(a.id));
  //   idRef.current = localData[0].id + 1;

  //   dispatch({
  //     type: "INIT",
  //     data:localData
  //   });
  //   setDataLoaded(true);
  // }, [])


  // //기능 펑션----------------
  // const onCreate = (date, emotionId, content)=> { //데이터추가
  //   dispatch({
  //     type:"CREATE",
  //     data:{
  //       id : idRef.current, //아이디값 증감은 리듀스에서 처리.
  //       date,
  //       emotionId, 
  //       content
  //     }
  //   });
  //   idRef.current +=1;
  //   //디스패치 내에서 id : idRef.current++,와 같이 쓰면 리듀서에서 적용이 안되기 때문에 디스패치 밖으로 뺌
  // }
  // const onUpdate = (id, date, emotionId, content)=> { //데이터 수정(스테이트 처리)
  //   dispatch({
  //     type:"UPDATE",
  //     data:{
  //       id,
  //       date,
  //       emotionId, 
  //       content
  //     }
  //   });
  // }
  // const onDelete = (id)=> { //삭제는 아이디만 가지고 판단함.
  //   dispatch({
  //     type:"DELETE",
  //     data:{id}
  //   });
  // }

  // if(!isDataLoaded) {
  //   return <div>데이터를 불러오는 중입니다.</div>
  // }else{
    return (
      <div className='App'>
        {/* <DiaryStateContext.Provider value={data}>
          <DiaryDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}> */}
            <Routes> {/* 끝에 -s가 붙어야 함 */}
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/diary/:id" element={<Diary />} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="*" element={<Notfound />} />
            </Routes>
          {/* </DiaryDispatchContext.Provider>
        </DiaryStateContext.Provider> */}

      </div>
    )
  // }
}

export default App;
// export {DiaryStateContext, DiaryDispatchContext};
