import { Component, Input } from "@angular/core";
import { IEstimateStock, EstimateStock, IStock, Stock } from "../stock";
import { StockService } from "../stock.service";

@Component({
    selector: "nv-estimate",
    templateUrl: "./estimate.component.html"
})

export class EstimateComponent {
    @Input() symbol: string;
    
    stockModel: IEstimateStock = new EstimateStock();

    errorMessage: any;
    estimatedStock: IStock = new Stock();
    stock: IStock = new Stock();

    constructor(private stockService: StockService) {
    }

    estimate() {
        this.stockService.estimateStock(this.stockModel)
            .subscribe(stock => this.estimatedStock = stock, error => this.errorMessage = <any>error);
    }

    setSymbol(stock: IStock) {
        this.estimatedStock = new Stock();
        this.stockModel.symbol = stock.symbol;
        this.stockModel.price = null;
        this.stock = stock;
    }
}