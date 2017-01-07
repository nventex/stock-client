import { Component, OnInit, ViewChild } from "@angular/core";
import { IStock } from "../stocks/stock";
import { StockService } from "../stocks/stock.service";
import { EstimateComponent } from "../stocks/estimate/estimate.component";
import { StockListComponent } from "../stocks/stock-list.component";

@Component({
    selector: "nv-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.less"]
})

export class DashboardComponent implements OnInit {
    @ViewChild(EstimateComponent) estimateComponent: EstimateComponent;
    @ViewChild(StockListComponent) stockListComponent: StockListComponent;

    tabSet: any = {};
    
    stockModel: any = {};
    grandTotal: number = 0;
    estimateSymbol: string;

    constructor(private stockService: StockService) {
    }

    ngOnInit() {
        this.tabSet.isStocks = true;
    }

    onEstimateStockClicked(stock: IStock) {
        this.tabSet.isStocks = false;
        this.tabSet.isBuyStock = false;
        this.tabSet.isEstimate = true;
        this.estimateComponent.setSymbol(stock);
    }

    buyStock() {
        this.stockService.buyStock(this.stockModel)
            .then(function(response) {
                this.stockListComponent.ngOnInit();
            }.bind(this));
    }

    deleteStock() {
        this.stockService.deleteStock(this.stockModel)
            .then(function(response) {
                this.stockListComponent.ngOnInit();
            }.bind(this));
    }

    setFocusOnStockSearch() {
        if (this.stockListComponent) {
            this.stockListComponent.setFocusOnSearch();
        }
    }
}