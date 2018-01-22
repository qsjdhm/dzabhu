
// 医生数据
var doctorData = [
    {
        id: 1,
        name: '张文磊1',
        type: '住院医师',
        department: '呼吸内科',
        address: '博兴县中医院（博兴县城郊医院）',
        major: ['肺炎', '哮喘'],
        city: '北京市西城区'
    },
    {
        id: 2,
        name: '张文磊2',
        type: '主治医师',
        department: '肾内科',
        address: '杭州中医院（杭州第一人民医院）',
        major: ['肾结石', '尿毒症'],
        city: '浙江省杭州市'
    },
    {
        id: 3,
        name: '张文磊3',
        type: '住院医师',
        department: '呼吸内科',
        address: '杭州中医院（杭州第一人民医院）',
        major: ['肺炎', '哮喘'],
        city: '浙江省杭州市'
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
        alert(111);
        var keyword = $(".search-input").val();
        var list = [];
        for (var i = 0, len = doctorData.length; i < len; i++) {
            if (doctorData[i].name.indexOf(keyword) > -1) {
                list.push(doctorData[i]);
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
        cityPicker.setData(cityData);
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
            { value: '呼吸内科', text: '呼吸内科' },
            { value: '肾内科', text: '肾内科' },
            { value: '外科', text: '外科' },
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