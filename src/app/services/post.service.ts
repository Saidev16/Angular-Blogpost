import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/NotFoundError';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get(this.url);  
  }
  createPost(post:any){
    return this.http.post(this.url,post);

  }
  
  editPost(post:any){
    return this.http.put(this.url+'/'+post.id,post)

  }
  deletePost(post:any){
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/'+post.id)
     

  }


}
