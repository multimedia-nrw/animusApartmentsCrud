import {Component, OnInit, Inject, ViewChild} from '@angular/core';
import {map} from 'rxjs/operators';
import {Http} from '@angular/http';
import {ApartmentServiceService} from '../apartment-service.service';
import {ActivatedRoute} from '@angular/router';
import {GlobalVarService} from '../global-var.service';
import {PageEvent} from '@angular/material';
import {Router} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatPaginator, MatTableDataSource} from '@angular/material';

export interface DialogData {
	operation: string;
	msg: string;
};

export interface PeriodicElement {
	move_in_date: any;
	address: any;
	contact_email_address: any;
	action: any;
}

@Component({
	selector: 'app-listdata',
	templateUrl: './listdata.component.html',
	styleUrls: ['./listdata.component.css']
})

export class ListdataComponent implements OnInit {
	displayedColumns: string[] = ['move_in_date', 'address', 'contact_email_address', 'action'];
	dataSource = new MatTableDataSource;

	@ViewChild(MatPaginator) paginator: MatPaginator;

	apartment_list: any = [];
	apartment_detail: any = [];
	data_source_table: any =[];
	length: any = 100;
	pageSize: any = 10;
	pageSizeOptions: number[] = [5, 10, 25, 100];
	pageEvent: PageEvent;

	constructor(public dialog: MatDialog, public router: Router, public global_var: GlobalVarService, private route: ActivatedRoute, private http: Http, private apartmentService: ApartmentServiceService) {
	}

	ngOnInit() {
		this.apartmentService.getApartmentList().then(data => {
			this.apartment_detail = JSON.parse(data['_body']);
			this.global_var.apartment_list = this.apartment_detail.data;
			this.dataSource = new MatTableDataSource(this.global_var.apartment_list);
			this.dataSource.paginator = this.paginator;
			// for(let apartment of this.global_var.apartment_list){
			// 	this.data_source_table.push({move_in_date: apartment.move_in_date, street: apartment.street});
			// }
		});
	}

	deleteApartment(access_token, index) {
		this.apartmentService.deleteApartment(access_token).then(data => {
			var result_data = JSON.parse(data['_body']);
			if (result_data.status == 200) {
				if (index > -1) {
					const dialogRef = this.dialog.open(DeleteApartmentDialogBox, {
						width: '250px',
						data: {operation: 'Gelöscht', msg: 'Diese Wohnung wurde erfolgreich gelöscht'}
					});
					dialogRef.afterClosed().subscribe(result => {
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
