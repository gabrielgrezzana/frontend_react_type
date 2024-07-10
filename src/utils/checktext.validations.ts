class CheckTextValidations{

  public checkTest(data:string):boolean{
    if(data.length === 0){
      return false
    }else{
      return true;
    }
  }
}

export default CheckTextValidations;