import Taro from '@tarojs/taro'


export default async function fetch(options) {
    const { url,payload, method = 'GET', showToast = true, } = options
    if(method === 'POST') {
        header['content-type'] = 'application/json'
    }

    return Taro.request({
        url,method,
        data:payload,
        header
    }).then( async(res) => {
        const  { code, data } = res.data
        if(code !== CODE_SUCCESS) {
            if(code === CODE_AUTH_EXPIREO){
                await updateStorage({})
            }
            return Promise.reject(res.data)
        }

        if(url === API_USET_LOGIN) {
            await updateStorage(data)
        }
    })
};
