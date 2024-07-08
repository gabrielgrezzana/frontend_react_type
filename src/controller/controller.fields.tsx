import ServiceGetFields from "../service/service.fields";

class ControllerGetFields {
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async getFields(): Promise<Array<any>> {
    const get = new ServiceGetFields();
    const getted = get.getAllFields();
    return getted;
  }
}

export default ControllerGetFields;