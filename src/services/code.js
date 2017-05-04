class codeService {
    edit(data) {
        let defultData = {'uid': 123123123};
        let params = Object.assign({}, data, defultData);

        return fetch('/api/code/edit', params).then(
            function(response) {
                return response.json()
            });
    }
}

// 实例化后导出，全局单例
export default new codeService()
