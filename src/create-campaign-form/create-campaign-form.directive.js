(function(){
    'use strict'

    angular.module('CreateCampaignFormModule')
        .directive('createCampaignForm', function(){
            return {
                restrict: 'E',
                transclude: true,
                controller: 'CreateCampaignFormController',
                controllerAs: 'ccfCtrl',
                scope:{},
                templateUrl:'create-campaign-form/templates/create-campaign-form.template.html'
            }
        })
})();
