import DhAjax from 'services/DhAjax';
const dhAjax = new DhAjax();

export default class MainService {
  getTest (param, callback) {
    dhAjax.dhGet('webapi/index/getUser', param, callback);
  }
  userLogin (param, callback) {
    dhAjax.dhPost('webapi/login', param, callback);
  }
  userLogout (param, callback) {
    dhAjax.dhGet('webapi/account/logout', param, callback);
  }
  getActions (param, callback) {
    dhAjax.dhGet('webapi/enforceActions', param, callback);
  }
};
