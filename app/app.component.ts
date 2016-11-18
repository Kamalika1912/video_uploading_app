import { Component, OnInit  } from '@angular/core';
import { Customer } from './customer.interface';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    public customer: Customer;
    ngOnInit() {
        this.customer = {
            name: '',
            address: {
                street: '',
                number: '',
                postcode: '',
                city: '',
                country: ''
            },
            email: ''
        }
    }
    save(model: Customer, isValid: boolean){
    console.log(model, isValid);
    }
}
