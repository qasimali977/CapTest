app.controller("menuSellingCtrl", function($scope) {


  // =================
  
  var tabs = [
    { title: 'One', content: "Tabs will become paginated if there isn't enough room for them."}],
    
  selected = null,
  previous = null;
$scope.tabs = tabs;
$scope.selectedIndex = 0;
$scope.$watch('selectedIndex', function(newVal, oldVal) {
  previous = selected;
  selected = tabs[newVal];
  if (oldVal + 1 && !angular.equals(oldVal, newVal)) {
    $log.log('Goodbye ' + previous.title + '!');
  }
  if (newVal + 1 > 0) {
    $log.log('Hello ' + selected.title + '!');
  }
});

// add tabs
$scope.addTab = function(title) {
  tabs.push({title: title});
};

// remove tabs 
$scope.removeTab = function(tab) {
  var index = tabs.indexOf(tab);
  tabs.splice(index, 1);
};

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
