import 'fetch';
import {HttpClient} from 'aurelia-fetch-client';

let httpClient = new HttpClient();

export class About {
    heading = 'about';

    constructor() {
        // ------------------
        //  Pull in json from src/copy-text.json
        // ------------------
        httpClient.fetch('src/copy-text.json')
        .then(response => response.json())
        .then(data => {
            this.about = data.about;
            this.paragraphs = data.about.paragraphs;
        });

    }

    attached() {
        // nothing to see here
        console.log(this.paragraphs);
    }
}
