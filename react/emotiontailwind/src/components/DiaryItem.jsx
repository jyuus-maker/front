import Button from './Button'
import { useNavigate } from 'react-router'
import { getEmotionImgById } from '../util/getEmotionImgById.js'

const DiaryItem = ({id, emotionId, content, date})=>{
  const navigate = useNavigate();
  const goDetail = ()=>{
        navigate(`/diary/${id}`);
      }
      const goEdit = ()=>{
        navigate(`/edit/${id}`);
      }
return (
    <div className='py-4 flex items-center justify-between gap-5 border-b border-stone-200'>
      <div 
        onClick={goDetail} 
        className={`flex-none w-36 h-24 flex items-center justify-center rounded-full cursor-pointer img_section_${emotionId}`}
      >
        <img src={getEmotionImgById(emotionId)} alt={`emotion${emotionId}`} className='w-22 h-22 object-contain' />
      </div>
      
      <div onClick={goDetail} className='flex-1 flex flex-col cursor-pointer'>
        <span className='text-2xl font-bold pb-1'>{new Date(Number(date)).toLocaleDateString()}</span>
        <p className='text-stone-600 text-md'>
          {content.length > 21 ? content.slice(0, 21) + "..." : content}
        </p>
      </div>
      
      <div className='flex-none w-36'>
        <Button text={"수정하기"} onClick={goEdit} />
      </div>
    </div>
  )
}

export default DiaryItem