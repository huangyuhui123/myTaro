/**
 * NOTE HOST、HOST_M 是在 config 中通过 defineConstants 配置的
 * 只所以不在代码中直接引用，是因为 eslint 会报 no-undef 的错误，因此用如下方式处理
 */
/* eslint-disable */
export const host = HOST
export const hostM = HOST_M
/* eslint-enable */


// pic
export const CDN = 'https://yanxuan.nosdn.127.net'


//home
export const API_HOME = `${host}/xhr/index/index.json`
export const API_HOME_SEARCH_COUNT = `${host}/xhr/search/displayBar.json`

//USER
export const API_USER = `${host}/xhr/user/getDetail.json`
export const API_USER_LOGIN = `${host}/xhr/u/mailLogin.json`