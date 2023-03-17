import api from "./api";

class UserApi {
  getAllUser() {
    return api.get(`api`);
  }
}

export default new UserApi();
