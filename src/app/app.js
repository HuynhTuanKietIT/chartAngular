app.controller('MyController', function($scope) {
    // chart data source
    $scope.dataSource = {
        'chart': {
            'caption': 'Chart + Angular!',
            'captionFontSize': '30',

        },
        'data': [{
            'label': 'Tiền lương',
            'value': '10'
        }],
    };
});
$scope.selectedValue = 'Click vào cột nào đó.';

$scope.events = {
    dataplotclick: function(ev, props) {
        $scope.$apply(function() {
            $scope.colorValue = 'background-color:' + props.categoryLabel + ';';
            $scope.selectedValue = 'Đây là ' + props.categoryLabel + '!';
        });
    }
};