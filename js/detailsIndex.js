
// 医生数据
var doctorData = [
    {
        id: 1,
        name: '胡和平',
        type: '教授',
        department: '肝胆内科',
        address: '东方肝胆外科医院',
        phone: 13855699631,
        major: ['肝结石', '胆结石'],
        city: '上海市黄浦区',
        desc: [
            '东方肝胆外科医院肝胆内科主任，长期从事肝胆疾病的临床工作，对肝胆疾病认识深刻，具有很好的临床思维与丰富的临床经验，在肝胆疾病的诊治上形成特色，并有一定的影响。倡议建立了中华消化学会肝胆学专业组并任组长，在国内较早的创立肝胆内科，并促进了该学科的建立和发展，为肝胆疾病诊治专一化、规范化与标准化起到了一定的示范和促进作用。',
            '领导并开展了多项临床科研工作，承担国家863、973、十一五、十二五子课题及多项国家自然科学基金，发表SCI论文20余篇，这些工作为解决临床工作中遇到的新问题提供了理论和基础。曾获得军队以及上海市科技成果奖，以及军队优秀技术人才特殊津贴、军队育才奖、三等功等荣誉。现兼任苏州大学及福建医科大学研究生导师，中央军委保健会诊专家，国家自然科学基金、教育部论文评审专家，解放军与上海市科技成果评审专家，上海市政府采购咨询专家，解放军消化专业委员会委员，上海市肝病学会肝癌组组长，上海市消化病学会委员，Journal of Hepatocellular Carcinoma，《中华消化杂志》，《临床肝胆病杂志》，《实用肝脏病杂志》等多种杂志编委。'
        ]
    },
    {
        id: 2,
        name: '谢青',
        type: '博导',
        department: '感染科',
        address: '上海交通大学医学院附属瑞金医院',
        phone: 13855699632,
        major: ['肺炎', '哮喘'],
        city: '上海市黄浦区',
        desc: [
            '上海交通大学医学院附属瑞金医院感染科科主任，二级教授，现任中华医学会感染病学分会副主任委员、中国医师协会感染科分会副会长、上海市感染性疾病科临床质量控制中心主任等职务，曾获中国女医师协会五洲女子科技奖、宝钢优秀教师奖等荣誉。承担国家十一五、十二五子课题及多项国家自然科学基金，发表SCI论文200余篇。'
        ]
    },
    {
        id: 3,
        name: '张文磊',
        type: '住院医师',
        department: '呼吸内科',
        address: '杭州中医院（杭州第一人民医院）',
        phone: 13855699633,
        major: ['肺炎', '哮喘'],
        city: '浙江省杭州市',
        desc: [
            '杭州大学医学院附属瑞金医院感染科科主任，二级教授，现任中华医学会感染病学分会副主任委员、中国医师协会感染科分会副会长、上海市感染性疾病科临床质量控制中心主任等职务，曾获中国女医师协会五洲女子科技奖、宝钢优秀教师奖等荣誉。承担国家十一五、十二五子课题及多项国家自然科学基金，发表SCI论文200余篇。'
        ]
    }
];

$(function () {

    var id = getUrlParms("id");
    renderDoctorDetails(id);


    // 返回按钮点击
    $(".back-icon-pack").click(function() {
        window.location.href = "index.html";
    });

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

function getUrlParms (name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)
        return unescape(r[2]);
    return null;
}

// 渲染医生详情
function renderDoctorDetails (id) {
    var data = {};
    for (var i = 0, len = doctorData.length; i < len; i++) {
        if (id == doctorData[i].id) {
            data = doctorData[i];
        }
    }

    $("#detailsName").html(data.name);
    $("#detailsType").html(data.type);
    $("#detailsDepartment").html(data.department);
    $("#detailsAddress").html(data.address);
    $("#detailsPhone").html("联系电话：" + data.phone);
    var majorHtml = '负责专业：';
    for (var i = 0, len = data.major.length; i < len; i++) {
        majorHtml += '<span class="major-item">'+data.major[i]+'</span>';
    }
    $("#detailsMajor").html(majorHtml);
    var descHtml = '';
    for (var i = 0, len = data.desc.length; i < len; i++) {
        descHtml += '<p>'+data.desc[i]+'</p>';
    }
    $("#detailsDesc").html(descHtml);

    $("#makeDepartment").html(data.department);
    $("#makeName").html(data.name);

    $("#phoneBtn").click(function() {
        window.location.href = 'tel:' + data.phone;
    });
}

