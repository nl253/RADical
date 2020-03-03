import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Customer} from '../customer';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent implements OnInit {

  private _customers: Partial<Customer>[];
  public focusCustomer: Partial<Customer>;
  public filters: Record<string, any> = {};

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this._customers = this.data.getCustomers();
  }

  get customers(): Partial<Customer>[] {
    return this._customers.filter(c => {
      for (const propName of Object.keys(this.filters)) {
        if (c[propName].toString().trim().toLowerCase().search(this.filters[propName].toString().trim().toLowerCase()) < 0) {
          return false;
        }
      }
      return true;
    });
  }

  sortBy(propName: string): void {
    this._customers.sort((c1, c2) => c1[propName] > c2[propName] ? 1 : -1);
  }

  filter(propName: string, value: string): void {
    this.filters[propName] = value;
  }
}
