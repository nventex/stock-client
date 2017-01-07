import { Http, Response, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/toPromise";
import { IStock, IEstimateStock } from "./stock";
import { environment } from "../../environments/environment";

@Injectable()
export class StockService {
  rootUrl: string = environment.stockTrackerUrl;
  headers: Headers = new Headers();

  getStocksUrl: string = this.rootUrl;
  updateStockUrl: string = this.rootUrl + "/:symbol/:transactionId";
  buyStockUrl: string = this.rootUrl + "/:symbol";
  sellStockUrl: string = this.rootUrl + "/:symbol";
  deleteStockUrl: string = this.rootUrl + "/:symbol";
  addDividendUrl: string = this.rootUrl + "/:symbol/dividends";
  estimateStockUrl: string = this.rootUrl + "/:symbol/estimate";

  constructor(private http: Http) {
      this.headers.append("Content-Type", "application/json");
  }

  getStocks(): Observable<IStock[]> {
    return this.http.get(this.getStocksUrl)
           .map((response: Response) => <IStock[]>response.json());
  }

  buyStock(stock: any): any {
    let url = this.buyStockUrl.replace(":symbol", stock.symbol);
    
    return this.http.post(url, JSON.stringify(stock), {headers: this.headers}).toPromise();
  }

  deleteStock(stock: any): any {
    let url = this.deleteStockUrl.replace(":symbol", stock.symbol);
    
    return this.http.delete(url, {headers: this.headers}).toPromise();
  }  

  addDividends(stock: any): any {
    let url = this.addDividendUrl.replace(":symbol", stock.symbol);

    return this.http.post(url, JSON.stringify(stock), {headers: this.headers}).toPromise();
  }

  sellStock(stock: any): any {
    let url = this.sellStockUrl.replace(":symbol", stock.symbol);

    return this.http.put(url, JSON.stringify(stock), {headers: this.headers}).toPromise();    
  }

  updateStock(stock: any): any {
    let url = this.updateStockUrl.replace(":symbol", stock.symbol)
                                  .replace(":transactionId", stock.transactionId);

    return this.http.put(url, JSON.stringify(stock), {headers: this.headers}).toPromise();                                  
  }
  
  estimateStock(stock: IEstimateStock): Observable<IStock> {
    let url = this.estimateStockUrl.replace(":symbol", stock.symbol);
    return this.http.post(url, JSON.stringify(stock), {headers: this.headers})
      .map((response: Response) => <IStock>response.json());
  }
}