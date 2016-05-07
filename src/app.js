// import 'materialize';

export class App {
    configureRouter(config, router) {
        config.title = 'Kevin Bost';
        config.map([
            {
                route: ['', 'welcome'],
                name: 'welcome',
                moduleId: 'welcome/welcome',
                nav: false,
                title: 'Welcome'
            },
            {
                route: 'child-router',
                name: 'child-router',
                moduleId: 'child-router',
                nav: false,
                title: 'Child Router'
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
