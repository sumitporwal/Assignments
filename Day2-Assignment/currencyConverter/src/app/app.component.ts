import { Component } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'currencyConverter';
  amount1 = 1;
  amount2 = 75;
  type1 = "USD";
  type2 = "INR";

  convert(amount: any,from: any,to: any) {
    this.amount1 = amount;
    this.type1 = from;
    this.type2 = to;
    if(this.type1=="USD" && this.type2=="USD"){
      this.amount2 = this.amount1*1;
    }
    if(this.type1=="USD" && this.type2=="INR"){
      this.amount2 = this.amount1*75;
    }
    if(this.type1=="INR" && this.type2=="USD"){
      this.amount2 = this.amount1/75;
    }
    if(this.type1=="USD" && this.type2=="AUD"){
      this.amount2 = this.amount1*1.39;
    }
    if(this.type1=="AUD" && this.type2=="USD"){
      this.amount2 = this.amount1/1.39;
    }
    if(this.type1=="USD" && this.type2=="EUR"){
      this.amount2 = this.amount1*0.88;
    }
    if(this.type1=="EUR" && this.type2=="USD"){
      this.amount2 = this.amount1/0.88;
    }
    if(this.type1=="USD" && this.type2=="GBP"){
      this.amount2 = this.amount1*0.73;
    }
    if(this.type1=="GBP" && this.type2=="USD"){
      this.amount2 = this.amount1/0.73;
    }
    if(this.type1=="INR" && this.type2=="INR"){
      this.amount2 = this.amount1*1;
    }
    if(this.type1=="INR" && this.type2=="AUD"){
      this.amount2 = this.amount1*0.018;
    }
    if(this.type1=="AUD" && this.type2=="INR"){
      this.amount2 = this.amount1/0.018;
    }
    if(this.type1=="INR" && this.type2=="EUR"){
      this.amount2 = this.amount1*0.011;
    }
    if(this.type1=="EUR" && this.type2=="INR"){
      this.amount2 = this.amount1/0.011;
    }
    if(this.type1=="INR" && this.type2=="GBP"){
      this.amount2 = this.amount1*0.0099;
    }
    if(this.type1=="GBP" && this.type2=="INR"){
      this.amount2 = this.amount1/0.0099;
    }
    if(this.type1=="AUD" && this.type2=="EUR"){
      this.amount2 = this.amount1*0.633;
    }
    if(this.type1=="EUR" && this.type2=="AUD"){
      this.amount2 = this.amount1/0.633;
    }
    if(this.type1=="AUD" && this.type2=="GBP"){
      this.amount2 = this.amount1*0.529;
    }
    if(this.type1=="GBP" && this.type2=="AUD"){
      this.amount2 = this.amount1/0.529;
    }
    if(this.type1=="EUR" && this.type2=="GBP"){
      this.amount2 = this.amount1*0.8358;
    }
    if(this.type1=="GBP" && this.type2=="EUR"){
      this.amount2 = this.amount1/0.8358;
    }
  }
}
