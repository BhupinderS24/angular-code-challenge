import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TableComponent } from '../../components/table/table.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToastrModule } from 'ngx-toastr';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { TrendingStocksComponent } from '../../components/trending-stocks/trending-stocks.component';
@NgModule({
  declarations: [
    DashboardComponent,
    TableComponent,
    ToolbarComponent,
    TrendingStocksComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatToolbarModule,
  ],
  entryComponents: [],
})
export class DashboardModule {}
