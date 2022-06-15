import { Component, OnInit } from '@angular/core';
import { FoodService } from '../service/food.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private fs:FoodService) { }

  ngOnInit(): void {
  }

}
