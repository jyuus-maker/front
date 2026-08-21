import { getEmotionImgById } from "./getEmotionImgById.js"

export const getEmotionList = [
    {id:1, name:"완전 좋음", img: getEmotionImgById(1), bgColor: "bg-[rgb(100_201_100)]"},
    {id:2, name:"괜찮음",    img: getEmotionImgById(2), bgColor: "bg-[rgb(157_215_114)]"},
    {id:3, name:"어쩌라고",  img: getEmotionImgById(3), bgColor: "bg-[rgb(253_206_23)]"},
    {id:4, name:"별로임",    img: getEmotionImgById(4), bgColor: "bg-[rgb(253_132_70)]"},
    {id:5, name:"완전 별로", img: getEmotionImgById(5), bgColor: "bg-[rgb(253_86_95)]"}
]