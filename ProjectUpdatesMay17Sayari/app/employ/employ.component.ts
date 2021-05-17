import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employ } from '../employ';
import { EmployService } from '../employ.service';

@Component({
  selector: 'app-employ',
  templateUrl: './employ.component.html',
  styleUrls: ['./employ.component.css']
})
export class EmployComponent implements OnInit {
  emps : Observable<Employ[]>;
  constructor(private _employservice : EmployService) {
    this.emps= this._employservice.showEmploy();
  }
  ngOnInit(): void {
  }

}
