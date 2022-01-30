var md5 = require('md5');
var request = require('request');
var salt = '2179a2684d5b28623802399f6f9038f7'
var Authorization = 'Bearer eJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLmx4c2pnby5jb21cL2F1dGhcL2xvZ2luM3JkIiwiaWF0IjoxNTgyNDcxMzg0LCJleHAiOjE1ODUwNjMzODQsIm5iZiI6MTU4MjQ3MTM4NCwianRpIjoiVjBoYkFFQnVROG4xQW9EZSIsInN1YiI6OTMwNzg5OSwicHJ2IjoiZjY0ZDQ4YTZjZWM3YmRmYTdmYmY4OTk0NTRiNDg4YjNlNDYyNTIwYSIsImN1c3RvbUluZm8iOiJleUpwZGlJNklsVjRORnd2SzBkM2FWaGxjRzR4V0c0NWEwMW1kelpCUFQwaUxDSjJZV3gxWlNJNkltbERkSE5sVkdkVlpIRjViR0kwVDFoNlVFSllZVlpKT0ZOTWVGd3ZNVTVOZUZsME5rUk1VVk4zU2pkaE9HeGNMMU0wY21ScmFEZFJORmRMWjAxSlpGRmFSa2RIVkdOT1NUSlRPV2xTUWtwVWN6TjVkRzEyUTNreWNqRjRXbXB0ZVUxVE9HUkVhSGh0VlZKS1dUQTlJaXdpYldGaklqb2lORGxqWkdObU1XWmxaVGszTUdOa1l6RTRPVGxoTW1OaVpXRXdOR1JpTkRoa1ptTTJZakJtT0RJek5qTTVObUpqTVdOa09XRm1OVEl5T1RVMk5qSm1aQ0o5In0.I706v3XOjA1pAVZLVMccf_GsldnSXGAt0q9z3ZCas-8___2';
Authorization = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLmx4c2pnby5jb21cL2F1dGhcL2xvZ2luM3JkIiwiaWF0IjoxNTgyNTE1NzA1LCJleHAiOjE1ODUxMDc3MDUsIm5iZiI6MTU4MjUxNTcwNSwianRpIjoibTZJUzhoZ0Njd3RteExvQyIsInN1YiI6OTMwNzg5OSwicHJ2IjoiZjY0ZDQ4YTZjZWM3YmRmYTdmYmY4OTk0NTRiNDg4YjNlNDYyNTIwYSIsImN1c3RvbUluZm8iOiJleUpwZGlJNklsZHJWbWRDVjBOc1RDczNkbE13WVdKcFJXZGNMMmhuUFQwaUxDSjJZV3gxWlNJNklqbHVSRUl5Ym5kM1RWZzJka0ZOUjBkNU1HdEVTR2hYTkVSV1JHaEhUVk55VUcwd01ETjJSMGhPUmtOR1pUa3djWGxNWmxjeFpqaDBZMDU0ZVVkcE1Gd3Zka0ptZUc0ME1GYzNXVzR3VlhsM1pqWjJVWEZrZFhwRU9HcHhaREowY2s1clJYQjZZVzk0ZDJjeFp6MGlMQ0p0WVdNaU9pSTNZbVZtTTJNeE1qVmhZV05rTmpReE16WTJabVEwWXpNNFlUUXdabUpqTXpjeE5qYzVZV1l5T0dabU9XUTBPVGcxTkRZM09XVXhNbU01WVRFeU5HWXdJbjA9In0.1WayjY5CnYEI3g1GJemBRNq5zl0M_giNcTjcMwn-3rA___2'
var CID = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLmx4c2pnby5jb21cL2F1dGhcL2xvZ2luM3JkIiwiaWF0IjoxNTgyNDcxMzg0LCJleHAiOjE1ODUwNjMzODQsIm5iZiI6MTU4MjQ3MTM4NCwianRpIjoiVjBoYkFFQnVROG4xQW9EZSIsInN1YiI6OTMwNzg5OSwicHJ2IjoiZjY0ZDQ4YTZjZWM3YmRmYTdmYmY4OTk0NTRiNDg4YjNlNDYyNTIwYSIsImN1c3RvbUluZm8iOiJleUpwZGlJNklsVjRORnd2SzBkM2FWaGxjRzR4V0c0NWEwMW1kelpCUFQwaUxDSjJZV3gxWlNJNkltbERkSE5sVkdkVlpIRjViR0kwVDFoNlVFSllZVlpKT0ZOTWVGd3ZNVTVOZUZsME5rUk1VVk4zU2pkaE9HeGNMMU0wY21ScmFEZFJORmRMWjAxSlpGRmFSa2RIVkdOT1NUSlRPV2xTUWtwVWN6TjVkRzEyUTNreWNqRjRXbXB0ZVUxVE9HUkVhSGh0VlZKS1dUQTlJaXdpYldGaklqb2lORGxqWkdObU1XWmxaVGszTUdOa1l6RTRPVGxoTW1OaVpXRXdOR1JpTkRoa1ptTTJZakJtT0RJek5qTTVObUpqTVdOa09XRm1OVEl5T1RVMk5qSm1aQ0o5In0.I706v3XOjA1pAVZLVMccf_GsldnSXGAt0q9z3ZCas-8___2';
CID = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLmx4c2pnby5jb21cL2F1dGhcL2xvZ2luM3JkIiwiaWF0IjoxNTgyNTE1NzA1LCJleHAiOjE1ODUxMDc3MDUsIm5iZiI6MTU4MjUxNTcwNSwianRpIjoibTZJUzhoZ0Njd3RteExvQyIsInN1YiI6OTMwNzg5OSwicHJ2IjoiZjY0ZDQ4YTZjZWM3YmRmYTdmYmY4OTk0NTRiNDg4YjNlNDYyNTIwYSIsImN1c3RvbUluZm8iOiJleUpwZGlJNklsZHJWbWRDVjBOc1RDczNkbE13WVdKcFJXZGNMMmhuUFQwaUxDSjJZV3gxWlNJNklqbHVSRUl5Ym5kM1RWZzJka0ZOUjBkNU1HdEVTR2hYTkVSV1JHaEhUVk55VUcwd01ETjJSMGhPUmtOR1pUa3djWGxNWmxjeFpqaDBZMDU0ZVVkcE1Gd3Zka0ptZUc0ME1GYzNXVzR3VlhsM1pqWjJVWEZrZFhwRU9HcHhaREowY2s1clJYQjZZVzk0ZDJjeFp6MGlMQ0p0WVdNaU9pSTNZbVZtTTJNeE1qVmhZV05rTmpReE16WTJabVEwWXpNNFlUUXdabUpqTXpjeE5qYzVZV1l5T0dabU9XUTBPVGcxTkRZM09XVXhNbU01WVRFeU5HWXdJbjA9In0.1WayjY5CnYEI3g1GJemBRNq5zl0M_giNcTjcMwn-3rA___2'
var UserAgent = 'com.jiayouya.travel/1.2.0 (iPhone; iOS 13.3.1; Scale/0.56;DEVICEID/6A1E7084-F0D9-4A7F-BD66-7D3CED7023D9)'

