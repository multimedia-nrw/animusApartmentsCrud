import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalVarService {
role: any[] = [];
status: any = 100;
  constructor(private http: Http) {
  	// this.http.get('http://phpstack-115345-722748.cloudwaysapps.com/api/apartments').
	  //  subscribe(function (data) {
	  //             this.role = JSON.parse(data['_body']);
	  //             // this.global_var.role = this.apartment_detail.data;
	  //             console.log('data.data',this.apartment_list.length)
	  //             // console.log('data.data',this.global_var.role)
	  //         });

   }
}
