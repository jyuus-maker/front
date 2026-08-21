import Header from '../components/Header'
import Button from '../components/Button'
import Viewer from '../components/Viewer'
import { getFormattedDate } from '../util/getFormattedDate.js'
import { useParams, useNavigate } from "react-router"
// import { useEffect } from "react"
// import useDiary from '../hooks/useDiary'

function Diary() {
  const { id } = useParams(); // URL 파라미터에서 id 추출
  // const data = useDiary(id);
  const navigate = useNavigate();
  
  // if (!data) {
  //   return <div>로딩중입니다...</div>;
  // }
  // 목 데이터는 전역으로 처리한다-----로컬스토리지 작업 후 활용 완료-----------
  const mockData = [
    //isDone : 체크박스 확인. false는 unchecked.
    { id:0, date:new Date(2026, 8-1, 2).getTime(), emotionId:1, content:"나의 감정을 선택해보세요."},
    { id:1, date:new Date(2026, 8-1, 6).getTime(), emotionId:2, content:"하루의 기분을 적어보세요."},
    { id:2, date:new Date(2026, 8-1, 8).getTime(), emotionId:4, content:"자유롭게 일기를 써봐요!!!"}
  ]
  const title = `${getFormattedDate(new Date(mockData.date))} 기록`;

  // const {date, emotionId, content} = data;
  // const title = `${getFormattedDate(new Date(date))} 기록`;
  
  return (
      <div className='bg-zinc-100 min-h-screen flex justify-center p-4 p-t-2'>
        <div className='bg-white w-2xl mx-auto shadow-sm rounded-3xl p-4'>
            <Header title={title}
              leftChild={ <Button text={"< 홈으로"} onClick={() => navigate("/")}/> }
              rightChild={ <Button text={"수정하기"}  onClick={() => navigate(`/edit/${id}`)}/> }
            />
            {/* <Header title={"DIARY 상세보기"}
            leftChild ={<Button type="" text={"< 홈으로"} />}
            rightChild={<Button type="" text={"수정하기"} />}
            /> */}
            <div className='py-4 flex items-center justify-between gap-5 border-b border-stone-200'>
              {/* <Viewer emotionId={emotionId} content={content} /> */}
              <Viewer emotionId={mockData[2].emotionId} content={mockData[2].content} />
            </div>
        </div>
    </div>
  )
}

export default Diary


  // return (
  //   <div className='Diary'>
  //     <Header title={title}
  //       leftChild={ <Button text={"< 홈으로"} onClick={() => navigate("/")}/> }
  //       rightChild={ <Button text={"수정하기"}  onClick={() => navigate(`/edit/${id}`)}/> }
  //     />
  //     <div className='viewer_selection'>
  //       <Viewer emotionId={emotionId} content={content} />
  //     </div>
  //   </div>
  // )