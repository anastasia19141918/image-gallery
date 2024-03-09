const CLIENT_ID = 'mJku6HcmVmVb2dbn8FIe0az3leZIcaeqlQzAgMA_89M';//SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo //e2077ad31a806c894c460aec8f81bc2af4d09c4f8104ae3177bb809faf0eac17
const imgGallery = document.getElementById('gallery__imges');
const inputImg = document.getElementById('header__input');
const inputSearh = document.getElementById('header__search-icon');


async function getData () {
  const url = `https://api.unsplash.com/search/photos?query=coffe&client_id=mJku6HcmVmVb2dbn8FIe0az3leZIcaeqlQzAgMA_89M&per_page=30`;
  const res = await fetch(url);
  const data = await res.json();
  showDate (data);
}

getData ();

function showDate (data) {
  const arraw = Object.entries(data);
  const newArraw = arraw[2][1];
  newArraw.map(function(el){
  const img = document.createElement('img');
  img.src = el.urls.regular;
  img.classList.add('gallery__img');
  img.alt = `image`;
  imgGallery.appendChild(img);
  });
}

function searchData(el) {
 
   if(inputImg.value) {
    const elemens = document.querySelectorAll('img');
    for(elemn of elemens) {
      elemn.remove();
    }

    async function getData () {
      const url = `https://api.unsplash.com/search/photos?query=${inputImg.value}&client_id=mJku6HcmVmVb2dbn8FIe0az3leZIcaeqlQzAgMA_89M&per_page=30`;
      const res = await fetch(url);
      const data = await res.json();
      showDate (data);
    }
    getData ()
  }
}

inputSearh.addEventListener('click', searchData);


inputImg.addEventListener('keypress', function(el){
  if(el.code === 'Enter') {
    searchData();
  }
});


