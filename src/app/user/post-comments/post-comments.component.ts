import { Component, Input, OnInit } from '@angular/core';
import { IComment } from 'src/app/shared/model/comment.model';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.scss'],
})
export class PostCommentsComponent implements OnInit {
  @Input() comment!: IComment;

  constructor() {}

  ngOnInit(): void {}
}
