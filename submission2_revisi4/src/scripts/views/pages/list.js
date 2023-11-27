// list = nowplaying.js
import restaurantSource from '../../data/restaurantdb-source';
import { createRestaurantKatalog } from '../templates/template-creator';

const listResto = {
  async render() {
    return `
    <div class="content">
        <h2 class="content__heading">List Restaurant</h2>
        <div id="restaurant" class="restaurant">
        </div>
    </div>
      `;
  },

  async afterRender() {
    const resto = await restaurantSource.restaurantList();
    const restaurantContainer = document.querySelector('#restaurant');
    resto.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantKatalog(restaurant);
    });
  },
};
export default listResto;
