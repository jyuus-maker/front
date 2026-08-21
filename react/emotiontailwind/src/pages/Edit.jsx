import Header from '../components/Header'
import Button from '../components/Button'
// import Editor from './Editor';
import { useNavigate, useParams } from "react-router"
// import { useContext } from 'react'
// import { DiaryDispatchContext } from '../App'
// import useDiary from '../hooks/useDiary'

function Edit() {
  // const {onUpdate, onDelete} = useContext(DiaryDispatchContext); //일기 데이터를 가져온다
  // const { id } = useParams(); // URL 파라미터에서 id 추출
  // const data = useDiary(id);
  const navigate = useNavigate();

  
  //버튼 기능 (삭제, 수정완료)
  // const onClickDelete = ()=>{
  //   const result = window.confirm("일기를 정말 삭제할까요? 복구할 수 없습니다.")
  //   if(result) {
  //     onDelete(id);
  //     navigate("/", {replace : true});
  //   }
  // }
  // const onSubmit = (data)=>{
  //   const result = window.confirm("일기를 정말 수정할까요?")
  //   if(result){
  //     const {date, emotionId, content} = data;
  //     onUpdate(id, new Date(date).getTime(), emotionId, content);
  //     navigate(`/diary/${id}`, {replace : true});
  //   }
  // }
  
//   if (!data) {
//     return <div>로딩중입니다...</div>;
//   }

  // 목 데이터는 전역으로 처리한다-----로컬스토리지 작업 후 활용 완료-----------
  const mockData = [
    //isDone : 체크박스 확인. false는 unchecked.
    { id:0, date:new Date(2026, 8-1, 2).getTime(), emotionId:1, content:"나의 감정을 선택해보세요."},
    { id:1, date:new Date(2026, 8-1, 6).getTime(), emotionId:2, content:"하루의 기분을 적어보세요."},
    { id:2, date:new Date(2026, 8-1, 8).getTime(), emotionId:4, content:"자유롭게 일기를 써봐요!!!"}
  ]
  
  return (
      <div className='bg-zinc-100 min-h-screen flex justify-center p-4 p-t-2'>
        <div className='bg-white w-2xl mx-auto shadow-sm rounded-3xl p-4'>
            <Header title={"일기 수정하기"}
              leftChild={ <Button text={"< 뒤로가기"} onClick={()=>navigate(-1)}/> }
              rightChild={ <Button text={"삭제하기"}  type={"NEGATIVE"}/> }
            />
            <div className='py-4 flex items-center justify-between gap-5 border-b border-stone-200'>
              {/* <Editor initData={mockData[2]} /> */}
            </div>
        </div>
    </div>
  )
}

export default Edit


      {/* <Header title={"일기 수정하기"}
        leftChild={ <Button text={"< 뒤로가기"} onClick={()=>navigate(-1)}/> }
        rightChild={ <Button text={"삭제하기"}  onClick={onClickDelete} type={"NEGATIVE"}/> }
      />
      <Editor initData={data} onSubmit={onSubmit} /> */}