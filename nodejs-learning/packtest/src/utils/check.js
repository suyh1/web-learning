/**
 * 功能： 验证用户名和密码长度
 */
// src这个文件夹是交给webpack操作的，它是支持ECMA
// 命名导出
export const checkUname = (uname) => {
  return uname.length >= 8
}
export const checkPwd = (pwd) => {
  return pwd.length >= 6
}
// 默认导出
export default {
  checkUname,
  checkPwd
}

/**
 * -packtest
 * --package.json
 * --src
 * ---index.js
 * ---utils
 * ----check.js
 */