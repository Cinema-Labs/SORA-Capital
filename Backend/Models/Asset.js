class Asset {
    constructor(assetId, name, symbol, tokens, admFee, performanceFee, startDate, endDate, maturationPeriod, price, investors ) {
        this.assetId = assetId;
        this.name = name;
        this.symbol = symbol;
        this.tokens = tokens;
        this.admFee = admFee;
        this.performanceFee = performanceFee;
        this.startDate = startDate;
        this.endDate = endDate;
        this.maturationPeriod = maturationPeriod;
        this.price = price;       
        this.investors = investors; 
    }
}

export default Asset;
