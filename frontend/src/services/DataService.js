import http from '../http-commons'

class DataService {
    post(data) {
        return http.post('/write-to-database', data)
    }
}

export default new DataService()