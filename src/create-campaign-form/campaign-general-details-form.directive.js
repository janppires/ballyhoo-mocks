(function(){
    'use strict'

    angular.module('CreateCampaignFormModule')
        .directive('campaignGeneralDetailsForm', function(){
            return {
                restrict: 'E',
                require: '^createCampaignForm',
                //scope: {campaignData:'='},
                scope: {},
                controller: 'CampaignGeneralDetailsFormCtrl',
                controllerAs: 'cgdfController',
                //bindToController: true,
                templateUrl: 'create-campaign-form/templates/campaign-general-details-form.template.html',
                link: function(scope, elem, attr, ccfCtrl) {
                    scope.campaignData = ccfCtrl.campaignData;
                    scope.resetFields = function(){
                        ccfCtrl.resetCampaignGeneralDetailsFields();
                    }

                }
            }
        })
})();
