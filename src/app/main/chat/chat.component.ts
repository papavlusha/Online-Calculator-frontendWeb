
import { Component } from '@angular/core';

interface Message {
  content: string;
  isMine: boolean;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messages: Message[] = [
    { content: 'Hello!', isMine: true },
    { content: 'Hi there!', isMine: false }
  ];

  newMessage: string = '';

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push({ content: this.newMessage, isMine: true });
      this.newMessage = '';
    }
  }
}
