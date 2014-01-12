angular.module('plunker', ['ui.bootstrap']);
var tabsController = function ($scope) {
	var project = "Тахометр",
		alternative = 'альтернатива 1',
		alternative2 = 'альтернатива 2',
		criteria1 = 'критерий 1',
		criteria2 = 'критерий 2'

	$scope.tabs = [
		{ title:"Проект", content:[project] , active:true},
		{  title:"Альтернативи", content:[alternative, alternative2] },
		{  title:"Критерии", content:[criteria1, criteria2] },
		{  title:"Оценивать", content:[] },
		{  title:"Результат", content:[] }
	];
//    $scope.navType = 'pills';
};