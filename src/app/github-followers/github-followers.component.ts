import { FollowersService } from './../followers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers:any = null;

  constructor(private followersService: FollowersService) { }

  ngOnInit(): void {
    return this.getFollowers();
  }

  public getFollowers(){
    this.followersService.getFollowers().subscribe(
      (Response)=>{
        console.log('response received');
        console.log(Response);
        this.followers = Response;
      },
      (error)=>{
        console.log('Request failed with error');
      },

    )
  }

}
