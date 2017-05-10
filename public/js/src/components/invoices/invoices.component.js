(function () {
    AppNamespace.appInvoices = angular.module('app.components.invoices', [])
        .component('appInvoices', {
            templateUrl: '/js/src/components/invoices/invoices.template.html',
            controller: InvoicesController,
            controllerAs: '$ctrl'
        })
        .name;

    function InvoicesController($state, apiService) {
        var $ctrl = this;
        $ctrl.invoices = [1, 2, 3];

        $ctrl.$onInit = $onInit;
        $ctrl.onCreateInvoice = onCreateInvoice;

        function $onInit() {
            apiService.getInvoices()
                .then(function (response) {
                    Array.prototype.push.apply($ctrl.invoices, response.data);
                });
        }

        function onCreateInvoice() {
            $state.go('app.createInvoice');
        }
    }
})();