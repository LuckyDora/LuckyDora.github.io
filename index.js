
var myResume = angular.module('myResume', ['ui.router']);

myResume.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/index');
	$stateProvider
		.state('index',{
			url:'/index',
			views:{
				'':{
					templateUrl:'tpl/main.html'
				},
				'topbar@index':{
					templateUrl:'tpl/topbar.html'
				},
				'content@index':{
					templateUrl:'tpl/person-info.html'
				},
				'footer@index':{
					templateUrl:'tpl/footer.html'
				}

			}
		})
		.state('index.skill-info',{
			url:'/skill-info',
			views:{
				'content@index':{
					templateUrl:'tpl/skill-info.html'
				}
			}
		})
		.state('index.show-info',{
			url:'/show-info',
			views:{
				'content@index':{
					templateUrl:'tpl/show-info.html'
				}
			}
		})


})