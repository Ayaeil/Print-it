const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


// DOM manipulation

const carrouselImg = document.querySelector('.banner-img')
const banner = document.querySelector('#banner')


let index = 0 
const arrow_left=document.querySelector('.arrow_left')
const arrow_right=document.querySelector('.arrow_right')

function Banner () { 
document.getElementById("banner").src = `./assets/images/slideshow/${slides[index].image}`
}

function Banner () { 
	document.getElementById("banner").src = `./assets/images/slideshow/${slides[index].image}`
}

const updateSlide=()=>{
	carrouselImg.src = `./assets/images/slideshow/${slides[index].image}`
}


arrow_left.addEventListener('click', () => {
	index = (index - 1 + slides.length) % slides.length;
	updateSlide();
	checkSelected()
	console.log(index);
});

arrow_right.addEventListener('click', () => {
	index = (index + 1) % slides.length;
	updateSlide();
	checkSelected()
	console.log(index);
});

// seleccioner le div dots
const dots = document.querySelector('.dots')

// boucle pouor remplir le "dots" pour chaque slide
slides.forEach((slide, indexDot)=>{
	// dots.innerHTML += "<button>test</button>"
	const dot = document.createElement('button')
	// rachoute une class 'dot'
	dot.className = 'dot'
	// rachoute listener 'click' a chaque element
	dot.addEventListener('click', ()=> {
		index = indexDot 
		updateSlide();
		checkSelected()
	})


	// rajoute dans le DOM
	dots.append(dot)

})

// check what the selected index is and evaluate it againts the list of dots
function checkSelected(){
	// select all the dots
	const dotsArray = document.querySelectorAll('.dot')
	dotsArray.forEach((dot, dotIndex)=>{
		if(index === dotIndex){
			dot.classList.add('dot_selected')
		}else{
			dot.classList.remove('dot_selected')
		}
	})

}

checkSelected()

/*      banner.addEventListener('click', () => {
	const slides = [
	  { image: 'image1.jpg' },
	  { image: 'image2.jpg' },
	  { image: 'image3.jpg' },
	]
	});    */


	/*      let dots = document.getElementById("dots")
	console.log(dots)

	dots.addEventListener('click',()=> {
		const slides = [
		  { image: 'image1.jpg' },
		  { image: 'image2.jpg' },
		  { image: 'image3.jpg' },
		]
		});
console.log    */