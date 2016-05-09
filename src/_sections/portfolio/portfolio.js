export class Portfolio {
    heading = 'portfolio';

    constructor() {
        this.stuff = [
            {
                name: 'This Portfolio',
                description: 'This website!',
                tags: [
                    'Aurelia',
                    'ES6'
                ]
            },
            {
                name: 'Previous Portfolio',
                description: 'My previous portfolio',
                tags: [
                    'this',
                    'that'
                ]
            },
            {
                name: 'Zeva',
                description: 'Evaluate any stuff',
                tags: [
                    'ASP.NET',
                    'Durandal',
                    'Knockout',
                    'SASS',
                    'Gulp'
                ]
            },
            {
                name: 'RFID ID Parser',
                description: 'Parses RFID signals, used to test integration of RFID into software solution.',
                tags: [
                    'NodeJS',
                    'ES5',
                    'ISS Logs'
                ]
            },
            {
                name: 'Environmental Sensor Collector/Parser',
                description: 'Parses Temperature, Humidity, Light CSV.  Appends to log file.',
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
