import axios from "axios";
const BASE_URL = 'https://api.thecatapi.com/v1'

const API_KEY = 'live_1RrJkkNZQCz4cGk0RfSfm3CMNpEaCyxSXgACrrNyIKEXDp5uetPZM7jC7Kcvw1CQ'

axios.defaults.headers.common["x-api-key"] = "live_1RrJkkNZQCz4cGk0RfSfm3CMNpEaCyxSXgACrrNyIKEXDp5uetPZM7jC7Kcvw1CQ";


// export function fetchCatByBreed(breedId) {

//     return axios.get(`${BASE_URL}/images/search?breed_ids=${breedId}`)
//         .then(response => {
//             console.log(response);
//             return response
//         });
// };

// export function fetchBreeds() {

//         return axios.get(`${BASE_URL}/breeds`)
//         .then(response => {
//            console.log(response);
//             return response
//         });
     
// };

export function fetchBreeds() {
  return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

export function fetchCatByBreed(breedId) {
  return fetch(`${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};




