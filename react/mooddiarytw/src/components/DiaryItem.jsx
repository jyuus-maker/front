import '../css/DiaryItem.css'
import Button from './Button'
import { useNavigate } from 'react-router'
import { getEmotionImgById } from '../util/getEmotionImgById.js'
// import { getYMDformatted } from '../util/getFormattedDate.js'

const DiaryItem = ({id, emotionId, content, date})=>{
  const navigate = useNavigate();
  const goDetail = ()=>{
        navigate(`/diary/${id}`);
      }
      const goEdit = ()=>{
        navigate(`/edit/${id}`);
      }
  return (
    <div className='DiaryItem'>
      <div onClick={goDetail} className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImgById(emotionId)} alt={`emotion${emotionId}`} />
      </div>
      <div onClick={goDetail} className='content_wrapper'>
        {/* <span className='itemDate'>{getYMDformatted(new Date(Number(date)))}</span> */}
        {/* <span className='itemDate'>{new Date(parseInt(date)).toLocaleDateString()}</span> */}
        <span className='itemDate'>{new Date(Number(date)).toLocaleDateString()}</span>
        {content.length > 21 ? content.slice(0, 21) + "..." : content}
      </div>
        <div className='content_btn'>
          <Button text={"수정하기"} onClick={goEdit} />
        </div>
    </div>
  )
}

export default DiaryItem