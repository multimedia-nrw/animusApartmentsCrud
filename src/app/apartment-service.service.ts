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

	getApartmentList(){
		return new Promise((resolve, reject) => {
			this.http.get(this.apiUrl + '/apartments').subscribe(function (data) {
				resolve(data);
				console.log('Apartment service', data)
			});
		});
	}

	addApartment(data) {
		console.log(data);
		return new Promise((resolve, reject) => {
			this.http.post(this.apiUrl + '/apartment/store', data).subscribe(function (data) {
				resolve(data);
				console.log('Add Apartment', data)
			});
		});
	}

	updateApartment(data) {
		console.log(data);
		return new Promise((resolve, reject) => {
			this.http.post(this.apiUrl + '/apartment/update', data).subscribe(function (data) {
				resolve(data);
				console.log('Add Apartment', data)
			});
		});
	}


	deleteApartment(token) {
		console.log('deleteApartment token',token)
		return new Promise((resolve, reject) => {
			this.http.get(this.apiUrl + '/apartment/delete/'+token).subscribe(function (data) {
				resolve(data);
				console.log('delete Apartment in Service',data)
			});
		});
	}

	getUpdatedApartment(token) {
		console.log('getUpdatedApartment token',token)
		return new Promise((resolve, reject) => {
			this.http.get(this.apiUrl + '/apartment/'+token).subscribe(function (data) {
				resolve(data);
				console.log('getUpdatedApartment Apartment in Service',data)
			});
		});
	}

	editApartment(data) {
		return new Promise((resolve, reject) => {
			this.http.post(this.apiUrl + '/apartment/update', data).subscribe(function (data) {
				resolve(data);
				console.log('Add Apartment', data)
			});
		});
	}

}
