import '../css/Viewer.css'
import { getEmotionList } from '../util/getEmotionList.js';

function Viewer({emotionId, content}) {
    const emotionItem = getEmotionList.find((item)=> String(item.id)===String(emotionId))
  return (
    <div className='Viewer'>
        <section>
            <h4>오늘의 감정</h4>
            <div className={`emotion_img_wrapper emotion_img_wrapper_${emotionId}`}>
                <img src={emotionItem.img} alt={emotionItem.name} />
                {emotionItem.name}
            </div>
        </section>
        <section>
            <h4>오늘의 일기</h4>
            <div className='content_wrapper'>
                <p>{content}</p>
            </div>
        </section>
    </div>
  )
}

export default Viewer