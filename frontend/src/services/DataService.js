import http from '../http-commons'

class DataService {
    postData(data) {
        return http.post('/write-to-database', data)
    }
    getData() {
        return http.get('/status')
    }
}

export default new DataService()