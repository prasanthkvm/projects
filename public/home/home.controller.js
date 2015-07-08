(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['UserService', '$rootScope'];
    function HomeController(UserService, $rootScope) {
		
        var vm = this;
		vm.trigger = false;
		vm.alltrigger = false;
        vm.user = null;
        vm.allStates = [];
		vm.SingleState = [];
		vm.allStatesAbbr = [];
		vm.loadAllStates = loadAllStates;
		vm.GetStateDetails = GetStateDetails;
        initController();

        function initController() {
            loadAllStatesAbbr();
        }


        function loadAllStates() {
            UserService.GetAll()
                .then(function (states) {
                    vm.allStates = states;
					vm.trigger = false;
					vm.alltrigger = true;
                });
        }
		
		function loadAllStatesAbbr() {
            UserService.GetAllAbbr()
                .then(function (states) {
                    vm.allStatesAbbr = states;
                });
        }
		
		function GetStateDetails(id) {
            UserService.GetSingleState(id)
                .then(function (state) {
                    vm.SingleState = state;
					vm.alltrigger = false;
					vm.trigger = true;
                });
        }

       
    }

})();