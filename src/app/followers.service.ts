import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FollowersService {
  baseURL: string = "https://api.github.com/users/saidev16/followers";


  constructor(private http: HttpClient) { }

  getFollowers(  ){
    return this.http.get(this.baseURL);

  }
}
