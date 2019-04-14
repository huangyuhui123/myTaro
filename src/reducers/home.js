import {
    HOME_INFO,
    HOME_SEARCH_COUNT
} from '@constants/home'

const INITIAL_STATE = {
    homeInfo: {},
    searchCount: 0,
    pin: [],
    recomment: []
}


export default function home(state = INITIAL_STATE, action) {
    switch(action.type) {
        case HOME_INFO: {
            return {
                ...state,
                homeInfo: action.payload
            }
        }
        case HOME_SEARCH_COUNT: {
            return {
                ...state,
                searchCount: action.payload.count
            }
        }
        default:
            return state
    }
}