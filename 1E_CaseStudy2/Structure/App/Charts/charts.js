angular.module('App')
    .controller('applChartCtrl', ['$timeout',function ($timeout) {
        appChart = this;
        appChart.percent = 65;
        appChart.options = {
            animate: {
                duration: 2000,
                enabled: true
            },
            barColor: '#f7b01a',
            scaleColor: false,
            lineWidth: 18,
            traceColor: '#f5f5f5',
            lineCap: 'round',
            size: 150
        };

      
        $timeout(function () {
            $('.jq_isotope').isotope('layout');
        });
    }])
    .controller('unitChartCtrl', ['$timeout',function ($timeout) {
        unitChart = this;
        unitChart.percent = 83;
        unitChart.options = {
            animate: {
                duration: 2000,
                enabled: true
            },
            barColor: '#abb937',
            scaleColor: false,
            lineWidth: 23,
            traceColor: '#f5f5f5',
            lineCap: 'round',
            size: 200
        };

       

      
        $timeout(function () {
            $('.jq_isotope').isotope('layout');
        });
    }])
.controller('admChartCtrl', ['$timeout', function ($timeout) {
    admChart = this;
    admChart.percent = 76;
    admChart.options = {
        animate: {
            duration: 2000,
            enabled: true
        },
        barColor: '#e9174b',
        scaleColor: false,
        lineWidth: 12,
        traceColor: '#f5f5f5',
        lineCap: 'round',
        size: 90
    };


    $timeout(function () {
        $('.jq_isotope').isotope('layout');
    });
}])
.controller('opeChartCtrl', ['$timeout', function ($timeout) {
    opeChart = this;
    opeChart.percent = 47;
    opeChart.options = {
        animate: {
            duration: 2000,
            enabled: true
        },
        barColor: '#aebc37',
        scaleColor: false,
        lineWidth: 12,
        traceColor: '#f5f5f5',
        lineCap: 'round',
        size: 90
    };


    $timeout(function () {
        $('.jq_isotope').isotope('layout');
    });
}])
.controller('appChartCtrl', ['$timeout', function ($timeout) {
    appChart = this;
    appChart.percent = 98;
    appChart.options = {
        animate: {
            duration: 2000,
            enabled: true
        },
        barColor: '#f26e23',
        scaleColor: false,
        lineWidth: 8,
        traceColor: '#f5f5f5',
        lineCap: 'round',
        size: 90
    };


    $timeout(function () {
        $('.jq_isotope').isotope('layout');
    });
}])
.controller('fadmChartCtrl', ['$timeout', function ($timeout) {
    fadmChart = this;
    fadmChart.percent = 73;
    fadmChart.options = {
        animate: {
            duration: 2000,
            enabled: true
        },
        barColor: '#dade5c',
        scaleColor: false,
        lineWidth: 8,
        traceColor: '#f5f5f5',
        lineCap: 'round',
        size: 90
    };


    $timeout(function () {
        $('.jq_isotope').isotope('layout');
    });
}])
.controller('drillCtrl', function () {
    drill = this;
    drill.seeDrill = false;

    drill.toggleDrill = function () {
        drill.seeDrill = !drill.seeDrill;
    };
});
