
var projectName = '服装生产管理系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
]


var indexNav = [

{
	name: '人事安排',
	url: './pages/renshianpai/list.html'
}, 
{
	name: '样板',
	url: './pages/yangban/list.html'
}, 

{
	name: '系统公告',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/springbootww862/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"人事安排","menuJump":"列表","tableName":"renshianpai"}],"menu":"人事安排管理"},{"child":[{"buttons":["新增","查看","修改","删除","审核"],"menu":"考勤","menuJump":"列表","tableName":"kaoqin"}],"menu":"考勤管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"工资","menuJump":"列表","tableName":"gongzi"}],"menu":"工资管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"样板","menuJump":"列表","tableName":"yangban"}],"menu":"样板管理"},{"child":[{"buttons":["新增","查看","修改","删除","报表","入库"],"menu":"成品检验","menuJump":"列表","tableName":"chengpinjianyan"}],"menu":"成品检验管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"订单","menuJump":"列表","tableName":"dingdan"}],"menu":"订单管理"},{"child":[{"buttons":["新增","查看","修改","删除","入库","出库"],"menu":"原料仓库","menuJump":"列表","tableName":"yuanliaocangku"}],"menu":"原料仓库管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"原料入库","menuJump":"列表","tableName":"yuanliaoruku"}],"menu":"原料入库管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"原料出库","menuJump":"列表","tableName":"yuanliaochuku"}],"menu":"原料出库管理"},{"child":[{"buttons":["查看","修改","删除","新增","出库"],"menu":"成衣仓库","menuJump":"列表","tableName":"chengyicangku"}],"menu":"成衣仓库管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"成衣出库","menuJump":"列表","tableName":"chengyichuku"}],"menu":"成衣出库管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"系统公告","tableName":"news"},{"buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"人事安排列表","menuJump":"列表","tableName":"renshianpai"}],"menu":"人事安排模块"},{"child":[{"buttons":["查看"],"menu":"样板列表","menuJump":"列表","tableName":"yangban"}],"menu":"样板模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"考勤","menuJump":"列表","tableName":"kaoqin"}],"menu":"考勤管理"},{"child":[{"buttons":["查看"],"menu":"工资","menuJump":"列表","tableName":"gongzi"}],"menu":"工资管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"人事安排列表","menuJump":"列表","tableName":"renshianpai"}],"menu":"人事安排模块"},{"child":[{"buttons":["查看"],"menu":"样板列表","menuJump":"列表","tableName":"yangban"}],"menu":"样板模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
