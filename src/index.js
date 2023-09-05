import axios from "axios";
import Notiflix from "notiflix";
import SlimSelect from 'slim-select'

// import { fetchBreeds } from "./cat-api";
// import { fetchCatByBreed } from "./cat-api";

const BASE_URL = 'https://api.thecatapi.com/v1'
 
const select = document.querySelector('.breed-select')
console.log(select);

select.addEventListener('select', onSearch)

function onSearch(e) {
    e.preventDefault()
fetchBreeds().then(data => console.log(data)).catch(error => console.log(error));
}


const info = document.querySelector('.cat-info')
console.log(info);







axios.defaults.headers.common["x-api-key"] = "live_1RrJkkNZQCz4cGk0RfSfm3CMNpEaCyxSXgACrrNyIKEXDp5uetPZM7jC7Kcvw1CQ";
new SlimSelect({
    select: 'select.breed-select',
     events: {
    search: fetchCatByBreed('abys').then(data => console.log(data)).catch(err => console.log(err))
  
  },
})

// fetch('https://api.thecatapi.com/v1/images/0XYvRd7oD')
//     .then(response => {
//     return response.json();
//     })
//     .then(cat => {
//         console.log(cat)
//     })
//     .catch(error => {
//     console.log(error)
// })

function fetchBreeds() {

    return fetch(`${BASE_URL}/breeds`)
        .then(resp => {
            if (!resp.ok) {
            throw new Error(resp.statusText)
            }
            
            return resp.json()
    })

}

fetchBreeds().then(data => console.log(data)).catch(error => console.log(error));

 function fetchCatByBreed(breedId) {
    

     return fetch(`${BASE_URL}/images/search?breed_ids=${breedId}`)
         .then(response => {
         if (!response.ok) {
             throw new Error(response.statusText)
         }

         return response.json()
    })     
}

fetchCatByBreed('abys').then(data => console.log(data)).catch(err => console.log(err));

function createMarkup(arr) {

    return arr.map().join('')
}


