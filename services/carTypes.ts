import axios from 'axios';

class CarTypesAPI {
  fetchCarTypes = async (SetState): Promise<void> => {
    const result = await this.fetchAllCarTypes(
      `${process.env.NEXT_PUBLIC_BASE_URL}/getvehiclevariablevalueslist/Vehicle%20Type?format=json`
    );
    SetState(
      result.Results.map((item) => ({ Name: item.Name, Id: item.Name }))
    );
  };
  fetchCarMakers = async (SetState, type): Promise<void> => {
    const result = await this.fetchAllCarTypes(
      `${process.env.NEXT_PUBLIC_BASE_URL}/GetMakesForVehicleType/${type}?format=json`
    );
    SetState(
      result.Results.map((item) => ({ Name: item.MakeName, Id: item.MakeId }))
    );
  };
  private fetchAllCarTypes = async (url) => {
    const { data } = await axios.get(url);
    return data;
  };
}
module.exports = new CarTypesAPI();
