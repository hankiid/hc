var tishi = document.querySelector('.tishi')
tishi.onclick = function () {
    axios({
        method: 'POST',
        url: 'http://127.0.0.1/post/teacher/reminder'
    }).then(value => {
        console.log('成功')
        console.log(value)
    }, reason => {
        console.log('失败')
        console.log(reason.message)
    })
}

var submit = document.querySelector('#submit')
submit.onclick = function () {
    axios({
        method: 'POST',
        url: 'http://127.0.0.1/post/putscore'
    }).then(value => {
        console.log('成功')
        console.log(value)
    }, reason => {
        console.log('失败')
        console.log(reason.message)
    })
}

var submit2 = document.querySelector('#submit2')
submit2.onclick = function () {
    axios({
        method: 'POST',
        url: 'http://127.0.0.1/post/teacher/savescore'
    }).then(value => {
        console.log('成功')
        console.log(value)
    }, reason => {
        console.log('失败')
        console.log(reason.message)
    })
}
