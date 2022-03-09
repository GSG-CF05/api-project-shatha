let body = document.querySelector('body')
let input= document.querySelector('.input-value')
let buttonSearch= document.querySelector('.but-search')

let container = document.createElement('div')
container.classList.add('container')
body.appendChild(container)

buttonSearch.addEventListener('click', ()=>{
fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input.value}`).then(response => response.json())
.then((data)=>{
    container.innerHTML=" ";
    let drinks=data.drinks;
    drinks.forEach((juice)=>{

        let card = document.createElement('div')
        card.setAttribute('class','card')
        container.appendChild(card)

        let img= document.createElement('img')
        img.src= juice.strDrinkThumb
        card.appendChild(img)

        let nameJuice= document.createElement('p')
        nameJuice.textContent= juice.strDrink
        card.appendChild(nameJuice)
        input.value=" ";
    });

}).catch(error=> console.log(error)) })

    //    let youtubeLink = document.createElement("a");
    //     youtubeLink.href = juice.strVideo;
    //     youtubeLink.target = "_blank";
    //     card.appendChild(youtubeLink);