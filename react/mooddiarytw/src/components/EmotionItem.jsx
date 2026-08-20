import '../css/EmotionItem.css'
import { memo } from 'react';

function EmotionItem({id, img, name, onClick, isSelected}) {
  const handleOnClick = ()=>{
    onClick(id);
  }
  // console.log(isSelected); //이모션 초기상태

  return (
    <div className={`EmotionItem ${isSelected ? `EmotionItem_on_${id}` : `EmotionItem_off`}`} onClick={handleOnClick}>
      <img alt={`emotion${id}`} src={img} className='emotion_img' />
      <span>{name}</span>
    </div>
  )
}

export default memo(EmotionItem)