'use strict';

System.register([], function (_export, _context) {
    var _createClass, Welcome, UpperValueConverter;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            _export('Welcome', Welcome = function () {
                function Welcome() {
                    _classCallCheck(this, Welcome);

                    this.heading = 'Welcome to the Aurelia Navigation App!';
                    this.firstName = 'John';
                    this.lastName = 'Doe';
                    this.previousValue = this.fullName;
                }

                _createClass(Welcome, [{
                    key: 'fullName',
                    get: function get() {
                        return this.firstName + ' ' + this.lastName;
                    }
                }]);

                return Welcome;
            }());

            _export('Welcome', Welcome);

            _export('UpperValueConverter', UpperValueConverter = function () {
                function UpperValueConverter() {
                    _classCallCheck(this, UpperValueConverter);
                }

                UpperValueConverter.prototype.toView = function toView(value) {
                    return value && value.toUpperCase();
                };

                return UpperValueConverter;
            }());

            _export('UpperValueConverter', UpperValueConverter);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG9tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkFFYSxPOzs7O3lCQUNULE8sR0FBVSx3Qzt5QkFDVixTLEdBQVksTTt5QkFDWixRLEdBQVcsSzt5QkFDWCxhLEdBQWdCLEtBQUssUTs7Ozs7d0NBT047QUFDWCwrQkFBVSxLQUFLLFNBQWYsU0FBNEIsS0FBSyxRQUFqQztBQUNIOzs7Ozs7OzsyQ0FHUSxtQjs7Ozs7OENBQ1QsTSxtQkFBTyxLLEVBQU87QUFDViwyQkFBTyxTQUFTLE1BQU0sV0FBTixFQUFoQjtBQUNILGlCIiwiZmlsZSI6ImhvbWUvaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
