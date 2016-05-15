import 'fetch';
import {HttpClient} from 'aurelia-fetch-client';

let httpClient = new HttpClient();

export class Portfolio {
    heading = 'portfolio';

    constructor() {
        // ------------------
        //  Pull in json from src/copy-text.json
        // ------------------
        httpClient.fetch('src/copy-text.json')
        .then(response => response.json())
        .then(data => {
            this.portfolioItems = data.portfolio;
        });
    }

    attached() {
        // nothing to see here
    }
}
