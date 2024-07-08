import axios from 'axios';
import Restaurant from '../interface/bestrestaurant.interface';


class ServiceBestRestaurant {
  public async BestRestaurant(): Promise<Restaurant> {        
    let bestRestaurant:Restaurant = {
      votes:0,      
      description:"",
      id:0,
      image:"",
      name:"",
      updated_at:undefined,
      created_at:undefined,
    };    
    await axios.get("http://localhost:8000/api/votation/read-results")
    .then((response) => {
      const data:Restaurant[] = response.data      

      bestRestaurant = data.reduce((max,item) => (item.votes > max.votes ? item : max), data[0]);
      return bestRestaurant;
    })
    .catch((err) => {
      console.log(err)
    })
    return bestRestaurant;
    
  }
}

export default ServiceBestRestaurant;

