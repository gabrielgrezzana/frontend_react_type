import axios from 'axios'

class LoginService {  

  public async LoginService(email:string,password:string):Promise<boolean> {    
    let logged = false;
    await axios.post("http://localhost:8000/api/auth/login", {
      email:email,
      password:password
    })
    .then((response) => {            
      localStorage.setItem('authToken', response.data.access_token)      
      console.log(response);
      logged = true;
    })
    .catch((err):void => {console.log(err)})
    
    return logged;
  }

  public async CreateUserService(email:string,password:string,name:string):Promise<boolean> {
    let registred = false;
    await axios.post("http://localhost:8000/api/user/create",{
      name: name,
      email: email,
      password: password
    })
    .then(response => {
      registred = true;
      console.log(response)
    }).catch(error => {
      console.log("aconteceu algum erro na chamada"+error)
    })
    return registred;
  }

  
}

export default LoginService;
