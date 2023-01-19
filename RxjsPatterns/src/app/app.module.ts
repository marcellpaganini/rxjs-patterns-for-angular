import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsRetrieveListComponent } from './rxjs-retrieve-list/rxjs-retrieve-list.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RxjsService } from './rxjs.service';
import { InMemoryDataService } from './in-memory-data.service';
import { RxjsNavMenuComponent } from './rxjs-nav-menu/rxjs-nav-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StarFormatterPipe } from './star-formatter.pipe';
import { RxjsFilterComponent } from './rxjs-filter/rxjs-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsRetrieveListComponent,
    RxjsNavMenuComponent,
    StarFormatterPipe,
    RxjsFilterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
