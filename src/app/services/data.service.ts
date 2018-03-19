import { Injectable } from '@angular/core';
import { Http, Response,Headers,RequestOptions,RequestMethod} from '@angular/http';
import 'rxjs/add/operator/map';

import {User} from '../user';


@Injectable()
export class DataService {



  constructor(private http: Http) { 
    console.log('DataService Connected');
  }

  getPosts(){
    return this.http.get('http://localhost:8080/get')
      .map(res => res.json());
  }

  registerUser(user:User){

    const headeroptions=new Headers({'Content-Type': 'application/json'});
    const requestoptions=new RequestOptions({method:RequestMethod.Post, headers:headeroptions});


    console.log('register user service invokeddddddddddddddddddddddddddddddddddddddddddddddddddd',user);

   return this.http.post('http://localhost:8080/post',JSON.stringify(user),requestoptions).
   map(x=>x.status).subscribe((value)=>console.log(value),(error)=>console.log(error)
   );
    

   
   //console.log("response of registerUserrrr");
  
  
  }

  
}
