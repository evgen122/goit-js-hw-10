import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_FEvTz5K5LqJQeCheyolHOvxNrx0foxzlFWzPJKK3QQcWirMU4Zh51kVFnC8wOO9U';

const urlImg = 'https://api.thecatapi.com/v1/images/search';

function fetchBreeds(urlBreeds) {
  return axios.get(urlBreeds);
}

function fetchCatByBreed(breedId) {
  return axios.get(`${urlImg}?breed_ids=${breedId}`);
}

export { fetchBreeds, fetchCatByBreed };
