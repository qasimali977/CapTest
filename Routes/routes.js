app.config([
  "$stateProvider",
  "$urlRouterProvider",
  "$urlMatcherFactoryProvider",
  "$locationProvider",
  function(
    $stateProvider,
    $urlRouterProvider,
    $urlMatcherFactoryProvider,
    $locationProvider
  ) {
    $urlMatcherFactoryProvider.caseInsensitive(true);

    $stateProvider
    .state("workqueueDashboard", {
      url: "/workqueueDashboard",
      templateUrl: "Templates/workqueueDashboard.html",
      controller: "workqueueDashboardCtrl"
    })
    .state("menuSelling", {
      url: "/menuSelling",
      templateUrl: "Templates/menuSelling.html",
      controller:"menuSellingCtrl"
    });

    $urlRouterProvider.otherwise("/workqueueDashboard");
    // $locationProvider.html5Mode(true);
  }
]);