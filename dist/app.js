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
                        route: ['', 'welcome'],
                        name: 'welcome',
                        moduleId: 'welcome/welcome',
                        nav: false,
                        title: 'Welcome'
                    }, {
                        route: 'child-router',
                        name: 'child-router',
                        moduleId: 'child-router',
                        nav: false,
                        title: 'Child Router'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OzsyQkFFYSxHOzs7Ozs4QkFDVCxlLDRCQUFnQixNLEVBQVEsTSxFQUFRO0FBQzVCLDJCQUFPLEtBQVAsR0FBZSxZQUFmO0FBQ0EsMkJBQU8sR0FBUCxDQUFXLENBQ1A7QUFDSSwrQkFBTyxDQUFDLEVBQUQsRUFBSyxTQUFMLENBRFg7QUFFSSw4QkFBTSxTQUZWO0FBR0ksa0NBQVUsaUJBSGQ7QUFJSSw2QkFBSyxLQUpUO0FBS0ksK0JBQU87QUFMWCxxQkFETyxFQVFQO0FBQ0ksK0JBQU8sY0FEWDtBQUVJLDhCQUFNLGNBRlY7QUFHSSxrQ0FBVSxjQUhkO0FBSUksNkJBQUssS0FKVDtBQUtJLCtCQUFPO0FBTFgscUJBUk8sQ0FBWDs7QUFpQkEseUJBQUssTUFBTCxHQUFjLE1BQWQ7QUFDSCxpQjs7OEJBRUQsUSx1QkFBVyxDQU9WLEMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
