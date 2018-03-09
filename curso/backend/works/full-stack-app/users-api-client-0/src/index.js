const rp = require('request-promise')
const protocol = process.env.REACT_APP_API_PROTOCOL
const host = process.env.REACT_APP_API_HOST
const port = process.env.REACT_APP_API_PORT
const api = {
    _baseUrl() {
        with (this) {
            return `${protocol}://${host}:${port}/api`
        }
    },

    _call(method, path, body) {
        return rp({
            method,
            uri: `${this._baseUrl()}/${path}`,
            body,
            json: true
        })
    },

    list() {
        return this._call('get', 'users')
    },

    register(name, surname, email, username, password) {
        return this._call('post', 'user', { name, surname, email, username, password })
    },

    remove(id, username, password) {
        return this._call('delete', `user/${id}`, { username, password })
    },

    retrieve(id) {
        return this._call('get', `user/${id}`)
    },

    update(id, name, surname, email, newUsername, newPassword, username, password) {
        return this._call('put', `user/${id}`, { name, surname, email, newUsername, newPassword, username, password })
    }
}

module.exports = api