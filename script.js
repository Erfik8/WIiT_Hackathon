let mediacarousel = document.getElementById("MediaPartners");
let eventcarousel = document.getElementById("EventPartners");

let mediaitems = mediacarousel.querySelectorAll('.carousel .carousel-item');
let eventitems = eventcarousel.querySelectorAll('.carousel .carousel-item');

let FqaElements = document.querySelectorAll('.FqaQuestionConteiner');
var checkedElement = null;

FqaElements.forEach((el) => {
    el.getElementsByTagName('h5')[0].addEventListener('click',function(){
        if(checkedElement != null) checkedElement.id = "";
        this.id = "checked";
        checkedElement = this;
        console.log(this);
    })
});

mediaitems.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = mediaitems[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
});
eventitems.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = eventitems[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
});
