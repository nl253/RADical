import {Injectable} from '@angular/core';
import * as customers from '../customers.json';
import {Customer, RawCustomer} from './customer';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public getCustomers(): Partial<Customer>[] {
    const fn = ({
                  firstcontact,
                  customernumber,
                  ...rest
                }) => ({
      firstcontact: new Date(firstcontact),
      customernumber: parseInt(customernumber),
      ...rest
    });
    return (customers.customers.data as RawCustomer[]).map(fn);
  }
}
