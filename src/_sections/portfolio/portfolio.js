export class Portfolio {
    heading = 'portfolio';

    constructor() {
        this.stuff = [
            {
                name: 'Zeva',
                description: `Evaluate any stuff`,
                tags: [
                    'ASP.NET',
                    'Durandal',
                    'Knockout',
                    'SASS',
                    'Gulp'
                ]
            },
            {
                name: 'Log Parser',
                description: `idk like yolo ha ya sup duh`,
                tags: [
                    'NodeJS',
                    'ES5',
                    'ISS Logs'
                ]
            }
        ];
    }

    attached() {
        console.log('something');
    }
}
