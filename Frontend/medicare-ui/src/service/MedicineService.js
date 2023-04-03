import axios from "axios";
const USER_API_BASE_URL = 'http://localhost:9090/medicine/all-medicines';

class MedicineService {
    getMedicinesList() {
      return axios.getaxios.get(USER_API_BASE_URL);
    }
}

export default new MedicineService();
  