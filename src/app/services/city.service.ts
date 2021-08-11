import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { City } from '../models/city';
import { Photo } from '../models/photo';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root'
})
export class CityService {

constructor(private httpClient:HttpClient,private alertifyService:AlertifyService, private router: Router) { }
path = "https://localhost:5001/api/";

getCities():Observable<City[]>{
  return this.httpClient.get<City[]>(this.path+"cities");
}
getCityById(cityId: string):Observable<City>{
  return this.httpClient.get<City>(this.path+"Cities/detail/?id="+cityId);
}
getPhotosByCity(cityId: string):Observable<Photo[]>{
  return this.httpClient.get<Photo[]>(this.path + "Cities/Photos/?cityId="+cityId);
}
add(city: any){
  this.httpClient.post(`${this.path}cities/add`,city).subscribe(data=>{
    this.alertifyService.success("Şehir başarıyla eklendi")

    this.router.navigateByUrl('/citydetail')

  });
}
}
