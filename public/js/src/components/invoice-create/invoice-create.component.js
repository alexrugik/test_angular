(function () {
    AppNamespace.appInvoiceCreate = angular.module('app.components.createInvoice', [])
        .component('appInvoiceCreate', {
            templateUrl: '/js/src/components/invoice-create/invoice-create.template.html',
            controller: InvoiceCreateController,
            controllerAs: '$ctrl'
        })
        .name;

    function InvoiceCreateController(apiService) {
        var $ctrl = this;
        $ctrl.customers = [];
        $ctrl.formData = {discount: 0};

        $ctrl.$onInit = $onInit;
        $ctrl.setCustomers = setCustomers;

        function $onInit() {
            $ctrl.invoice = new AppNamespace.Invoice();
            $ctrl.setCustomers();
        }

        function setCustomers() {
            apiService.getCustomers()
                .then(function (response) {
                    Array.prototype.push.apply($ctrl.customers, response.data);
                });
        }

        function onSaveInvoice() {

        }

    }
})();