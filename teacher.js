// 获取提交状态
        function getstate(){
            $.ajax({
                //${pageContext.request.contextPath}用于取后端方法的绝对路径的项目名
                url: "${pageContext.request.contextPath}/user/returnJson",
                type: "GET",
                data:{state: $("#state").val()},//必须是字符串格式
                contentType:"application/json", //指定内容格式
                dataType:json,
                success: function(data) {  //括号里的data是服务器返回的数据
                    console.log(data);
    
                }
            });
        }
