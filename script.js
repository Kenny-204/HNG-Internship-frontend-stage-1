'use strict'
// sticky navbar
const nav = document.querySelector('.navbar')
const header = document.querySelector('header')

const navHeight = nav.getBoundingClientRect().height;
const headObserve = function (entries) {
    const [entry] = entries
    if (!entry.isIntersecting) {
        nav.classList.add('sticky')
        console.log(navHeight)
    }
    else {
        nav.classList.remove('sticky')
    }

    console.log(entry)
}
const options = {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
}
const observer = new IntersectionObserver(headObserve, options)
observer.observe(header)

const timecon = document.querySelector('.timer')
const day = document.querySelector('.day')
const setNaturalWidthAndHeight = function(){

    const image = document.querySelector('img')
    
    image.addEventListener('load',function(e){
        const {naturalWidth,naturalHeight} = image
        image.width = naturalWidth
        image.height = naturalHeight
    })
}


const displayDateAndTime = function () {
    let date = new Date()
    console.log(date)
    setInterval(function () {
       let date = new Date()
        const currentTime = `${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`
        timecon.textContent = currentTime
    }, 1000)

    day.textContent = date.toDateString()
}
setNaturalWidthAndHeight()
displayDateAndTime()



////////////////////////////////////////
// This was a better way to get the time
// date = new Date()
//         const options = {
//             minute: 'numeric',
//             second: 'numeric',
//             hour: 'numeric',
        
//         }
//         const formatTime = new Intl.DateTimeFormat(navigator.language, options)

//         const currentTime = formatTime.format(date)

//         timecon.textContent = currentTime