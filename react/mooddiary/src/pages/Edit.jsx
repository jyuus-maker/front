import '../css/Edit.css'
import Header from '../components/Header'
import Button from '../components/Button'
import Editor from './Editor';
import { useNavigate, useParams } from "react-router"
import { useContext } from 'react'
import { DiaryDispatchContext } from '../App'
import useDiary from '../hooks/useDiary'

function Edit() {
  const {onUpdate, onDelete} = useContext(DiaryDispatchContext); //일기 데이터를 가져온다
  const { id } = useParams(); // URL 파라미터에서 id 추출
  const data = useDiary(id);
  const navigate = useNavigate();

  
  //버튼 기능 (삭제, 수정완료)
  const onClickDelete = ()=>{
    const result = window.confirm("일기를 정말 삭제할까요? 복구할 수 없습니다.")
    if(result) {
      onDelete(id);
      navigate("/", {replace : true});
    }
  }
  const onSubmit = (data)=>{
    const result = window.confirm("일기를 정말 수정할까요?")
    if(result){
      const {date, emotionId, content} = data;
      onUpdate(id, new Date(date).getTime(), emotionId, content);
      navigate(`/diary/${id}`, {replace : true});
    }
  }
  
  if (!data) {
    return <div>로딩중입니다...</div>;
  }
  
  return (
    <div className='Edit'>
      <Header title={"일기 수정하기"}
        leftChild={ <Button text={"< 뒤로가기"} onClick={()=>navigate(-1)}/> }
        rightChild={ <Button text={"삭제하기"}  onClick={onClickDelete} type={"NEGATIVE"}/> }
      />
      <Editor initData={data} onSubmit={onSubmit} />
    </div>
  )
}

export default Edit