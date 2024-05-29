// chat-room.component.ts
import { Component, OnInit } from '@angular/core';
import * as Stomp from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import {HttpHeaders} from "@angular/common/http";

interface ChatMessage {
  senderName: string;
  receiverName?: string;
  message: string;
  status: string;
}

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  private stompClient: any;
  public privateChats: Map<string, ChatMessage[]> = new Map();
  public publicChats: ChatMessage[] = [];
  public tab: string = 'CHATROOM';
  public userData = {
    username: '',
    receivername: '',
    connected: false,
    message: ''
  };

  ngOnInit() {
    console.log(this.userData);
  }

  connect() {
    const socket = new SockJS('http://localhost:8082/OnlineCalculator/ws');
    this.stompClient = Stomp.Stomp.over(socket);
    this.stompClient.connect({}, this.onConnected.bind(this), this.onError);
  }

  onConnected() {
    this.userData.connected = true;
    this.stompClient.subscribe('/chatroom/public', this.onMessageReceived.bind(this));
    this.stompClient.subscribe(`/user/${this.userData.username}/private`, this.onPrivateMessage.bind(this));
    this.userJoin();
  }

  userJoin() {
    const chatMessage: ChatMessage = {
      senderName: this.userData.username,
      status: 'JOIN',
      message: ''
    };
    this.stompClient.send('/app/message', {}, JSON.stringify(chatMessage));
  }

  onMessageReceived(payload: any) {
    const payloadData = JSON.parse(payload.body);
    switch (payloadData.status) {
      case 'JOIN':
        if (!this.privateChats.has(payloadData.senderName)) {
          this.privateChats.set(payloadData.senderName, []);
        }
        break;
      case 'MESSAGE':
        this.publicChats.push(payloadData);
        break;
    }
  }

  onPrivateMessage(payload: any) {
    const payloadData = JSON.parse(payload.body);
    const messages = this.privateChats.get(payloadData.senderName) || [];
    messages.push(payloadData);
    this.privateChats.set(payloadData.senderName, messages);
  }

  onError(err: any) {
    console.error(err);
  }

  handleMessage(event: any) {
    this.userData.message = event.target.value;
  }

  sendValue() {
    if (this.stompClient) {
      const chatMessage: ChatMessage = {
        senderName: this.userData.username,
        message: this.userData.message,
        status: 'MESSAGE'
      };
      this.stompClient.send('/app/message', {}, JSON.stringify(chatMessage));
      this.userData.message = '';
    }
  }

  sendPrivateValue() {
    if (this.stompClient) {
      const chatMessage: ChatMessage = {
        senderName: this.userData.username,
        receiverName: this.tab,
        message: this.userData.message,
        status: 'MESSAGE'
      };
      const messages = this.privateChats.get(this.tab) || [];
      if (this.userData.username !== this.tab) {
        messages.push(chatMessage);
        this.privateChats.set(this.tab, messages);
      }
      this.stompClient.send('/app/private-message', {}, JSON.stringify(chatMessage));
      this.userData.message = '';
    }
  }

  handleUsername(event: any) {
    this.userData.username = event.target.value;
  }

  registerUser() {
    this.connect();
  }
}
