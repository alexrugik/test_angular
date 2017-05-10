(function () {
    AppNamespace.appHeader = angular.module('app.header', [])
        .component('appHeader', {
            templateUrl: '/js/src/components/header/header.template.html',
            controller: HeaderController,
            controllerAs: '$ctrl'
        })
        .name;

    function HeaderController() {

    }
})();