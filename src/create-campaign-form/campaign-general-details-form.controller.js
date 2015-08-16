(function() {
    'use strict'

    angular.module('CreateCampaignFormModule')
        .controller('CampaignGeneralDetailsFormCtrl', function($scope){
            var vm = this;

            vm.targetGames = [
                {
                    value: 1,
                    name: 'Bubble Witch Saga'
                },{
                    value: 2,
                    name: 'Candy Crush Saga'
                }
            ]
            vm.countries = [
                {
                    value: 1,
                    name: 'United States'
                },{
                    value: 2,
                    name: 'United Kingdom'
                }
            ];

            vm.devices = [
                {value: 1,
                    name: 'Iphone'
                },
                {value: 2,
                    name: 'Ipad'
                },{
                    value: 3,
                    name: 'Android'
                }
            ];
            vm.campaigns = [
                {
                    value: 1,
                    name: 'Known Player'
                },{
                    value: 2,
                    name: 'Medium Spender'
                }
            ];
            vm.creativePacks = [
                {value:1, name:'Creative Pack 1'},
                {value:2, name:'Creative Pack 2'}
            ]

            vm.pacing = [
                {value:1, name:'asap'},
                {value:2, name:'even'},
                {value:3, name:'weighted'}
            ]


        })
})()
