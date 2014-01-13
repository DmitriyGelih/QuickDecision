angular.module('plunker', ['ui.bootstrap']);
var tabsController = function ($scope) {
    $scope.items = [
        { name: 'first' },
        { name: 'second' }
    ];
    $scope.evaluate;

    // from server
    $scope.project = "Покупка авто";
    $scope.alternatives = ['BMW', 'Mercedes', 'KIA'];
    $scope.criteriaWeights = [
        { name: 'Цвет', weight: 1 },
        { name: 'Цена', weight: 1 },
        { name: 'Гарантия', weight: 1 },
        { name: 'Расход топлива', weight: 1 }
    ];

//        $scope.directRating = function () {
    $scope.criterias = []; //list color, petrol
    angular.forEach($scope.criteriaWeights, function (value, _) {
        $scope.criterias.push(value.name)
    });

    var criteriaEvaluates = []; // color, price
    for (var i = 0; i < $scope.criteriaWeights.length; i++) {
        for (var j = i + 1; j < $scope.criteriaWeights.length; j++) {
            criteriaEvaluates.push(
                { leftName: $scope.criteriaWeights[i].name, leftWeight: $scope.criteriaWeights[i].weight, rightName: $scope.criteriaWeights[j].name, rightWeight: $scope.criteriaWeights[j].weight, slider: 0}
            )
        };
    };

    var alternativeEvaluates = []; // bmw
    angular.forEach($scope.criterias, function (criteria) {
        var h = {};
        h[criteria] = [];
        angular.forEach($scope.alternatives, function (alternative) {
            h[criteria].push({ name: alternative, weight: 0})
        });

        alternativeEvaluates.push(h);
    });

    $scope.alternativeEvaluates = alternativeEvaluates; // color, price
    $scope.criteriaEvaluates = criteriaEvaluates; // bmw

    $scope.result = function () {
        angular.forEach($scope.criteriaEvaluates, function (value) {
            value.leftWeight = 1;
            value.rightWeight = 1;

            if (!value.slider) return;

            if (value.slider > 0) {
                value.rightWeight = (value.slider)
            }
            else {
                value.leftWeight = (value.slider * -1)
            }
            ;
        });

        $scope.resultSeries = [
            {
                name: 'Цвет',
                data: [1, 2, 1]
            },
            {
                name: 'Расход топлива',
                data: [1, 3, 2]
            },
            {
                name: 'Гарантия',
                data: [3, 3, 2]
            },
            {
                name: 'Цена',
                data: [2, 1, 3]
            }
        ];
        drawChart();
    };
//        };
    var drawChart = function () {
        $(function () {
            $('#container').highcharts({
                chart: {
                    type: 'bar'
                },
                title: {
                    text: $scope.project
                },
                xAxis: {
                    categories: $scope.alternatives
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Результат'
                    }
                },
                legend: {

                    backgroundColor: '#FFFFFF',
                    reversed: true
                },
                plotOptions: {
                    series: {
                        stacking: 'normal'
                    }
                },
                series: $scope.resultSeries
            });
        });
    };

    $scope.tabs = [
        { title: "Проекты", content: [$scope.project], active: true},
        { title: "Альтернативы", content: $scope.alternatives  },
        { title: "Критерии", content: ['Цвет', 'Цена', 'Расход топлива', 'Гарантия'] },
        { title: "Оценить", content: [] },
        { title: "Результат", content: [] }
    ];
//    $scope.navType = 'pills';
};