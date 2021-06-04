import { Component, OnInit } from '@angular/core';
import { Vote } from './model/Vote';
import { ChatService } from './_service/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  vote: Vote = new Vote('', '');


  constructor(private chatService: ChatService) { }
  ngOnInit() {
    this.chatService
      .getMessages()
      .subscribe((message: Vote) => {
        console.log(message)
        this.vote = message;
      });
  }


}
