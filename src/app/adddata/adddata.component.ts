import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';
import {Http} from '@angular/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface Country {
  country_id: string;
  country_name: string;
}

@Component({
  selector: 'app-adddata',
  templateUrl: './adddata.component.html',
  styleUrls: ['./adddata.component.css']
})
export class AdddataComponent implements OnInit {
form: FormGroup;
// startDate = new Date(1990, 0, 1);
selectedCountry: string;
user_country: Country[] = [
    {country_id: '1', country_name: 'Germany'},
    {country_id: '2', country_name: 'America'},
    {country_id: '3', country_name: 'UK'}
  ];
 
 constructor(private formBuilder: FormBuilder,private http: Http,public dialog: MatDialog) { }
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

  //   openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
  //     width: '250px',
  //     data: {name: this.name, animal: this.animal}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }


onSubmit() {
	var apiUrl = 'http://phpstack-115345-722748.cloudwaysapps.com/api/apartment/store';
    var apartment_data = {
            street: this.form.value.street,
            contact_email_address: this.form.value.email,
            property_id: this.form.value.property_id,
            move_in_date: this.form.value.move_in_date,
            postal_code: this.form.value.postal_code,
            town: this.form.value.town,
            country: this.form.value.country,
        }
         this.http.post(apiUrl, apartment_data).subscribe(function (data) {
            console.log('result',JSON.parse(data['_body']))
      });
}
}
