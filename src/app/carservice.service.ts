import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarserviceService {
  url = 'http://localhost:3000/carList';


  constructor(private http:HttpClient) { }

  getCarList(){
    return this.http.get(this.url);
  }
}
