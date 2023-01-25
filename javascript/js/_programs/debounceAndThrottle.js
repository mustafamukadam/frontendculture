// webdevsimplified - https://github.com/WebDevSimplified/debounce-throttle-js/blob/main/script.js
//frontendinterviewhandbook - //https://www.frontendinterviewhandbook.com/blog/a-glimpse-into-front-end-interviews/

const input = document.querySelector("input")
const defaultText = document.getElementById("default")
const debounceText = document.getElementById("debounce")
const throttleText = document.getElementById("throttle")

const updateDebounceText = debounce((text) => {
  debounceText.textContent = text
})
const updateThrottleText = throttle((text) => {
  throttleText.textContent = text
}, 100)

function debounce(cb, delay = 1000) {
  let timeout

  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      cb(...args)
    }, delay)
  }
}

function throttle(cb, delay = 1000) {
  let shouldWait = false
  let waitingArgs
  const timeoutFunc = () => {
    if (waitingArgs == null) {
      shouldWait = false
    } else {
      cb(...waitingArgs)
      waitingArgs = null
      setTimeout(timeoutFunc, delay)
    }
  }

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args
      return
    }

    cb(...args)
    shouldWait = true

    setTimeout(timeoutFunc, delay)
  }
}

// document.addEventListener("mousemove", e => {
//   incrementCount(defaultText)
//   updateDebounceText()
//   updateThrottleText()
// })

// function incrementCount(element) {
//   element.textContent = (parseInt(element.innerText) || 0) + 1
// }

input.addEventListener("input", e=>{
  defaultText.textContent = e.target.value
  updateDebounceText(e.target.value)
  updateThrottleText(e.target.value)
})

// https://www.frontendinterviewhandbook.com/blog/a-glimpse-into-front-end-interviews
function simpleThrottle(cb, delay){
  let waitId = null

  return function(...args){
    if(waitId) return

    cb(...args)

    waitId = setTimeout(() => {
      waitId = null // release lock
    }, delay)
  }
}