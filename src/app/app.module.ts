import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AdddataComponent } from './adddata/adddata.component';
import { ListdataComponent } from './listdata/listdata.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,MatInputModule,MatRadioModule,MatPaginatorModule,MatProgressSpinnerModule,MatSelectModule,MatNativeDateModule,MatTableModule,MatDialogModule,MatDatepickerModule,MatListModule, MatCardModule, MatGridListModule, MatFormFieldModule} from '@angular/material';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { ApartmentServiceService } from './apartment-service.service';
import { GlobalVarService } from './global-var.service';
import { EditApartmentComponent } from './edit-apartment/edit-apartment.component';
import { AlertsModule } from 'angular-alert-module';

const appRoutes: Routes = [
  { path: 'Add_Component', component: AdddataComponent },
  { path: 'List_component', component: ListdataComponent },
  { path: 'Edit_component', component: EditApartmentComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    AdddataComponent,
    ListdataComponent,
    EditApartmentComponent
  ],
  imports: [
    BrowserModule,
    AlertsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    HttpModule,
    MatNativeDateModule,
    MatButtonModule,MatDialogModule,MatRadioModule, MatProgressSpinnerModule,MatPaginatorModule, MatSelectModule,MatCardModule,MatTableModule,MatGridListModule,MatListModule,MatFormFieldModule,MatInputModule,MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ApartmentServiceService,MatDatepickerModule,GlobalVarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
