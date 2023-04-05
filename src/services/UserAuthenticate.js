import Api from './Api'

export default {
    register( items){
        return Api().post('user/signup',{user:items})

    },
    logins( user){
        return Api().post('user/login',user)

    }

}