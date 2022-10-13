import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
cartTotal:number=0
  constructor(private cartCount:CounterService) { }

  ngOnInit(): void {
    this.cartCount.counterVal.subscribe((val) => this.cartTotal = val)

  }

}
