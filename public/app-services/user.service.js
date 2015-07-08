(function () {
    'use strict';

    angular
        .module('app')
        .factory('UserService', UserService);

    UserService.$inject = ['$http'];
    function UserService($http) {
        var service = {};

        service.GetAll = GetAll;
		service.GetAllAbbr = GetAllAbbr;
        service.GetSingleState = GetSingleState;
        service.ListAll = ListAll;
        service.AddNew = AddNew;

        return service;

        function GetAll() {
            return $http.get('http://localhost:8888/states').then(handleSuccess, handleError('Error getting all states'));
        }
		
		function GetAllAbbr() {
            return $http.get('http://localhost:8888/states/abbreviations').then(handleSuccess, handleError('Error getting all states Abbreviations'));
        }

        function GetSingleState(id) {
            return $http.get('http://localhost:8888/states/' + id).then(handleSuccess, handleError('Error getting user by id'));
        }

        function ListAll() {
            return $http.get('http://localhost:8888/read/').then(handleSuccess, handleError('Error getting Guestbook entries'));
        }

        function AddNew(msg) {
            return $http.post('http://localhost:8888/write/', msg).then(handleSuccess, handleError('Error Adding to Guestbook'));
        }

        // handle functions

        function handleSuccess(data) {
            return data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }

})();
