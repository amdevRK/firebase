import { Component, OnInit } from '@angular/core';
import { MyfirebaseService } from '../shared/myfirebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  array: any;
  data: any;
  id: any;
  string: any;

  constructor( private fire: MyfirebaseService) { }

  ngOnInit() {
    this.fire.getDataFromServerApplication().then(data => {
      this.id = data.productid;
      this.string = data.count2['string2'];
      this.array = this.string['-LNR-80Sy7q0QQuOGrd0'].split('       ');
    });
  }

}
