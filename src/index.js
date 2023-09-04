import axios from "axios";
import Notiflix from "notiflix";
import SlimSelect from 'slim-select'
import { fetchBreeds } from "./cat-api";
import { fetchCatByBreed } from "./cat-api";




axios.defaults.headers.common["x-api-key"] = "live_cqgmYGTzR9Fukx0vortItKF3qQaACN7LGfYIMw7Q1msPrScV75O4Q0MbGSUCX1Ry";
new SlimSelect({
  select: ''
})