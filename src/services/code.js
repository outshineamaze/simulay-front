function encodeUrl(params) {
    let urlEncode = Object.keys(params)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
.join('&');
    return  urlEncode;
}
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

        return fetch('/simulation/ide/runcode', opts).then(
            function(response) {
                if (response.ok) {
                    return response.json()
                } else {
                    alert("网络请求失败" + res.status)
                }
            });
    }

    getCode(data) {
        let params = data || {}
        let opts = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }

        return fetch('/simulation/ide/getcode?' + encodeUrl(params), opts).then(
            function(response) {
                if (response.ok) {
                    return response.json()
                } else {
                    alert("网络请求失败" + res.status)
                }
            });
    }

    pullHistory(data) {
        let params = data || {}
        let opts = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }

        return fetch('/simulation/history', opts).then(
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
