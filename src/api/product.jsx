import {cacheBuster} from '../helpers/utils';

const API_URL = process.env.REACT_APP_API_URL;
export default class ProductApi{
    
    static getProducts(pageNumber){
        console.log(API_URL);
        let url = pageNumber!==undefined ?`${API_URL}/v1/products` : `${API_URL}/v1/products?page=1`;
        url = cacheBuster(url);
        return fetch(url, {
            credentials: 'same-origin',
            header:{
                'Accept': 'application/json',
                "Content-Type": "application/json",
            },
            mode: 'no-cors',
            
        }).then(response => {
            return response.json();
          }).catch(error => {
              return error;
        });

    }
}
