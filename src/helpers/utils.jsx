import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
let setRequestAuthHeader = (accessToken) => {
  axios.defaults.headers.common['Authorization'] = accessToken;
}
let userAccessToken = cookies.get('access_token');

if (userAccessToken)
    setRequestAuthHeader(userAccessToken);


export const mapBoxToken = 'pk.eyJ1IjoiZ2VldCIsImEiOiJjajFvb3pkb3gwMDgzMnhtbGV3NzlsdWRlIn0.M1vn6pjT_GVa8nRD4pRXEw';

export function cacheBuster(url){
    const cache_buster = new Date().getTime();
    if (url instanceof URL) {
        if (url.search.indexOf('?') !== -1) {
          url.search += `&_=${cache_buster}`;
        } else {
          url.search += `?_=${cache_buster}`;
        }
      } else {
        if (url.indexOf('?') !== -1) {
          url += `&_=${cache_buster}`;
        } else {
          url += `?_=${cache_buster}`;
        }
      }
      return url;
}

export function isAuthnicated(){
  return !!cookies.get('access_token');
}

export function setCookie(name , data){
  cookies.set(name, data);
}

export function setPolygonData(name , data){
  localStorage.setItem(name, JSON.stringify(data));
}

export function getPolygonData(name){
  return localStorage.getItem(name);
}

export function removeCookies(name){
  cookies.remove(name);
}