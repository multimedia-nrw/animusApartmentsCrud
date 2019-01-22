import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {Http} from '@angular/http';
import {GlobalVarService} from '../global-var.service';

@Component({
    selector: 'app-mainpage',
    templateUrl: './mainpage.component.html',
    styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
    apartment_detail = [];

    constructor(private router: Router, private http: Http, public global_var: GlobalVarService) {
        // console.log('global_var', global_var.role)
        // this.http.get('http://phpstack-115345-722748.cloudwaysapps.com/api/apartments').subscribe(function (data) {
        //     this.apartment_detail = JSON.parse(data['_body']);
        //     global_var.role = this.apartment_detail.data;
        //     console.log('data.data', global_var.role)
        // });
    }

    ngOnInit() {
    }

    ViewApartmentList(): void {
        this.router.navigate(['/apartment/list']);
    };

    AddApartment(): void {
        this.router.navigate(['/apartment/add']);
    };
}
