import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app.service';
import { UserService } from '../user.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    isSignedIn = false
  localStorage: any;
    constructor(public firebaseService : UserService,private _snackBar: MatSnackBar){}
    ngOnInit(){
      if(localStorage.getItem('user')!== null)
      this.isSignedIn= true
      else
      this.isSignedIn = false
    }
    async onSignup(email:string,password:string){
      await this.firebaseService.signup(email,password)
      if(this.firebaseService.isLoggedIn)
      this.isSignedIn = true
      this._snackBar.open("Succesfuly sent :)");
    }
    handleLogout(){
      this.isSignedIn = false
      
    }
    

}
