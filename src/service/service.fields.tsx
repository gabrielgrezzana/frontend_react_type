import axios from 'axios'
import Fields from '../interface/filds.interface';

interface Field {
  item: Fields[];
}

class ServiceGetFields {  
  public async getAllFields(): Promise<Array<Field>> {    
    let data: Array<Field> = [];
    await axios.get("http://localhost:8000/api/restaurant/read-all")
    .then((response) => {
      console.log(response)
      data = response.data;
    })
    .catch((error) => console.log(error))

    return data;
  }
}

export default ServiceGetFields;