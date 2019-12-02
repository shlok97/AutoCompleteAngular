import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = [
    "Microsoft",
    "Apple",
    "Facebook",
    "WIPRO",
    "Delhi",
  ]

  didSelectValue = (newValue) => {
    console.log(newValue);
  }
  title = 'autocomplete';
}
