var app = angular.module("myapp",[]);
app.controller("myController",function($scope){
 
                $scope.name = "Shabna";
                $scope.empId = "183705";
                $scope.designation = "SSE";
               
                var showAlert = function(){
                                alert("This is a double click event");
               
                };
               
});