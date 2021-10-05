import { Component, OnInit } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any = [];
  post = {
    id:0,
    title : '',
    body:'',
    userId:''
  }

  constructor(private http: HttpClient  ) { 
    this.http.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe( response => {
      this.posts = response;
    } );
  }

  ngOnInit(): void {
  }

  createPost(){
    this.http.post('https://jsonplaceholder.typicode.com/posts',this.post)
      .subscribe( (Response:any)=> {
        this.post.id = Response.id;
        this.posts.unshift(this.post);
        this.post = {
          id:0,
          title : '',
          body:'',
          userId:''
        }
      } )
  }

}
