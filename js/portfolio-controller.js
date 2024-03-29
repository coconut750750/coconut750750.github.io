var app = angular.module("portfolio", []);
app.controller('portfolio-controller', ['$scope', function($scope) {
    $scope.projects = [
    {
        name: 'Mahjong',
        brief: 'Four-player Chinese Tile Game',
        description: 'An online multiplayer Chinese Mahjong game for four players. The objective of the game is to\
                     get a hand with four sets of three and a pair. This app features an elegant drag and drop user\
                     interface and multiple orientation options, list and circle view, for mobile support.',
        time_frame: 'Jan 2021 - now',
        img_src: 'img/mj.png',
        link: 'https://mj.brandon-wang.com/',
    }, {
        name: 'Pseudonyms',
        brief: 'Word-based Party Game',
        description: 'An interactive multiplayer word game based off the popular board game Codenames.\
                     It features the classic, competitve version as well as a collaborative version for smaller groups.\
                     This project was born during the 2020 quarantine; I was bored and wanted to play with my friends,\
                     who were all over the globe. Not sure if I had more fun making this or playing it after.',
        time_frame: 'Apr 2020 - now',
        img_src: 'img/pseudonyms.gif',
        link: 'https://pseudonyms.brandon-wang.com/',
    }, {
        name: 'Connoisseurs',
        brief: 'An Adult Party Game',
        description: 'A web-based Cards Against Humanity game. It includes many expansion packs and comes with several built-in,\
                      optional, house rules, like recycling cards. ',
        time_frame: 'May - Jun 2020',
        img_src: 'img/connoisseurs.png',
        link: 'https://connoisseurs.brandon-wang.com/'
    // }, {
    //     name: 'Smokescreen',
    //     brief: 'An HTTP(s) VPN',
    //     description: 'A VPN client and server written in Python3 for HTTP(s) connections. Users can easily deploy the VPN\
    //                  server on a remote machine (AWS, Digital Ocean, etc.), and connect to it with the client, which features\
    //                  a simple tkinter interface.',
    //     time_frame: 'Jul - Aug 2020',
    //     source: 'https://github.com/coconut750750/smokescreen',
    }, {
        name: 'Forty',
        brief: 'Multiplayer Card Game',
        description: 'An interactive multiplayer card game based off the popular trick-taking game forty points.\
                     Forty uses socket.io for bidirectional communication between players to maintain an real-time\
                     setting.',
        time_frame: 'Aug - Sept 2019',
        img_src: 'img/forty.gif',
        source: 'https://github.com/coconut750750/forty',
        link: 'https://forty.brandon-wang.com/',
    // }, {
    //     name: 'Lane',
    //     brief: 'Photo Collection',
    //     description: 'A mobile app written in React Native that aims to remind users of old photos collections. Lane displays a\
    //                   monthly calendar to present all photos with an anniversary in that month,\
    //                   giving users an easy interface to explore past photos.',
    //     time_frame: 'May 2019 - Jul 2019',
    //     img_src: 'img/lane.gif',
    }, {
        name: 'imusi',
        brief: 'Music Recommendation',
        description: 'A full stack app that recommends music to users based on an uploaded image. imusi\
                      recommends music that have similar features to an image. Some features include the \'liveliness\' and\
                      tempo, which map to the image\'s temperature and vibrance.',
        time_frame: 'Nov 2018',
        img_src: 'img/imusi.png',
        source: 'https://github.com/choiboy98/imusi',
        link: 'https://imusi.herokuapp.com'
    }, {
        name: 'Waffle',
        brief: 'Restaurant Picker',
        description: 'A web app that helps indecisive users choose where to eat by ranking restaurants\
                      in a competition similar to a bracket-style tournament. Users\
                      pick a restaurant between several pairs until there is a clear winner.',
        time_frame: 'Aug 2018',
        img_src: 'img/waffle.png',
        link: 'https://waffle.brandon-wang.com/'
    // }, {
    //     name: 'Shapify',
    //     brief: 'Recreating Images with Polygons',
    //     description: 'Given any image, Shapify uses the structure of genetic algorithms, seed, weed, breed, and mutate\
    //                   to produce an image with only polygons that looks similar to the input. It takes several thousand\
    //                   generations to reach an image that it vaguely similar.',
    //     time_frame: 'Jul 2018 - Sept 2018',
    //     img_src: '',
    //     source: 'https://github.com/coconut750750/shapify'
    // }, {
        // name: 'PokAI',
        // brief: 'Card Playing AI',
        // description: 'PokAI is an AI that plays the Chinese card game Landlard.\
        //               PokAI determines the best move by running Monte Carlo simularions. Compared to\
        //               a fixed-strategy bot, PokAI can win about 60% more games with the same starting hand.',
        // time_frame: 'Feb 2018 - Jul 2018',
        // img_src: 'img/pokai.png',
        // source: 'https://github.com/coconut750750/pokai'
    }, {
        name: 'Out of Ammo',
        brief: 'Infinite Runner',
        description: 'Simple geometric infinite runner where you only have one bullet that bounces around the map.\
                      Implements object pooling and procedural generation to create the map.',
        time_frame: 'Aug 2018',
        img_src: 'img/outofammo.png',
        link: 'https://outofammo.now.sh'
    }, {
        name: 'Heist',
        brief: '2D Adventure Game',
        description: 'A top-down 8-bit adventure game where the objective is to successfully heist\
                      valuables. Features autonomous NPC characters that walk around the city based on\
                      paths generated by a navigation system run on an A* path algorithm.',
        time_frame: 'Jan 2018 - Aug 2018',
        img_src: 'img/heist.png',
        source: 'https://github.com/coconut750750/Heist'
    // }, {
    //     name: 'Peek',
    //     brief: 'Image Sharing',
    //     description: 'A social media platform where users can share images and keep track of where the picture what taken\
    //                   as well as some image tags. Images are presented to the users on a map, so users can explore new photos\
    //                   by browsing an area on the map.',
    //     time_frame: 'Nov 2017 - Dec 2017',
    //     img_src: 'img/peek.png',
    //     source: 'https://github.com/coconut750750/Peek'
    // }, {
    //     name: 'Multi-Pong',
    //     brief: 'Multiplayer Pong Game',
    //     description: 'A single and multiplayer Pong game that features several different game modes such as\
    //                   Monkey-in-the-Middle and Hardcore. Multiplayer games implemented with Bluetooth. Also includes visual\
    //                   effects such as ball shadows and screen shakes.',
    //     time_frame: 'Nov 2016 - Nov 2017',
    //     img_src: 'img/pong.png',
    //     source: 'https://github.com/coconut750750/Pong',
    //     link: 'https://play.google.com/store/apps/details?id=com.brandon.pong'
    // }, {
    //     name: 'Mailbox',
    //     brief: 'Messaging App',
    //     description: 'A messaging app powered by Firebase\'s real-time database. Features efficient data storage, quick\
    //                   access to conversations, and the ability to hide messages. Integrates several material design concepts.',
    //     time_frame: 'Jan 2016 - Dec 2017',
    //     img_src: 'img/mailbox.png',
    //     source: 'https://github.com/coconut750750/Mailbox'
    }];
}]);