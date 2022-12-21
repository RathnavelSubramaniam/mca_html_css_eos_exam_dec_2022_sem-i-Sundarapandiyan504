	
// navgation bar
window.addEventListener("scroll",function(){
    var header=this.document.querySelector("header");
    header.classList.toggle("sticky",this.window.screenY>0);
})