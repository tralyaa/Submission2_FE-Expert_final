import CONFIG from '../../globals/config';

// katalog resto
const createRestaurantKatalog = (restaurant) => `
<div class="resto-item">
<div class="resto-item__header">
  <img class="resto-item__header__poster" alt="${restaurant.title}"
  src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://restaurant-pi.dicoding.dv/list'}" crossorigin="anonymous">
  <div class="resto-item__header__rating">
    <p>⭐️<span class="resto-item__header__rating__score">${restaurant.rating}</span></p>
  </div>
</div>
<div class="resto-item__content">
  <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
  <p>${restaurant.city}</p>
</div>
</div>

`;

// detail resto
const createRestaurantDetailTemplate = (restaurant) => `
<h2 class="resto__title">${restaurant.name}</h2>
<img class="resto__poster" src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}"alt="${restaurant.name}" crossorigin="anonymous" />

<div class="resto__info">
  <h3 tabindex="0">Information</h3>
  <h4>Resto Name</h4>
  <p>${restaurant.name}</p>
  <h4>City</h4>
  <p>${restaurant.city}</p>
  <h4>Address</h4>
  <p>${restaurant.address} minutes</p>
</div>
<div class="resto__overview">
  <h3 tabindex="0">Description</h3>
  <p>${restaurant.description}</p>
</div>
<div class="menu__overview">
    <div class="menu__overview">
    <h3 tabindex="0" class="menu">Menu</h3>
    <h4>Foods</h4>
    <ul class="menu__list">${restaurant.menus.foods.map((categorie) => `<li>${categorie.name}</li>`).join('')}<ul>
    </div>
    <div class="menu__overview">
    <h4>Drinks</h4>
    <ul class="menu__list">${restaurant.menus.drinks.map((categorie) => `<li>${categorie.name}</li>`).join('')}</ul>
    </div>
</div>
<div class="cust__overview">
    <h3 tabindex="0" class="cust">Customer Review</h3>
    </div class="review__list">
    ${restaurant.customerReviews.reduce((show, value) => show.concat(`<br><div class="list">
    <p>${value.name}</p>
    <p>${value.review}</p>
    </div>
    `), '')}
    </div>
</div>
`;

const createLikeButtonTemplate = () => `
  <button tabindex="0" aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button tabindex="0" aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantKatalog,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
