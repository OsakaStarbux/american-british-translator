import { americanOnly } from './american-only.js';
import { britishOnly } from './british-only.js'; 
import { americanToBritishSpelling } from './american-to-british-spelling.js'; 
import { americanToBritishTitles } from './american-to-british-titles.js'; 

let mode = 'american-to-british'

let textInput = document.querySelector('#text-input')
let menu = document.querySelector('#locale-select')
let translateButton = document.querySelector('#translate-btn')
let clearButton = document.querySelector('#clear-btn')
let translated = document.querySelector('#translated-sentence')
let errorMsg = document.querySelector('#error-msg')


menu.onchange = () => {
  mode = menu.value
  console.log("Mode changeed to " + mode)
}

translateButton.onclick = () => {
  
  if (textInput.value === ''){
    errorMsg.innerText = 'Error: No text to translate.'
  }
  let text = textInput.value
  let newText = translate(text, mode)
  translated.innerHTML = newText
  if (translated.textContent === textInput.value){
    translated.innerHTML = 'Everything looks good to me!'
  }
  
  console.log("translateButton clicked")
}

clearButton.onclick = () => {
  console.log("clearButton clicked")
  errorMsg.innerText = ''
  textInput.value = ''
  translated.innerHTML = ''
}

function translate(text, direction){
  
  let newText = text.slice()  
  let wordDict
  let titleDict
  let spellingDict
  let convertTime
  let convertTitle
  
  if (direction === 'american-to-british'){
    wordDict = americanOnly
    titleDict = americanToBritishTitles
    spellingDict = americanToBritishSpelling
    convertTime = convertTimeA2B
    convertTitle = convertTitleA2B
    
  } else if (direction === 'british-to-american'){
    wordDict = britishOnly
    titleDict = reverseObj(americanToBritishTitles)
    spellingDict = reverseObj(americanToBritishSpelling)
    convertTime = convertTimeB2A
    convertTitle = convertTitleB2A
  }
  
  let wordsReplaced = replaceAll(newText, wordDict)
  let titlesReplaced = convertTitle(wordsReplaced, titleDict)
  
  let spellingReplaced = replaceAll(titlesReplaced, spellingDict)
  
  let timeConverted = convertTime(spellingReplaced)
  
  return timeConverted
}

function replaceAll(str, dict){
    const re = new RegExp('\\b(:?' + Object.keys(dict).join("|") + ')\\b',"gi");
    return str.replace(re, function(match, offset, string) { 
      return `<span class="highlight">${dict[match.toLowerCase()]}</span>`;
    });
}

function convertTitleA2B(str, dict){
  let newStr = str.slice()
   let regexStr = Object.keys(dict).map(str => str.replace(/\./, "\\.")).join("|")
  const re = new RegExp( regexStr, "gi" );
  newStr = newStr.replace(re, function(match, offset, string){
    let matchToLower = match.toLowerCase()
    let val = dict[matchToLower]
     let titleCased = titleCase(val)    
    return `<span class="highlight">${titleCased}</span>`
  })
  return newStr
}

function convertTitleB2A(str, dict){
    let newStr = str.slice()
    let regexStr = Object.keys(dict).sort((a, b) => b.length - a.length).join("|")
    const re = new RegExp( regexStr, "gi" );
    newStr = newStr.replace(re, function(match, offset, string){
    let matchToLower = match.toLowerCase()
    let val = dict[matchToLower]
     let titleCased = titleCase(val)    
    return `<span class="highlight">${titleCased}</span>`
       })
  return newStr
}
       
function reverseObj(obj){
  let newObj = {}
  for (const [key, value] of Object.entries(obj)) {
  newObj[value] = key
  }
  return newObj
}

function titleCase(str){
  return [...str.toLowerCase()].map( (el, i) => i === 0 ? el.toUpperCase() : el).join('')
}

function convertTimeA2B(str){
  let re = /\b(\d{1,2}):(\d{2})\b/gi
  return str.replace(re, '<span class="highlight">' + '$1.$2' + '</span>')
}

function convertTimeB2A(str){
  let re = /\b(\d{1,2})\.(\d{2})\b/gi 
  return str.replace(re, '<span class="highlight">' + '$1:$2' + '</span>')
}


/* 
  Export your functions for testing in Node.
  Note: The `try` block is to prevent errors on
  the client side
*/
try {
  module.exports = {
  translate: translate
  }
} catch (e) {}
