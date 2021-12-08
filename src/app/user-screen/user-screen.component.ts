import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-screen',
  templateUrl: './user-screen.component.html',
  styleUrls: ['./user-screen.component.css']
})
export class UserScreenComponent implements OnInit {

  @Output() isLogout = new EventEmitter<void>()
  localStorage: any;
  constructor(public firebaseService: UserService) { }

  ngOnInit(): void {
}

  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
  }
  

}
