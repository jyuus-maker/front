import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import ListItem from './components/ListItem'

import { useRef, useState, } from 'react'
// useRef : id값 처리 목적

// 목 데이터는 전역으로 처리한다
const mockTodo = [
  //isDone : 체크박스 확인. false는 unchecked.
  { id : 0, isDone : false, content : "체크박스 클릭하여 완료표시", date:new Date().getTime()},
  { id : 1, isDone : false, content : "삭제버튼 클릭하여 할일삭제", date:new Date().getTime()},
  { id : 2, isDone : false, content : "자유롭게 할 일 작성!!!!!!!", date:new Date().getTime()}
]

function App() {
  //App기능1 : 목업DB를 유저스테이트로 가져옴.
  const [todo, setTodo] = useState(mockTodo);
  const idRef = useRef(3); //목업데이터 이후부터 ID카운트
  
  //App기능2 : 작성, 수정, 삭제 호출기 작성.
  const onCreate = (content)=>{
    const newItem ={
        id : idRef.current++, 
        isDone : false, 
        content : content, 
        date:new Date().getTime()
    };
    setTodo([newItem, ...todo]); //이 단계의 todo는 mockTodo 배열임.
  };
  const onUpdate = (targetId)=>{
    setTodo(todo.map((item) => { //수정이 일어나는건 체크박스 체크여부임
      if(item.id == targetId) {
        return {...item, isDone:!item.isDone} //타겟아이디를 전체아이디랑 비교해가지고 isDone를 체인지.
      }
      else {return item;}
    }
      ));
  };
  const onDelete = (targetId)=>{
    setTodo(todo.filter((item) => item.id !== targetId));
  };

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
