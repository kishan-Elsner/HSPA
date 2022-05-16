import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Property:any=
  {
      "Id":1,
      "Type":"Hourse",
      "Price":12000
  }

}
