angular.module('App')
    .controller('NavCtrl', ['$http', '$rootScope', function ($http, $rootScope) {
            var vm = this;
            vm.toggleMenu = function () {
                $rootScope.seeMenu = false;
            }
            var onError = function() {

                $(document.body).ec_alertsToaster({
                    message: 'error reading navigation data',
                    type: 'state-warning',
                    toastLife: 3000
                });
            }

            var onComplete = function(response) {
                $(document.body).ec_alertsToaster({
                    message: 'navigation data readed',
                    type: "state-success",
                    toastLife: 2000
                });
                vm.items = response.data;
            }
            var getRepo = function() {
                return $http.get('/Structure/App/Navigation/navigation.json')
                    .then(onComplete, onError);
            }

            getRepo();

        }
    ])
    .controller('MenuCtrl', ['$rootScope', function ($rootScope) {
        $rootScope.seeMenu = false;
        var menu = this;

        menu.toggleMenu = function () {
            $rootScope.seeMenu = true;
        }
        
    }])
    .directive('navLink', function () {
    return {
        restrict: "A",
        scope: {
            block : "="
        },
        templateUrl: '/Structure/App/Navigation/links.html'
        
    };
});
