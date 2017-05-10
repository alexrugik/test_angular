(function () {
    AppNamespace.app = angular.module('app', [
        'ui.router',
        AppNamespace.appHeader,
        AppNamespace.appInvoices,
        AppNamespace.appInvoiceCreate
    ])
        .config(AppNamespace.appRoutes)
        .config(AppNamespace.appConfig)
        .service('apiService', AppNamespace.ApiService)
})();
