var app = angular.module("app", ["ui.router", "ngMaterial", "ngMessages"]);


// Sticky Navbar Directive
// app.directive('stickyHeader', function ($window) {
//     return {
//       restrict: 'AE',
//     link: function (scope, element, attrs) {
//         var header = angular.element(element);
//       var clone = header.prepend(header.clone().addClass('clone'), header);
      
//       angular.element($window).bind("scroll", function () {
//           var fromTop = $window.pageYOffset;
//         var body = angular.element(document).find('body');
//         var clonePosition = clone[0].offsetParent.offsetTop;

//         body.toggleClass('down', fromTop > clonePosition);
//       });
//     }
//   };
// });
