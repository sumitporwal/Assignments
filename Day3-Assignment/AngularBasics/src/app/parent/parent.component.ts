import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  fetchData(){
      this.route.navigate(["/data"]);
  }

}
