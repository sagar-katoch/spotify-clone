console.log("javascript is running")




async function main(){

let a=await fetch("http://127.0.0.1:3000/songs/")
let response= await a.text()

console.log(response)
let div= document.createElement("div")
div.innerHTML=response
let as= div.getElementsByTagName("a")
console.log(as)
let songs=[]

for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if(element.href.endsWith(".mp3")){
        songs.push(element.href)
    }
    
}



}
main()