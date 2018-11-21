import http from './httpService';
import { apiUrl } from '../config.json'

const movieEndPoint = apiUrl + "/users"

export function register(user) {
  return http.post(movieEndPoint, {
    email: user.username,
    password: user.password,
    name: user.name
  })
}