import { memo } from 'react';

const emotionOnClassMap = {
  1: "text-white bg-[rgb(100,201,100)]",
  2: "text-white bg-[rgb(157,215,114)]",
  3: "text-white bg-[rgb(253,206,23)]",
  4: "text-white bg-[rgb(253,132,70)]",
  5: "text-white bg-[rgb(253,86,95)]",
};

function EmotionItem({id, img, name, onClick, isSelected}) {
  const handleOnClick = ()=>{
    onClick(id);
  }

  const activeClass = isSelected 
    ? (emotionOnClassMap[id] || "text-white bg-gray-500") 
    : "bg-[rgb(236,236,236)] text-black";

  return (
    <div 
      className={`EmotionItem p-[10px] rounded-[35px] cursor-pointer text-center flex flex-col justify-between items-center flex-wrap shrink-0 flex-1 transition-all duration-200 ${activeClass}`} 
      onClick={handleOnClick}
    >
      <img alt={`emotion${id}`} src={img} className='emotion_img w-[60%] mb-[10px]' />
      <span className='text-[12px]'>{name}</span>
    </div>
  )
}

export default memo(EmotionItem)