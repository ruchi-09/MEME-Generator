const generateBtn = document.querySelector('.generate')
const memeTitle = document.querySelector('.title')
const memeImage = document.querySelector('.memeImage')
const authorOutput = document.querySelector('.author span')

generateBtn.addEventListener('click', ()=>{
    fetch('https://meme-api.com/gimme/wholesomememes')
    .then((res)=>res.json())
    .then((data)=>{
        const {author, title, url} = data
        memeTitle.innerText = title
        memeImage.src = url
        authorOutput.innerText = author
    })
})