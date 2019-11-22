app.controller("workqueueDashboardCtrl", function($scope) {
  $scope.searchObj = {};
  $scope.searchObj.days = 1;



  // Map Api 
  var mymap = L.map('mapid').setView([51.505, -0.09], 13);
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={pk.eyJ1IjoicWFzaW1hbGk5NzciLCJhIjoiY2szOG10dzdvMDhicDNibDNtbmFteHA5biJ9.7pJAWdLewua6Pi8q_bMyhA}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

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
