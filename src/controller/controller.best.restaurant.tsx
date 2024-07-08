import ServiceBestRestaurant from "../service/service.best.restaurant";
import Restaurant from "../interface/bestrestaurant.interface";

class ControllerBestRestaurant {
  public async controllerBestRestaurant():Promise<Restaurant> {
    const data = new ServiceBestRestaurant();
    const best = await data.BestRestaurant();
    return best;
  }
}

export default ControllerBestRestaurant;