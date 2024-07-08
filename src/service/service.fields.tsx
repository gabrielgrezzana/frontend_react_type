import axios from 'axios'

class ServiceGetFields {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async getAllFields(): Promise<Array<any>> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let data: Array<any> = [];
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