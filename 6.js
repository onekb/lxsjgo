var md5 = require('md5');
var request = require('request');
var salt = '2179a2684d5b28623802399f6f9038f7'
var Authorization = 'Bearer eJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLmx4c2pnby5jb21cL2F1dGhcL2xvZ2luM3JkIiwiaWF0IjoxNTgyNDcxMzg0LCJleHAiOjE1ODUwNjMzODQsIm5iZiI6MTU4MjQ3MTM4NCwianRpIjoiVjBoYkFFQnVROG4xQW9EZSIsInN1YiI6OTMwNzg5OSwicHJ2IjoiZjY0ZDQ4YTZjZWM3YmRmYTdmYmY4OTk0NTRiNDg4YjNlNDYyNTIwYSIsImN1c3RvbUluZm8iOiJleUpwZGlJNklsVjRORnd2SzBkM2FWaGxjRzR4V0c0NWEwMW1kelpCUFQwaUxDSjJZV3gxWlNJNkltbERkSE5sVkdkVlpIRjViR0kwVDFoNlVFSllZVlpKT0ZOTWVGd3ZNVTVOZUZsME5rUk1VVk4zU2pkaE9HeGNMMU0wY21ScmFEZFJORmRMWjAxSlpGRmFSa2RIVkdOT1NUSlRPV2xTUWtwVWN6TjVkRzEyUTNreWNqRjRXbXB0ZVUxVE9HUkVhSGh0VlZKS1dUQTlJaXdpYldGaklqb2lORGxqWkdObU1XWmxaVGszTUdOa1l6RTRPVGxoTW1OaVpXRXdOR1JpTkRoa1ptTTJZakJtT0RJek5qTTVObUpqTVdOa09XRm1OVEl5T1RVMk5qSm1aQ0o5In0.I706v3XOjA1pAVZLVMccf_GsldnSXGAt0q9z3ZCas-8___2';
Authorization = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLmx4c2pnby5jb21cL2F1dGhcL2xvZ2luM3JkIiwiaWF0IjoxNTgyNTE1NzA1LCJleHAiOjE1ODUxMDc3MDUsIm5iZiI6MTU4MjUxNTcwNSwianRpIjoibTZJUzhoZ0Njd3RteExvQyIsInN1YiI6OTMwNzg5OSwicHJ2IjoiZjY0ZDQ4YTZjZWM3YmRmYTdmYmY4OTk0NTRiNDg4YjNlNDYyNTIwYSIsImN1c3RvbUluZm8iOiJleUpwZGlJNklsZHJWbWRDVjBOc1RDczNkbE13WVdKcFJXZGNMMmhuUFQwaUxDSjJZV3gxWlNJNklqbHVSRUl5Ym5kM1RWZzJka0ZOUjBkNU1HdEVTR2hYTkVSV1JHaEhUVk55VUcwd01ETjJSMGhPUmtOR1pUa3djWGxNWmxjeFpqaDBZMDU0ZVVkcE1Gd3Zka0ptZUc0ME1GYzNXVzR3VlhsM1pqWjJVWEZrZFhwRU9HcHhaREowY2s1clJYQjZZVzk0ZDJjeFp6MGlMQ0p0WVdNaU9pSTNZbVZtTTJNeE1qVmhZV05rTmpReE16WTJabVEwWXpNNFlUUXdabUpqTXpjeE5qYzVZV1l5T0dabU9XUTBPVGcxTkRZM09XVXhNbU01WVRFeU5HWXdJbjA9In0.1WayjY5CnYEI3g1GJemBRNq5zl0M_giNcTjcMwn-3rA___2'
var CID = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLmx4c2pnby5jb21cL2F1dGhcL2xvZ2luM3JkIiwiaWF0IjoxNTgyNDcxMzg0LCJleHAiOjE1ODUwNjMzODQsIm5iZiI6MTU4MjQ3MTM4NCwianRpIjoiVjBoYkFFQnVROG4xQW9EZSIsInN1YiI6OTMwNzg5OSwicHJ2IjoiZjY0ZDQ4YTZjZWM3YmRmYTdmYmY4OTk0NTRiNDg4YjNlNDYyNTIwYSIsImN1c3RvbUluZm8iOiJleUpwZGlJNklsVjRORnd2SzBkM2FWaGxjRzR4V0c0NWEwMW1kelpCUFQwaUxDSjJZV3gxWlNJNkltbERkSE5sVkdkVlpIRjViR0kwVDFoNlVFSllZVlpKT0ZOTWVGd3ZNVTVOZUZsME5rUk1VVk4zU2pkaE9HeGNMMU0wY21ScmFEZFJORmRMWjAxSlpGRmFSa2RIVkdOT1NUSlRPV2xTUWtwVWN6TjVkRzEyUTNreWNqRjRXbXB0ZVUxVE9HUkVhSGh0VlZKS1dUQTlJaXdpYldGaklqb2lORGxqWkdObU1XWmxaVGszTUdOa1l6RTRPVGxoTW1OaVpXRXdOR1JpTkRoa1ptTTJZakJtT0RJek5qTTVObUpqTVdOa09XRm1OVEl5T1RVMk5qSm1aQ0o5In0.I706v3XOjA1pAVZLVMccf_GsldnSXGAt0q9z3ZCas-8___2';
CID = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLmx4c2pnby5jb21cL2F1dGhcL2xvZ2luM3JkIiwiaWF0IjoxNTgyNTE1NzA1LCJleHAiOjE1ODUxMDc3MDUsIm5iZiI6MTU4MjUxNTcwNSwianRpIjoibTZJUzhoZ0Njd3RteExvQyIsInN1YiI6OTMwNzg5OSwicHJ2IjoiZjY0ZDQ4YTZjZWM3YmRmYTdmYmY4OTk0NTRiNDg4YjNlNDYyNTIwYSIsImN1c3RvbUluZm8iOiJleUpwZGlJNklsZHJWbWRDVjBOc1RDczNkbE13WVdKcFJXZGNMMmhuUFQwaUxDSjJZV3gxWlNJNklqbHVSRUl5Ym5kM1RWZzJka0ZOUjBkNU1HdEVTR2hYTkVSV1JHaEhUVk55VUcwd01ETjJSMGhPUmtOR1pUa3djWGxNWmxjeFpqaDBZMDU0ZVVkcE1Gd3Zka0ptZUc0ME1GYzNXVzR3VlhsM1pqWjJVWEZrZFhwRU9HcHhaREowY2s1clJYQjZZVzk0ZDJjeFp6MGlMQ0p0WVdNaU9pSTNZbVZtTTJNeE1qVmhZV05rTmpReE16WTJabVEwWXpNNFlUUXdabUpqTXpjeE5qYzVZV1l5T0dabU9XUTBPVGcxTkRZM09XVXhNbU01WVRFeU5HWXdJbjA9In0.1WayjY5CnYEI3g1GJemBRNq5zl0M_giNcTjcMwn-3rA___2'
var UserAgent = 'com.jiayouya.travel/1.2.0 (iPhone; iOS 13.3.1; Scale/0.56;DEVICEID/6A1E7084-F0D9-4A7F-BD66-7D3CED7023D9)'

