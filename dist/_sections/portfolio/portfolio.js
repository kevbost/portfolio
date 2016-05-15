'use strict';

System.register(['fetch', 'aurelia-fetch-client'], function (_export, _context) {
    var HttpClient, httpClient, Portfolio;

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

            _export('Portfolio', Portfolio = function () {
                function Portfolio() {
                    var _this = this;

                    _classCallCheck(this, Portfolio);

                    this.heading = 'portfolio';

                    httpClient.fetch('src/copy-text.json').then(function (response) {
                        return response.json();
                    }).then(function (data) {
                        _this.portfolioItems = data.portfolio;
                    });
                }

                Portfolio.prototype.attached = function attached() {};

                return Portfolio;
            }());

            _export('Portfolio', Portfolio);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9zZWN0aW9ucy9wb3J0Zm9saW8vcG9ydGZvbGlvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDUSxzQix1QkFBQSxVOzs7QUFFSixzQixHQUFhLElBQUksVUFBSixFOztpQ0FFSixTO0FBR1QscUNBQWM7QUFBQTs7QUFBQTs7QUFBQSx5QkFGZCxPQUVjLEdBRkosV0FFSTs7QUFJViwrQkFBVyxLQUFYLENBQWlCLG9CQUFqQixFQUNDLElBREQsQ0FDTTtBQUFBLCtCQUFZLFNBQVMsSUFBVCxFQUFaO0FBQUEscUJBRE4sRUFFQyxJQUZELENBRU0sZ0JBQVE7QUFDViw4QkFBSyxjQUFMLEdBQXNCLEtBQUssU0FBM0I7QUFDSCxxQkFKRDtBQUtIOztvQ0FFRCxRLHVCQUFXLENBRVYsQyIsImZpbGUiOiJfc2VjdGlvbnMvcG9ydGZvbGlvL3BvcnRmb2xpby5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
