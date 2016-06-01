'use strict';

System.register(['fetch', 'aurelia-fetch-client'], function (_export, _context) {
    var HttpClient, httpClient, About;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_fetch) {}, function (_aureliaFetchClient) {
            HttpClient = _aureliaFetchClient.HttpClient;
        }],
        execute: function () {
            httpClient = new HttpClient();

            _export('About', About = function () {
                function About() {
                    var _this = this;

                    _classCallCheck(this, About);

                    this.heading = 'about';

                    httpClient.fetch('src/copy-text.json').then(function (response) {
                        return response.json();
                    }).then(function (data) {
                        _this.about = data.about;
                        _this.paragraphs = data.about.paragraphs;
                    });
                }

                About.prototype.attached = function attached() {
                    console.log(this.paragraphs);
                };

                return About;
            }());

            _export('About', About);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9zZWN0aW9ucy9hYm91dC9hYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ1Esc0IsdUJBQUEsVTs7O0FBRUosc0IsR0FBYSxJQUFJLFVBQUosRTs7NkJBRUosSztBQUdULGlDQUFjO0FBQUE7O0FBQUE7O0FBQUEseUJBRmQsT0FFYyxHQUZKLE9BRUk7O0FBSVYsK0JBQVcsS0FBWCxDQUFpQixvQkFBakIsRUFDQyxJQURELENBQ007QUFBQSwrQkFBWSxTQUFTLElBQVQsRUFBWjtBQUFBLHFCQUROLEVBRUMsSUFGRCxDQUVNLGdCQUFRO0FBQ1YsOEJBQUssS0FBTCxHQUFhLEtBQUssS0FBbEI7QUFDQSw4QkFBSyxVQUFMLEdBQWtCLEtBQUssS0FBTCxDQUFXLFVBQTdCO0FBQ0gscUJBTEQ7QUFPSDs7Z0NBRUQsUSx1QkFBVztBQUVQLDRCQUFRLEdBQVIsQ0FBWSxLQUFLLFVBQWpCO0FBQ0gsaUIiLCJmaWxlIjoiX3NlY3Rpb25zL2Fib3V0L2Fib3V0LmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
