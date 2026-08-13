import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import ListItem from './components/ListItem'

import { useRef, useState } from 'react'
//useRef : id값 처리 목적

//목 데이터는 전역으로 처리한다
const mockTodo = [
  //isDone : 체크박스 확인. false는 unchecked.
  { id : 0, isDone : false, content : "체크박스 클릭하여 완료표시", date:new Date().getTime()},
  { id : 1, isDone : false, content : "삭제버튼 클릭하여 할일삭제", date:new Date().getTime()},
  { id : 2, isDone : false, content : "자유롭게 할 일 작성!!!!!!!", date:new Date().getTime()}
]

function App() {
  const [todo, setTodo] = useState(mockTodo); //상태를 지속적으로 체크하기 위해 부모에서 셋팅함 
  const idRef = useRef(3);

  //리스트아이템 생성
  const onCreate = (content)=>{ //contents 외의 나머지는 자동화
    const newItem = {
      id:idRef.current++, //Ref의 초깃값을 1씩 추가해서 id로 삼음.
      content:content,
      isDone:false,
      date:new Date().getTime()
    };
    setTodo([newItem, ...todo]); //새로운 아이템이 위에 스택
    // setTodo([...todo, newItem]); //새로운 아이템이 아래에 스택
  }
  
  //리스트아이템 수정/삭제
  const onUpdate = (targetId)=>{ 
    //리스트아이템의 체크박스 제어 (true/false)
    setTodo(
      todo.map((item) => {
        if(item.id == targetId) {
          return { ...item, isDone:!item.isDone }
          //아이템 스프레드를 가져오고, 그 중에 아이디가 같은것은 isDone의 불린값을 바꿈
        }
        else {return item;}
      })
    );    
  }

  //검색 인풋 - 대소문자 구분x (어퍼케이스, 로이어케이스 등으로 전처리)
  //includes 활용

  const onDelete = (targetId)=>{ 
    //리스트아이템의 삭제버튼과 연동
    //delete라는개념은, 원래 배열에서 "나"를 빼고 나머지를 다시렌더링하는것.
    //filter(item => item.id !== targetId) : 지정한 아이디와 같지않은 것을 빼고 다시 배열을 만든다.
    setTodo(todo.filter(item => item.id !== targetId));
  }

  return (
    <>
      <div className='App'>
          <Header />
          <Editor onCreate={onCreate}/>
          <List todo={todo} onUpdate={onUpdate} onDelete={onDelete}>
            <ListItem /> {/* 리스트아이템은 그저 UI임 */}
          </List>

      </div>
    </>
  )
}

export default App
