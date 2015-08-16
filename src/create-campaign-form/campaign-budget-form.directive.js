(function(){
    'use strict'

    angular.module('CreateCampaignFormModule')
        .directive('campaignBudgetForm', function(){
            return {
                restrict: 'E',
                require: '^createCampaignForm',
                controller: 'CampaignBudgetFormCtrl',
                controllerAs: 'cbfCtrl',
                scope: {},
                templateUrl: 'create-campaign-form/templates/campaign-budget-form.template.html',
                link: function(scope, elem, attr, ccfCtrl) {
                    scope.campaignData = ccfCtrl.campaignData;
                    scope.resetFields = function(){
                        ccfCtrl.resetCampaignBudgetFields();
                    }
                }
            }
        })
})();
