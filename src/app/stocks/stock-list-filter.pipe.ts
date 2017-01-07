import { Pipe, PipeTransform } from "@angular/core";
import { IStock } from "./stock";

@Pipe({
    name: "stockListFilter"
})

export class StockListFilterPipe implements PipeTransform {

    transform(value: IStock[], filter: string): IStock[] {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter((stock: IStock) => 
            stock.symbol.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}