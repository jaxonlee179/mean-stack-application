import { Component, OnInit } from "@angular/core";
import { Customer } from "../customer.model";
import { CustomerService } from "../customer.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-edit-customer",
  templateUrl: "./edit-customer.component.html",
  styleUrls: ["./edit-customer.component.css"]
})
export class EditCustomerComponent implements OnInit {
  customerId: string;
  customerDetail: Customer = {
    _id: "",
    first_name: "",
    last_name: "",
    gender: "",
    age: null,
    email: ""
  };
  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.GetCustomerFromService(this.route.snapshot.paramMap.get("id"));
  }

  updateCustomer(updateCustomerForm) {
    this.customerService
      .PutCustomer(updateCustomerForm.value)
      .subscribe(resp => {
        this.router.navigate([""]);
      });
  }

  GetCustomerFromService(custid) {
    this.customerService.GetCustomerById(custid).subscribe(resp => {
      this.customerDetail = resp as Customer;
    });
  }

  backToHome() {
    this.router.navigate([""]);
  }
}
