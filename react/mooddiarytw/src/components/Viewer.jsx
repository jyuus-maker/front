import { getEmotionList } from '../util/getEmotionList.js';

const emotionBgColorMap = {
  1: "bg-[rgb(100,201,100)]",
  2: "bg-[rgb(157,215,114)]",
  3: "bg-[rgb(253,206,23)]",
  4: "bg-[rgb(253,132,70)]",
  5: "bg-[rgb(253,86,95)]",
};

function Viewer({emotionId, content}) {
  const emotionItem = getEmotionList.find((item)=> String(item.id)===String(emotionId))
  const emotionBg = emotionBgColorMap[emotionId] || "bg-[rgb(236,236,236)]";

  return (
    <div className='Viewer'>
        <section className='w-full mb-[40px] flex flex-col items-center text-center'>
            <h4 className='text-[1.2em] font-bold mb-[15px]'>오늘의 감정</h4>
            <div className={`emotion_img_wrapper w-[200px] h-[200px] rounded-[40px] pt-[8px] px-[20px] pb-[20px] flex flex-col items-center justify-around text-white text-[25px] ${emotionBg}`}>
                <img src={emotionItem.img} alt={emotionItem.name} />
                {emotionItem.name}
            </div>
        </section>
        <section className='w-full mb-[40px] flex flex-col items-center text-center'>
            <h4 className='text-[1.2em] font-bold mb-[15px]'>오늘의 일기</h4>
            <div className='content_wrapper w-full bg-[rgb(236,236,236)] rounded-[20px] [word-break:keep-all] overflow-wrap-break-word'>
                <p className='p-[20px] text-left text-[1.1em] font-normal leading-[2.5]'>{content}</p>
            </div>
        </section>
    </div>
  )
}

export default Viewer