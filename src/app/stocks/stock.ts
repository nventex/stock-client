export interface IEstimateStock {
    symbol: string;
    price: number;
}

export interface ITransaction {
    quantityPaid: number;
    paid: number;
    hasSold: boolean;
    paidPerShare: number;
    portionalWeight: number;
    quantity: number;
    marketValue: number;
    netValue: number;
    _id: string;
}

export interface IStock {
    _id: string;
    symbol: string;
    price: number;
    quantity: number;
    quantityPaid: number;
    dividend: number;
    totalNetValue: number;
    isCollapsed: boolean;
    transactions: ITransaction[];
}

export class EstimateStock implements IEstimateStock {
    public symbol: string;
    public price: number;
}

export class Stock implements IStock {
    public _id: string;
    public symbol: string;
    public price: number;
    public quantity: number;
    public quantityPaid: number;
    public dividend: number;
    public totalNetValue: number;
    public isCollapsed: boolean;
    public transactions: ITransaction[];
}