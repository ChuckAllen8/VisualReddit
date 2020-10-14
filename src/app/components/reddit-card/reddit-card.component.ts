import { Component, Input, OnInit } from '@angular/core';
import { PostDetails } from '../../interfaces/post-details';

@Component({
  selector: 'app-reddit-card',
  templateUrl: './reddit-card.component.html',
  styleUrls: ['./reddit-card.component.css']
})
export class RedditCardComponent implements OnInit {
  @Input() card: PostDetails;
  flipped: boolean;
  flipText: string;
  constructor() {
    this.flipped = false;
    this.flipText = "See Image";
  }

  ngOnInit(): void {
  }

  flip() {
    this.flipped = !this.flipped;
    this.flipText = `See ${(this.flipped ? "Title" : "Image")}`
  }

}
