'use strict';

System.register([], function (_export, _context) {
    var Portfolio;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _export('Portfolio', Portfolio = function () {
                function Portfolio() {
                    _classCallCheck(this, Portfolio);

                    this.heading = 'portfolio';

                    this.stuff = [{
                        name: 'Zeva',
                        description: 'Evaluate any stuff',
                        tags: ['ASP.NET', 'Durandal', 'Knockout', 'SASS', 'Gulp']
                    }, {
                        name: 'Log Parser',
                        description: 'idk like yolo ha ya sup duh',
                        tags: ['NodeJS', 'ES5', 'ISS Logs']
                    }];
                }

                Portfolio.prototype.attached = function attached() {
                    console.log('something');
                };

                return Portfolio;
            }());

            _export('Portfolio', Portfolio);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9zZWN0aW9ucy9wb3J0Zm9saW8vcG9ydGZvbGlvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O2lDQUFhLFM7QUFHVCxxQ0FBYztBQUFBOztBQUFBLHlCQUZkLE9BRWMsR0FGSixXQUVJOztBQUNWLHlCQUFLLEtBQUwsR0FBYSxDQUNUO0FBQ0ksOEJBQU0sTUFEVjtBQUVJLHlEQUZKO0FBR0ksOEJBQU0sQ0FDRixTQURFLEVBRUYsVUFGRSxFQUdGLFVBSEUsRUFJRixNQUpFLEVBS0YsTUFMRTtBQUhWLHFCQURTLEVBWVQ7QUFDSSw4QkFBTSxZQURWO0FBRUksa0VBRko7QUFHSSw4QkFBTSxDQUNGLFFBREUsRUFFRixLQUZFLEVBR0YsVUFIRTtBQUhWLHFCQVpTLENBQWI7QUFzQkg7O29DQUVELFEsdUJBQVc7QUFDUCw0QkFBUSxHQUFSLENBQVksV0FBWjtBQUNILGlCIiwiZmlsZSI6Il9zZWN0aW9ucy9wb3J0Zm9saW8vcG9ydGZvbGlvLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
