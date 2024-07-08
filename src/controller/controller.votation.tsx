import ServiceVotation from "../service/service.votation";

class ControllerVotation {
  public async votationController(id_restaurant:number):Promise<string>{
    const voting = new ServiceVotation();
    const vote = await voting.Votation(id_restaurant);
    return vote;
  }
}

export default ControllerVotation;