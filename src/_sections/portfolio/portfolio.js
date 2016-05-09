export class Portfolio {
    heading = 'portfolio';

    constructor() {
        this.portfolioItems = [
            {
                name: 'This Portfolio',
                description: 'This website!',
                repo: 'https://github.com/kevbost/portfolio',
                tags: [
                    'Aurelia',
                    'ES6'
                ]
            },
            {
                name: 'Previous Portfolio',
                description: 'My previous portfolio',
                repo: 'https://github.com/kevbost/kb-portfolio',
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
                repo: 'https://github.com/kevbost/node-RFID-collector-and-parser',
                tags: [
                    'NodeJS',
                    'ES5',
                    'ISS Logs',
                    'inquirer.js'
                ]
            },
            {
                name: 'Environmental Sensor Collector/Parser',
                description: 'Parses Temperature, Humidity, Light CSV.  Appends to log file.',
                repo: 'https://github.com/kevbost/node-sensor-output-parser',
                tags: [
                    'NodeJS',
                    'ES5',
                    'ISS Logs'
                ]
            }
        ];
    }

    attached() {
        // console.log(this);
    }
}