var headers = {
    Authorization: Authorization,
    CID: CID,
    'User-Agent': UserAgent
}

var work = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var dogLevel = 1
var box = []
var queue = []
var lowLevel = 0

var initNum = 0
// 初始化('开始')
// 完成广告(7022312121668177899)
// 取出仓库(30, () => { })
function 初始化(from = 0) {
    获取广告(5)
    获取广告(7)
    console.log('初始化', from, ++initNum)
    box = []
    lowLevel = 0
    work.forEach(element => {
        box.push(0)
    })
    queue = []
    检查仓库(() => 获取排列())


    setTimeout(() => {
        弹出()
        货币()
    }, (Math.random() * 60000));
}
function 获取三区() {
    return new Promise(resolve => {
        var obj = {}
        获取公开区().then(e => {
            var json = JSON.parse(e)
            obj.公开 = json.positions//当前位置组
            获取仓库区().then(e => {
                e.useNum//已使用位置
                e.maxNum//最大位置
                obj.仓库 = e.items//位置组
                获取探险区().then(e => {
                    var json = JSON.parse(e)
                    obj.探险 = json.rewards//狗组 //type48金币
                    resolve(obj)
                })
            })
        })
    })
}

setInterval(() => {
    获取广告(5)
    获取广告(7)
    弹出()
    货币()
}, 10000);
转盘()
function 取消探险() {
    var sign = 计算签名('/explore/recall', 'post', [])
    request.post(sign['url'], sign['data'], (err, res, body) => {
    })
}
开整()
function 开整() {
    console.log('开整')
    获取三区().then(obj => {
        var 空位 = 寻找空位(obj.公开)
        if (空位.length < 2) {
            setTimeout(() => {
                开整()
            }, 3000);
            return
        }
        //处理仓库库存
        var ret = 0
        for (let index = 0; index < obj.仓库.length; index++) {
            const element = obj.仓库[index];
            if (element.dogId < 38 && element.num >= 2) {
                ret = 1
                取出仓库(element.dogId, () => {
                    取出仓库(element.dogId, () => {
                        合成(空位[0], 空位[1], () => {
                            进入仓库(空位[1], () => {
                                开整()
                            })
                        })
                    })
                })
                break
            }
        }

        if (ret == 1) {
            setTimeout(() => {
                开整()
            }, 3000);
            return
        }

        //查找探险有没有和仓库匹配的
        var 仓库 = []
        for (let index = 0; index < obj.仓库.length; index++) {
            const element = obj.仓库[index];
            仓库.push(element.dogId)
        }

        for (let index = 0; index < obj.探险.length; index++) {
            const element = obj.探险[index];
            if (element.type == 48) {
                领取探险区(element.type)
            }

            if (element.type < 38) {
                if (仓库.indexOf(element.type) != -1) {
                    领取探险区(element.type, 1).then(() => 开整())
                    return
                }
            }
        }

        //处理探险有没有两个的
        for (let index = 0; index < obj.探险.length; index++) {
            const element = obj.探险[index];
            if (element.type < 38) {
                if (element.value >= 2) {
                    领取探险区(element.type, 1).then(() => {
                        领取探险区(element.type, 1).then(() => {
                            开整()
                        })
                    })
                    return
                }
            }
        }
        setTimeout(() => {
            开整()
        }, 3000);
    })
}
// 开整()



