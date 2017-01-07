import { Component, OnInit, EventEmitter, Output, AfterViewInit, ViewChildren } from "@angular/core";
import { IStock } from "./stock";
import { StockService } from "./stock.service";

@Component({
    selector: "nv-stock-list",
    templateUrl: "app/stocks/stock-list.component.html"
})
export class StockListComponent implements OnInit, AfterViewInit {
    @Output() onEstimateStockClicked: EventEmitter<IStock> = new EventEmitter<IStock>();

    @ViewChildren("searchInput") viewChildren;

    stocks: IStock[];
    errorMessage: any;
    selectedStock: IStock;
    stockModel: any = {};
    stockFilter: string;
    
    constructor(private stockService: StockService) {
    }
    
    ngAfterViewInit() {
        this.setFocusOnSearch();
    }

    ngOnInit(): void {
        this.getStocks(function (stocks) {
            return this.setCollapse(stocks);
        }.bind(this));
    }

    buyStock(): void {
        this.stockService.buyStock(this.stockModel)
            .then(function(response) {
                this.stockCallback(response);
            }.bind(this));
    }

    addDividend(): void {
        this.stockService.addDividends(this.stockModel)
            .then(function(response) {
                this.stockCallback(response);
            }.bind(this));
    }

    sellStock(): void {
        this.stockService.sellStock(this.stockModel)
            .then(function(response) {
                this.stockCallback(response);
            }.bind(this));
    }

    updateStock(): void {
        this.stockService.updateStock(this.stockModel)
            .then(function(response) {
                this.stockCallback(response);
            }.bind(this));
    }

    setSelectedStock(stock, event) {
        this.stockModel = {};
        this.selectedStock = stock;

        if (event && event.toElement.innerText.toUpperCase() == "DIVIDEND") {
            this.stockModel.quantity = stock.quantity;
            this.stockModel.dividend = stock.dividend;
        }

        this.stockModel.symbol = stock.symbol;
    }

    setTransactionId(stock, transaction) {
        this.setSelectedStock(stock, null);
        this.stockModel.quantityPaid = transaction.quantityPaid;
        this.stockModel.paid = transaction.paid;
        this.stockModel.transactionId = transaction._id;
    }

    getCurrencyStyle(amount: number) {
        if (amount < 0) {
            return "red";
        }
    }

    estimateClicked(symbol: IStock) {
        this.onEstimateStockClicked.emit(symbol);
    }

    setFocusOnSearch() {
        this.viewChildren ? this.viewChildren.first.nativeElement.focus() : null;
    }

    private stockCallback(response) {
        this.getStocks(function(stocks) {
            return this.setCollapse(stocks);
        }.bind(this));
    }

    private setCollapse(stocks) {
        stocks.forEach(stock => { 
            stock.isCollapsed = true;
        });
        
        return stocks;
    }

    private getStocks(callBack): void {
        this.stockService.getStocks()
            .subscribe(stocks => this.stocks = callBack(stocks),
            error => this.errorMessage = <any>error);
    }
}