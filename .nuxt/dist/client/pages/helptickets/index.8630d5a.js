(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{349:function(e,t,l){},350:function(e,t,l){},356:function(e,t,l){e.exports=l.p+"img/helptickets.36c2b48.jpg"},357:function(e,t,l){"use strict";var r=l(349);l.n(r).a},358:function(e,t,l){"use strict";var r=l(350);l.n(r).a},362:function(e,t,l){"use strict";l.r(t);l(11);var r=l(346),o=l.n(r),n={data:function(){return{dialogVisible:!1,fullscreenLoading:!1,options:[{img:"https://www.inyihome.com/newStatic/flags/cn.png",value:"+86",label:"中国"},{img:"https://www.inyihome.com/newStatic/flags/hk.png",value:"+852",label:"中国香港"},{img:"https://www.inyihome.com/newStatic/flags/mo.png",value:"+853",label:"中国澳门"},{img:"https://www.inyihome.com/newStatic/flags/tw.png",value:"+886",label:"中国台湾"},{img:"https://www.inyihome.com/newStatic/flags/gb.png",value:"+44",label:"英国"},{img:"https://www.inyihome.com/newStatic/flags/au.png",value:"+61",label:"澳大利亚"}],countryList:[],cityList:[],schoolList:[],ruleForm:{name:"",areacode:"+86",phone:"",weixin:"",country:"",city:"",school:"",remark:""},rules:{name:[{required:!0,message:"请填写您的姓名",trigger:"blur"},{min:2,max:50,message:"长度不得小于2个字符",trigger:"blur"}],phone:[{required:!0,message:"请填写您的手机号",trigger:"blur"},{min:2,max:50,message:"长度不得小于2个字符",trigger:"blur"}],weixin:[{min:2,max:50,message:"长度不得小于2个字符",trigger:"blur"}],city:[{min:2,max:50,message:"长度不得小于2个字符",trigger:"blur"}],school:[{required:!0,message:"请填写您所在大学名称",trigger:"blur"},{min:2,max:50,message:"长度不得小于2个字符",trigger:"blur"}]}}},created:function(){},mounted:function(){},methods:{countryChange:function(e){var t=this;this.ruleForm.city="",this.ruleForm.school="",this.cityList=[],this.schoolList=[],this.countryList.map((function(l){e!=l.zhname||(t.cityList=l.city)}))},cityChange:function(e){var t=this;this.ruleForm.school="",this.schoolList=[],this.cityList.map((function(l){e!=l.cityname||(t.schoolList=l.school)}))},submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;t.fullscreenLoading=!0;var l={type:"0",name:t.ruleForm.name,areacode:t.ruleForm.areacode,phone:t.ruleForm.phone,weixin:t.ruleForm.weixin,country:t.ruleForm.country,city:t.ruleForm.city,school:t.ruleForm.school,remark:t.ruleForm.remark};t.$request.savehelptickets(l).then((function(e){t.dialogVisible=!0,t.fullscreenLoading=!1,window._agl&&window._agl.push(["track",["success",{t:3}]])})).catch((function(e){t.fullscreenLoading=!1,t.$message({message:"数据提交失败",type:"error"})}))}))},scrollbutton:function(){o()("html,body").animate({scrollTop:o()(".main-content").offset().top},1e3)},confirm:function(){this.dialogVisible=!1,this.$router.push({path:"/"})}}},c=(l(357),l(358),l(44)),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("div",{staticClass:"container-fluid imgWrapper",staticStyle:{padding:"0",margin:"0","max-height":"530px"}},[r("img",{staticClass:"img-responsive",staticStyle:{width:"100%",cursor:"pointer",height:"100%","max-height":"530px"},attrs:{src:l(356)},on:{click:function(t){return e.scrollbutton()}}})]),e._v(" "),r("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"container-fluid main-content"},[r("div",{staticClass:"container"},[r("div",{staticClass:"activity-content"},[r("h1",{staticClass:"h1"},[e._v("租房预定，送你免费机票+旅游套餐")]),e._v(" "),r("h2",{staticClass:"h2"},[e._v("您的联系方式")]),e._v(" "),r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"label-position":"top",rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"您的姓名",prop:"name"}},[r("el-input",{attrs:{placeholder:"请填写您的姓名",clearable:""},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"您的手机号",prop:"phone"}},[r("el-select",{staticClass:"selectArea",attrs:{placeholder:"请选择国家或地区"},model:{value:e.ruleForm.areacode,callback:function(t){e.$set(e.ruleForm,"areacode",t)},expression:"ruleForm.areacode"}},e._l(e.options,(function(t){return r("el-option",{key:t.value,attrs:{label:t.value,value:t.value}},[r("span",{staticStyle:{float:"left","margin-right":"10px"}},[r("img",{attrs:{src:t.img,alt:""}})]),e._v(" "),r("span",{staticStyle:{float:"left"}},[e._v(e._s(t.label))]),e._v(" "),r("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.value))])])})),1),e._v(" "),r("el-input",{staticClass:"phoneInput",attrs:{placeholder:"请填写您的手机号",clearable:""},model:{value:e.ruleForm.phone,callback:function(t){e.$set(e.ruleForm,"phone",t)},expression:"ruleForm.phone"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"您的微信",prop:"weixin"}},[r("el-input",{attrs:{placeholder:"请填写您的微信号",clearable:""},model:{value:e.ruleForm.weixin,callback:function(t){e.$set(e.ruleForm,"weixin",t)},expression:"ruleForm.weixin"}})],1),e._v(" "),r("h2",{staticClass:"h2"},[e._v("您的租房需求")]),e._v(" "),r("el-form-item",{attrs:{label:"所在城市",prop:"city"}},[r("el-input",{attrs:{placeholder:"请填写您所在城市名称",clearable:""},model:{value:e.ruleForm.city,callback:function(t){e.$set(e.ruleForm,"city",t)},expression:"ruleForm.city"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"所在大学",prop:"school"}},[r("el-input",{attrs:{placeholder:"请填写您所在大学名称",clearable:""},model:{value:e.ruleForm.school,callback:function(t){e.$set(e.ruleForm,"school",t)},expression:"ruleForm.school"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"您的租房需求",prop:"remark"}},[r("el-input",{attrs:{type:"textarea",autosize:{minRows:4},placeholder:"请填写您的租房需求，如租金、位置、房型、人数等",maxlength:"450"},model:{value:e.ruleForm.remark,callback:function(t){e.$set(e.ruleForm,"remark",t)},expression:"ruleForm.remark"}})],1),e._v(" "),r("el-form-item",[r("el-button",{staticStyle:{width:"100%","background-color":"#3b44ac","border-color":"#3b44ac","margin-top":"50px"},attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("提交")])],1)],1)],1)])]),e._v(" "),r("el-dialog",{attrs:{title:"数据提交成功",visible:e.dialogVisible,"close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1,center:"","custom-class":"mydialogVisible"},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("div",{staticStyle:{"text-align":"center"}},[r("i",{staticClass:"el-icon-success",staticStyle:{"font-size":"50px",color:"#FB5058"}})]),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{staticStyle:{"background-color":"#3b44ac","border-color":"#3b44ac",width:"140px"},attrs:{type:"primary"},on:{click:e.confirm}},[e._v("确 定")])],1)])],1)}),[],!1,null,"ddc1f334",null);t.default=component.exports}}]);