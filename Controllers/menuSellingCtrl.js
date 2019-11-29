app.controller("menuSellingCtrl", function($scope) {
  $scope.quotationArr = [];
  quotationTabNo = 0;
  $scope.quotationArr.push(quotationTabNo);

  // add tabs
  $scope.addTab = function() {
    quotationTabNo = quotationTabNo + 1;
    $scope.quotationArr.push(quotationTabNo);
  };

  // =================

  // Sticky Header Script
  window.onscroll = function() {
    myFunction();
  };
  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
});
