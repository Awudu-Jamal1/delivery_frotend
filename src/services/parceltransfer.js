import Api from './Api'

export default {
    accept( info){
        return Api().post('user/signup',{user:items})

    },
    // logins( user){
    //     return Api().post('user/login',user)

    // }

}