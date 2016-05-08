// import 'materialize';

export class App {
    configureRouter(config, router) {
        config.title = 'Kevin Bost';
        config.map([
            {
                route: ['', 'home'],
                name: 'home',
                moduleId: 'home/home',
                nav: false,
                title: 'Welcome'
            },
            {
                route: 'child-router',
                name: 'child-router',
                moduleId: 'child-router',
                nav: false,
                title: 'Child Router'
            },
            {
                route: 'portfolio',
                name: 'portfolio',
                moduleId: '_sections/portfolio/portfolio',
                nav: true,
                title: 'Portfolio'
            },
            {
                route: 'about',
                name: 'about',
                moduleId: '_sections/about/about',
                nav: true,
                title: 'About'
            }
        ]);

        this.router = router;
    }

    attached() {
        // $('.button-collapse').sideNav({
        //     menuWidth: 300, // Default is 240
        //     edge: 'right', // Choose the horizontal origin
        //     closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
        // });
        // Waves.displayEffect();
    }
}
