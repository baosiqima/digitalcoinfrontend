import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  posts: Post[];

  constructor(private dataService: DataService) {
    console.log('Constructor of Admin Panel')
   }

  ngOnInit() {
    this.dataService.getPosts().subscribe((posts) => {
      console.log(posts);
      this.posts = posts;
    });
  }

}

interface Post{
  userId: number;
  id: number;
  title: string;
  body: string;
}
