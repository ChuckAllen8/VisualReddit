import { Component, Input, OnInit } from '@angular/core';
import { PostDetails } from '../../interfaces/post-details';

@Component({
  selector: 'app-reddit-card',
  templateUrl: './reddit-card.component.html',
  styleUrls: ['./reddit-card.component.css']
})
export class RedditCardComponent implements OnInit {
  @Input() card: PostDetails;
  image: string;
  flipped: boolean;
  flipText: string;
  constructor() {
    this.flipped = false;
    this.flipText = "Flip to Thumbnail";
  }

  ngOnInit(): void {
    this.image = this.setImage();
    debugger;
  }

  setImage(): string {
    if(this.card.thumbnail == 'default') {
      return '';
    }
    if(this.card.post_hint? this.card.post_hint == 'link' : false) {
      if(this.card.thumbnail) {
        return this.card.thumbnail;
      }
      return '';
    }
    if(this.card.url == 'unknown') {
      return '';
    }
    if(this.card.media?.oembed?.thumbnail_url) {
      return this.card.media.oembed.thumbnail_url;
    }
    return this.card.url;
  }

  flip() {
    this.flipped = !this.flipped;
    this.flipText = `Flip to ${(this.flipped ? "Post Title" : "Thumbnail")}`
  }

}
