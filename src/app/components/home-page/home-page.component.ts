import { Component, OnInit } from '@angular/core';
import { RedditDataService } from '../../services/reddit-data.service';
import { PostData } from '../../interfaces/post-data';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  allPosts: PostData[];
  subreddit: string;

  // All commented out code is for the intersection observer.
  // That method requires a full scroll to the bottom to make
  // the call to get more data. The ngx-infinite-scroll way does
  // currently in use does not.
  // npm install ngx-infinite-scroll

  // observer: IntersectionObserver;
  // target: Element;

  // options = {
  //   rootMargin: '0px',
  //   threshold: 0
  // }

  // callback = (entries, observer) => {
  //   this.nextPage();
  // };

  constructor(private data: RedditDataService) {
    this.subreddit = this.data.subreddit;
  }

  subredditChange() {
    this.data.changeReddit(this.subreddit);
  }

  nextPage() {
    this.data.getNextPosts();
  }

  // createObserver() {
  //   this.observer = new IntersectionObserver(this.callback, this.options);
  //   this.observer.observe(this.target);
  // }

  ngOnInit(): void {
    this.data.getPosts().subscribe(
      x => this.allPosts = x
    );
    this.data.getFirstPosts();
    // window.addEventListener("load", (event) => {
    //  this.target = document.getElementById('ScrollComponent');
    //  this.createObserver();
    // }, false);
  }

}
