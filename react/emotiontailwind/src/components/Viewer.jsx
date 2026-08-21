import { getEmotionList } from '../util/getEmotionList.js';

function Viewer({emotionId, content}) {
    const emotionItem = getEmotionList.find((item)=> String(item.id)===String(emotionId))
  return (
    <div className='Viewer p-6 flex flex-col gap-6 w-full'>
        <section className='flex flex-col items-center w-full pb-4'>
            <div className='text-2xl font-bold pb-4 w-full text-center'>오늘의 감정</div>
            <div className={`flex flex-col items-center justify-center p-6 ${emotionItem.bgColor} rounded-4xl w-48`}>
                <img src={emotionItem.img} alt={emotionItem.name} className='w-24 h-24 object-contain mb-2' />
                <div className='text-lg font-medium text-white'>{emotionItem.name}</div>
            </div>
        </section>
        <section className='w-full pb-4'>
            <div className='text-2xl font-bold pb-4 w-full text-center'>오늘의 일기</div>
            <div className='rounded-3xl bg-stone-100 w-full p-6 min-h-37.5'>
                <p className='w-full text-stone-700 leading-relaxed whitespace-pre-wrap'>{content}</p>
            </div>
        </section>
    </div>
  )
}

export default Viewer