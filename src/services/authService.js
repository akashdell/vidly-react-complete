import jwtDecode from 'jwt-decode';
import http from './httpService';
import { apiUrl } from '../config.json'


const apiEndPoint = apiUrl + "/auth";
const tokenKey = "token";

http.setJwt(localStorage.getItem('token'))

export async function login(user) {
  const { data: jwt } = await http.post(apiEndPoint, {
    email: user.username,
    password: user.password
  });
  localStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);

  }
  catch (ex) {
    return null
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login, logout, getCurrentUser, loginWithJwt, getJwt
}