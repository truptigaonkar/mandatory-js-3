let main = document.querySelector("main");
let parsedData;

////================Getting list of all dog breeds==================////
function getBreeds() {
    let xml = new XMLHttpRequest
    xml.open("GET", "https://dog.ceo/api/breeds/list/all");
    xml.addEventListener("load", parse);
    xml.send();
}
getBreeds();

//Parsing json data from breed list 'https://dog.ceo/api/breeds/list/all'
function parse() {
    parsedData = JSON.parse(this.responseText);
    console.log(parsedData.message);
    getText(parsedData);
}

//Rendering HTML content in to list
function getText(data) {
    let ul = document.querySelector("#breedList");
    let breed;
    for(breed in parsedData.message){
        let li = document.createElement("li");
        li.textContent = breed;
        ul.appendChild(li);
        li.addEventListener("click", function(e){
            getBreed(e, parsedData);
            getBreedImages(e);
        });
    }
}

// Getting breed
function getBreed(e, parsedData){
    for(let breed in parsedData.message){
        if (e.target.textContent === breed){
            let dog = parsedData.message[breed];
            let ul = document.querySelector("#subBreedList");
            ul.innerHTML = ""
            for(let subBreed in dog){
                let li = document.createElement("li");
                li.textContent = breed + "-" + dog[subBreed]; 
                li.addEventListener("click", getBreedImages);
                ul.appendChild(li);
            }
        }
    }
}
////================End of getting list of all dog breeds==================////

////================Getting the random image==================////

function locationHash (hash){
    //let hash; 
    if(window.location.hash) { 
        let dogBreed = window.location.hash.substring(1); 
        console.log(dogBreed);
        hash = "https://dog.ceo/api/breed/"+ dogBreed +"/images/random"; 
    } else { 
        hash = "https://dog.ceo/api/breeds/image/random";
    }
    return hash;
}

function getRandomImages() {
    let xml = new XMLHttpRequest
    xml.open("GET", locationHash());
    //xml.open('GET', 'https://dog.ceo/api/breeds/image/random');
    xml.addEventListener("load", parseImage);
    xml.send();
    
    let newImageBtn = document.querySelector("#newImageBtn");
    newImageBtn.addEventListener("click", getRandomImages);
    //newImageBtn.addEventListener("click", refresh);
}
getRandomImages();

// function refresh() {
//     location.reload();
// }

// Getting images respective to breed
function getBreedImages(e){
    let dog = e.target.textContent;
    console.log(dog);
    window.location.hash = "#" + dog;
    let xml = new XMLHttpRequest
    xml.open("GET", locationHash());
    //xml.open("GET", "https://dog.ceo/api/breed/"+ dog +"/images/random");
    xml.addEventListener("load", parseImage);
    xml.send();

    let button = document.querySelector("#newImageBtn");
    button.addEventListener("click", getRandomImages);
}

//Parsing json data from 'https://dog.ceo/api/breeds/image/random'
function parseImage() {    
    let randomImageDisplay = document.querySelector("#randomImageDisplay");
    randomImageDisplay.innerHTML = "";
    let parsedImg = JSON.parse(this.responseText);
    let img = document.createElement("img");
    console.log(parsedImg.message)
    img.setAttribute("src", parsedImg.message);
    randomImageDisplay.appendChild(img);
    let text = JSON.stringify(parsedImg.message);
    breedNameDisplay(text);
}

// Display respective breed name
function breedNameDisplay(breedUrl){
    let array = [];
    array = breedUrl.split("/");
    let breedNameDisplay = document.querySelector("#breedNameDisplay");
    breedNameDisplay.textContent = array[4];
}

//Rendering images on webpage
function renderImg(imgData) {
    //Checking for duplicate images
    let imageCheck = document.querySelector("img");
    if (imageCheck) {
        main.removeChild(imageCheck);
    }
    let img = document.createElement("img");
    img.setAttribute("src", imgData);
    main.appendChild(img);
}
////================End of getting the random image==================////

////================Getting sub breed data respective to breed ==================////
let breed;
function getSubBreed(e) {
    console.log(parsedData);
    console.log(parsedData.message);
    let ul = document.querySelector("#breedList");
    ul.innerHTML = "";
    for (let breed in parsedData.message) {
        let array = parsedData.message[breed];
        if (breed === e.target.textContent) {
            for (let j in array) {
                let li = document.createElement("li");
                li.textContent = array[j];
                ul.appendChild(li);
            }
        }
    }
    breed = e.target.textContent;
    let newImageBtn = document.querySelector("#newImageBtn");
    newImageBtn.removeEventListener("click", getRandomImages);
    newImageBtn.addEventListener("click", getSubBreedImg);

    getSubBreedImg();
}

////================End of getting sub breed data respective to breed ==================////

////================Getting sub breed image ==================////
function getSubBreedImg() {
    let xml = new XMLHttpRequest
    xml.open("GET", "https://dog.ceo/api/breed/" + breed + "/images/random");
    xml.addEventListener("load", parseImage);
    xml.send();
}
////================End of getting sub breed image ==================////






