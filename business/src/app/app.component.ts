import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2'
import { BusinessService, Business, Category } from './services/business.service'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [BusinessService]
})
export class AppComponent implements OnInit{
  title = 'app works!';
  businesses: Business[];
  categories: Category[];
  constructor(private _businessService: BusinessService) {

  }

  ngOnInit() {
    this._businessService.getBusinesses().subscribe(res => this.businesses = res);
    this._businessService.getCategories().subscribe(res => this.categories = res);
  }
}
