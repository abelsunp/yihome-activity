<template>
	<section id="applyHouse"  v-loading.fullscreen.lock="fullscreenLoading">
		<b-container class="applyWrapper">
			<h1 class="applyTitle">住房申请</h1>
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="apply-ruleForm" label-position="top" >
				<el-collapse v-model="activeNames" @change="handleChange">
				  <el-collapse-item title="个人信息" name="1">
				  	<!--个人信息填写-->
					  <b-row>
					  	<b-col md="6" sm="12" lg="6">
					  		<el-form-item label="姓名（中文）" prop="nameCh">
							    <el-input v-model="ruleForm.nameCh" placeholder="请输入个人中文姓名" clearable></el-input>
							  </el-form-item>
					  	</b-col>
					  	<b-col md="6" sm="12" lg="6">
					  		<el-form-item label="姓名（如中文名为“李明”请输入“Ming Li”）" prop="nameEn">
							    <el-input v-model="ruleForm.nameEn" placeholder="请输入个人英文姓名" clearable></el-input>
							  </el-form-item>
					  	</b-col>
					  	<b-col md="6" sm="12" lg="6">
							  <el-form-item label="性别" prop="sex">
							    <el-select v-model="ruleForm.sex" placeholder="请选择性别" clearable style="width: 100%;">
							      <el-option label="男" value="男"></el-option>
							      <el-option label="女" value="女"></el-option>
							      <el-option label="其他" value="其他"></el-option>
							    </el-select>
							  </el-form-item>
					  	</b-col>
					  	<b-col md="6" sm="12" lg="6">
					  		<el-form-item label="国内手机号" prop="phone">
							    <el-input v-model="ruleForm.phone" placeholder="请输入国内手机号" clearable></el-input>
							  </el-form-item>
					  	</b-col>
					  	<!-- <b-col md="6" sm="12" lg="6">
					  		
					  		
						  		
					  			
					  		
					  		<el-form-item label="国外手机号" prop="fphone">
							    <el-input v-model="ruleForm.fphone" placeholder="请输入国外手机号" clearable></el-input>
							  </el-form-item>
					  	</b-col> -->
					  	<b-col md="6" sm="12" lg="6">
					  		<el-form-item label="出生日期" prop="birthday">
							    <el-date-picker v-model="ruleForm.birthday" type="date" :editable="false" placeholder="请选择出生日期" value-format="yyyy-MM-dd" clearable style="width: 100%;"></el-date-picker>
							  </el-form-item>
					  	</b-col>
					  	<b-col md="6" sm="12" lg="6">
					  		<el-form-item label="邮箱" prop="uemail">
							    <el-input v-model="ruleForm.uemail" placeholder="请输入个人邮箱" clearable></el-input>
							  </el-form-item>
					  	</b-col>
					  	<!-- <b-col md="6" sm="12" lg="6">
					  		<el-form-item label="国籍" prop="nationality">
							    <el-input v-model="ruleForm.nationality" placeholder="请输入国籍" clearable></el-input>
							  </el-form-item>
					  	</b-col>
					  	<b-col md="6" sm="12" lg="6">
					  		<el-form-item label="微信号" prop="weixin">
							    <el-input v-model="ruleForm.weixin" placeholder="请输入个人微信号" clearable></el-input>
							  </el-form-item>
					  	</b-col> -->
					  	<!-- <b-col md="6" sm="12" lg="6">
					  		<el-form-item label="留学城市现居地邮编" prop="fpostcode">
							    <el-input v-model="ruleForm.fpostcode" placeholder="请输入留学城市现居地邮编" clearable></el-input>
							  </el-form-item>
					  	</b-col> -->
						
					  	<!-- <b-col md="6" sm="12" lg="6">
					  		<el-form-item label="留学城市现居地地址(英文) " prop="fpostcodeen">
							    <el-input v-model="ruleForm.fpostcodeen" placeholder="请输入留学城市现居地地址(英文)" clearable></el-input>
							  </el-form-item>
					  	</b-col> -->
						<b-col md="6" sm="12" lg="6">
							<el-form-item label="护照号码" prop="passport">
							    <el-input v-model="ruleForm.passport" placeholder="请输入护照号码" clearable></el-input>
							  </el-form-item>
						</b-col>
						<!-- <b-col md="6" sm="12" lg="6">
							<el-form-item label="请上传护照信息页照片" prop="passportimg"  ref="uploadPassPort">
								<el-upload
									class="avatar-uploader"
									:action="actionUrl"
									:show-file-list="false"
									:on-success="handleAvatarSuccess"
									:on-error="handleAvatarError"
									:before-upload="beforeAvatarUpload">
									<img v-if="imageUrl" :src="imageUrl" class="avatar">
									<i v-else class="el-icon-plus avatar-uploader-icon"></i>
								</el-upload>
								<div class="el-upload__tip">请上传png、jpg、bmp及jpeg格式图片或者PDF格式文件</div>
							</el-form-item>
						</b-col>
						<b-col md="6" sm="12" lg="6">
							<el-form-item label="请上传录取证明（offer/coe/cas/学生卡照片）" prop="offerimg" ref="uploadOfferimg">
							    <el-upload
							    	class="avatar-uploader"
							    	:action="actionUrl"
							    	:show-file-list="false"
							    	:on-success="handleAvatarSuccess2"
									:on-error="handleAvatarError2"
							    	:before-upload="beforeAvatarUpload2">
							    	<img v-if="imageUrl2" :src="imageUrl2" class="avatar">
							    	<i v-else class="el-icon-plus avatar-uploader-icon"></i>
							    </el-upload>
								<div class="el-upload__tip">请上传png、jpg、bmp及jpeg格式图片或者PDF格式文件</div>
							</el-form-item>
						</b-col>
						
						<b-col md="6" sm="12" lg="6">
							<el-form-item label="请上传签证" prop="visaimg" ref="uploadVisaimg">
							    <el-upload
							    	class="avatar-uploader"
							    	:action="actionUrl"
							    	:show-file-list="false"
							    	:on-success="handleAvatarSuccess3"
									:on-error="handleAvatarError3"
							    	:before-upload="beforeAvatarUpload3">
							    	<img v-if="imageUrl3" :src="imageUrl3" class="avatar">
							    	<i v-else class="el-icon-plus avatar-uploader-icon"></i>
							    </el-upload>
								<div class="el-upload__tip">请上传png、jpg、bmp及jpeg格式图片或者PDF格式文件</div>
							</el-form-item>
						</b-col> -->
					  </b-row>
					  
				  </el-collapse-item>
				  <el-collapse-item title="家庭信息" name="2">
				    <b-row>
					  	<b-col md="6" sm="12" lg="6">
					  		<el-form-item label="国内家庭住址（中文）" prop="addressich">
							    <el-input v-model="ruleForm.addressich" placeholder="请输入国内家庭住址(中文)" clearable></el-input>
							  </el-form-item>
					  	</b-col>
					  	<b-col md="6" sm="12" lg="6">
					  		<el-form-item label="国内家庭住址（英文）" prop="addressien">
							    <el-input v-model="ruleForm.addressien" placeholder="请输入国内家庭住址(英文)" clearable></el-input>
							  </el-form-item>
					  	</b-col>
					  	<!-- <b-col md="6" sm="12" lg="6">
					  		<el-form-item label="邮编" prop="postcode">
							    <el-input v-model="ruleForm.postcode" placeholder="请输入家庭住址邮编" clearable></el-input>
							  </el-form-item>
					  	</b-col> -->
					  	<b-col md="6" sm="12" lg="6">
					  		<el-form-item label="城市" prop="city">
							    <el-input v-model="ruleForm.city" placeholder="请输入国内所在城市" clearable></el-input>
							  </el-form-item>
					  	</b-col>
					  	<!-- <b-col md="6" sm="12" lg="6">
					  		<el-form-item label="座机号码" prop="telephone">
							    <el-input v-model="ruleForm.telephone" placeholder="请输入座机号码" clearable></el-input>
							  </el-form-item>
					  	</b-col> -->
					  </b-row>
				  </el-collapse-item>
				  <el-collapse-item title="担保人/紧急联系人信息" name="3">
				    <b-row>
					  	<b-col md="6" sm="12" lg="6">
					  		<el-form-item label="担保人(紧急联系人)姓名" prop="pname">
							    <el-input v-model="ruleForm.pname" placeholder="请输入担保人(紧急联系人)姓名" clearable></el-input>
							  </el-form-item>
					  	</b-col>
					  	<b-col md="6" sm="12" lg="6">
					  		<el-form-item label="与担保人(紧急联系人)的关系" prop="prelation">
					  			<el-select v-model="ruleForm.prelation" placeholder="请选择与担保人(紧急联系人)的关系" clearable style="width: 100%;">
							      <el-option label="父亲" value="父亲"></el-option>
							      <el-option label="母亲" value="母亲"></el-option>
							      <el-option label="其他" value="其他"></el-option>
							    </el-select>
							  </el-form-item>
					  	</b-col>
						
						<b-col md="6" sm="12" lg="6">
							  <el-form-item label="性别" prop="psex">
							    <el-select v-model="ruleForm.psex" placeholder="请选择性别" clearable style="width: 100%;">
							      <el-option label="男" value="男"></el-option>
							      <el-option label="女" value="女"></el-option>
							    </el-select>
							  </el-form-item>
						</b-col>
						<b-col md="6" sm="12" lg="6">
							<el-form-item label="担保人(紧急联系人)生日" prop="pbirthday">
							    <el-date-picker v-model="ruleForm.pbirthday" type="date" :editable="false" placeholder="请选择担保人(紧急联系人)生日" value-format="yyyy-MM-dd" clearable style="width: 100%;"></el-date-picker>
							  </el-form-item>
						</b-col>
						
					  	<b-col md="6" sm="12" lg="6">
					  		<el-form-item label="手机号" prop="pphone">
							    <el-input v-model="ruleForm.pphone" placeholder="请输入担保人(紧急联系人)手机号" clearable></el-input>
							  </el-form-item>
					  	</b-col>
					  	<b-col md="6" sm="12" lg="6">
					  		<el-form-item label="邮箱" prop="pemail">
							    <el-input v-model="ruleForm.pemail" placeholder="请输入担保人(紧急联系人)邮箱" clearable></el-input>
							  </el-form-item>
					  	</b-col>
					  	<!-- <b-col md="6" sm="12" lg="6">
					  		<el-form-item label="国内家庭住址" prop="paddress">
							    <el-input v-model="ruleForm.paddress" placeholder="请输入担保人(紧急联系人)家庭住址" clearable></el-input>
							  </el-form-item>
					  	</b-col>
					  	<b-col md="6" sm="12" lg="6">
					  		<el-form-item label="邮编" prop="ppostcode">
							    <el-input v-model="ruleForm.ppostcode" placeholder="请输入担保人(紧急联系人)所在地址邮编" clearable></el-input>
							  </el-form-item>
					  	</b-col> -->
					  </b-row>
				  </el-collapse-item>
				  <el-collapse-item title="留学学校信息" name="4">
				    <b-row>
					  	<b-col md="6" sm="12" lg="6">
					  		<el-form-item label="留学城市" prop="address">
							    <el-input v-model="ruleForm.address" placeholder="请输入留学城市" clearable></el-input>
							  </el-form-item>
					  	</b-col>
					  	<b-col md="6" sm="12" lg="6">
					  		<el-form-item label="留学学校（英文）" prop="abroadschoolen">
							    <el-input v-model="ruleForm.abroadschoolen" placeholder="请输入留学学校（英文）" clearable></el-input>
							  </el-form-item>
					  	</b-col>
					  	<b-col md="6" sm="12" lg="6">
					  		<el-form-item label="就读课程" prop="course">
							    <!--<el-input v-model="ruleForm.feducation"></el-input>-->
							    <el-select v-model="ruleForm.course" placeholder="请选择就读课程" clearable style="width: 100%;">
							      <el-option label="语言班" value="语言班"></el-option>
							      <el-option label="预科" value="预科"></el-option>
							      <el-option label="本科生" value="本科生"></el-option>
							      <el-option label="研究生" value="研究生"></el-option>
								  <el-option label="硕士" value="硕士"></el-option>
								  <el-option label="博士" value="博士"></el-option>
							    </el-select>
							  </el-form-item>
					  	</b-col>
					  	<b-col md="6" sm="12" lg="6">
					  		<el-form-item label="留学年级" prop="grade">
							    <!--<el-input v-model="ruleForm.fgrade"></el-input>-->
							    <el-select v-model="ruleForm.grade" placeholder="请选择留学年级" clearable style="width: 100%;">
							      <el-option label="1" value="1"></el-option>
							      <el-option label="2" value="2"></el-option>
							      <el-option label="3" value="3"></el-option>
							      <el-option label="4" value="4"></el-option>
							    </el-select>
							  </el-form-item>
					  	</b-col>
					  	<!-- <b-col md="6" sm="12" lg="6">
					  		<el-form-item label="留学专业（中文）" prop="fprofessional">
							    <el-input v-model="ruleForm.fprofessional" placeholder="请输入留学专业（中文）" clearable></el-input>
							  </el-form-item>
					  	</b-col> -->
					  	<b-col md="6" sm="12" lg="6">
					  		<el-form-item label="留学专业（英文）" prop="disciplineen">
							    <el-input v-model="ruleForm.disciplineen" placeholder="请输入留学专业（英文）" clearable></el-input>
							  </el-form-item>
					  	</b-col>
					  	<b-col md="6" sm="12" lg="6">
					  		<el-form-item label="学年制" prop="gradeyear">
							    <!--<el-input v-model="ruleForm.academic"></el-input>-->
							    <el-select v-model="ruleForm.gradeyear" placeholder="请选择学年制" clearable style="width: 100%;">
							      <el-option label="1" value="1"></el-option>
							      <el-option label="2" value="2"></el-option>
							      <el-option label="3" value="3"></el-option>
							      <el-option label="4" value="4"></el-option>
							    </el-select>
							  </el-form-item>
					  	</b-col>
					  	<!-- <b-col md="6" sm="12" lg="6">
					  		<el-form-item label="学生卡号码" prop="card">
							    <el-input v-model="ruleForm.card" placeholder="请输入学生卡号码" clearable></el-input>
							  </el-form-item>
					  	</b-col> -->
					  </b-row>
				  </el-collapse-item>
				  <el-collapse-item title="申请公寓信息" name="5">
				    <b-row>
					  	<!-- <b-col md="6" sm="12" lg="6">
					  		<el-form-item label="申请公寓名" prop="housename">
							    <el-input v-model="ruleForm.housename" placeholder="请输入申请公寓名" clearable></el-input>
							  </el-form-item>
					  	</b-col>
					  	<b-col md="6" sm="12" lg="6">
					  		<el-form-item label="房型" prop="roomname">
							    <el-input v-model="ruleForm.roomname" placeholder="请输入申请房型"  clearable></el-input>
							  </el-form-item>
					  	</b-col> -->
					  	<!-- <b-col md="6" sm="12" lg="6">
					  		<el-form-item label="起租日期 " prop="startdate">
							    
							    <el-date-picker :editable="false" v-model="ruleForm.startdate" type="date" value-format="yyyy-MM-dd" placeholder="选择起租日期" clearable style="width: 100%;"></el-date-picker>
							  </el-form-item>
					  	</b-col>
					  	<b-col md="6" sm="12" lg="6">
					  		<el-form-item label="结束日期" prop="enddate">
							    
							    <el-date-picker v-model="ruleForm.enddate" :editable="false" type="date" value-format="yyyy-MM-dd" placeholder="选择结束日期" clearable style="width: 100%;"></el-date-picker>
							  </el-form-item>
					  	</b-col>
					  	<b-col md="6" sm="12" lg="6">
					  		<el-form-item label="抵达日期" prop="arrivedate">
							    
							    <el-date-picker v-model="ruleForm.arrivedate" type="date" :editable="false" value-format="yyyy-MM-dd" placeholder="选择抵达日期" clearable style="width: 100%;"></el-date-picker>
							  </el-form-item>
					  	</b-col> -->
					  	<b-col md="6" sm="12" lg="6">
					  		<el-form-item label="付款周期（分期付/全额付）" prop="payPeriod">
							    <!--<el-input v-model="ruleForm.paycycle"></el-input>-->
							    <el-select v-model="ruleForm.payPeriod" placeholder="请选择付款周期" clearable style="width: 100%;">
							      <el-option label="分期付" value="1"></el-option>
							      <el-option label="全额付" value="2"></el-option>
							    </el-select>
							  </el-form-item>
					  	</b-col>
					  	<b-col md="6" sm="12" lg="6">
					  		<el-form-item label="付款方式（银行转帐/信用卡）" prop="payType">
							    <!--<el-input v-model="ruleForm.paytype"></el-input>-->
							    <el-select v-model="ruleForm.payType" placeholder="请选择付款方式" clearable style="width: 100%;">
							      <el-option label="银行转帐" value="1"></el-option>
							      <el-option label="信用卡" value="2"></el-option>
							    </el-select>
							  </el-form-item>
					  	</b-col>
					  </b-row>
					  <b-row>
				  		<b-col md="6" sm="12" lg="6">
					  		<el-form-item label="偏好需求（如果有特殊订房需求，请在这里告诉我们） " prop="remark">
							    <!--<el-input v-model="ruleForm.remark"></el-input>-->
							    <el-input
									  type="textarea"
									  :autosize="{ minRows: 4, maxRows: 6}"
									  placeholder="请输入您的要求"
									  v-model="ruleForm.remark">
									</el-input>
							  </el-form-item>
					  	</b-col>
				  	</b-row>
				  </el-collapse-item>
				</el-collapse>
				<el-form-item style="text-align: center;margin-top: 32px;">
			    <el-button :loading="buttonStatus" class="submitBtn" type="primary" @click="submitForm('ruleForm')">确认提交</el-button>
			  </el-form-item>
			</el-form>
		</b-container>
	</section>
