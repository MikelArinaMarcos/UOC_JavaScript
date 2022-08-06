import getGifs from 'getGifs.js'

const submit = document.querySelector('.search-submit')
const input = document.querySelector('.search-input')
const view = document.querySelector('#view')
const gifs = await getGifs()