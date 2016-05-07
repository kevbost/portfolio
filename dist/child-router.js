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
                        route: ['', 'welcome'],
                        name: 'welcome',
                        moduleId: 'welcome/welcome',
                        nav: true,
                        title: 'Welcome'
                    }, {
                        route: 'json_data',
                        name: 'json_data',
                        moduleId: 'json_data/json_data',
                        nav: true,
                        title: 'JSON Data'
                    }]);

                    this.router = router;
                };

                return ChildRouter;
            }());

            _export('ChildRouter', ChildRouter);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoaWxkLXJvdXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OzttQ0FBYSxXOzs7O3lCQUNULE8sR0FBVSxjOzs7c0NBRVYsZSw0QkFBZ0IsTSxFQUFRLE0sRUFBUTtBQUM1QiwyQkFBTyxHQUFQLENBQVcsQ0FBQztBQUNSLCtCQUFPLENBQUMsRUFBRCxFQUFLLFNBQUwsQ0FEQztBQUVSLDhCQUFNLFNBRkU7QUFHUixrQ0FBVSxpQkFIRjtBQUlSLDZCQUFLLElBSkc7QUFLUiwrQkFBTztBQUxDLHFCQUFELEVBTVI7QUFDQywrQkFBTyxXQURSO0FBRUMsOEJBQU0sV0FGUDtBQUdDLGtDQUFVLHFCQUhYO0FBSUMsNkJBQUssSUFKTjtBQUtDLCtCQUFPO0FBTFIscUJBTlEsQ0FBWDs7QUFjQSx5QkFBSyxNQUFMLEdBQWMsTUFBZDtBQUNILGlCIiwiZmlsZSI6ImNoaWxkLXJvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
