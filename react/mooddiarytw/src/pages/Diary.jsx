import Header from '../components/Header'
import Button from '../components/Button'
import Viewer from '../components/Viewer'
import { getFormattedDate } from '../util/getFormattedDate.js'
import { useParams, useNavigate } from "react-router"
// import { useEffect } from "react"
import useDiary from '../hooks/useDiary'

function Diary() {
  const { id } = useParams(); // URL 파라미터에서 id 추출
  const data = useDiary(id);
  const navigate = useNavigate();
  
  if (!data) {
    return <div>로딩중입니다...</div>;
  }

  const {date, emotionId, content} = data;
  const title = `${getFormattedDate(new Date(date))} 기록`;
  
  return (
    <div className='Diary'>
      <Header title={title}
        leftChild={ <Button text={"< 홈으로"} onClick={() => navigate("/")}/> }
        rightChild={ <Button text={"수정하기"}  onClick={() => navigate(`/edit/${id}`)}/> }
      />
      <div className='viewer_selection'>
        <Viewer emotionId={emotionId} content={content} />
      </div>
    </div>
  )
}

export default Diary