// Authorization = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLmx4c2pnby5jb21cL2F1dGhcL2xvZ2luM3JkIiwiaWF0IjoxNTgyMzY1ODA4LCJleHAiOjE1ODQ5NTc4MDgsIm5iZiI6MTU4MjM2NTgwOCwianRpIjoiUDRHV2htbEhDQXVWTTRhSyIsInN1YiI6MTE2ODczNTUsInBydiI6ImY2NGQ0OGE2Y2VjN2JkZmE3ZmJmODk5NDU0YjQ4OGIzZTQ2MjUyMGEiLCJjdXN0b21JbmZvIjoiZXlKcGRpSTZJbkEyZW5ONU5VRTRSVFIwUlZWcWJGZ3JTbGt3WVdjOVBTSXNJblpoYkhWbElqb2lkMDlQTlU5S1kzTTBlRE5WU1N0cFlYTllXWFZEUlRSNFpWRnRRMmREY1RGYVpHZDFOVXA0T0Zkbk5reGhjRzlRVGtOd1ZGTk1NelJFYVROTVdXcFpjVkZuV25Wa1EwWnVTMGhVZUcxNmIwaFZWelJrWW5WSFJXNVJWVGhRVDJkRWVtWlhiSGx1U0daT2VHODlJaXdpYldGaklqb2lNR1E1T0RJNU16bGxNMlpsTUdGak1USXhaR1V4WVdFeVlXUTFNVFUzWkRZd016a3lZV0V4TUdaaE5qVTJNVEkyTUdSbU5UaGtaamN6WWpVd01EZzFNU0o5In0.IVSpUOM8MfD5JLQ7s_wiErkGsfJT_s2hMR9s_rh97jQ___3'
// CID = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLmx4c2pnby5jb21cL2F1dGhcL2xvZ2luM3JkIiwiaWF0IjoxNTgyMzY1ODA4LCJleHAiOjE1ODQ5NTc4MDgsIm5iZiI6MTU4MjM2NTgwOCwianRpIjoiUDRHV2htbEhDQXVWTTRhSyIsInN1YiI6MTE2ODczNTUsInBydiI6ImY2NGQ0OGE2Y2VjN2JkZmE3ZmJmODk5NDU0YjQ4OGIzZTQ2MjUyMGEiLCJjdXN0b21JbmZvIjoiZXlKcGRpSTZJbkEyZW5ONU5VRTRSVFIwUlZWcWJGZ3JTbGt3WVdjOVBTSXNJblpoYkhWbElqb2lkMDlQTlU5S1kzTTBlRE5WU1N0cFlYTllXWFZEUlRSNFpWRnRRMmREY1RGYVpHZDFOVXA0T0Zkbk5reGhjRzlRVGtOd1ZGTk1NelJFYVROTVdXcFpjVkZuV25Wa1EwWnVTMGhVZUcxNmIwaFZWelJrWW5WSFJXNVJWVGhRVDJkRWVtWlhiSGx1U0daT2VHODlJaXdpYldGaklqb2lNR1E1T0RJNU16bGxNMlpsTUdGak1USXhaR1V4WVdFeVlXUTFNVFUzWkRZd016a3lZV0V4TUdaaE5qVTJNVEkyTUdSbU5UaGtaamN6WWpVd01EZzFNU0o5In0.IVSpUOM8MfD5JLQ7s_wiErkGsfJT_s2hMR9s_rh97jQ___3'
// UserAgent = 'com.jiayouya.travel/1.2.0 (iPhone; iOS 13.3.1; Scale/0.56;DEVICEID/0D0DBD5F-C54F-430E-A69D-CFDDDC8C6309)'

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
初始化('开始')
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
function 获取排列() {
    var sign = 计算签名('/dog/home', 'get')
    request.get(sign['url'], sign['data'], (err, res, body) => {
        if (!body) {
            console.log('获取排列失败', '空')
            setTimeout(() => 初始化('获取失败排列'), 50);
            return
        }
        try {
            var json = JSON.parse(body)
        } catch (error) {
            console.log('获取排列失败', 'JSON错误')
            setTimeout(() => 初始化('获取失败排列json'), 50);
            return
        }
        打卡(json)
        计算排列(json)
    })
}
function 计算排列(json) {
    json.positions.forEach(element => {
        box[element.position - 1] = element.level
    })

    while (true) {
        var vary = 0

        //将现有的合成 开始
        var level = {}
        box.forEach((value, index) => {
            if (value) {
                if (!level[value])
                    level[value] = []
                level[value].push(index)
            }
        })

        Object.keys(level).forEach(element => {
            if (level[element].length >= 2) {
                var a = level[element][0]
                var b = level[element][1]
                if (element != 38) {
                    vary = 1
                    needBuy = 0
                    生产队列(['合成', a, b])
                    box[a] += 1
                    box[b] = 0

                    if (box[a] >= lowLevel) {
                        vary = -1
                        生产队列(['进入仓库', a + 1])
                        box[a] = 0
                    }
                }
            }
        })
        //将现有的合成 结束


        var buyLevel = 1
        var position = -1
        for (let index = 0; index < box.length; index++) {
            if (box[index] != 38) {
                if (buyLevel < box[index] && box[index] <= 31) {
                    buyLevel = box[index]
                    position = index + 1
                } else if (box[index] > 31) {
                    vary = -1
                    生产队列(['进入仓库', index + 1])
                    box[index] = 0
                }
            }
        }

        if (寻找空位(box) != -1 && vary != -1) {
            vary = 1
            box[寻找空位(box)] = buyLevel
            生产队列(['购买', buyLevel, position])
            buyLevel = parseInt(buyLevel) + 1
            if (buyLevel >= 32)
                buyLevel = 1
        }

        if (vary <= 0)
            break
    }
    消费队列()


    console.log(queue)
    return
}

