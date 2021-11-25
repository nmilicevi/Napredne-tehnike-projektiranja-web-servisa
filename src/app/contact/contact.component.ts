import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  

  addForm: FormGroup = new FormGroup({});
 
  constructor(private http: HttpClient,
    private formbuilder: FormBuilder,
    private _snackBar: MatSnackBar
) { }
 
  ngOnInit(): void {
 
    this.addForm = this.formbuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(1)]),
      email: new FormControl('', [Validators.required, Validators.minLength(1)]),
      text: new FormControl('', [Validators.required, Validators.minLength(1)]),
    })
  }

  erase(){
    this.addForm.reset();
    this._snackBar.open("Succesfuly sent :)");
  }


}
