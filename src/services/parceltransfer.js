import Api from './Api'

export default {
    accept( info){
        return Api().post('/order',info)

    },
    getTransaction( info){
        return Api().get('/order',{params:info})

    }

}