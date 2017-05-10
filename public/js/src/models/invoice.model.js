(function () {
    var id = 0;

    AppNamespace.Invoice = Invoice;

    function Invoice() {
        this.__id = id++;
        this.__customer_id = 0;
        this.__discount = 0;
        this.__total = 0;
    }

    Invoice.prototype.getInvoiceData = function () {
        return {
            id: this.getId(),
            customer_id: this.getCustomerId(),
            discount: this.getDiscount(),
            total: this.getTotal()
        }
    };

    Invoice.prototype.getId = function () {
        return this.__id;
    };

    Invoice.prototype.getCustomerId = function () {
        return this.__customer_id;
    };

    Invoice.prototype.setCustomerId = function (customerId) {
        if (!customerId) {
            throw new Error('no customerId');
        }
        this.__customer_id = customerId;
    };

    Invoice.prototype.getDiscount = function () {
        return this.__discount;
    };

    Invoice.prototype.setDiscount = function (discount) {
        if (!discount) {
            throw new Error('no discount');
        }
        this.__discount = discount;
    };

    Invoice.prototype.getTotal = function () {
        return this.__total;
    };

    Invoice.prototype.setTotal = function (total) {
        if (!total) {
            throw new Error('no total');
        }
        this.__total = total;
    };

})();