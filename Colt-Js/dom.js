// const allImages=document.getElementsByTagName('img')

// for(let img of allImages){
//     // console.log(img.src)
//     img.src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
// }


const alllinks=document.querySelectorAll('a')
for(let links of alllinks){
    links.textContent='I am a Link!'
}

//innerhtml-it retrives the full content including the tags,hrefs basically everything inside the html
//innnertext -it retives all the text contained by an element and all its child elements 
//textContent- is all text contained by an element and all its children that are for formatting purposes only