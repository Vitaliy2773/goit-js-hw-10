
import { fetchBreeds, fetchCatByBreed } from "./cat-api";


import SlimSelect from 'slim-select'
import 'slim-select/dist/slimselect.css';
import Notiflix from "notiflix";


const ref = {
    selector: document.querySelector('.breed-select'),
    catInfo: document.querySelector('.cat-info'),
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error'),
};
const { selector, catInfo, loader, error } = ref;

loader.classList.replace('loader', 'is-hidden');
error.classList.add('is-hidden');
catInfo.classList.add('is-hidden');

selector.addEventListener('change', onChangeSelect);


fetchBreeds()
.then(data => {
    selector.innerHTML = data.map(item => {
        return `<option value="${item.id}">${item.name}</option>`
    })
        .join("");
     selector.classList.remove('is-hidden');
    new SlimSelect({
        select: selector,
    });
   
    })
.catch(onFetchError);



function onChangeSelect(e) {
    loader.classList.replace('is-hidden', 'loader');
    catInfo.classList.add('is-hidden');

    const breedId = e.currentTarget.value;
    fetchCatByBreed(breedId)
    .then(data => {
        loader.classList.replace('loader', 'is-hidden');
        selector.classList.remove('is-hidden');
        const { url, breeds } = data[0];
        
        catInfo.innerHTML = `<div class="img"><img src="${url}" alt="${breeds[0].name}" width="500"/></div><div class="box cat-information"><h1>${breeds[0].name}</h1><p>${breeds[0].description}</p><p><b>Temperament:</b> ${breeds[0].temperament}</p></div>`
        catInfo.classList.remove('is-hidden');
    })
    .catch(onFetchError);
};

function onFetchError(error) {
    
    loader.classList.replace('loader', 'is-hidden');

    Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page or select another cat breed!')
}


































