import { getEmotionImgById } from "./getEmotionImgById.js"

export const getEmotionList = [
    {id:1, name:"완전 좋음", img: getEmotionImgById(1)},
    {id:2, name:"괜찮음",    img: getEmotionImgById(2)},
    {id:3, name:"어쩌라고",  img: getEmotionImgById(3)},
    {id:4, name:"별로임",    img: getEmotionImgById(4)},
    {id:5, name:"완전 별로", img: getEmotionImgById(5)}
]