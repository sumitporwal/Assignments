import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AppService } from '../app.service';

export interface UserData {
  id: number;
  name: string;
  birthDate: string;
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  userData: any = [];
  displayedColumns = ["id","name","birthDate"];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private appService: AppService) { 
    this.dataSource = new MatTableDataSource(this.userData);
  }

  ngOnInit(): void {
    this.appService.getData().subscribe((data) => {
      this.userData = data;
      this.dataSource= new MatTableDataSource(this.userData);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  compareName(a: any, b: any) {

    // converting to uppercase to have case-insensitive comparison
    const name1 = a.name.toUpperCase();
    const name2 = b.name.toUpperCase();

    let comparison = 0;

    if (name1 > name2) {
        comparison = 1;
    } else if (name1 < name2) {
        comparison = -1;
    }
    return comparison;
  }

  sortByName(){
    this.userData.sort(this.compareName);
    this.dataSource= new MatTableDataSource(this.userData);
    this.dataSource.paginator = this.paginator;
  }

  sortByBirthDate(){
    this.userData.sort(function(a: any,b: any){
      return new Date(a.birthDate).valueOf() - new Date(b.birthDate).valueOf();
    });
    this.dataSource= new MatTableDataSource(this.userData);
    this.dataSource.paginator = this.paginator;
  }

  radioChange(value: string) {
    if(value == "1"){
      this.sortByName();
    }
    else{
      this.sortByBirthDate();
    }
  }


}
