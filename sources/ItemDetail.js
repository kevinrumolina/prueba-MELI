export default class ItemDetail {
    constructor(item) {
        this.id = item.id;
        this.title = item.title;
        this.price = {
            currency: item.currency_id,
            amount: item.price
        };
        this.picture = item.pictures[0].url;
        this.condition = item.condition;
        this.free_shipping = item.shipping.free_shipping;
        this.sold_quantity = item.sold_quantity;
    }
}
