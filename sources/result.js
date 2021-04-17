export default class Result {
    constructor(result) {
        this.id = result.id;
        this.title = result.title;
        this.price = {
            currency: result.currency_id,
            amount: result.price
        };
        this.picture = result.thumbnail;
        this.condition = result.condition;
        this.free_shipping = result.shipping.free_shipping;
        this.state = result.address.state_name;
    }
}