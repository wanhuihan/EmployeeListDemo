

angular.module("demo", []).controller('employeeList', function($scope) {
    //
    $scope.currentEmplyeeSelected = false;
    // This is demo data for employee list
    $scope.employeeList = [
        {
            name: "Jack Han",
            bio: {
                gender: 'male',
                major: 'engineer',
                age: '34',
                description: 'I am Jack, I like playing guitar and table poo, I am interested in Front End development and UED'
            }
        },
        {
            name: "Mile Gu",
            bio: {
                gender: 'male',
                major: 'engineer',
                age: '34',
                description: 'I am Jack, I like playing guitar and table poo, I am interested in Front End development and UED'
            }
        },
        {
            name: "Dorian Li",
            bio: {
                gender: 'male',
                major: 'engineer',
                age: '34',
                description: 'I am Jack, I like playing guitar and table poo, I am interested in Front End development and UED'
            }
        },
        {
            name: "Nicholas Han",
            bio: {
                gender: 'male',
                major: 'engineer',
                age: '34',
                description: 'I am Jack, I like playing guitar and table poo, I am interested in Front End development and UED'
            }
        }
    ];
    // This Fun is for show or hide the employee description, it's by the subscript in the data array
    $scope.getEmployBio = function(index) {
        $scope.currentEmployee = $scope.currentEmployee == index ? null : index;
    };
    // This Fun is for alert the employee description when clcik the employee name
    $scope.EmployBioAlert = function(index) {
        // console.log($scope.employeeList[index]);
        alert(JSON.stringify($scope.employeeList[index]));
    };
});
