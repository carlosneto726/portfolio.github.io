// Implementando o Dark/Light Theme
const btn = document.getElementById("btn");
const css = document.getElementById("appcss");
const theme = window.localStorage.getItem("theme");

console.log(btn)

function color_theme(){
    if(btn.checked){
        css.href = "./css/app_dark.css"
        
    }else{
        css.href = "./css/app_white.css"
    }

}
