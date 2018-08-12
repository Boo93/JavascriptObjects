let imageSize = function(arg,e,f){
    for(let i=0; i < arg.length; i++){
        arg[i].style.width = e + "px";
        arg[i].style.height = f + "px";
        arg[i].parentElement.style.width = e +"px";
        arg[i].parentElement.style.height = f + "px";
    }
}

let Carusel = function (slides,counter = 0, speed) {
    this.slides = slides;
    this.counter = counter;
    this.speed = speed;
}
Carusel.prototype.startt  = function(){
    for(let i = 0; i < this.slides.length; i++){
        this.slides[i].style.display = "none";
    }
    this.counter++;
    if(this.counter > this.slides.length) {this.counter = 1;}

    this.slides[this.counter-1].style.display = "block";

    setTimeout(() => {
        nowa.startt();
    }, this.speed);
}

Carusel.prototype.addShadow = function(elem){
    let parent = elem[0].parentElement;
    return parent.style.boxShadow = " 0 0 20px #333";
}