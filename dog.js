let mainBreedList = document.querySelector('#mainBreedList');
////================Getting list of all dog breeds==================////
function getBreeds() {
    let xml = new XMLHttpRequest
    xml.open("GET", "https://dog.ceo/api/breeds/list/all");
    xml.addEventListener("load", getBreedsParse);
    xml.send();
}
getBreeds(); // Declare function

//Parsing json data from breed list 'https://dog.ceo/api/breeds/list/all'
function getBreedsParse() {
    let parseData = JSON.parse(this.responseText);
    console.log(parseData.message);
    renderText(parseData.message);
}

//Rendering HTML content in to list
function renderText(getBreedsParseData) {
    let myUl = document.querySelector("#getBreeds");
    for (let i in getBreedsParseData) {
        let li = document.createElement("li");
        li.textContent = i;
        myUl.appendChild(li);
    }
}
////================Emd of getting list of all dog breeds==================////

////================Getting the random image==================////
function getRandomImages() {
    let xml = new XMLHttpRequest
    xml.open("GET", "https://dog.ceo/api/breeds/image/random");
    xml.addEventListener("load", getRandomImagesParse);
    xml.send();
    //Adding event listner to the button to get the images randomly
    let getBtn = document.querySelector('#getBtn');
    getBtn.addEventListener('click', getRandomImages);
}
getRandomImages(); // Declare function

//Parsing json data from 'https://dog.ceo/api/breeds/image/random'
function getRandomImagesParse() {
    let parseData = JSON.parse(this.responseText);
    console.log(parseData);
    renderImg(parseData.message);
}

//Rendering images on webpage
function renderImg(imgData) {
    // Avoiding to get multiple images
    let checkImg = document.querySelector("img");
    if (checkImg) {
        mainBreedList.removeChild(checkImg);
    }
    // Create image element
    let img = document.createElement("img");
    img.setAttribute("src", imgData);
    mainBreedList.appendChild(img);
}
////================End of getting the random image==================////

