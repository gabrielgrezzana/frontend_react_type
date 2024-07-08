import axios from "axios"
//localStorage.getItem('authToken'),

interface data {
  id:number;
  name:string;
  email:string;
  created_at:string;
  updated_at:string;    
}

class ServiceVotation {

  
  public async Votation(id_restaurant:number): Promise<string> {
    let vote:string = "";
    let id_user:number = 0;
    let info:data;
    const token = localStorage.getItem('authToken')
    console.log(token)
    console.log("entrou aqui1")
    await axios.post("http://localhost:8000/api/auth/me",{},{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      info = response.data;
      id_user = info.id      
      console.log(info,id_user)
    })
    .catch(() => {
      vote = "Error em axios"
    })

    await axios.post("http://localhost:8000/api/votation/create",{
      userId:id_user,
      restaurantId:id_restaurant
    })
    .then((response) => {
      vote = response.data.message;
      console.log(response)
    } )
    .catch(() => vote="Error em axios")

    console.log(vote+"retornando vote")
    return vote;
  }

  
}

export default ServiceVotation;