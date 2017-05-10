(function () {
    AppNamespace.ApiService = ApiService;

    function ApiService($http) {
        var $ctrl = this;

        $ctrl.getInvoices = getInvoices;
        $ctrl.getProducts = getProducts;
        $ctrl.getCustomers = getCustomers;

        function getInvoices() {
            return $http.get('/api/invoices');
        }

        function getProducts() {
            return $http.get('/api/products');
        }

        function getCustomers() {
            return $http.get('/api/customers');
        }
    }
})();