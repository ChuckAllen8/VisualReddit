import { Component, OnInit } from '@angular/core';
import { RedditDataService } from '../../services/reddit-data.service';
import { Listing } from '../../interfaces/listing';
import { PostData } from '../../interfaces/post-data';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  currentListing: Listing;
  allPosts: PostData[];
  subreddit: string;

  constructor(private data: RedditDataService) {
    this.subreddit = 'aww';
  }

  subredditChange() {
    this.data.getPosts(this.subreddit).subscribe(
      x => this.currentListing = x
    );
  }

  ngOnInit(): void {
    this.data.getPosts(this.subreddit).subscribe(
      x => this.currentListing = x
    );
  }

}
