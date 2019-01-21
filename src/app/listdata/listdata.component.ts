import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import {Http} from '@angular/http';
import { ApartmentServiceService } from '../apartment-service.service';
import { ActivatedRoute } from '@angular/router';
import { GlobalVarService } from '../global-var.service';
import {PageEvent} from '@angular/material';
import { Router } from '@angular/router';

@Component({
	selector: 'app-listdata',
	templateUrl: './listdata.component.html',
	styleUrls: ['./listdata.component.css']
})

export class ListdataComponent implements OnInit {
	apartment_list: any=[];
	apartment_detail: any=[];
  length: any = 100;
  pageSize: any = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
   pageEvent: PageEvent;
constructor(public router: Router,public global_var: GlobalVarService,private route: ActivatedRoute,private http: Http, private apartmentService: ApartmentServiceService) 
{
	  // this.apartment_detail = this.router.snapshot.paramMap.get('apartment_list_data');
	  // console.log('apartment_detail',this.apartment_detail)
}

ngOnInit() {
	console.log('global_var',this.global_var.role)
    //  this.http.get('http://phpstack-115345-722748.cloudwaysapps.com/api/apartments').
	   // subscribe(function (data) {
	   //           this.apartment_detail = JSON.parse(data['_body']);
	   //            this.global_var.role = this.apartment_detail.data;
	   //            console.log('data.data',this.global_var.role)
   	//               console.log('this.apartment_detail',this.apartment_detail)
	   //        });

 this.apartmentService.getApartmentList().then(data => {
		this.apartment_detail = JSON.parse(data['_body']);
		this.global_var.role = this.apartment_detail.data;
		 console.log('data.data',this.global_var.role)
   	     console.log('this.apartment_detail',this.apartment_detail)	
	});  	  
}

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

   deleteApartment(access_token, index) {
        // var data = {
        //     token: access_token,
        // }
        // console.log("deleted =>", data);
        this.apartmentService.deleteApartment(access_token).then(data => {
            var result_data = JSON.parse(data['_body']);
            console.log('result_data',result_data)
            if (result_data.status == 200) {
                console.log("Index ", index);
                if (index > -1) {
                   this.global_var.role.splice(index, 1);
                }
            }
         });
    }

    editApartment(access_token){
	 	this.router.navigate(['/Edit_component/',{apartment_token: access_token}]);
    }

}
