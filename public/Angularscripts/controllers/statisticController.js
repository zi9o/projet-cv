var initChartFiliere = function (data) {
    var chart = AmCharts.makeChart("chart_statFiliere", {
        "type": "serial",
        "theme": "light",
        "pathToImages": App.getGlobalPluginsPath() + "amcharts/amcharts/images/",
        "autoMargins": false,
        "marginLeft": 30,
        "marginRight": 8,
        "marginTop": 10,
        "marginBottom": 26,
        "fontFamily": 'Open Sans',
        "color": '#888',
        "dataProvider": data,
        "valueAxes": [{
                "axisAlpha": 0,
                "position": "left"
            }],
        "startDuration": 1,
        "graphs": [{
                "alphaField": "alpha",
                "balloonText": "<span style='font-size:13px;'>Nombre de [[title]] dans [[category]]:<b>[[value]]</b> [[additional]]</span>",
                "dashLengthField": "dashLengthColumn",
                "fillAlphas": 1,
                "title": "CV",
                "type": "column",
                "valueField": "nombre"
            }
        ],
        "categoryField": "code",
        "categoryAxis": {
            "gridPosition": "start",
            "axisAlpha": 0,
            "tickLength": 0
        }
    });

    $('#chart_statFiliere').closest('.portlet').find('.fullscreen').click(function () {
        chart.invalidateSize();
    });
};
var initChartCompetence = function (data) {
    var chart = AmCharts.makeChart("chart_statCompetence", {
        "type": "pie",
        "theme": "dark",
        "fontFamily": 'Open Sans',
        "color": '#888',
        "dataProvider": data,
        "valueField": "nombre",
        "titleField": "intitule",
        "outlineAlpha": 0.4,
        "depth3D": 15,
        "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
        "angle": 30,
        "exportConfig": {
            menuItems: [{
                    icon: '/lib/3/images/export.png',
                    format: 'png'
                }]
        }
    });

    jQuery('.chart_statCompetence_chart_input').off().on('input change', function () {
        var property = jQuery(this).data('property');
        var target = chart;
        var value = Number(this.value);
        chart.startDuration = 0;

        if (property == 'innerRadius') {
            value += "%";
        }

        target[property] = value;
        chart.validateNow();
    });

    $('#chart_statCompetence').closest('.portlet').find('.fullscreen').click(function () {
        chart.invalidateSize();
    });
}
app.controller('statisticController', ['$scope', '$http', 'API_URL', 'Upload', 'API_Statistic_URL', function ($scope, $http, API_URL, Upload, API_Statistic_URL)
    {


        $scope.ActiveFiliere = function () {
            $scope.All = false;
            $scope.isGINFActive = false;
            $scope.isGINDActive = false;
            $scope.isGSEAActive = false;
            $scope.isGSTRActive = false;
            $scope.isG3EIActive = false;
            if ($scope.idFiliere == 1)
                $scope.isGINFActive = true;
            if ($scope.idFiliere == 2)
                $scope.isGINDActive = true;
            if ($scope.idFiliere == 3)
                $scope.isGSEAActive = true;
            if ($scope.idFiliere == 4)
                $scope.isGSTRActive = true;
            if ($scope.idFiliere == 5)
                $scope.isG3EIActive = true;
            if ($scope.idFiliere == 0)
                $scope.All = true;

        };
        $scope.ActiveNiveau = function () {
            $scope.AllNiveau = false;
            $scope.isDebActive = false;
            $scope.isIntActive = false;
            $scope.isAvaActive = false;
            $scope.isExpActive = false;
            if ($scope.idNiveau == 0)
                $scope.AllNiveau = true;
            if ($scope.idNiveau == 1)
                $scope.isDebActive = true;
            if ($scope.idNiveau == 2)
                $scope.isIntActive = true;
            if ($scope.idNiveau == 3)
                $scope.isAvaActive = true;
            if ($scope.idNiveau == 4)
                $scope.isExpActive = true;

        };

        $scope.loadingStatisticFiliere = false;

        $scope.initStatisticFiliere = function () {

            $scope.loadingStatisticFiliere = true;
            $http.get(API_Statistic_URL + 'statFiliere').
                    success(function (data, status, headers, config) {
                        initChartFiliere(data);
                        $scope.loadingStatisticFiliere = false;
                    });
        };

        $scope.loadingStatisticCompetence = false;

        $scope.initStatisticCompetence = function () {
            $scope.idFiliere=0;
            $scope.idNiveau=0;
            $scope.ActiveFiliere();
            $scope.ActiveNiveau();

            $scope.loadingStatisticCompetence = true;
            $http.get(API_Statistic_URL + 'statCompetence').
                    success(function (data, status, headers, config) {
                        initChartCompetence(data);
                        $scope.loadingStatisticCompetence = false;
                    });
        };
        $scope.getStatisticCompetence = function () {
            $scope.ActiveFiliere();
            $scope.ActiveNiveau();

            $scope.loadingStatisticCompetence = true;
            $http.get(API_Statistic_URL + 'statCompetence' + '/' + $scope.idFiliere, {
                        idNiveau:$scope.idNiveau,
                    }).success(function (data, status, headers, config) {
                initChartCompetence(data);
                $scope.loadingStatisticCompetence = false;
            });
        };
    }]);


