import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantKatalog } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Liked Restaurant</h2>
        <div id="restaurant" class="restaurant">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#restaurant');

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantKatalog(restaurant);
    });
  },
};

export default Like;
