export const viewHeightCalc = (px,{height = 1024}) =>{
    return (px * 100) / height;
}

export const viewWidthCalc = (px,{width = 1440}) =>{
    return (px * 100) / width;
}