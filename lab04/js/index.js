/**
 * 
 * -------------------------------------
 * DOM Manipulation / Traversal Activity
 * -------------------------------------
 * 
 * 1. Create and attach an event handler (function) to each ".image" 
 * element so that when the ".image" element is clicked, the corresponding 
 * image loads in the .featured image element.
 * 
 * 2. Create event handlers for the next and previous buttons. The next button should
 *    show the next image in the thumbnail list. The previous should show the previous.
 * 
 * 3. If you get to the end, start at the beginning. 
 * 
 * 4. If you get to the beginning, loop around to the end.
 * 
 * 
 */

 const images = [
    'images/field1.jpg',
    'images/purple.jpg',
    'images/jar.jpg',
    'images/green.jpg',
    'images/green1.jpg',
    'images/purple1.jpg',
    'images/magnolias.jpg',
    'images/daisy1.jpg'
];

//Hint 2: currentIndex as a global variable:
let currentIndex = 0;

const initScreen = () => {
    images.forEach((image, idx) => {
        document.querySelector('.cards').innerHTML += `
            <li class="card">
                <div class="image" 
                    style="background-image:url('${image}')"
                    data-index="${idx}"></div>
            </li>`;
    });
};

initScreen();

const showImage = (ev) => {
    const elem = ev.currentTarget; // elem that was clicked
    console.log(elem.style.backgroundImage);
    const currBack = document.querySelector('.featured_image');
    
    // set the .featured_image's backgroundImage to the
    // element that was just clicked.

    currBack.style.backgroundImage = elem.style.backgroundImage;
};

document.querySelectorAll('.image').forEach(elem => {
    elem.onclick = showImage;
});

// create event handler:
const showImageMain = (ev) => {
    const elem = ev.currentTarget;
    currentIndex = parseInt(elem.dataset.index);
    console.log("currentIndex:", currentIndex);

    const nextInd = currentIndex + 1;

    const mod = nextInd%8; //using mod function to create index to cycle through array
    const chg = document.querySelectorAll(".image")[mod]
    console.log("nextImageUrl:", chg.style.backgroundImage)
    currBack.style.backgroundImage = chg.style.backgroundImage;
};

const showNext = (ev) => {
    currentIndex += 1;
    console.log("nextIndex:", currentIndex);

    const currBack = document.querySelector('.featured_image');

    const mod = currentIndex%8; //using mod function to create index to cycle through array
    const elem = document.querySelectorAll(".image")[mod]
    console.log("nextImageUrl:", elem.style.backgroundImage)
    currBack.style.backgroundImage = elem.style.backgroundImage;
};

const showPrev = (ev) => {
    currentIndex -= 1;
    console.log("nextIndex:", currentIndex);

    const currBack = document.querySelector('.featured_image');

    if (currentIndex < -7 ) {
        currentIndex = 0
    }
    const mod = (8 + currentIndex) % 8; //using mod function to create index to cycle through array
    const elem = document.querySelectorAll(".image")[mod]
    console.log("nextImageUrl:", elem.style.backgroundImage)
    currBack.style.backgroundImage = elem.style.backgroundImage;
};


document.querySelector('.next').onclick = showNext;
document.querySelector('.prev').onclick = showPrev;
document.querySelector('.featured_image').onclick = showNext;







