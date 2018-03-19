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


  model=new User('','','','','','');

  brand: string = 'Digital Coins Exchange';
  // leftLinks = ['Buy Coins', 'Sell Coins', 'Create a Trade Ad'];
  // rightLinks = ['Sign in', 'Sign up', 'Choose Language'];
  dropdownLinks = ['English', 'Dutch', 'French', 'Italian'];

  constructor(private dataService: DataService) {
    console.log('Constructor of Admin Panel')
   }
  registerUser(){
    this.dataService.registerUser(this.model)
    //   //this.posts = posts;
    // console.log("user infoooooooooooo",this.model);
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
      // this.users = users;
    });
    // this.initializeUser();
    console.log(this.model);

  }

  initializeUser(){
    this.model = new User('','','','','','');  
  }

}



