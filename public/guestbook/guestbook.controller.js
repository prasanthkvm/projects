(function () {
    'use strict';

    angular
        .module('app')
        .controller('GuestbookController', GuestbookController);

    GuestbookController.$inject = ['UserService', '$location', '$rootScope', 'FlashService'];
    function GuestbookController(UserService, $location, $rootScope, FlashService) {
        var vm = this;
		vm.listall = listall;
		vm.entries = [];
		
		function listall(){
			vm.dataLoading = true;
			UserService.ListAll()
			.then(function (response) {
				console.log(response);
				vm.entries = response;
			});
			vm.dataLoading = false;
		}
		listall();
    }

})();
