import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import {Http} from '@angular/http';
import { ApartmentServiceService } from '../apartment-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-listdata',
	templateUrl: './listdata.component.html',
	styleUrls: ['./listdata.component.css']
})

export class ListdataComponent implements OnInit {
	apartment_list: any=[];
	apartment_detail: any=[];

constructor(private router: ActivatedRoute,private http: Http, private apartmentService: ApartmentServiceService) 
{
	  this.apartment_detail = this.router.snapshot.paramMap.get('apartment_list_data');
	  console.log('apartment_detail',this.apartment_detail)
}

ngOnInit() {

 // this.apartmentService.getApartmentList().then(data => {
	// 	this.apartment_detail = JSON.parse(data['_body']);
	// 	this.apartment_list = this.apartment_detail.data;
	// 	console.log('data.data',this.apartment_list.length)
	// 	console.log('data.data',this.apartment_list)	
	// });  	  
}

}