function 寻找空位(box) {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    Array.prototype.remove = function (val) {
        var index = this.indexOf(val);
        if (index > -1) {
            this.splice(index, 1);
        }
    }
    for (let index = 0; index < box.length; index++) {
        const element = box[index]
        arr.remove(element.position)
    }
    return arr
}


function 获取公开区() {
    return new Promise(resolve => {
        var sign = 计算签名('/dog/home', 'get')
        request.get(sign['url'], sign['data'], (err, res, body) => {
            if (err || !body)
                获取公开区().then(e => resolve(e))
            else
                resolve(body)
        })
    })
}

function 获取仓库区() {
    return new Promise(resolve => {
        查看仓库(e => resolve(e))
    })
}

function 获取探险区() {
    return new Promise(resolve => {
        var sign = 计算签名('/explore', 'get')
        request.get(sign['url'], sign['data'], (err, res, body) => {
            if (err || !body)
                获取探险区().then(e => resolve(e))
            else
                resolve(body)
        })
    })
}

function 领取探险区(id, value = 1) {
    return new Promise(resolve => {
        var sign = 计算签名('/explore/reward', 'post', [], "type=" + id + "&value=" + value)
        request.post(sign['url'], sign['data'], (err, res, body) => {
            if (err || !body)
                领取探险区(id).then(e => resolve(e))
            else
                resolve(body)
        })
    })
}

