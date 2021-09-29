import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  message: string = '';
  messageList: string[] = [];

  constructor(private chatService: ChatService){

  }

  ngOnInit(){
    this.chatService.getNewMessage().subscribe((message?: string) => {
      if (message) {
        console.log(`message: ${message}`);
        this.messageList.push(message);
      }
    })
  }

  updateMessage(evt: any) {
    this.message = evt.target.value;
  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }
}
