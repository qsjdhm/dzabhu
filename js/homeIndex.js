
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
    // 1. 渲染医生列表
    renderDoctorList(doctorData);
    // 2. 绑定搜索
    bindSearch();
    // 3. 初始化选择器组件
    initPicker ();
});

// 渲染医生列表
function renderDoctorList (data) {
    $(".doctor-list").empty();
    // 渲染医生信息
    var html = '';
    for (var i = 0, len = data.length; i < len; i++) {
        html += '<div class="doctor-item" doctorId="'+data[i].id+'">';
        html += '   <div class="item-portrait-pack">';
        html += '       <img class="item-portrait" src="i/portrait.png" />';
        html += '   </div>';
        html += '   <div class="item-info">';
        html += '       <div class="top-pack">';
        html += '           <span class="name">'+data[i].name+'</span>';
        html += '           <span class="type">'+data[i].type+'</span>';
        html += '           <span class="department">'+data[i].department+'</span>';
        html += '       </div>';
        html += '       <div class="content-pack">';
        html += '           <span class="address">'+data[i].address+'</span>';
        html += '           <img class="arrows" src="i/arrows-right.png" />';
        html += '       </div>';
        html += '       <div class="bottom-pack">';
        html += '           <span class="major-pack">负责专业：';
        var majorList = data[i].major;
        for (var j = 0, jlen = majorList.length; j < jlen; j++) {
            html += '           <span class="major-item">'+majorList[j]+'</span>';
        }
        html += '           </span>';
        html += '       </div>';
        html += '   </div>';
        html += '</div>';
    }
    $(".doctor-list").append(html);
    // 绑定点击事件
    $(".doctor-item").on('click', function(e){
        var id = $(this).attr("doctorId");
        window.location.href = "details.html?id="+id;
    });
}

// 绑定搜索
function bindSearch () {
    $("#searchBtn").click(function() {
        var list = [];
        $('#showDepartmentPicker').removeClass("type-active");
        $('#showCityPicker').removeClass("type-active");
        var keyword = $(".search-input").val();
        if (keyword == '') {
            list = doctorData;
        } else {
            for (var i = 0, len = doctorData.length; i < len; i++) {
                if (doctorData[i].name.indexOf(keyword) > -1) {
                    list.push(doctorData[i]);
                }
            }
        }
        // 渲染医生列表
        renderDoctorList(list);
    });
}

// 初始化选择器组件
function initPicker () {
    // 初始化选择器组件
    mui.init();
    mui.ready(function() {
        //-----------------------------------------
        //城市级联示例
        var cityPicker = new mui.PopPicker({
            layer: 2
        });
        // cityPicker.setData(cityData);
        cityPicker.setData([{
            value: '110000',
            text: '上海市',
            children: [{
                value: "110101",
                text: "黄浦区"
            }]
        }, {
            value: '120000',
            text: '浙江省',
            children: [{
                value: "120101",
                text: "杭州市"
            }]
        }])
        var showCityPickerButton = document.getElementById('showCityPicker');
        var cityResult = document.getElementById('cityResult');
        showCityPickerButton.addEventListener('tap', function(event) {
            $('#showDepartmentPicker').removeClass("type-active");
            $('#showCityPicker').addClass("type-active");
            cityPicker.show(function(items) {
                var city = items[0].text + items[1].text;
                var list = [];
                for (var i = 0, len = doctorData.length; i < len; i++) {
                    if (doctorData[i].city == city) {
                        list.push(doctorData[i]);
                    }
                }
                // 渲染医生列表
                renderDoctorList(list);

                //cityResult.innerText = "你选择的城市是:" + items[0].text + " " + items[1].text;
                //返回 false 可以阻止选择框的关闭
                //return false;
            });
        }, false);
        //-----------------------------------------

        //-----------------------------------------
        //科室级联示例
        var departmentPicker = new mui.PopPicker();
        departmentPicker.setData([
            { value: '肝胆内科', text: '肝胆内科' },
            { value: '感染科', text: '感染科' },
            { value: '呼吸内科', text: '呼吸内科' },
            { value: '皮肤科', text: '皮肤科' },
            { value: '耳鼻喉科', text: '耳鼻喉科' }
        ]);
        var showDepartmentPickerButton = document.getElementById('showDepartmentPicker');
        var departmentResult = document.getElementById('departmentResult');
        showDepartmentPickerButton.addEventListener('tap', function(event) {
            $('#showCityPicker').removeClass("type-active");
            $('#showDepartmentPicker').addClass("type-active");
            departmentPicker.show(function(items) {
                var department = items[0].text;
                var list = [];
                for (var i = 0, len = doctorData.length; i < len; i++) {
                    if (doctorData[i].department == department) {
                        list.push(doctorData[i]);
                    }
                }
                // 渲染医生列表
                renderDoctorList(list);

                //cityResult.innerText = "你选择的城市是:" + items[0].text + " " + items[1].text;
                //返回 false 可以阻止选择框的关闭
                //return false;
            });
        }, false);
        //-----------------------------------------
    });
}