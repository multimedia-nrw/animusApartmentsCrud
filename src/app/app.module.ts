import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {MainpageComponent} from './mainpage/mainpage.component';
import {AdddataComponent,AddApartmentDialogBox} from './adddata/adddata.component';
import {ListdataComponent,DeleteApartmentDialogBox} from './listdata/listdata.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatTableModule,
    MatDialogModule,
    MatDatepickerModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule
} from '@angular/material';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from "@angular/forms";
import {ApartmentServiceService} from './apartment-service.service';
import {GlobalVarService} from './global-var.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {EditApartmentComponent,EditApartmentDialogBox} from './edit-apartment/edit-apartment.component';

const appRoutes: Routes = [
    {path: 'apartment/add', component: AdddataComponent},
    {path: 'apartment/list', component: ListdataComponent},
    {path: 'apartment/edit', component: EditApartmentComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        MainpageComponent,
        AdddataComponent,
        ListdataComponent,
        EditApartmentComponent,
        DeleteApartmentDialogBox,
        AddApartmentDialogBox,
        EditApartmentDialogBox
    ],
    entryComponents: [DeleteApartmentDialogBox,AddApartmentDialogBox,EditApartmentDialogBox],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes, {useHash: true}),
        BrowserAnimationsModule,
        HttpModule,
        MatNativeDateModule,
        MatButtonModule, MatDialogModule, MatProgressSpinnerModule, MatPaginatorModule, MatSelectModule, MatCardModule, MatTableModule, MatGridListModule, MatListModule, MatFormFieldModule, MatInputModule, MatDatepickerModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},ApartmentServiceService, MatDatepickerModule, GlobalVarService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
