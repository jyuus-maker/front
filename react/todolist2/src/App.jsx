import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import ListItem from './components/ListItem'

import { useRef, useReducer, useCallback } from 'react'
// useRef : id값 처리 목적

// 목 데이터는 전역으로 처리한다
const mockTodo = [
  //isDone : 체크박스 확인. false는 unchecked.
  { id : 0, isDone : false, content : "체크박스 클릭하여 완료표시", date:new Date().getTime()},
  { id : 1, isDone : false, content : "삭제버튼 클릭하여 할일삭제", date:new Date().getTime()},
  { id : 2, isDone : false, content : "자유롭게 할 일 작성!!!!!!!", date:new Date().getTime()}
]

//유즈리듀서로 보낼 것
const reducer = (todo, action)=>{
  switch(action.type) { //원래 내용 + 변경된 내용은 스위치로 분기
    case "CREATE" : return [action.newItem, ...todo];
    case "UPDATE" : return todo.map   ((item)=>item.id === action.targetId ? {...item, isDone:!item.isDone} : item);
    case "DELETE" : return todo.filter((item)=>item.id !== action.targetId);
    default : return todo;
  }
}


// const reducer = (todo, action) => {
//   switch (action.type) { //원래 내용 + 변경된 내용은 스위치로 분기
//     case "CREATE": { return [action.newItem, ...todo]; }
//     case "UPDATE": { return todo.map((item) => item.id === action.targetId ? { ...item, isDone:!item.isDone } : item);}
//     case "DELETE": { return todo.filter((item) => item.id !== action.targetId);}
//     default: return todo; 
//       // map 함수 내부에서 삼항 연산의 결과물이 정상 반환되도록 return을 추가합니다.
//       // filter 함수 블록 내부에 return 키워드를 명시하여 논리 연산 장벽을 유지합니다.
//   }
// };


function App() {
  //App기능1 : 목업DB를 유저스테이트로 가져옴.
  // const [todo, setTodo] = useState(mockTodo);

  //App기능1 : 유저리듀서 활용
  const [todo, disPatch] = useReducer(reducer, mockTodo);
  const idRef = useRef(3); //목업데이터 이후부터 ID카운트
  
  
  //App기능2 : 작성, 수정, 삭제 호출기 작성.
  //리듀서로 보낼 내용 onCreate, onUpdate, onDelete
  const onCreate = (content) =>{
    // disPatch({}); //호출 결과값으로 state가 들어옴
    disPatch({
      type:"CREATE",
      newItem:{
          id : idRef.current, //아이디값 증감은 리듀스에서 처리.
          isDone : false, 
          content : content, 
          date:new Date().getTime()
      } //액션객체
    }); //호출 결과값으로 state가 들어옴
    idRef.current +=1; //디스패치 내에서 쓰면 안됨.
  };

  //내부에 작성된 함수를 재생성하지않도록 메모하는 훅
  const onUpdate = useCallback((targetId)=>{
    disPatch({
      type:"UPDATE",
      targetId //액션객체
    });
  },[])

  // //리듀스 소스
  // const onUpdate = (targetId)=>{
  //   disPatch({
  //     type:"UPDATE",
  //     targetId //액션객체
  //   });
  // };

  //내부에 작성된 함수를 재생성하지않도록 메모하는 훅
  const onDelete = useCallback((targetId)=>{
    disPatch({
      type:"DELETE",
      targetId //액션객체
    });
  },[])

  // //리듀스 소스
  // const onDelete = (targetId)=>{
  //   disPatch({
  //     type:"DELETE",
  //     targetId //액션객체
  //   });
  // };

  // const onCreate = (content)=>{
  //   const newItem ={
  //       id : idRef.current++, 
  //       isDone : false, 
  //       content : content, 
  //       date:new Date().getTime()
  //   };
  //   setTodo([newItem, ...todo]); //이 단계의 todo는 mockTodo 배열임.
  // };
  // const onUpdate = (targetId)=>{
  //   setTodo(todo.map((item) => { //수정이 일어나는건 체크박스 체크여부임
  //     if(item.id == targetId) {
  //       return {...item, isDone:!item.isDone} //타겟아이디를 전체아이디랑 비교해가지고 isDone를 체인지.
  //     }
  //     else {return item;}
  //   }
  //     ));
  // };
  // const onDelete = (targetId)=>{
  //   setTodo(todo.filter((item) => item.id !== targetId));
  // };

  return (
    <>
      <div className='App'>
          <Header />
          <Editor onCreate={onCreate}/>
          <List todo={todo} onUpdate={onUpdate} onDelete={onDelete}> 
            <ListItem />
          </List>

      </div>
    </>
  )
}

export default App
