(function () {
    'use strict';

    angular
        .module('app')
        .controller('AddnewController', AddnewController);

    AddnewController.$inject = ['UserService', '$location', '$rootScope', 'FlashService'];
    function AddnewController(UserService, $location, $rootScope, FlashService) {
        var vm = this;

        vm.addnew = addnew;

        function addnew() {
            vm.dataLoading = true;
            UserService.AddNew(vm.msg)
                .then(function (response) {
                    if (message) {
                        FlashService.Success('Message added successfully', true);
						vm.dataLoading = false;
						$location.path('/guestbook');
                    } else {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });
        }
    }

})();
