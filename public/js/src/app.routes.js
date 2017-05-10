(function () {
    AppNamespace.appRoutes = appRoutes;

    function appRoutes($stateProvider) {
        $stateProvider
            .state('app', {
                abstract: true,
                views: {
                    header: { template: '<app-header></app-header>' },
                    '': { template: '<div ui-view></div>' }
                }
            })
            .state('app.products', {
                url: '/products',
                template: '<app-products></app-products>'
            })
            .state('app.customers', {
                url: '/customers',
                template: '<app-customers></app-customers>'
            })
            .state('app.invoices', {
                url: '/invoices',
                template: '<app-invoices></app-invoices>'
            })
            .state('app.createInvoice', {
                url: '/createInvoice',
                template: '<app-invoice-create></app-invoice-create>'
            })
    }
})();