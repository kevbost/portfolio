import 'fetch';
import {HttpClient} from 'aurelia-fetch-client';

let httpClient = new HttpClient();
let hi;

export class About {
    heading = 'about';
    // paragraphs = [`<h1>test test</h1>`];
    // paragraphs = [];

    constructor() {
        // ------------------
        //  Pull in json from src/copy-text.json
        // ------------------
        httpClient.fetch('src/copy-text.json')
        .then(response => response.json())
        .then(data => {
            this.about = data.about;
            this.paragraphs = data.about.paragraphs;
            // this.convertJsonToHTML(data.about.paragraphs);
            // console.log(data.about.paragraphs[0])
        });

    }

    attached() {
        // nothing to see here
        console.log(this.paragraphs);
    }
}
