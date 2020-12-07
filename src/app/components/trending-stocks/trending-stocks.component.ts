import { Component, OnInit } from '@angular/core';
import { NetworkCallsService } from '../../common/services/network-calls.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from '../../common/services/data.service';
import { ErrorHandlerService } from '../../common/services/error-handler.service';

@Component({
  selector: 'app-trending-stocks',
  templateUrl: './trending-stocks.component.html',
  styleUrls: ['./trending-stocks.component.css'],
})
export class TrendingStocksComponent implements OnInit {
  constructor(
    private networkCall: NetworkCallsService,
    private spinner: NgxSpinnerService,
    private dataService: DataService,
    private errorService: ErrorHandlerService
  ) {}
  trendingStocks: any;
  showTable = false;

  ngOnInit(): void {
    this.spinner.show();
    this.networkCall.getTrendingTickers().subscribe(
      (data: any) => {
        this.spinner.hide();
        this.trendingStocks = data.finance.result[0].quotes;
        this.dataService.changeData(this.trendingStocks);
        this.showTable = true;
      },
      (err) => {
        this.spinner.hide();
        this.errorService.errorHandler(err);
      }
    );
  }
}
