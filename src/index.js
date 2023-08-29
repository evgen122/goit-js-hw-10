import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import axios from 'axios';
import { fetchBreeds, fetchCatByBreed } from './cat-api';

axios.defaults.headers.common['x-api-key'] =
  'live_FEvTz5K5LqJQeCheyolHOvxNrx0foxzlFWzPJKK3QQcWirMU4Zh51kVFnC8wOO9U';

const elements = {
  breedSellect: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};

const urlBreeds = 'https://api.thecatapi.com/v1/breeds';
// const urlImg = 'https://api.thecatapi.com/v1/images/search';

elements.breedSellect.addEventListener('change', fetchCatByBreed);

elements.error.hidden = true;

fetchBreeds(urlBreeds);
// fetchCatByBreed();
