import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { City } from 'src/app/models/city';
import { Photo } from 'src/app/models/photo';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls:['./city-detail.component.scss'],
  providers:[CityService]
})
export class CityDetailComponent implements OnInit {
  activatedRoute: any;
  constructor(private activatedRoued:ActivatedRoute, private cityService:CityService) { }
  city!: City;
  photos: Photo[]=[];

  ngOnInit() {
   this.activatedRoute.params.subscribe((params: { [x: string]: any; })=>{
  this.getCityById(params["cityId"])
   })
  }
  getCityById(cityId: any) {
  this.cityService.getCityById(cityId).subscribe(data=>{
    this.city = data;
  });
}
}
