

$(function () {
	// 预约医生按钮点击
	$("#makeBtn").click(function() {
        $(".masking").show();
        $(".register-pack").show();
	});

    // 注册弹框登录按钮点击
    $("#registerBtn").click(function() {
        $(".masking").hide();
        $(".register-pack").hide();

        $(".masking").show();
        $(".login-pack").show();
    });

	// 登录弹框登录按钮点击
	$("#loginBtn").click(function() {
		$(".masking").hide();
		$(".login-pack").hide();

		$(".masking").show();
		$(".make-ok-pack").show();
	});

	// 预约成功弹框关闭按钮点击
	$("#closeMakeOk").click(function() {
		$(".masking").hide();
		$(".make-ok-pack").hide();
	});

	// 打开密码明文按钮点击
	$("#openPasswordBtn").click(function() {
		$("#openPasswordBtn").hide();
		$("#closePasswordBtn").show();
		$("#ciphertextPassword").hide();
		$("#proclaimedPassword").show();
	});

	// 关闭密码明文按钮点击
	$("#closePasswordBtn").click(function() {
		$("#openPasswordBtn").show();
		$("#closePasswordBtn").hide();
		$("#ciphertextPassword").show();
		$("#proclaimedPassword").hide();
	});

	// 明文、密文内容切换事件
	$("#ciphertextPassword").bind("input propertychange", function() {
		$("#proclaimedPassword").val($(this).val());
	});
	$("#proclaimedPassword").bind("input propertychange", function() {
		$("#ciphertextPassword").val($(this).val());
	});


});
