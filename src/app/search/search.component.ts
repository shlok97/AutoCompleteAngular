import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
 selector: 'app-search',
 templateUrl: './search.component.html',
 styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() data;
  @Output() didSelectOption: EventEmitter<any> = new EventEmitter();

  searchValue = ""
  results = [
  ]
  selectValue(newValue) {
    this.searchValue = newValue.trim();
    this.onSearchChange(this.searchValue);
    this.didSelectOption.emit(this.searchValue);
  }
  onSearchChange(newValue) {
    this.results = this.data.filter((element) => element.toUpperCase().includes(newValue.toUpperCase()))
    console.log(this.results);
  }
  ngOnInit() {
  }
}
