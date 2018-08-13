var app = angular.module("portfolio", []);
app.controller('portfolio-controller', ['$scope', function($scope) {
    $scope.projects = [{
        name: 'Heist',
        brief: '2D Adventure Game in Unity',
        description: 'Lorem Ipsum doler',
        time_frame: 'Jan 2018 - now',
        img_src: 'css/test.png'
    }, {
        name: 'PokAI',
        brief: 'AI trained to play the Chinese card game Landlord',
        description: 'Lorem Ipsum doler',
        time_frame: 'Jan - Jul 2018',
        img_src: 'css/test.png'
    }, {
        name: 'Shapify',
        brief: 'Genetic Algorithm recreating images with polygons',
        description: 'Lorem Ipsum doler',
        time_frame: 'Jul 2018 - now',
        img_src: 'css/test.png'
    }, {
        name: 'Mailbox',
        brief: 'Real-time messaging app using Firebase',
        description: 'Lorem Ipsum doler',
        time_frame: '2016 - 2017',
        img_src: 'css/test.png'
    }, {
        name: 'Multi-Pong',
        brief: 'Multiplayer Pong game on Android',
        description: 'Lorem Ipsum doler',
        time_frame: '2016 - 2017',
        img_src: 'img/pong.png'
    }];
}]);