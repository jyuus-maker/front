// import './App.css'
// import Header from './components/Header'
// import Editor from './components/Editor'
// import List from './components/List'

// import { useRef, useReducer, useCallback, createContext , useMemo} from 'react'
// // useRef : id값 처리 목적

// export const TodoStateContext = createContext(null);
// export const TodoDispatchContext = createContext(null);


// // 목 데이터는 전역으로 처리한다
// const mockTodo = [
//   //isDone : 체크박스 확인. false는 unchecked.
//   { id : 0, isDone : false, content : "체크박스 클릭하여 완료표시", date:new Date().getTime()},
//   { id : 1, isDone : false, content : "삭제버튼 클릭하여 할일삭제", date:new Date().getTime()},
//   { id : 2, isDone : false, content : "자유롭게 할 일 작성!!!!!!!", date:new Date().getTime()}
// ]

// //유즈리듀서로 보낼 것
// const reducer = (todo, action)=>{
//   switch(action.type) { //원래 내용 + 변경된 내용은 스위치로 분기
//     case "CREATE" : return [action.newItem, ...todo];
//     case "UPDATE" : return todo.map   ((item)=>item.id === action.targetId ? {...item, isDone:!item.isDone} : item);
//     case "DELETE" : return todo.filter((item)=>item.id !== action.targetId);
//     default : return todo;
//   }
//   // map 함수 내부에서 삼항 연산의 결과물이 정상 반환되도록 return을 추가.
//   // filter 함수 블록 내부에 return 키워드를 명시하여 논리 연산 장벽을 유지.
// }

// function App() {
//   //App기능1 : 목업DB를 유저스테이트로 가져옴.
//   // const [todo, setTodo] = useState(mockTodo);

//   //App기능1 : 유저리듀서 활용
//   const [todo, disPatch] = useReducer(reducer, mockTodo);
//   const idRef = useRef(3); //목업데이터 이후부터 ID카운트
  
//   //App기능2 : 작성, 수정, 삭제 호출기 작성.
//   //리듀서로 보낼 내용 onCreate, onUpdate, onDelete
//   const onCreate = (content) =>{
//     // disPatch({}); //호출 결과값으로 state가 들어옴
//     disPatch({
//       type:"CREATE",
//       newItem:{
//           id : idRef.current, //아이디값 증감은 리듀스에서 처리.
//           isDone : false, 
//           content : content, 
//           date:new Date().getTime()
//       } //액션객체
//     }); //호출 결과값으로 state가 들어옴
//     idRef.current +=1; //디스패치 내에서 쓰면 안됨.
//   };

//   // 내부에 작성된 함수를 재생성하지않도록 메모하는 훅
//   const onUpdate = useCallback((targetId)=>{
//     disPatch({
//       type:"UPDATE",
//       targetId //액션객체
//     });
//   },[])
//   const onDelete = useCallback((targetId)=>{
//     disPatch({
//       type:"DELETE",
//       targetId //액션객체
//     });
//   },[])

//   //함수를 선언해놓고 끌어다 쓰는거기 때문에 순서가 중요하다
//   const memorizeDispatchs = useMemo(()=>{
//     return {onCreate, onUpdate, onDelete}
//   },[])

//   return (
//     <>
//       <div className='App'>
//           <Header />
//           <TodoStateContext.Provider value={todo}>
//               {/* <TodoDispatchContext.Provider value={ {onCreate, onUpdate, onDelete} }> 변수여러개는 구조분해할당으로 보내야함 */}
//               <TodoDispatchContext.Provider value={memorizeDispatchs}> 
//                   <Editor /> {/* todo={todo} */}
//                   <List />  {/* todo={todo} onUpdate={onUpdate} onDelete={onDelete} */}
//               </TodoDispatchContext.Provider>
//           </TodoStateContext.Provider>

//       </div>
//     </>
//   )
// }

// export default App

//-----------------------------------------------------------------------------------------

// import './App.css'
// import { createContext, useContext } from 'react' 

// //1. Context 생성
// const UserContext = createContext(null);
// // console.log(UserContext);

// //2. useContext 훅으로 사용
// function NavBar(){
//   const user = useContext(UserContext);
//   return(
//     <nav>
//       <h2>안녕하세요 {name}</h2>
//     </nav>
//   );
// }

// //3. Profile 컴포넌트
// function Profile(){
//   const user = useContext(UserContext);
//   return(
//     <div>
//       <h2>{user.name}님의 프로필</h2>
//       <h2>나이 : {user.age}살</h2>
//     </div>
//   );
// }

// function App() {
//   const currentUser = {name : "홍길동", age: 20 };
//   return (
//     <>
//       <div className='App'>
//         <UserContext.Provider value={currentUser}>
//         {/* 자식들이 따로 프롭스를 받지 않아도 부모프로바이더를 통해 사용할수있다 */}
//           <NavBar />
//           <Profile />
//         </UserContext.Provider>
//       </div>
//     </>
//   )
// }

// export default App

