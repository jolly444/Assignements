import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly BaseURI = 'https://localhost:44345/api';
  formModel = this.fb.group({
    Username: ['', Validators.required],
    Password: ['', Validators.required],
   
  

  });

  constructor(public fb: FormBuilder, private http: HttpClient) { }


  register() {
    var body = {
      Username: this.formModel.value.UserName,
      Password: this.formModel.value.Password,
     
    };
    return this.http.post(this.BaseURI + '/ApplicationUser/Register', body);
  }

  login(formData) {


    return this.http.get(this.BaseURI + '/Item/logindetails', formData);
  }

  getUserProfile() {
    return this.http.get(this.BaseURI + '/UserProfile');
  }
}