</template>
<script>
	import $ from 'jquery';
	import { base } from '@/plugins/api.js'
	export default{
		head () {
		    return {
		      title: 'YIHOME,留学生租房,澳洲留学租房,英国留学租房',
		    }
		},
		data(){
			return {
				fullscreenLoading:false,
				actionUrl:'https://www.inyihome.com/uploaduntil/uploadImg',
				imageUrl: '',
				imageUrl2: '',
				imageUrl3: '',
				buttonStatus:false,
				activeNames: ['1'],
				ruleForm: {
					owner:undefined,
					
				},
        rules: {
          nameCh: [
            { required: true, message: '请输入个人中文姓名', trigger: 'blur' },
            { min: 1, max: 50, message: '长度最多50字符', trigger: 'blur' }
          ],
          nameEn: [
            { required: true, message: '请输入个人英文姓名', trigger: 'blur' },
            { min: 1, max: 50, message: '长度最多50字符', trigger: 'blur' }
          ],
          sex: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          phone: [
            { required: true, message: '请输入国内手机号', trigger: 'blur' },
            { min: 1, max: 50, message: '长度最多50字符', trigger: 'blur' }
          ],
          fphone: [
            //{ required: true, message: '请输入国外手机号', trigger: 'blur' },
            { min: 1, max: 50, message: '长度最多50字符', trigger: 'blur' }
          ],
          birthday: [
            {  required: true, message: '请选择出生日期', trigger: 'change' }
          ],
          uemail: [
            
			
			{ required: true, message: '请输入邮箱', trigger: 'blur' },
		    { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
          ],
          
		  passport: [
            { required: true, message: '请输入护照号', trigger: 'blur' },
            { min: 1, max: 50, message: '长度最多50字符', trigger: 'blur' }
          ],
		  
		  
		  
          //家庭信息
          
          
          addressich: [
            { required: true, message: '请输入国内家庭住址（中文）', trigger: 'blur' },
            { min: 1, max: 50, message: '长度最多50字符', trigger: 'blur' }
          ],
          addressien: [
            { required: true, message: '请输入国内家庭住址（英文）', trigger: 'blur' },
            { min: 1, max: 200, message: '长度最多200字符', trigger: 'blur' }
          ],
         
          city: [
            { required: true, message: '请输入国内所在城市', trigger: 'blur' },
            { min: 1, max: 50, message: '长度最多50字符', trigger: 'blur' }
          ],
          
         
          //担保人信息
          pname: [
            { required: true, message: '请输入担保人(紧急联系人)姓名', trigger: 'blur' },
            { min: 1, max: 50, message: '长度最多50字符', trigger: 'blur' }
          ],
         	prelation: [
         		{ required: true, message: '请选择与担保人(紧急联系人)的关系', trigger: 'change' }
          ],
		  
		  psex: [
		    { required: true, message: '请选择性别', trigger: 'change' }
		  ],
          pphone: [
         		{ required: true, message: '请输入担保人(紧急联系人)手机号', trigger: 'blur' },
            { min: 1, max: 50, message: '长度最多50字符', trigger: 'blur' }
          ],
          pemail: [
         		{ required: true, message: '请输入担保人(紧急联系人)邮箱', trigger: 'blur' },
			
			{ type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
          ],
		  pbirthday:[
			  { required: true, message: '请选择担保人(紧急联系人)生日', trigger: 'change' }
		  ],
          
          //留学学校信息
		  address: [
		    { required: true, message: '请输入请输入留学城市', trigger: 'blur' },
		    { min: 1, max: 50, message: '长度最多50字符', trigger: 'blur' }
		  ],
		  abroadschoolen: [
		    { required: true, message: '请输入留学学校（英文）', trigger: 'blur' },
		    { min: 1, max: 200, message: '长度最多200字符', trigger: 'blur' }
		  ],
          
		  course: [
		           		{ required: true, message: '请选择就读课程', trigger: 'change' }
		  ],
		  
		  grade: [
		           		{ required: true, message: '请选择留学年级', trigger: 'change' }
		  ],
		  
		  gradeyear: [
		           		{ required: true, message: '请选择学年制', trigger: 'change' }
		  ],
		  disciplineen: [
		    { required: true, message: '请输入留学专业（英文）', trigger: 'blur' },
		    { min: 1, max: 200, message: '长度最多200字符', trigger: 'blur' }
		  ],
		  
		  
          //申请公寓信息
          
          
          payPeriod: [
         		{ required: true, message: '请选择付款周期', trigger: 'change' }
          ],
          payType: [
         		{ required: true, message: '请选择付款方式', trigger: 'change' }
          ],
          remark: [
            //{ required: true, message: '请输入您的其他要求', trigger: 'blur' },
            { min: 1, max: 200, message: '长度最多200字符', trigger: 'blur' }
          ],
        }
			}
		},
		mounted() {
			console.log(this.$route.query.userId)
			if(this.$route.query.userId){
				this.ruleForm.userId = this.$route.query.userId;
				this.$request.getLinkUser(this.$route.query.userId).then(res=>{
					if(res.code===200){
						this.ruleForm = res.data.user
						
						
						if(res.data.guarantee.length!=0){
							var currentLength = res.data.guarantee.length-1;
							var currentObject = res.data.guarantee[currentLength]
							
							this.ruleForm.pname = currentObject.name;
							this.ruleForm.prelation = currentObject.relation
							this.ruleForm.pbirthday = currentObject.birthday
							this.ruleForm.pphone = currentObject.phone
							this.ruleForm.pemail = currentObject.email
							this.ruleForm.psex = currentObject.sex
						}
						
						
					}
				})
			}
			if(!this.$route.query.uuid){
				this.$confirm('当前连接已经失效', '提示', {
				  confirmButtonText: '确定',
				  type: 'error',
				  showClose:false,
				  showCancelButton:false,
				  closeOnClickModal:false,
				  closeOnPressEscape:false,
				}).then(() => {
				  window.location.href="https://www.inyihome.com";
				})
			}else{
				// this.$request.linkAdd({uuid:this.$route.query.uuid}).then(res=>{
					
				// }).catch(e=>{
					
				// })
			}
			
		},
		created(){
			
			
			console.log(this.$route.query.key)
			if(this.$route.query.key){
				this.ruleForm.owner = this.$route.query.key;
			}else{
				this.ruleForm.owner = 1;
			}
			
			
			
			
			
			/* if(process.browser){
				if (window.location.host === 'www.inyihome.com') {
					this.actionUrl = 'https://www.inyihome.com/uploaduntil/uploadImg'
				}
				if (window.location.host === 'www.inyihome.com:10045') {
					this.actionUrl = 'https://www.inyihome.com:10045/uploaduntil/uploadImg'
				}
			} */
		},
		methods:{
			// handleAvatarSuccess(res, file) {
			// 	this.fullscreenLoading = false;
			// 	if(file.raw.type.toLowerCase() == 'application/pdf'){
			// 		this.imageUrl ='https://www.inyihome.com/img/pdf.svg'
			// 	}else{
			// 		this.imageUrl = URL.createObjectURL(file.raw);
			// 	}
				
			// 	this.$refs.uploadPassPort.clearValidate();
			// 	this.ruleForm.passportimg = res.data[0];
			// },
			// beforeAvatarUpload(file) {
			// 	const isaccept 	= file.type.toLowerCase() === 'image/jpeg';
			// 	const isaccept2 = file.type.toLowerCase() === 'image/jpg';
			// 	const isaccept3 = file.type.toLowerCase() === 'image/png';
			// 	const isaccept4 = file.type.toLowerCase() === 'image/bmp';
			// 	const isaccept5 = file.type.toLowerCase() === 'application/pdf';
			// 	const isLt2M 	= file.size / 1024 / 1024 < 20;
				
			// 	if (!isaccept && !isaccept2 && !isaccept3 && !isaccept4 && !isaccept5) {
			// 		this.$message.error('请上传png、jpg、bmp、jpeg格式图片或者PDF格式文件');
			// 		return false;
			// 	}
			// 	if (!isLt2M) {
			// 		this.$message.error('上传的文件最大不能超过20M！');
			// 		return false;
			// 	}
			// 	var backP = isaccept||isaccept2||isaccept3||isaccept4||isaccept5 && isLt2M;
			// 	this.fullscreenLoading = true;
			// 	return backP;
			// },
			// handleAvatarError(){
			// 	this.fullscreenLoading = false;
			// 	this.imageUrl = 'https://www.inyihome.com/newStatic/icon_uploadError.png';
			// 	this.$message.error('文件上传失败');
			// 	this.ruleForm.passportimg = '';
			// },
			// handleAvatarSuccess2(res, file) {
			// 	this.fullscreenLoading = false;
			// 	if(file.raw.type.toLowerCase() == 'application/pdf'){
			// 		this.imageUrl2 ='https://www.inyihome.com/img/pdf.svg'
			// 	}else{
			// 		this.imageUrl2 = URL.createObjectURL(file.raw);
			// 	}
			// 	this.$refs.uploadOfferimg.clearValidate();
			// 	this.ruleForm.offerimg = res.data[0];
			// },
			// beforeAvatarUpload2(file) {
			// 	const isaccept 	= file.type.toLowerCase() === 'image/jpeg';
			// 	const isaccept2 = file.type.toLowerCase() === 'image/jpg';
			// 	const isaccept3 = file.type.toLowerCase() === 'image/png';
			// 	const isaccept4 = file.type.toLowerCase() === 'image/bmp';
			// 	const isaccept5 = file.type.toLowerCase() === 'application/pdf';
			// 	const isLt2M 	= file.size / 1024 / 1024 < 20;
				
			// 	if (!isaccept && !isaccept2 && !isaccept3 && !isaccept4 && !isaccept5) {
			// 		this.$message.error('请上传png、jpg、bmp、jpeg格式图片或者PDF格式文件');
			// 		return false;
			// 	}
			// 	if (!isLt2M) {
			// 		this.$message.error('上传的文件最大不能超过20M！');
			// 		return false;
			// 	}
			// 	var backP = isaccept||isaccept2||isaccept3||isaccept4||isaccept5 && isLt2M;
			// 	this.fullscreenLoading = true;
			// 	return backP;
			// },
			// handleAvatarError2(){
			// 	this.fullscreenLoading = false;
			// 	this.imageUrl2 = 'https://www.inyihome.com/newStatic/icon_uploadError.png';
			// 	this.$message.error('文件上传失败');
			// 	this.ruleForm.offerimg = '';
			// },
			
			
			// handleAvatarSuccess3(res, file) {
			// 	this.fullscreenLoading = false;
			// 	if(file.raw.type.toLowerCase() == 'application/pdf'){
			// 		this.imageUrl3 ='https://www.inyihome.com/img/pdf.svg'
			// 	}else{
			// 		this.imageUrl3 = URL.createObjectURL(file.raw);
			// 	}
			// 	this.$refs.uploadVisaimg.clearValidate();
			// 	this.ruleForm.visaimg = res.data[0];
			// },
			// beforeAvatarUpload3(file) {
			// 	const isaccept 	= file.type.toLowerCase() === 'image/jpeg';
			// 	const isaccept2 = file.type.toLowerCase() === 'image/jpg';
			// 	const isaccept3 = file.type.toLowerCase() === 'image/png';
			// 	const isaccept4 = file.type.toLowerCase() === 'image/bmp';
			// 	const isaccept5 = file.type.toLowerCase() === 'application/pdf';
			// 	const isLt2M 	= file.size / 1024 / 1024 < 20;
				
			// 	if (!isaccept && !isaccept2 && !isaccept3 && !isaccept4 && !isaccept5) {
			// 		this.$message.error('请上传png、jpg、bmp、jpeg格式图片或者PDF格式文件');
			// 		return false;
			// 	}
			// 	if (!isLt2M) {
			// 		this.$message.error('上传的文件最大不能超过20M！');
			// 		return false;
			// 	}
			// 	var backP = isaccept||isaccept2||isaccept3||isaccept4||isaccept5 && isLt2M;
			// 	this.fullscreenLoading = true;
			// 	return backP;
			// },
			// handleAvatarError3(){
			// 	this.fullscreenLoading = false;
			// 	this.imageUrl3 = 'https://www.inyihome.com/newStatic/icon_uploadError.png';
			// 	this.$message.error('文件上传失败');
			// 	this.ruleForm.visaimg = '';
			// },
			
			
			handleChange(val) {
				console.log(val);
			},
			submitForm(formName) {
				// this.dataSubmit();
				//
				this.$refs[formName].validate((valid) => {
				  if (valid) {

					this.dataSubmit();
				  } else {
					  setTimeout(()=>{
					  	//console.log($('.is-error'))
					  	$('html, body').animate({
					  	 	scrollTop: $('.is-error').offset().top
					  	}, 500)
					  },100)
					 console.log(this.ruleForm)
					this.$message.error('请输入以上必填信息');
					return false;
				  }
				});
			},
			dataSubmit(){
				this.buttonStatus = true;
				var parmasData ={
					users:this.ruleForm,
					usersGuarantee:{
						name:this.ruleForm.pname,
						relation:this.ruleForm.prelation,
						phone:this.ruleForm.pphone,
						email:this.ruleForm.pemail,
						birthday:this.ruleForm.pbirthday,
						sex:this.ruleForm.psex
					},
					uuid:this.$route.query.uuid
				}
				// var baseurl = base()
				// console.log(baseurl,99999)
				
				
				// $.ajax({
				// 	url:baseurl+'/user/users/linkAdd',
				// 	//dataType: 'jsonp',
				// 	type:"POST",
				// 	contentType: "application/json; charset=utf-8",
					
				// 	data:JSON.stringify(parmasData),
				// 	success: function(data){
				// 	    //处理data数据
				// 		console.log(data)
				// 	},
				// 	error:function(err){
				// 		alert(err)
				// 		console.log(err)
				// 	}
				// })
				
				
				
				this.$request.linkAdd(parmasData).then(res=>{
					this.buttonStatus = false;
					if(res.code===200){
						this.$confirm('数据提交成功', '提示', {
						  confirmButtonText: '确定',
						  type: 'success',
						  showClose:false,
						  showCancelButton:false,
						  closeOnClickModal:false,
						  closeOnPressEscape:false,
						}).then(() => {
						  window.location.href="https://www.inyihome.com";
						})
					}else{
						this.$message.error('数据提交失败，请检查网络或联系客服');
					}
				}).catch(e=>{
					alert(e)
					console.log(e)
					this.buttonStatus = false;
					this.$message.error('网络错误，数据提交失败，请联系您的销售顾问');
				})
			}
		}
	}
</script>
<style scoped="scoped">
	#applyHouse{
		width: 100%;
		height: 100%;
		padding-top: 64px;
    background-color: #F5F6FA;
    padding-bottom: 32px;
	}
	.applyWrapper{
		background-color: #ffffff;
    border-radius: 8px;
    box-shadow: -10px 9px 21px 0 rgba(128,152,213,0.07);
    padding: 20px;
	}
	.applyTitle{
		font-size: 36px;
    color: #2C2E2F;
    letter-spacing: 0;
    font-weight: 300;
    padding-top: 15px;
    margin-bottom: 36px;
    text-align: center;
	}
	.applyWrapper .el-collapse-item{
    background: #FFFFFF;
    box-shadow: -10px 9px 21px 0 rgba(128, 152, 213, 0.07);
    border-radius: 8px;
    border: 0px;
    margin: 11px 0px;
	}
	.el-collapse{
		border: none;
	}
	.submitBtn{
		width: 140px;
		background: #3B44AC;
		border-color: #3B44AC;
		outline: none;
	}
	.submitBtn:hover{
		transform: translateY(-1px);
	}
	@media only screen and (max-width: 768px) {
		.applyTitle{
			font-size: 30px;
		}
		#applyHouse{
			padding: 0;
		}
		.applyWrapper{
			-height: 100vh;
		}
	}
	
	@media only screen and (max-width: 376px) {
		
		
	}
	
	
