(function(){
    'use strict'

    angular.module('CreateCampaignFormModule')
        .directive('campaignOptimizationForm', function(){
            return {
                restrict: 'E',
                require: '^createCampaignForm',
                scope: {},
                templateUrl: 'create-campaign-form/templates/campaign-optimization-form.template.html',
                link: function(scope, elem, attr, ccfCtrl) {
                    scope.campaignData = ccfCtrl.campaignData;
                    scope.resetFields = function(){
                        ccfCtrl.resetCampaignOptimizationFields();
                    }
                }
            }
        })
})();
