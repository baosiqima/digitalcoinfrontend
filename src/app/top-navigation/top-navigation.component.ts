import { Component, OnInit } from '@angular/core';
import { CustomModalComponent } from '../custom-modal/custom-modal.component';

import { User } from '../user';

import { DataService } from '../services/data.service';

@Component({
  selector: 'top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})
export class TopNavigationComponent implements OnInit {

  users: User[];

  brand: string = 'Digital Coins Exchange';
  dropdownLinks = ['English', 'Dutch', 'French', 'Italian'];

  model = new User('test@test.com', 'test-user', '123', '123', 'India', '123456789');

  submitted = false;

  registerUser(model: User, isValid: boolean){
    console.log('registerUser()');
    console.log(model, isSecureContext);
    this.submitted = true;
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  constructor( private dataService: DataService ) {
    console.log('Top Navigation Constructor');
  }

  loginUser(username, password){
    console.log("Username: ", username);
    console.log("Password: ", password);
    return false;
  }

  ngOnInit() {
    this.dataService.getPosts().subscribe((users) => {
      console.log('onInit of Top Navigation');
    
      console.log(users);
      this.users = users;
    });
    // this.initializeUser();
    console.log(this.model);

  }

  initializeUser(){
    this.model = new User('','','','','','');  
  }

}


