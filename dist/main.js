/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/employeeList.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/employeeList.js":
/*!********************************!*\
  !*** ./src/js/employeeList.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/*global angular*/\n\nangular.module(\"demo\", []).controller('employeeList', function ($scope) {\n    //\n    $scope.currentEmplyeeSelected = false;\n    // This is demo data for employee list\n    $scope.employeeList = [{\n        name: \"Jack Han\",\n        bio: {\n            gender: 'male',\n            major: 'engineer',\n            age: '34',\n            description: 'I am Jack, I like playing guitar and table poo, I am interested in Front End development and UED'\n        }\n    }, {\n        name: \"Mile Gu\",\n        bio: {\n            gender: 'male',\n            major: 'engineer',\n            age: '34',\n            description: 'I am Jack, I like playing guitar and table poo, I am interested in Front End development and UED'\n        }\n    }, {\n        name: \"Dorian Li\",\n        bio: {\n            gender: 'male',\n            major: 'engineer',\n            age: '34',\n            description: 'I am Jack, I like playing guitar and table poo, I am interested in Front End development and UED'\n        }\n    }, {\n        name: \"Nicholas Han\",\n        bio: {\n            gender: 'male',\n            major: 'engineer',\n            age: '34',\n            description: 'I am Jack, I like playing guitar and table poo, I am interested in Front End development and UED'\n        }\n    }];\n    // This Fun is for show or hide the employee description, it's by the subscript in the data array\n    $scope.getEmployBio = function (index) {\n        $scope.currentEmployee = $scope.currentEmployee == index ? null : index;\n    };\n    // This Fun is for alert the employee description when clcik the employee name\n    $scope.EmployBioAlert = function (index) {\n        // console.log($scope.employeeList[index]);\n        alert(JSON.stringify($scope.employeeList[index]));\n    };\n});\n\n//# sourceURL=webpack:///./src/js/employeeList.js?");

/***/ })

/******/ });