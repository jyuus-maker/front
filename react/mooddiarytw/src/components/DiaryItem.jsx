import Button from './Button'
import { useNavigate } from 'react-router'
import { getEmotionImgById } from '../util/getEmotionImgById.js'

const emotionBgColorMap = {
  1: "bg-[rgb(100,201,100)]",
  2: "bg-[rgb(157,215,114)]",
  3: "bg-[rgb(253,206,23)]",
  4: "bg-[rgb(253,132,70)]",
  5: "bg-[rgb(253,86,95)]",
};

const DiaryItem = ({id, emotionId, content, date})=>{
  const navigate = useNavigate();
  const goDetail = ()=>{
    navigate(`/diary/${id}`);
  }
  const goEdit = ()=>{
    navigate(`/edit/${id}`);
  }

  const emotionBg = emotionBgColorMap[emotionId] || "bg-[rgb(236,236,236)]";

  return (
    <div className='DiaryItem flex gap-[20px] py-[10px] px-0 border-b border-[#ececec] cursor-pointer items-center'>
      <div onClick={goDetail} className={`img_section p-0 rounded-[20px] w-[130px] flex justify-center items-center shrink-0 min-h-[80px] ${emotionBg}`}>
        <img src={getEmotionImgById(emotionId)} alt={`emotion${emotionId}`} className='h-[70px] pb-[5px]' />
      </div>
      <div onClick={goDetail} className='content_wrapper flex-1'>
        <span className='itemDate block pt-[7px] pb-[10px] text-[1.3em] font-bold'>
          {new Date(Number(date)).toLocaleDateString()}
        </span>
        <div className='text-[16px] text-gray-700'>
          {content.length > 21 ? content.slice(0, 21) + "..." : content}
        </div>
      </div>
      <div className='content_btn p-0 my-auto shrink-0'>
        <Button text={"수정하기"} onClick={goEdit} />
      </div>
    </div>
  )
}

export default DiaryItem