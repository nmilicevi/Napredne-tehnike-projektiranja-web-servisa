import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Conversion, Currency, Rates } from './currency.model';
import { ValueChangerService } from './value-changer.service';

@Component({
  selector: 'app-value-changer',
  templateUrl: './value-changer.component.html',
  styleUrls: ['./value-changer.component.css']
})
export class ValueChangerComponent implements OnInit {

  currencyForm!: FormGroup;
  symbols!: Currency;
  // resultDOM: boolean = false;
  sampleValue: boolean = true;
  rates!: Rates;

  today: number = Date.now();

  constructor(
    private fb: FormBuilder,
    private frankfurterAPI: ValueChangerService
  ) {}
  ngOnInit(): void {
    this.initCurrencyForm();
    this.getCurrencies();
  }

  initCurrencyForm() {
    this.currencyForm = this.fb.group({
      quantity: ['', Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required],
    });
  }

  getCurrencies() {
    this.frankfurterAPI.getCurrencies().subscribe((data: Currency) => {
      console.log(data);
      this.symbols = data;
    });
  }

  onSubmit() {
    console.log(this.currencyForm.value);
  }

  // Test conversion --start

  convert() {
    this.sampleValue = false;
    const valeur = this.currencyForm.get('quantity')?.value;
    const from = this.currencyForm.get('from')?.value;
    const to = this.currencyForm.get('to')?.value;

    this.frankfurterAPI
      .convert(valeur, from, to)
      .subscribe((value: Conversion) => {
        // this.results = value;
        this.rates = value.rates;
        console.log(this.rates);
      });
  }
}
