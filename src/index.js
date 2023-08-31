import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { fetchBreeds, fetchCatByBreed } from './cat-api';

const elements = {
  breedSellect: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};

const urlBreeds = 'https://api.thecatapi.com/v1/breeds';
const urlImg = 'https://api.thecatapi.com/v1/images/search';

elements.error.hidden = true;
elements.loader.hidden = false;
elements.breedSellect.hidden = true;

elements.breedSellect.addEventListener('change', showBreed);

fetchBreeds(urlBreeds)
  .then(response => {
    let markup = response.data
      .map(breed => {
        return `<option value='${breed.id}'>${breed.name}</option>`;
      })
      .join('');
    elements.breedSellect.insertAdjacentHTML('beforeend', markup);
    new SlimSelect({
      select: '#selectElement',
    });
  })
  .catch(error => {
    elements.error.hidden = false; // handle error
  })
  .finally(function () {
    elements.breedSellect.hidden = false;
    elements.loader.hidden = true; // always executed
  });

function showBreed(elm) {
  elements.breedSellect.hidden = true;
  elements.loader.hidden = false;
  elements.error.hidden = true;
  const breedId = elm.target.value;

  fetchCatByBreed(breedId)
    .then(response => {
      elements.loader.hidden = true;
      const infoBreed = `<img class="cat-pictures" src="${response.data[0].url}" alt="${response.data[0].id}"
      width="50%">
      <h2 class="cat-info-breed">${response.data[0].breeds[0].name}</h2>
      <p class="cat-info-desc">${response.data[0].breeds[0].description}</p>
      <p class="cat-info-temp"><b>Temperament:  </b>${response.data[0].breeds[0].temperament}</p>`;

      elements.catInfo.innerHTML = infoBreed;
    })
    .catch(error => {
      elements.catInfo.innerHTML = '';
      elements.error.hidden = false; // handle error
    })
    .finally(function () {
      elements.breedSellect.hidden = false;
      elements.loader.hidden = true; // always executed
    });
}
