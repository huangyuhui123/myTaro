import {
    HOME_INFO,
    HOME_SEARCH_COUNT
}  from '@constants/home'
import {
    API_HOME,
    API_HOME_SEARCH_COUNT
} from '@constants/api'

import {createAction } from '@utils/redux'

/**
 * 首页数据
 * @param {*} payload
 */

 export const dispatchHome = payload => createAction({
     url: API_HOME,
     type: HOME_INFO,
     payload
 })

 export const dispatchSearchCount = payload => createAction({
     url: API_HOME_SEARCH_COUNT,
     type: HOME_SEARCH_COUNT,
     payload
 })