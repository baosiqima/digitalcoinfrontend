import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

  constructor(private http: Http) { 
    console.log('DataService Connected');
  }

  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .map(res => res.json());
  }

  
}
