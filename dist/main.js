'use strict';

System.register(['bootstrap', 'jquery'], function (_export, _context) {
  var $;
  return {
    setters: [function (_bootstrap) {}, function (_jquery) {
      $ = _jquery.default;
    }],
    execute: function () {
      function configure(aurelia) {
        aurelia.use.standardConfiguration();


        aurelia.start().then(function () {
          return aurelia.setRoot();
        });
      }

      _export('configure', configure);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ08sTzs7O0FBRUEsZUFBUyxTQUFULENBQW1CLE9BQW5CLEVBQTRCO0FBQ2pDLGdCQUFRLEdBQVIsQ0FDRyxxQkFESDs7O0FBV0EsZ0JBQVEsS0FBUixHQUFnQixJQUFoQixDQUFxQjtBQUFBLGlCQUFNLFFBQVEsT0FBUixFQUFOO0FBQUEsU0FBckI7QUFDRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
