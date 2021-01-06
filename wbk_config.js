var path = require('path');

var Config = {
    serviceRootPath:'/web',
    //serviceRootPath:'/jtrade',
    SRC_DIR : './',
    DIST_DIR:path.join(__dirname, '../lis-business-web/src/main/webapp/'),
    path : {
        view : 'views/',
        js : 'wbk/'
    },
    cfg_entry : {
        
    },
    scanHtml:{
        footer:{
            html : 'footer.html',
            inject:1
        },
        header:{
            html : 'header.html',
            inject:1
        },
        nav:{
            html : 'nav.html',
            inject:1
        },
        select:{
            html : 'select.html',
            inject:1
        },
        home:{
            html : 'home.html',
            title : '首页 - 爱炒股专业交易站'
        },
        notice:{
            html : 'notice.html',
            title : '公告列表'
        },
        noticeDetail:{
            html : 'noticeDetail.html',
            title : '公告详情'
        },
        login:{
            html : 'login.html',
            title : '登录'
        },
        optional:{
            html : 'optional.html',
            title : '我的自选'
        },
        position:{
            html : 'position.html',
            title : '持仓明细'
        },
        closePosition:{
            html : 'closePosition.html',
            title : '平仓明细'
        },
        order:{
            html : 'order.html',
            title : '快速下单'
        },
        transaction:{
            html : 'transaction.html',
            title : '交易查询'
        },
        discrepancy:{
            html : 'discrepancy.html',
            title : '在线出入金'
        },
        inbox:{
            html : 'inbox.html',
            title : '收件箱'
        },
        personal:{
            html : 'personal.html',
            title : '个人资料'
        },
        editPwd:{
            html : 'editPwd.html',
            title : '修改密码'
        }
    }
};

module.exports = Config;