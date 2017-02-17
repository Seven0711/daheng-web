import DhAjax from 'services/DhAjax';
const dhAjax = new DhAjax();

export default class MainService {
  getTest (param, callback) {
    dhAjax.dhGet('webapi/index/getUser', param, callback);
  }
  // 登录
  userLogin (param, callback) {
    dhAjax.dhPost('webapi/login', param, callback);
  }
  // 退出
  userLogout (param, callback) {
    dhAjax.dhGet('webapi/account/logout', param, callback);
  }
  // 获取证据列表
  getActions (pager,param, callback) {
    dhAjax.dhGet(`webapi/reinforce/list?pager.page=${pager.page}&pager.size=${pager.pageSize}&pager.sort=${pager.sort}`, param, callback);
  }
  // 获取用户信息
  getUserInfo (param, callback) {
    dhAjax.dhGet('webapi/account/get', param, callback);
  }
};
