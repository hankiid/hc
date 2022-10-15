
        $(document).ready(function () {
            $("#submit").click(function () {
                var formData = new FormData($("#uploadForm")[0]);
                var subject=$("#subject");
                $.ajax({
                    type: "POST",
                    data: formData,
                    url: "http://localhost:8089/api/File/MultiFileUpload",
                    contentType: false,
                    processData: false,
                    success: function (data) {
                        console.log(data);
                        if (data != '') {
                            var obj = JSON.stringify(data);//将字符串转化为Json格式
                            var str = obj.toString();
                            alert(str);
                        }
                    },
                    error: function (e) {
                        console.log(e);
                        alert("上传失败！");
                    }
                });
            });
        });

