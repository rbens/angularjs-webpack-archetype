export default function routing($locationProvider, $stateProvider){
        'ngInject';

        // use the HTML5 History API
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        }).hashPrefix('!');

        $stateProvider.state({
            name: 'sample',
            url:'/',
            component : 'sample'
        });
}