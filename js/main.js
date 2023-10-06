
let moon = document.getElementById("moon")
let sun = document.getElementById("sun")
let body = document.getElementById("body")
let nav = document.getElementById("nav")

moon.addEventListener("click",function(){
    body.style.backgroundColor="#102"
    body.style.color="white"
    nav.style.backgroundColor="#101"
    moon.style.display="none"
    sun.style.display="block"
})

sun.addEventListener("click",function(){
    body.style.backgroundColor="unset"
    body.style.color="unset"
    nav.style.backgroundColor="whitesmoke"
    moon.style.display="block"
    sun.style.display="none"
})