function 寻找空位(box) {
    for (let index = 0; index < box.length; index++) {
        const element = box[index];
        if (element == 0)
            return index
    }
    return -1
}

function 生产队列(array) {
    queue.push(array)
}

function 消费队列() {
    if (!queue.length) {
        console.log('完成')
        dogLevel = 1
        console.log('当前阶段已完成', dogLevel)
        setTimeout(() => 初始化('没有队列'), 50);
        return
    }
    var temp = queue.shift()
    console.log('队列剩余', queue.length)
    setTimeout(() => {
        switch (temp[0]) {
            case '购买':
                买狗(temp[1], () => {
                    进入仓库(temp[2], () => {
                        setTimeout(() => {
                            初始化('进入仓库')
                            return
                        }, 50);
                        return
                    })
                })
                break
            case '合成':
                合成(work[temp[2]], work[temp[1]])
                break
            case '进入仓库':
                进入仓库(temp[1], () => {
                    消费队列()
                })
                break
        }
    }, 40);

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
function 合成(a, b) {
    var sign = 计算签名('/dog/merge', 'post', [], "positionId1=" + a + "&positionId2=" + b)
    request.post(sign['url'], sign['data'], (err, res, body) => {
        if (!body) {
            console.log('合成失败', '空')
            setTimeout(() => 合成(a, b), 50);
            return
        }
        try {
            var json = JSON.parse(body)
        } catch (error) {
            console.log('合成失败', 'JSON错误')
            setTimeout(() => 合成(a, b), 50);
            return
        }
        if (json.message && json.message == '等级不满足要求') {
            console.log('合成失败', '等级不满足要求', a, b, json)
            setTimeout(() => 初始化('合成失败'), 50);
            return
        }
        if (!json.merge) {
            console.log('合成失败', '操作太快', json)
            setTimeout(() => 合成(a, b), 50);
            return
        }
        console.log('合成', a, b)
        消费队列()
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
        console.log('查看仓库', body)
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
                        setTimeout(() => 初始化('获取失败排列'), 50);
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
