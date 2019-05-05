import {fetch, fetch_json} from '../api'
export default {
  /* 获取图片上传的signature */
  getSignature (params) {
    return fetch('http://api.hostdev.ennjoy.cn/YinKe/Api/public/UploadFile/Policy', params)
  },
  // 获取左侧菜单
  comGetLeftMenu (params) {
    return fetch_json('/aed-console/privilege/menu/left', params)
  }
}
