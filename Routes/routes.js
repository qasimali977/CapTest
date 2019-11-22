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

    $stateProvider.state("workqueueDashboard", {
      url: "/workqueueDashboard",
      templateUrl: "Templates/workqueueDashboard.html",
      controller: "workqueueDashboardCtrl"
    });

    $urlRouterProvider.otherwise("/workqueueDashboard");
    // $locationProvider.html5Mode(true);
  }
]);