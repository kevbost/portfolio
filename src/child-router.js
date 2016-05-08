// import { Router } from 'aurelia-router';

export class ChildRouter {
    heading = 'Child Router';

    configureRouter(config, router) {
        config.map([{
            route: ['', 'home'],
            name: 'home',
            moduleId: 'home/home',
            nav: true,
            title: 'Welcome'
        }, {
            route: 'json_data',
            name: 'json_data',
            moduleId: '_sections/json_data/json_data',
            nav: true,
            title: 'JSON Data'
        }, {
            route: 'about',
            name: 'about',
            moduleId: '_sections/about/about',
            nav: true,
            title: 'about'
        }, {
            route: 'portfolio',
            name: 'portfolio',
            moduleId: '_sections/portfolio/portfolio',
            nav: true,
            title: 'portfolio'
        }
        ]);

        this.router = router;
    }
}
