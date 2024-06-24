const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootww862/",
            name: "springbootww862",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootww862/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "服装生产管理系统"
        } 
    }
}
export default base
