import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import {Http} from '@angular/http';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
	apartment_list: any=[];
	apartment_detail: any=[];
  constructor(private router: Router,private http: Http) { }

  ngOnInit() {
  	this.http.get('http://phpstack-115345-722748.cloudwaysapps.com/api/apartments').
	   subscribe(function (data) {
	              this.apartment_detail = JSON.parse(data['_body']);
	              this.apartment_list = this.apartment_detail.data;
	              console.log('data.data',this.apartment_list.length)
	              console.log('data.data',this.apartment_list)
	          });
  }

	ViewUserList(): void {
        this.router.navigate(['/List_component',{apartment_list_data: this.apartment_list}]);
	};

	AddUserList(): void {
        this.router.navigate(['/Add_Component']);
	};


}
