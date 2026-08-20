import '../css/New.css'
import Header from '../components/Header'
import Button from '../components/Button'
import Editor from './Editor'
import { useNavigate } from "react-router"
import { useContext } from 'react'
import { DiaryDispatchContext } from '../App'

function New() {
  const { onCreate } = useContext(DiaryDispatchContext);
  const onSubmit=(data) => {
          // console.log(data);
          const {date, emotionId, content} = data;
          onCreate(date, emotionId, content);
          navigate('/', { replace: true });
      }
  const navigate = useNavigate();

  return (
    <div className='New'>
      <Header title={"새 일기 쓰기"}
        leftChild={ <Button text={"< 뒤로가기"} onClick={()=>navigate(-1)} /> }
      />
      <Editor onSubmit={onSubmit} />
    </div>
  )
}

export default New