module.exports = function(app , $){
    app.controller('NoticeController', ['$scope','NoticeService',NoticeController]);

    function NoticeController($scope ,NoticeService){
       $scope.currentPage = 3;
/*       new Swiper('.swiper-container', {
           autoplay: 3000,
           autoplayDisableOnInteraction: false,
           simulateTouch: false,
           loop: true
       });*/
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
};
