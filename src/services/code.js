class codeService {
    edit(data) {
        let params = data || {}
        let opts = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }

        return fetch('/simulation/code/run', opts).then(
            function(response) {
                if (response.ok) {
                    return response.json()
                } else {
                    alert("网络请求失败" + res.status)
                }
            });
    }
}

// 实例化后导出，全局单例
export default new codeService()
