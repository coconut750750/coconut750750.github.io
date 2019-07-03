var app = angular.module("portfolio", []);
app.controller('portfolio-controller', ['$scope', function($scope) {
    $scope.projects = [
    {
        name: 'imusi',
        brief: 'Music Recommendation',
        description: 'A Web and Mobile app that recommends music to users based on an uploaded image. The algorithm\
                      recommends music that have similar features to an image. Some features include the \'liveliness\' and\
                      tempo of the music, which map to the temperature and vibrance of the image.',
        time_frame: 'Nov 2018',
        img_src: 'img/imusi.png',
        source: 'https://github.com/choiboy98/imusi',
        link: 'https://imusi.herokuapp.com'
    }, {
        name: 'Waffle',
        brief: 'ReactJS Web Application',
        description: 'An application that helps indecisive users choose where to eat by ranking restaurants\
                      in a customized competition loosely similar to an ordinary bracket-style tournament. Users\
                      pick a restaurant between several pairs until a clear winner has been reached. Aims to gamify\
                      the dread of picking a restaurant.',
        time_frame: 'Aug 2018 - now',
        img_src: 'img/waffle.png',
        link: 'https://waaffle.herokuapp.com'
    }, {
        name: 'Out of Ammo',
        brief: 'Infinite Runner',
        description: 'Simple geometric infinite runner where you only have one bullet that bounces around the map.\
                      Implements object pooling and procedural generation to create the map.',
        time_frame: 'Aug 2018',
        img_src: 'img/outofammo.png',
        link: 'https://out-of-ammo.herokuapp.com/'
    }, {
        name: 'Shapify',
        brief: 'Genetic Algorithm Recreating Images with polygons',
        description: 'Given any image, Shapify uses the structure of genetic algorithms, seed, weed, breed, and mutate\
                      to produce an image with only polygons that looks similar to the input. It takes several thousand\
                      generations to reach an image that it vaguely similar.',
        time_frame: 'Jul 2018 - Sept 2018',
        img_src: '',
        source: 'https://github.com/coconut750750/shapify'
    }, {
        name: 'PokAI',
        brief: 'Card Playing AI',
        description: 'Written in Python, PokAI is an AI that plays the Chinese card game Landlard. With\
                      the help of Monte Carlo simulations, PokAI can determine the best move. Compared to\
                      a fixed-strategy bot, PokAI can win about 60% more games with the same starting hand.',
        time_frame: 'Feb 2018 - Jul 2018',
        img_src: 'img/pokai.png',
        source: 'https://github.com/coconut750750/pokai'
    }, {
        name: 'Heist',
        brief: '2D Adventure Game in Unity',
        description: 'A top-down 8-bit adventure game where the objective is to successfully heist\
                      valuables. Features autonomous NPC characters that walk around the city based on\
                      paths generated by a navigation system run on an A* path algorithm.',
        time_frame: 'Jan 2018 - now',
        img_src: 'img/heist.png',
        source: 'https://github.com/coconut750750/Heist'
    }, {
        name: 'Empower You',
        brief: 'Website Design',
        description: 'Designed a website for an education and career counseling group that target international\
                      Chinese students. Took advantage of Wordpress\'s support for blogs and added multilingual support. ',
        time_frame: 'Jan 2018',
        img_src: 'img/empoweryou.jpg',
        link: 'http://www.51empoweryou.com'
    }, {
        name: 'Peek',
        brief: 'Image Sharing Social Media',
        description: 'A social media platform where users can share images and keep track of where the picture what taken\
                      as well as some image tags. Images are presented to the users on a map, so users can explore new photos\
                      by browsing an area on the map.',
        time_frame: 'Nov 2017 - Dec 2017',
        img_src: 'img/peek.png',
        source: 'https://github.com/coconut750750/Peek'
    }, {
        name: 'Multi-Pong',
        brief: 'Multiplayer Pong Game',
        description: 'A single and multiplayer Pong game that features several different game modes such as\
                      Monkey-in-the-Middle and Hardcore. Multiplayer games implemented with Bluetooth. Also boasts\
                      subtle features such as ball shadows and screen shakes.',
        time_frame: 'Nov 2016 - Nov 2017',
        img_src: 'img/pong.png',
        source: 'https://github.com/coconut750750/Pong',
        link: 'https://play.google.com/store/apps/details?id=com.brandon.pong'
    }, {
        name: 'Mailbox',
        brief: 'Real-time Messaging App',
        description: 'A messaging app powered by Firebase\'s real-time database. Features efficient data storage, quick\
                      access to conversations, and the ability to hide messages. Integrates several material design concepts.',
        time_frame: 'Jan 2016 - Dec 2017',
        img_src: 'img/mailbox.png',
        source: 'https://github.com/coconut750750/Mailbox'
    }];
}]);