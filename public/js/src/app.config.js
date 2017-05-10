(function () {
    AppNamespace.appConfig = appConfig;
    
    function appConfig($urlRouterProvider) {
        $urlRouterProvider.otherwise('/invoices');
    }
})();
