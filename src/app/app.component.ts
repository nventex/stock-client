import { Component } from "@angular/core";
import { StockService } from "./stocks/stock.service";
import { RouterLink } from "@angular/router";
import { DashboardComponent } from "./home/dashboard.component";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./home/dashboard.component.less"],
    providers: [StockService]
})
export class AppComponent {
}