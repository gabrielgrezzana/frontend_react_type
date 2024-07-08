import LoginService from "../service/service.login"

class LoginController {


  public async loginController(email:string,password:string):Promise<boolean> {    
    //logica validacao
    const login = new LoginService();    
    const logged = await login.LoginService(email,password);
    return logged;

  }

  public async CreateController(email:string,password:string,name:string):Promise<boolean> {
    //logica validacao
    const createuser = new LoginService();
    const registred = await createuser.CreateUserService(email,password,name)
    return registred;
  }
}

export default LoginController;