import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Listing } from '../interfaces/listing';
import { HttpClient } from '@angular/common/http';
import { PostDetails } from '../interfaces/post-details';
import { PostData } from '../interfaces/post-data';

@Injectable({
  providedIn: 'root'
})
export class RedditDataService {
  listing: Listing;
  posts: PostData[];
  subreddit: string;

  getPosts(): Observable<PostData[]> {
    return of(this.posts);
  }

  getFirstPosts(): void {
    this.http.get<Listing>(`https://www.reddit.com/r/${this.subreddit}/.json`).subscribe(x => 
    {
      this.listing = x;
      this.listing.data.children.forEach((value) => this.posts.push(value));
    });
  }

  getNextPosts(): void {
    this.http.get<Listing>(`https://www.reddit.com/r/${this.subreddit}/.json?after=${this.listing.data.after}`).subscribe(x => 
    {
      this.listing = x;
      this.listing.data.children.forEach((value) => this.posts.push(value));
    });
  }

  changeReddit(reddit: string): void {
    this.subreddit = reddit;
    while(this.posts.length > 0) {this.posts.pop();}
    this.getFirstPosts();
  }

  constructor(private http: HttpClient) {
    this.posts = [];
    this.subreddit = 'aww';
  }
}
