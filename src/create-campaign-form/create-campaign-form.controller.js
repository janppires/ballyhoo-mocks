(function() {
    'use strict'

    angular.module('CreateCampaignFormModule')
        .controller('CreateCampaignFormController', function ($mdDialog) {

            var vm = this;
            vm.campaignData = {
                description: '',
                status: true,
                production: true,
                targetGame: '',
                country: '',
                deviceType: '',
                campaignType: '',
                lapsedPlayers: false,
                creativePack: '',
                excludeApps: false,
                dailyBudget: '',
                pacing: ''
            };

            vm.resetCampaignGeneralDetailsFields = function(){
                console.log('resetCampaignGeneralDetailsFields');
                vm.campaignData.description = '';
                vm.campaignData.status = true;
                vm.campaignData.production = true;
                vm.campaignData.targetGame = '';
                vm.campaignData.country = '';
                vm.campaignData.deviceType = '';
                vm.campaignData.campaignType = '';
                vm.campaignData.lapsedPlayers = false;
                vm.campaignData.creativePack = '';

            }

            vm.resetCampaignOptimizationFields = function(){
                console.log('resetCampaignOptimizationFields');
                vm.campaignData.excludeApps = false;
            }

            vm.resetCampaignBudgetFields = function(){
                console.log('resetCampaignBudgetFields');
                vm.campaignData.dailyBudget = 0;
                vm.campaignData.pacing = '';
            }

            vm.createCampaign = function(){
                console.log(angular.toJson(vm.campaignData));
            }

            vm.showModal = function(ev) {
                $mdDialog.show({
                    controller: DialogController,
                    templateUrl: 'create-campaign-form/templates/create-campaign-modal.template.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    //clickOutsideToClose: true
                })
                    .then(function(answer) {
                        // ok
                        console.log('OK')
                    }, function() {
                        // not ok
                        console.log('NOT OK')
                    });
            };

            function DialogController($scope, $mdDialog) {
                $scope.hide = function() {
                    $mdDialog.hide();
                };
                $scope.cancel = function() {
                    $mdDialog.cancel();
                };
                $scope.answer = function(answer) {
                    $mdDialog.hide(answer);
                };
            }
    });

})()
