'use strict';

System.register([], function (_export, _context) {
    var ChildRouter;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _export('ChildRouter', ChildRouter = function () {
                function ChildRouter() {
                    _classCallCheck(this, ChildRouter);

                    this.heading = 'Child Router';
                }

                ChildRouter.prototype.configureRouter = function configureRouter(config, router) {
                    config.map([{
                        route: ['', 'home'],
                        name: 'home',
                        moduleId: 'home/home',
                        nav: true,
                        title: 'Welcome'
                    }, {
                        route: 'json_data',
                        name: 'json_data',
                        moduleId: '_sections/json_data/json_data',
                        nav: true,
                        title: 'JSON Data'
                    }, {
                        route: 'about',
                        name: 'about',
                        moduleId: '_sections/about/about',
                        nav: true,
                        title: 'about'
                    }, {
                        route: 'portfolio',
                        name: 'portfolio',
                        moduleId: '_sections/portfolio/portfolio',
                        nav: true,
                        title: 'portfolio'
                    }]);

                    this.router = router;
                };

                return ChildRouter;
            }());

            _export('ChildRouter', ChildRouter);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoaWxkLXJvdXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OzttQ0FFYSxXOzs7O3lCQUNULE8sR0FBVSxjOzs7c0NBRVYsZSw0QkFBZ0IsTSxFQUFRLE0sRUFBUTtBQUM1QiwyQkFBTyxHQUFQLENBQVcsQ0FBQztBQUNSLCtCQUFPLENBQUMsRUFBRCxFQUFLLE1BQUwsQ0FEQztBQUVSLDhCQUFNLE1BRkU7QUFHUixrQ0FBVSxXQUhGO0FBSVIsNkJBQUssSUFKRztBQUtSLCtCQUFPO0FBTEMscUJBQUQsRUFNUjtBQUNDLCtCQUFPLFdBRFI7QUFFQyw4QkFBTSxXQUZQO0FBR0Msa0NBQVUsK0JBSFg7QUFJQyw2QkFBSyxJQUpOO0FBS0MsK0JBQU87QUFMUixxQkFOUSxFQVlSO0FBQ0MsK0JBQU8sT0FEUjtBQUVDLDhCQUFNLE9BRlA7QUFHQyxrQ0FBVSx1QkFIWDtBQUlDLDZCQUFLLElBSk47QUFLQywrQkFBTztBQUxSLHFCQVpRLEVBa0JSO0FBQ0MsK0JBQU8sV0FEUjtBQUVDLDhCQUFNLFdBRlA7QUFHQyxrQ0FBVSwrQkFIWDtBQUlDLDZCQUFLLElBSk47QUFLQywrQkFBTztBQUxSLHFCQWxCUSxDQUFYOztBQTJCQSx5QkFBSyxNQUFMLEdBQWMsTUFBZDtBQUNILGlCIiwiZmlsZSI6ImNoaWxkLXJvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
