import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ApartmentServiceService {
  apiUrl: string = 'http://phpstack-115345-722748.cloudwaysapps.com/api';
apartment: any=[];
  constructor(private http: Http) { }

 // getApartmentList(){
 //          this.http.get(this.apiUrl + '/apartments').subscribe(function (data) {
 //                   this.apartment = data;
 //                   return this.apartment;
 //              console.log('getApartmentList',data.data)
 //          });
 // }

}
