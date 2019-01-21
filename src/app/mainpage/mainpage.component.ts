import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import {Http} from '@angular/http';
import { GlobalVarService } from '../global-var.service';

// interface UserResponse {
//  apartment_list: any=[];
// }

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
	// apartment_list=[];
	apartment_detail=[];
  constructor(private router: Router,private http: Http, public global_var: GlobalVarService) { 
    console.log('global_var',global_var.role)
     this.http.get('http://phpstack-115345-722748.cloudwaysapps.com/api/apartments').
	   subscribe(function (data) {
	             this.apartment_detail = JSON.parse(data['_body']);
	              global_var.role = this.apartment_detail.data;
	              console.log('data.data',global_var.role)
	          });
  }

  ngOnInit() {
  }

	ViewUserList(): void {
        this.router.navigate(['/List_component']);
		// console.log('UserResponse',apartment_list)
        // this.router.navigate(['/List_component',{apartment_list_data: apartment_list}]);
	};

	AddUserList(): void {
        this.router.navigate(['/Add_Component']);
	};


}
