import emotion1 from "../assets/images/emotion1.png"
import emotion2 from "../assets/images/emotion2.png"
import emotion3 from "../assets/images/emotion3.png"
import emotion4 from "../assets/images/emotion4.png"
import emotion5 from "../assets/images/emotion5.png"

export const getEmotionImgById = (emitionId) => {
    const targetEmotionId = String(emitionId); //스트링 일괄 형변환으로 혹시모를 오류 방지 
    switch(targetEmotionId) {
        case "1" : return emotion1;
        case "2" : return emotion2;
        case "3" : return emotion3;
        case "4" : return emotion4;
        case "5" : return emotion5;
        default : return null;
    }
}