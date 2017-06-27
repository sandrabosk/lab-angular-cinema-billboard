import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../cinema.service'
@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {

  constructor(private cinema: CinemaService) { }

  ngOnInit() {
  }

}
