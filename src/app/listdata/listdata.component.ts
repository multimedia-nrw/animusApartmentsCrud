import {Component, OnInit, Inject} from '@angular/core';
import {map} from 'rxjs/operators';
import {Http} from '@angular/http';
import {ApartmentServiceService} from '../apartment-service.service';
import {ActivatedRoute} from '@angular/router';
import {GlobalVarService} from '../global-var.service';
import {PageEvent} from '@angular/material';
import {Router} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
	operation: string;
	msg: string;
};

@Component({
	selector: 'app-listdata',
	templateUrl: './listdata.component.html',
	styleUrls: ['./listdata.component.css']
})

export class ListdataComponent implements OnInit {
	animal: string = "dfgdg";
	name: string="dgdgzxc";
	apartment_list: any = [];
	apartment_detail: any = [];
	length: any = 100;
	pageSize: any = 10;
	pageSizeOptions: number[] = [5, 10, 25, 100];
	pageEvent: PageEvent;

	constructor(public dialog: MatDialog, public router: Router, public global_var: GlobalVarService, private route: ActivatedRoute, private http: Http, private apartmentService: ApartmentServiceService) {
	}

	ngOnInit() {
		console.log('global_var', this.global_var.apartment_list)
		this.apartmentService.getApartmentList().then(data => {
			this.apartment_detail = JSON.parse(data['_body']);
			this.global_var.apartment_list = this.apartment_detail.data;
			console.log('data.data', this.global_var.apartment_list)
			console.log('this.apartment_detail', this.apartment_detail)
		});
	}

	// openDialog(): void {
	// 	const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
	// 		width: '250px',
	// 		data: {name: this.name, animal: this.animal}

	// 	});
	// 	dialogRef.afterClosed().subscribe(result => {
	// 		console.log('The dialog was closed');
	// 		this.animal = result;
	// 	});
	// }



	setPageSizeOptions(setPageSizeOptionsInput: string) {
		this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
	}

	deleteApartment(access_token, index) {
		this.apartmentService.deleteApartment(access_token).then(data => {
			var result_data = JSON.parse(data['_body']);
			console.log('result_data', result_data)
			if (result_data.status == 200) {
				console.log("Index ", index);
				if (index > -1) {
					const dialogRef = this.dialog.open(DeleteApartmentDialogBox, {
						width: '250px',
						data: {operation: 'Deleted', msg: 'This Apartment is Deleted Successfully'}
					});
					dialogRef.afterClosed().subscribe(result => {
						console.log('The dialog was closed');
					});
					this.global_var.apartment_list.splice(index, 1);
				}
			}
		});
	}

	editApartment(access_token) {
		this.router.navigate(['/apartment/edit/', {apartment_token: access_token}]);
	}

}


@Component({
	selector: 'delete-apartment-dialog-box',
	templateUrl: 'delete-apartment-dialog-box.html',
})
export class DeleteApartmentDialogBox {

	constructor(
		public dialogRef: MatDialogRef<DeleteApartmentDialogBox>,
		@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

	onNoClick(): void {
		this.dialogRef.close();
	}

}
