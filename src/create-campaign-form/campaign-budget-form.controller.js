(function() {
    'use strict'

    angular.module('CreateCampaignFormModule')
        .controller('CampaignBudgetFormCtrl', function($scope){
            var vm = this;
            vm.pacing = [
                {value:1, name:'asap'},
                {value:2, name:'even'},
                {value:3, name:'weighted'}
            ]
        })
})()
