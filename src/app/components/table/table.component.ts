import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../../common/services/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  pageSize: any;
  pageEvent: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngAfterContentInit() {
    const pagesize = parseInt(localStorage.getItem(`pageSize`));
    if (pagesize) {
      this.pageSize = pagesize;
    } else {
      this.pageSize = 5;
    }
  }

  displayedColumns = ['symbol', 'longName'];
  dataSource: MatTableDataSource<any>;

  constructor(private dataService: DataService) {
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit(): void {
    this.dataService.currentData.subscribe((trendingStocks: any) => {
      if (trendingStocks && trendingStocks.length > 0) {
        this.dataSource.data = trendingStocks;
      }
    });
  }

  getPaginatorData(event: any) {
    localStorage.setItem(`pageSize`, event.pageSize);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
