// 实现弹窗
function popBoxer() {
    var popBoxer = document.getElementById("popBoxer");
    var popLayer = document.getElementById("popLayer");
    var popCloseBtn = document.getElementById("close");
    popBoxer.style.display = "block";
    popLayer.style.display = "block";
    popCloseBtn.style.display = "block";
};
// 关闭弹窗
var btn = document.querySelector('.close_btn')
btn.onclick = function () {
    var popBoxer = document.getElementById("popBoxer");
    var popLayer = document.getElementById("popLayer");
    var popCloseBtn = document.getElementById("close");
    popBoxer.style.display = "none";
    popLayer.style.display = "none";
    popCloseBtn.style.display = "none";
};

// 提交学生个人信息
var btn = document.querySelector('.btn3')
btn.onclick = function () {
    var student_name = document.getElementById('student_name').value
    var student_id = document.getElementById('student_id').value
    var student_email = document.getElementById('student_email').value
    let form = new FormData()
    form.append('name', student_name)
    form.append('id', student_id)
    form.append('email', student_email)
    axios({
        method: 'POST',
        url: 'http://127.0.0.1/post/student/uploadhomework',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data: form
    }).then(value => {
        console.log('成功')
        console.log(value)
    }, reason => {
        console.log('失败')
        console.log(reason.message)
    })
}

//提交学生名单
function upload() {
    let file = $('#fileup')[0].files[0]
    let form = new FormData()
    form.append('ExcelFile', file)
    axios({
        method: 'POST',
        url: 'http://127.0.0.1:8080/post/teacher/putstudents',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data: form
    }).then(value => {
        console.log('成功')
        console.log(value)
    }, reason => {
        console.log('失败')
        console.log(reason.message)
    })
}

//生成链接
var btn1 = document.querySelector('.btn')
var link = document.querySelector('.link')
var hidden1 = document.querySelector('#hidden1')
var hidden2 = document.querySelector('#hidden2')
btn1.onclick = function () {
    hidden1.style.display = 'block'
    hidden2.style.display = 'block'
    var biaodan = document.querySelector('#biaodan')
    var index = biaodan.selectedIndex
    var subject = biaodan.options[index].value
    let form = new FormData()
    form.append('subject', subject)
    axios({
        method: 'POST',
        url: 'http://127.0.0.1/get/teacher/link',
        Headers: {
            'Content-Type': 'multipart/form-data'
        },
        data: form
    }).then(value => {
        console.log('成功')
        console.log(value);
        hidden1.innerHTML = '作业提交地址：' + value.data.url
        hidden2.innerHTML = '教师码：' + value.data.share
    }, reason => {
        console.log('失败')
        console.log(reason.message)
    })
}
