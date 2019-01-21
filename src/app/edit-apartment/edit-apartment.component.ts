import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApartmentServiceService} from '../apartment-service.service';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Router} from '@angular/router';

export interface Country {
    country_id: string;
    country_name: string;
}

@Component({
    selector: 'app-edit-apartment',
    templateUrl: './edit-apartment.component.html',
    styleUrls: ['./edit-apartment.component.css']
})
export class EditApartmentComponent implements OnInit {
    form: FormGroup;
    apartment_detail_token: any;
    moving_date: any;
    apartment_street: any;
    apartment_town: any;
    apartment_country: any;
    apartment_zip: any;
    apartment_email: any;
    apartment_id: any;
    startDate: any;

    user_country: Country[] = [
        {country_id: '1', country_name: 'Germany'},
        {country_id: '2', country_name: 'America'},
        {country_id: '3', country_name: 'UK'}
    ];

    constructor(public router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute, private apartmentService: ApartmentServiceService) {
        this.apartment_detail_token = this.route.snapshot.paramMap.get('apartment_token');
        this.apartmentService.getUpdatedApartment(this.apartment_detail_token).then(data => {
            var result_data = JSON.parse(data['_body']);
            var result_data = result_data.data;
            this.moving_date = result_data[0]['move_in_date'];
            this.apartment_street = result_data[0]['street'];
            this.apartment_town = result_data[0]['town'];
            this.apartment_country = result_data[0]['country'];
            this.apartment_zip = result_data[0]['postal_code'];
            this.apartment_email = result_data[0]['contact_email_address'];
            this.apartment_id = result_data[0]['property_id'];
            console.log('result_data', result_data)
        });

    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            email: [null, [Validators.required, Validators.email]],
            street: [null, Validators.required],
            property_id: [null, Validators.required],
            move_in_date: [null, Validators.required],
            postal_code: [null, Validators.required],
            town: [null, Validators.required],
            country: [null, Validators.required],
        });

    }

    editApartment() {
        var edit_apartment_data = {
            street: this.form.value.street,
            contact_email_address: this.form.value.email,
            property_id: this.form.value.property_id,
            move_in_date: this.form.value.move_in_date,
            postal_code: this.form.value.postal_code,
            town: this.form.value.town,
            country: this.form.value.country,
        }

        this.apartmentService.updateApartment(edit_apartment_data).then(data => {
            console.log('addApartment data.data', data)
            var edit_apartment_status = JSON.parse(data['_body']);
            console.log('edit_apartment_status status', edit_apartment_status)
            if (edit_apartment_status.status == 200) {
                this.router.navigate(['/List_component']);
            }
        });
    }

}
