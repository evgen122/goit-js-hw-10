import axios from 'axios';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

axios.defaults.headers.common['x-api-key'] =
  'live_FEvTz5K5LqJQeCheyolHOvxNrx0foxzlFWzPJKK3QQcWirMU4Zh51kVFnC8wOO9U';

const elements = {
  breedSellect: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};

// const urlBreeds = 'https://api.thecatapi.com/v1/breeds';
const urlImg = 'https://api.thecatapi.com/v1/images/search';

function fetchBreeds(urlBreeds) {
  return axios.get(urlBreeds).then(response => {
    console.log(response.data);
    let markup = response.data
      .map(breed => {
        return `<option value='${breed.id}'>'${breed.name}'</option>`;
      })
      .join('');
    elements.breedSellect.insertAdjacentHTML('beforeend', markup);
    new SlimSelect({
      select: '#selectElement',
    });
  });
}

function fetchCatByBreed(elm) {
  const breedId = elm.target.value;
  //   console.log('breedId', breedId);
  return axios.get(`${urlImg}?breed_ids=${breedId}`).then(response => {
    // console.log(`${urlImg}?breed_ids=${breedId}`);
    const infoBreed = `<img class="cat-pictures" src="${response.data[0].url}" alt="${response.data[0].id}" 
        width="${response.data[0].width}px" height="${response.data[0].height}px">
    <h2 class="cat-info-breed">${response.data[0].breeds[0].name}</h2>
    <p class="cat-info-desc">${response.data[0].breeds[0].description}</p>
    <p class="cat-info-temp">${response.data[0].breeds[0].temperament}</p>`;
    // infoBreed = infoBreed.join();
    elements.catInfo.insertAdjacentHTML('beforeend', infoBreed);
  });
}

export { fetchBreeds, fetchCatByBreed };
