'use strict';

System.register(['fetch', 'aurelia-fetch-client'], function (_export, _context) {
    var HttpClient, httpClient, hi, About;

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
            hi = void 0;

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9zZWN0aW9ucy9hYm91dC9hYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ1Esc0IsdUJBQUEsVTs7O0FBRUosc0IsR0FBYSxJQUFJLFVBQUosRTtBQUNiLGM7OzZCQUVTLEs7QUFLVCxpQ0FBYztBQUFBOztBQUFBOztBQUFBLHlCQUpkLE9BSWMsR0FKSixPQUlJOztBQUlWLCtCQUFXLEtBQVgsQ0FBaUIsb0JBQWpCLEVBQ0MsSUFERCxDQUNNO0FBQUEsK0JBQVksU0FBUyxJQUFULEVBQVo7QUFBQSxxQkFETixFQUVDLElBRkQsQ0FFTSxnQkFBUTtBQUNWLDhCQUFLLEtBQUwsR0FBYSxLQUFLLEtBQWxCO0FBQ0EsOEJBQUssVUFBTCxHQUFrQixLQUFLLEtBQUwsQ0FBVyxVQUE3QjtBQUdILHFCQVBEO0FBU0g7O2dDQUVELFEsdUJBQVc7QUFFUCw0QkFBUSxHQUFSLENBQVksS0FBSyxVQUFqQjtBQUNILGlCIiwiZmlsZSI6Il9zZWN0aW9ucy9hYm91dC9hYm91dC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
