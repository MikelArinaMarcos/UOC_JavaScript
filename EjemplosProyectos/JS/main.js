import getGifs from 'getGifs.js'

const submit = document.querySelector('.search-submit')
const input = document.querySelector('.search-input')
const view = document.querySelector('#view')
const gifs = await getGifs()

renderGifs(gifs)

submit.addEventListener('click', async function(e){
    e.preventDefault()
    const keyword = input.value
    if(keyword){
        const res = await getGifs({keyword})
        if(res){
            view.innerHTML = ''
            input.value = ''
            renderGifs(res)
        }
    }
})

