import {Component, OnInit, Inject} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {map} from 'rxjs/operators';
import {Http} from '@angular/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Router} from '@angular/router';
import {GlobalVarService} from '../global-var.service';
import {ApartmentServiceService} from '../apartment-service.service';

export interface Country {
    country_id: string;
    country_name: string;
}

export interface DialogData {
	operation: string;
	msg: string;
};

@Component({
    selector: 'app-adddata',
    templateUrl: './adddata.component.html',
    styleUrls: ['./adddata.component.css']
})
export class AdddataComponent implements OnInit {
    form: FormGroup;
    isClickedOnce: boolean;
    startDate = new Date(2019, 1, 20);
    selectedCountry: string;
    user_country: Country[] = [
        {country_id: '1', country_name: 'Deutschland'},
        {country_id: '2', country_name: 'USA'},
        {country_id: '3', country_name: 'UK'}
    ];

    constructor(private apartmentService: ApartmentServiceService, private global_var: GlobalVarService, public router: Router, private formBuilder: FormBuilder, private http: Http, public dialog: MatDialog) {
    }

    ngOnInit() {
        this.isClickedOnce = false;
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

    onSubmit() {
        this.isClickedOnce = true;
        var apartment_data = {
            street: this.form.value.street,
            contact_email_address: this.form.value.email,
            property_id: this.form.value.property_id,
            move_in_date: this.form.value.move_in_date,
            postal_code: this.form.value.postal_code,
            town: this.form.value.town,
            country: this.form.value.country,
        }
       this.apartmentService.addApartment(apartment_data).then(data => {
            var submit_status = JSON.parse(data['_body']);
            if (submit_status.status == 200) {
            	const dialogRef = this.dialog.open(AddApartmentDialogBox, {
						width: '250px',
						data: {operation: 'Hinzugefügt', msg: 'Wohnung erfolgreich hinzugefügt'}
					});
					dialogRef.afterClosed().subscribe(result => {
					});
                this.router.navigate(['/apartment/list']);
            }
        });
    }
}

@Component({
	selector: 'add-apartment-dialog-box',
	templateUrl: 'add-apartment-dialog-box.html',
})
export class AddApartmentDialogBox {

	constructor(
		public dialogRef: MatDialogRef<AddApartmentDialogBox>,
		@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

	onNoClick(): void {
		this.dialogRef.close();
	}

}
