import { CustomerService } from "./../customer.service";
import { Component, OnInit } from "@angular/core";
import {Router} from "@angular/router";
import { Customer } from "../customer.model";
@Component({
  selector: "app-create-customer",
  templateUrl: "./create-customer.component.html",
  styleUrls: ["./create-customer.component.css"]
})
export class CreateCustomerComponent implements OnInit {
  customerDetail: Customer = {
    _id: "",
    first_name: "",
    last_name: "",
    gender: "",
    age: null,
    email: ""
  };
router : Router;
  constructor(private customerService: CustomerService) {}

  ngOnInit() {}

  addCustomer(addCustomerForm) {
    this.customerService
      .PostCustomer(addCustomerForm.value)
      .subscribe(resp => {
        console.log("adding customer...");
        //this.router.navigate("");
      });
  }
}