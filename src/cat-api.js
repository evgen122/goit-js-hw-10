import axios from 'axios';
// import SlimSelect from 'slim-select';
// import 'slim-select/dist/slimselect.css';

axios.defaults.headers.common['x-api-key'] =
  'live_FEvTz5K5LqJQeCheyolHOvxNrx0foxzlFWzPJKK3QQcWirMU4Zh51kVFnC8wOO9U';

// const elements = {
//   breedSellect: document.querySelector('.breed-select'),
//   loader: document.querySelector('.loader'),
//   error: document.querySelector('.error'),
//   catInfo: document.querySelector('.cat-info'),
// };

// const urlBreeds = 'https://api.thecatapi.com/v1/breeds';
const urlImg = 'https://api.thecatapi.com/v1/images/search';

function fetchBreeds(urlBreeds) {
  // elements.breedSellect.hidden = true;
  // elements.loader.hidden = false;
  return axios.get(urlBreeds);
  // .then(response => {
  //   // console.log(response.data);
  //   let markup = response.data
  //     .map(breed => {
  //       return `<option value='${breed.id}'>'${breed.name}'</option>`;
  //     })
  //     .join('');
  //   elements.breedSellect.insertAdjacentHTML('beforeend', markup);
  //   new SlimSelect({
  //     select: '#selectElement',
  //   });
  // })
  // .catch(error => {
  //   elements.error.hidden = false; // handle error
  //   // .log(error);
  // })
  // .finally(function () {
  //   elements.breedSellect.hidden = false;
  //   elements.loader.hidden = true; // always executed
  // });
}

function fetchCatByBreed(breedId) {
  // elements.breedSellect.hidden = true;
  // elements.loader.hidden = false;
  // elements.error.hidden = true;

  // const breedId = elm.target.value;

  //   console.log('breedId', breedId);
  return axios.get(`${urlImg}?breed_ids=${breedId}`);
  // .then(response => {

  //   const infoBreed = `<img class="cat-pictures" src="${response.data[0].url}" alt="${response.data[0].id}"
  //     width="50%">
  // <h2 class="cat-info-breed">${response.data[0].breeds[0].name}</h2>
  // <p class="cat-info-desc">${response.data[0].breeds[0].description}</p>

  // <p class="cat-info-temp"><b>Temperament:  </b>${response.data[0].breeds[0].temperament}</p>`;

  // const infoBreedData = {
  //   url: response.data[0].url,
  //   alt: response.data[0].id,
  //   name: response.data[0].breeds[0].name,
  //   description: response.data[0].breeds[0].description,
  //   temperament: response.data[0].breeds[0].temperament,
  // };
  // console.log(infoBreedData);

  // elements.catInfo.innerHTML = infoBreed;
  // elements.catInfo.insertAdjacentHTML('beforeend', infoBreed);

  // })

  // .catch(error => {
  //   elements.error.hidden = false; // handle error
  // })
  // .finally(function () {
  //   elements.breedSellect.hidden = false;
  //   elements.loader.hidden = true; // always executed
  // });
}

export { fetchBreeds, fetchCatByBreed };
