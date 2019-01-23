import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {Http} from '@angular/http';

@Injectable({
    providedIn: 'root'
})
export class ApartmentServiceService {
    apiUrl: string = 'http://phpstack-115345-722748.cloudwaysapps.com/api';
    apartment: any = [];

    constructor(private http: Http) {
    }

    getApartmentList() {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl + '/apartments').subscribe(function (data) {
                resolve(data);
            });
        });
    }

    addApartment(data) {
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + '/apartment/store', data).subscribe(function (data) {
                resolve(data);
            });
        });
    }

    updateApartment(data) {
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + '/apartment/update', data).subscribe(function (data) {
                resolve(data);
            });
        });
    }


    deleteApartment(token) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl + '/apartment/delete/' + token).subscribe(function (data) {
                resolve(data);
            });
        });
    }

    getUpdatedApartment(token) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl + '/apartment/' + token).subscribe(function (data) {
                resolve(data);
            });
        });
    }

    editApartment(data) {
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + '/apartment/update', data).subscribe(function (data) {
                resolve(data);
            });
        });
    }

}
