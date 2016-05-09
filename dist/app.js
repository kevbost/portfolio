'use strict';

System.register([], function (_export, _context) {
    var App;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _export('App', App = function () {
                function App() {
                    _classCallCheck(this, App);
                }

                App.prototype.configureRouter = function configureRouter(config, router) {
                    config.title = 'Kevin Bost';
                    config.map([{
                        route: ['', 'home'],
                        name: 'home',
                        moduleId: 'home/home',
                        nav: false,
                        title: 'Welcome'
                    }, {
                        route: 'child-router',
                        name: 'child-router',
                        moduleId: 'child-router',
                        nav: false,
                        title: 'Child Router'
                    }, {
                        route: 'about',
                        name: 'about',
                        moduleId: '_sections/about/about',
                        nav: true,
                        title: 'About'
                    }, {
                        route: 'portfolio',
                        name: 'portfolio',
                        moduleId: '_sections/portfolio/portfolio',
                        nav: true,
                        title: 'Portfolio'
                    }]);

                    this.router = router;
                };

                App.prototype.attached = function attached() {};

                return App;
            }());

            _export('App', App);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OzsyQkFFYSxHOzs7Ozs4QkFDVCxlLDRCQUFnQixNLEVBQVEsTSxFQUFRO0FBQzVCLDJCQUFPLEtBQVAsR0FBZSxZQUFmO0FBQ0EsMkJBQU8sR0FBUCxDQUFXLENBQ1A7QUFDSSwrQkFBTyxDQUFDLEVBQUQsRUFBSyxNQUFMLENBRFg7QUFFSSw4QkFBTSxNQUZWO0FBR0ksa0NBQVUsV0FIZDtBQUlJLDZCQUFLLEtBSlQ7QUFLSSwrQkFBTztBQUxYLHFCQURPLEVBUVA7QUFDSSwrQkFBTyxjQURYO0FBRUksOEJBQU0sY0FGVjtBQUdJLGtDQUFVLGNBSGQ7QUFJSSw2QkFBSyxLQUpUO0FBS0ksK0JBQU87QUFMWCxxQkFSTyxFQWVQO0FBQ0ksK0JBQU8sT0FEWDtBQUVJLDhCQUFNLE9BRlY7QUFHSSxrQ0FBVSx1QkFIZDtBQUlJLDZCQUFLLElBSlQ7QUFLSSwrQkFBTztBQUxYLHFCQWZPLEVBc0JQO0FBQ0ksK0JBQU8sV0FEWDtBQUVJLDhCQUFNLFdBRlY7QUFHSSxrQ0FBVSwrQkFIZDtBQUlJLDZCQUFLLElBSlQ7QUFLSSwrQkFBTztBQUxYLHFCQXRCTyxDQUFYOztBQStCQSx5QkFBSyxNQUFMLEdBQWMsTUFBZDtBQUNILGlCOzs4QkFFRCxRLHVCQUFXLENBT1YsQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
