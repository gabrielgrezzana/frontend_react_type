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
      logged = true;
    })
    .catch(():void => {logged=false})
    
    return logged;
  }

  public async CreateUserService(email:string,password:string,name:string):Promise<boolean> {   
    let registred = false;
    await axios.post("http://localhost:8000/api/user/create",{
      name: name,
      email: email,
      password: password
    })
    .then(():void => {
      registred = true;      
    }).catch(():void => {
      registred = false;
    })    
    return registred;
  }

  
}

export default LoginService;