function 买狗(dogId, callback = () => {
    setTimeout(() => 买狗(dogId), 50);
}) {
    var sign = 计算签名('/dog/bug', 'post', [], "dogId=" + dogId)
    request.post(sign['url'], sign['data'], (err, res, body) => {
        if (!body) {
            console.log('买狗失败', '空')
            setTimeout(() => 买狗(dogId), 50);
            return
        }
        try {
            var json = JSON.parse(body)
        } catch (error) {
            console.log('买狗失败', 'JSON错误')
            setTimeout(() => 买狗(dogId), 50);
            return
        }
        if (json.adInfo) {
            console.log(body)
            console.log('买狗失败', '发现广告')
            完成广告(json.adInfo.adLogId, callback)
            return
        }
        console.log('买狗', dogId)
        消费队列()
    })
}
function 合成(a, b, callback) {
    var sign = 计算签名('/dog/merge', 'post', [], "positionId1=" + a + "&positionId2=" + b)
    request.post(sign['url'], sign['data'], (err, res, body) => {
        if (!body) {
            console.log('合成失败', '空')
            setTimeout(() => 合成(a, b, callback), 50);
            return
        }
        try {
            var json = JSON.parse(body)
        } catch (error) {
            console.log('合成失败', 'JSON错误')
            setTimeout(() => 合成(a, b, callback), 50);
            return
        }
        if (json.message && json.message == '等级不满足要求') {
            console.log('合成失败', '等级不满足要求', a, b, json)
            setTimeout(() => 初始化('合成失败'), 50);
            return
        }
        if (!json.merge) {
            console.log('合成失败', '操作太快', json)
            setTimeout(() => 合成(a, b, callback), 50);
            return
        }
        console.log('合成', a, b)
        callback()
    })
}
function 完成广告(adLogId, callback) {
    if (!adLogId) {
        转盘(callback)
        return
    }
    var sign = 计算签名('/ad/event', 'post', [], "adLogId=" + adLogId + '&event=show')
    request.post(sign['url'], sign['data'], (err, res, body) => {
        if (!body) {
            console.log('广告失败', '空')
            完成广告(adLogId, callback)
            return
        }
        try {
            console.log('完成广告', JSON.parse(body))
        } catch (error) {
            console.log('合成失败', 'JSON错误')
            完成广告(adLogId, callback)
            return
        }
        if (callback) callback()
    })
}
function 打卡(json) {
    if (json.freeCoin == 0) {
        var sign = 计算签名('/free/coin', 'post')
        request.post(sign['url'], sign['data'], (err, res, body) => {
            console.log('打卡完成', body)
        })
    }
}
function 转盘(callback) {
    var sign = 计算签名('/luck/draw', 'post')
    request.post(sign['url'], sign['data'], (err, res, body) => {
        if (!body) {
            console.log('转盘失败', '空')
            转盘(callback)
            return
        }
        try {
            var json = JSON.parse(body)
        } catch (error) {
            console.log('转盘失败', 'JSON错误')
            转盘(callback)
            return
        }
        if (json.errorCode == 400) {
            获取广告(4, callback)
            return
        }
        if (json.coin) {
            完成广告(json.coin.adLogId, callback)
            return
        }
        if (json.adInfo) {
            完成广告(json.adInfo.adLogId, callback)
            return
        }
        console.log('完成转盘')
        callback()
    })
}

function 计算签名(path, method, para = [], body = '') {
    var t = parseInt(new Date().getTime() / 1000)
    para.push('ts=' + t)
    var temp = para.sort()
    var token = salt + method + path + temp.join("&")
    if (body)
        token += md5(body)

    para.push('sign=' + md5(token))
    var url = 'https://api.lxsjgo.com' + path + '?' + para.join('&')
    var data = {
        form: body,
        headers: headers,
        // timeout: 50
    }
    return {
        'url': url,
        'data': data
    }
}

