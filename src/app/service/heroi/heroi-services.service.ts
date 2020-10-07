import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = "https://superheroapi.com/api.php";

@Injectable({
  providedIn: 'root'
})
export class HeroiServicesService {

  constructor(private http: HttpClient) { }

  getHeroName(accessToken, nameHeroi) {
    let url = `${baseUrl}/${accessToken}/search/${nameHeroi}`;
    return this.http.get(`${url}`);
    
  }

  getHeroiId(accessToken, idHeroi) {
    let url = `${baseUrl}/${accessToken}/${idHeroi}`;
    
    return this.http.get(`${url}`);
  }
}
