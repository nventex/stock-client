import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./home/dashboard.component";
import { StockListComponent } from "./stocks/stock-list.component";
import { EstimateComponent } from "./stocks/estimate/estimate.component";

import { StockService } from "./stocks/stock.service";
import { StockListFilterPipe } from "./stocks/stock-list-filter.pipe";

import { ModalModule, TabsModule, CollapseModule } from "ng2-bootstrap";

const appRoutes: Routes = [
  { path: "", component: DashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StockListComponent,
    EstimateComponent,
    StockListFilterPipe
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
