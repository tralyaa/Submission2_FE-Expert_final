import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  // eslint-disable-next-line consistent-return
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();

    if (responseJson.error === false) {
      return responseJson.restaurants;
    }
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default RestaurantSource;
