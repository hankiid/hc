var student_subject = ''


/* 提交学生信息和学生作业 */
var btn = document.querySelector('.btn')
btn.onclick = function () {

    var popBoxer = document.getElementById("popBoxer");
    var popLayer = document.getElementById("popLayer");
    popBoxer.style.display = "block";
    popLayer.style.display = "block";

    var student_name = document.getElementById('student_name').value
    var student_id = document.getElementById('student_id').value
    let file = $('#fileup')[0].files[0]//获取文件
    let form = new FormData()
    form.append('name', student_name)
    form.append('id', student_id)
    form.append('subject', student_subject)
    form.append('file', file)
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
        console.log(value.data.share);
    }, reason => {
        console.log('失败')
        console.log(reason.message)
    })
}

// 关闭弹窗
var btn2 = document.querySelector('.btn4')
btn2.onclick = function close() {
    var popBoxer = document.getElementById("popBoxer");
    var popLayer = document.getElementById("popLayer");
    popBoxer.style.display = "none";
    popLayer.style.display = "none";
};

