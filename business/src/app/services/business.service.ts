import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2'
import 'rxjs/add/operator/map';
@Injectable()
export class BusinessService {
  businesses: FirebaseListObservable<Business[]>;
  categories: FirebaseListObservable<Category[]>
  constructor(private _af: AngularFire) {}

  getBusinesses() {
    return this.businesses = this._af.database.list('/businesses') as FirebaseListObservable<Business[]>;
  }

  getCategories() {
    return this.categories = this._af.database.list('/categories') as FirebaseListObservable<Category[]>;
  }

  addBusiness(business: Business): Promise<any> {
    return this.businesses.push(business);
  }

  removeBusiness(business: Business) {
    return this._af.database.object(`/businesses/${business.$key}`).remove();
  }

  updateBusiness(key: string, business: Business): Promise<any> {
    return this.businesses.update(key, business);
  }
}


export interface Business {
  $key?: string;
  company?: string;
  category?: string;
  city?: string;
  description?: string;
  email?: string;
  phone?: string;
  state?: string;
  street_address?: string;
  years_in_business?: number;
  zipcode?: string;
  created_at?: string;
}

export interface Category {
  $key?: string;
  name: string;
}
