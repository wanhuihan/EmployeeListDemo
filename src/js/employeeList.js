/* global angular */

angular.module("demo", []).controller('employeeList', function($scope) {
    //
    $scope.currentEmployee = null;
    // This is demo data for employee list
    $scope.employeeList = [
        {
            id: 'employee_1',
            name: "Jack Han",
            bio: {
                gender: 'male',
                major: 'engineer',
                age: '34',
                description: 'I am Jack, I like playing guitar and table poo, I am interested in Front End development and UED'
            }
        },
        {
            id: 'employee_2',
            name: "Mile Gu",
            bio: {
                gender: 'male',
                major: 'Product Manager',
                age: '34',
                description: 'I am Jack, I like playing guitar and table poo, I am interested in Front End development and UED'
            }
        },
        {
            id: 'employee_3',
            name: "Dorian Li",
            bio: {
                gender: 'male',
                major: 'Front End Supporter',
                age: '34',
                description: 'I am Jack, I like playing guitar and table poo, I am interested in Front End development and UED'
            }
        },
        {
            id: 'employee_4',
            name: "Nicholas Han",
            bio: {
                gender: 'male',
                major: 'Test',
                age: '34',
                description: 'I am Jack, I like playing guitar and table poo, I am interested in Front End development and UED'
            }
        }
    ];
    // This Fun is for show or hide the employee description, it's by the subscript in the data array
    $scope.getEmployBio = function(id) {
        $scope.currentEmployee = $scope.currentEmployee == id ? null : id;
    };
    // This Fun is for alert the employee description when clcik the employee name
    $scope.EmployBioAlert = function(id) {
        // console.log($scope.employeeList[index]);
        let currentEmployeeData = $scope.employeeList.filter(function(obj)  {
            return obj.id == id;
        });
        alert(JSON.stringify(currentEmployeeData));
    };
});
