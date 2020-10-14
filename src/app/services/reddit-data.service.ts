import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Listing } from '../interfaces/listing';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RedditDataService {

  getPosts(reddit: string): Observable<Listing> {
    return this.http.get<Listing>(`https://www.reddit.com/r/${reddit}/.json`);
  }

  getNextPosts(reddit: string, after: string) {
    return this.http.get<Listing>(`https://www.reddit.com/r/${reddit}/.json?after=${after}`);
  }

  constructor(private http: HttpClient) { }
}
