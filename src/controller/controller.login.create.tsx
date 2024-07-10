import LoginService from "../service/service.login"
import CheckTextValidations from "../utils/checktext.validations";

class LoginController {


  public async loginController(email:string,password:string):Promise<boolean> {    
    const check = new CheckTextValidations();
    const login = new LoginService();    

    let valide = check.checkTest(email);
    valide = check.checkTest(password);

    if(!valide){
      return false;
    }

    const logged = await login.LoginService(email,password);
    return logged;

  }

  public async CreateController(email:string,password:string,name:string):Promise<boolean> {
    const check = new CheckTextValidations();
    const createuser = new LoginService();
    
    let valide = check.checkTest(email);
    valide = check.checkTest(password);
    valide = check.checkTest(name);

    if(!valide){
      return false;
    }

    const registred = await createuser.CreateUserService(email,password,name)
    return registred;
  }
}

export default LoginController;