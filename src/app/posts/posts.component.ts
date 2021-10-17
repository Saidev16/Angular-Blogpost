import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

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
  status = true;

  constructor(private postService: PostService  ) { 
    
  }

  ngOnInit(): void {
   this.getPosts();
  }

  getPosts(){
    this.postService.getPosts()
    .subscribe( response => {
      this.posts = response;
    },error=>{
      alert('Erreur inattendue');
      console.log(error);
    } );
  }

  createPost(){
    this.postService.createPost(this.post)
      .subscribe( (Response:any)=> {
        this.post.id = Response.id;
        this.posts.unshift(this.post);
        this.post = {
          id:0,
          title : '',
          body:'',
          userId:''
        }
      },error=>{
        alert('Erreur inattendue');
        console.log(error);
      } )
  }

  editPost(post:any){
    this.post = post;
    this.status = false;
  }

  updatePost(){
    this.postService.editPost(this.post)
    .subscribe( Response =>{
      this.post = {
        id:0,
        title : '',
        body:'',
        userId:''
      };
      this.status = true; 
    } ,error=>{
      alert('Erreur inattendue');
      console.log(error);
    })
  }

  deletePost(post:any){
    this.postService.deletePost(post)
    .subscribe( (reponse:any) =>{
      let index = this.posts.indexOf( post );
      this.posts.splice( index, 1 );
      console.log(this.posts);
    },(error: Response )=>{
      if( error.status === 404 ){
        alert('ce poste est déja supprimé')
      }else{
        alert('Erreur inattendue');
        console.log(error);
      }
    } )
  }

}