function 获取广告(scene, callback) {
    var sign = 计算签名('/ad/getId', 'get', ['scene=' + scene])
    request.get(sign['url'], sign['data'], (err, res, body) => {
        console.log(body)
        if (!body) {
            console.log('获取广告失败', '空')
            获取广告(scene, callback)
            return
        }
        try {
            var json = JSON.parse(body)
        } catch (error) {
            console.log('获取广告失败', 'JSON错误')
            获取广告(scene, callback)
            return
        }

        if (json.adLogId) {
            //还有广告
            完成广告(json.adLogId)
        } else {
            //没有广告了
            console.log('没有广告了')
            // dogLevel = dogLevel - 1
            // if (dogLevel <= 0)
            dogLevel = 1
            if (callback) callback()
            // setTimeout(() => 初始化('没有广告'), 50);
            return
        }
    })
}

function 弹出() {
    var sign = 计算签名('/index/popup', 'get')
    request.get(sign['url'], sign['data'], (err, res, body) => {
        console.log('弹出', body)
    })
}

function 货币() {
    var sign = 计算签名('/dog/coin', 'get')
    request.get(sign['url'], sign['data'], (err, res, body) => {
        console.log('货币', body)
    })
}

function 进入仓库(positionId, callback) {
    var sign = 计算签名('/bag/dogIn', 'post', [], 'positionId=' + positionId)
    request.post(sign['url'], sign['data'], (err, res, body) => {
        if (!body) {
            console.log('进入仓库失败', '空')
            进入仓库(positionId, callback)
            return
        }
        try {
            var json = JSON.parse(body)
        } catch (error) {
            console.log('进入仓库失败', 'JSON错误')
            进入仓库(positionId, callback)
            return
        }
        callback()
    })
}

function 取出仓库(dogId, callback) {
    var sign = 计算签名('/bag/dogOut', 'post', [], 'dogId=' + dogId)
    request.post(sign['url'], sign['data'], (err, res, body) => {
        if (!body) {
            console.log('取出仓库失败', '空')
            取出仓库(dogId, callback)
            return
        }
        try {
            var json = JSON.parse(body)
        } catch (error) {
            console.log('取出仓库失败', 'JSON错误')
            取出仓库(dogId, callback)
            return
        }
        console.log('取出仓库', body)
        callback()
    })
}

function 查看仓库(callback) {
    var sign = 计算签名('/bag/info', 'get')
    request.get(sign['url'], sign['data'], (err, res, body) => {
        if (!body) {
            console.log('检查仓库失败', '空')
            查看仓库(callback)
            return
        }
        try {
            var json = JSON.parse(body)
        } catch (error) {
            console.log('检查仓库失败', 'JSON错误')
            查看仓库(callback)
            return
        }
        // console.log('查看仓库', body)
        callback(json)
    })
}

function 询问仓库价格() {
    var sign = 计算签名('/expand/price', 'get')
    request.get(sign['url'], sign['data'], (err, res, body) => {
        console.log('询问仓库价格', body)
    })
}

function 扩容仓库() {
    var sign = 计算签名('/expand', 'post', [])
    request.post(sign['url'], sign['data'], (err, res, body) => {
        console.log('扩容仓库', body)
    })
}

function 检查仓库(callback) {
    查看仓库(json => {
        var action = 1
        for (let index = 0; index < json.items.length; index++) {
            const element = json.items[index]
            if (element.dogId < 38 && element.num >= 2) {
                取出仓库(element.dogId, () => {
                    取出仓库(element.dogId, () => {
                        // setTimeout(() => 初始化('获取失败排列'), 50);
                    })
                })
                action = 0
                break
            }
            if (lowLevel == 0 || element.level < lowLevel) {
                lowLevel = element.level
            }
        }
        if (callback)
            callback()
    })
}
