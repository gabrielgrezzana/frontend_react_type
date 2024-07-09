import ServiceGetFields from "../service/service.fields";
import Fields from "../interface/filds.interface";

interface Field {
  item: Fields[];
}

class ControllerGetFields {
  public async getFields(): Promise<Array<Field>> {
    const get = new ServiceGetFields();
    const getted = get.getAllFields();
    return getted;
  }
}

export default ControllerGetFields;