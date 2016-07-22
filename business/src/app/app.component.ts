import { Component, OnInit } from '@angular/core';
import { BusinessService, Business, Category } from './services/business.service'
import {FormBuilder , FormGroup, FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES} from '@angular/forms'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [BusinessService],
  directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES]
})
export class AppComponent implements OnInit{
  title = 'app works!';
  businesses: Business[];
  filteredBusinesses: Business[];
  categories: Category[];
  appState: string;
  activeKey: string;
  business: Business;
  activeBusiness: Business;
  filteredCategory: string;
  businessForm: FormGroup;

  constructor(private _businessService: BusinessService, private  _fb: FormBuilder) {

  }

  ngOnInit() {
    this.appState = 'default';
    this._businessService.getBusinesses().subscribe(res => this.businesses = this.filteredBusinesses = res);
    this._businessService.getCategories().subscribe(res => this.categories = res);
  }

  changeState(state: string, selected?: Business) {
    if(selected) {
      this.business = selected;
    }
    else {
      this.business = undefined;
    }
    this.appState = state;
  }

  filterCategory(category: string) {
    if (category !== '0') {
      this.filteredBusinesses = this.businesses.filter(business => business.category === category);
    }
    else {
      this.filteredBusinesses = this.businesses;
    }
    this.filteredCategory = category;
  }

  addBusiness(business: Business) {
    if(this.appState === 'addBusiness') {
      business.created_at = new Date().toDateString();
      this._businessService.addBusiness(business).then(() => this.changeState('default'));
    }
    else {
      const updatedBusiness = {
        company: business.company,
        category: business.category,
        city: business.city,
        description: business.description,
        email: business.email,
        phone: business.phone,
        state: business.state,
        street_address: business.street_address,
        years_in_business: business.years_in_business,
        zipcode: business.zipcode
      };
      this._businessService.updateBusiness(business.$key, updatedBusiness).then(() => this.changeState('default'));
    }
  }

  removeBusiness(business: Business) {
    this._businessService.removeBusiness(business);
  }
}
