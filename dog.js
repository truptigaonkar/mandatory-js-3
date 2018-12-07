// Getting list of all dog breeds
function getBreeds(){
    let xml = new XMLHttpRequest
    xml.open("GET", "https://dog.ceo/api/breeds/list/all");
    xml.addEventListener("load", getBreedsParse);
    xml.send();
}
getBreeds(); // Declare function

//Parsing json data from breed list 'https://dog.ceo/api/breeds/list/all'
function getBreedsParse(){
    let parseData = JSON.parse(this.responseText);
    console.log(parseData.message);
    renderText(parseData.message);
}

//Rendering HTML content in to list
function renderText(getBreedsParseData){
    let myUl = document.querySelector("#getBreeds");
    for (let i in getBreedsParseData){
        let li = document.createElement("li");
        li.textContent = i;
        myUl.appendChild(li);
    }
}
////--------End of list of all dog breeds-----------------------------------////