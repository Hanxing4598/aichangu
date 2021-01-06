module.exports = function(app , $){
    app.controller('OptionalController', ['$scope','OptionalService',OptionalController]);

    function OptionalController($scope, OptionalService){
        $scope.currentPage = 2;
        $scope.navPage = 1;
        $scope.form = {
            startTime: '',
            endTime: ''
        };
        kkpager.generPageHtml({
            pagerid: 'pager',
            pno: 1,
            pageSize: 10,
            //总页码
            total: 20,
            //总数据条数
            totalRecords: 100,
            mode: 'click', //默认值是link，可选link或者click
            click: function(n) {
                // do something
                //手动选中按钮
                this.selectPage(n);
                pageSetting.pageNo = n;
            },
            pnoChange: function(size) {
                pageSetting.pageSize = size;
                pageSetting.pageNo = 1;
            }
            /*
            ,lang                : {
                firstPageText            : '首页',
                firstPageTipText        : '首页',
                lastPageText            : '尾页',
                lastPageTipText            : '尾页',
                prePageText                : '上一页',
                prePageTipText            : '上一页',
                nextPageText            : '下一页',
                nextPageTipText            : '下一页',
                totalPageBeforeText        : '共',
                totalPageAfterText        : '页',
                currPageBeforeText        : '当前第',
                currPageAfterText        : '页',
                totalInfoSplitStr        : '/',
                totalRecordsBeforeText    : '共',
                totalRecordsAfterText    : '条数据',
                gopageBeforeText        : '&nbsp;转到',
                gopageButtonOkText        : 'GO',
                gopageAfterText            : '页',
                buttonTipBeforeText        : '第',
                buttonTipAfterText        : '页'
            }*/
        }, true);
    };
    
    app.controller('validateController', ['$scope', validateController]);

    function validateController($scope) {
        $scope.selectData = [{
            key: 0,
            value: '状态1'
        },{
            key: 1,
            value: '状态2'
        },{
            key: 2,
            value: '状态3'
        }];
        $scope.selectCurrent = {
            key: 0,
            value: '状态1'
        };
        $scope.query = function () {
            console.log($scope);
        }
    };
};