</style>
<style>
	.el-input.is-active .el-input__inner, .el-input__inner:focus{
		border-color: #3B44AC;
	}
	.el-select .el-input.is-focus .el-input__inner{
		border-color: #3B44AC;
	}
	.el-date-table td.today span,.el-date-table td.available:hover{
		color: #3B44AC;
	}
	.el-date-table td.available:hover{
		font-weight: 700;
	}
	.el-date-table td.current:not(.disabled) span{
		background-color: #3B44AC;
	}
	.avatar-uploader .el-upload {
	    border: 1px dashed #d9d9d9;
	    border-radius: 6px;
	    cursor: pointer;
	    position: relative;
	    overflow: hidden;
	}
	.avatar-uploader .el-upload:hover {
	    border-color: #3B44AC;
	}
	
	.avatar-uploader-icon {
	    font-size: 28px;
	    color: #8c939d;
	    width: 178px;
	    height: 178px;
	    line-height: 178px;
	    text-align: center;
	}
	.avatar {
	    width: 178px;
	    height: 178px;
	    display: block;
	}
	.applyWrapper .el-collapse-item__header{
		background: transparent;
		font-family: PingFang SC;
		font-size: 24px;
		color: #2C2E2F;
		letter-spacing: 0;
		margin: 0px 25px 0px 25px;
		line-height: 72px;
		font-weight: 400;
		height: 72px;
		border-bottom: none;
	}
	.applyWrapper .el-collapse-item__content{
		margin: 0 25px;
		padding-bottom: 72px;
		padding-top: 12px;
		border-top: 1px solid rgb(230,230,230);
	}
	@media only screen and (max-width: 768px) {
		.applyWrapper .el-collapse-item__header{
			font-size: 20px;
		}
		.el-message-box{
			width: 90%;
		}
	}
	@media only screen and (max-width: 376px) {
		.applyWrapper .el-collapse-item__header{
			font-size: 16px;
		}
		
	}
</style>