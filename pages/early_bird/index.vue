<template>
	<b-container fluid v-loading.fullscreen.lock="fullscreenLoading">
		<b-container>
			<div style="display: none;">
				<img src="https://inyihome.com/early_logo.png" alt="YIHOME">
			</div>
			
			<div class="form-header__banner" style="text-align: center; background-color: rgb(40, 117, 232);margin: 0 -15px;">
				<img src="~assets/images/early_bird2.jpg" alt="header image">
			</div>
			<div class="form-header__container">
				<div class="form-header__title">全球定制租房基本需求信息确认-Channel</div>
				<div class="field__description">
					<p><span><span>请您说说对房源的简单需求，顾问来为您看看适合的房源哦~</span></span></p>

					<p>
						<span><span>Please tell us your rental requirements, we will
								see what we can do for you.</span></span></p>
				</div>
			</div>
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="early_ruleForm" label-position="top">
				<el-form-item label="😘您从什么渠道了解到我们的呢？_How you find us?" prop="channel">
					<p class="label_info">可多选哦</p>
					<el-select v-model="ruleForm.channel" multiple placeholder="请选择">
						<el-option label="百度搜索" value="百度搜索"></el-option>
						<el-option label="谷歌搜索" value="谷歌搜索"></el-option>
						<el-option label="微博" value="微博"></el-option>
						<el-option label="知乎" value="知乎"></el-option>
						<el-option label="豆瓣" value="豆瓣"></el-option>
						<el-option label="亿忆网" value="亿忆网"></el-option>
						<el-option label="今日澳洲" value="今日澳洲"></el-option>
						<el-option label="微信朋友圈" value="微信朋友圈"></el-option>
						<el-option label="他人推荐" value="他人推荐"></el-option>
						<el-option label="微信群" value="微信群"></el-option>
						<el-option label="新闻报道" value="新闻报道"></el-option>
						<el-option label="今日头条" value="今日头条"></el-option>
						<el-option label="其他渠道" value="其他渠道"></el-option>
					</el-select>
				</el-form-item>
				
				<el-form-item label="求租国家" prop="countryName">
					<p class="label_info"></p>
					<el-select v-model="ruleForm.countryName" placeholder="请选择">
						<el-option label="英国" value="英国"></el-option>
						<el-option label="美国" value="美国"></el-option>
						<el-option label="澳洲" value="澳洲"></el-option>
						
					</el-select>
				</el-form-item>
				
				<el-form-item label="1️⃣求租城市英文名称_City" prop="city">
					<el-input v-model="ruleForm.city" maxlength="200" clearable placeholder="请输入城市英文名称"></el-input>
					<!-- <el-radio-group v-model="ruleForm.city">
						<el-radio label="墨尔本"></el-radio>
						<el-radio label="悉尼"></el-radio>
						<el-radio label="布里斯班"></el-radio>
						<el-radio label="阿德莱德"></el-radio>
						<el-radio label="其他"></el-radio>
					</el-radio-group> -->
				</el-form-item>
				
				<el-form-item label="求租城市中文名称" prop="cityEn">
					<el-input v-model="ruleForm.cityEn" maxlength="100" clearable placeholder="请输入城市中文名称"></el-input>
					
				</el-form-item>
				
				<el-form-item label="求租区域" prop="area">
					<p class="label_info">请填写希望入住的区域名称，如：Kingsford、Melbourne City、Caulfield、Bristol city等</p>
					<el-input v-model="ruleForm.area" maxlength="100" clearable></el-input>
				</el-form-item>
				<el-form-item label="2️⃣房型_Property Types" prop="propertytype">
					<p class="label_info">请选择至少一种房型，可多选</p>
					<el-select v-model="ruleForm.propertytype" multiple placeholder="请选择">
						<el-option label="公寓_Apartment/flat" value="公寓_Apartment"></el-option>
						<el-option label="别墅_House" value="别墅_House"></el-option>
						<!-- <el-option label="联排公寓_Townhouse" value="联排公寓_Townhouse"></el-option>
						<el-option label="单人套房_Studio" value="单人套房_Studi"></el-option>
						<el-option label="单元房_Unit" value="单元房_Unit"></el-option> -->
						<el-option label="学生公寓_Student Housing" value="学生公寓_Student Housing"></el-option>
						<el-option label="其他房型_Other" value="其他房型_Other"></el-option>

					</el-select>
				</el-form-item>


				<el-form-item label="3️⃣卧室数目_Room Number" prop="roomnumber">
					<p class="label_info">请选择至少一种卧室数目，可多选</p>
					<el-checkbox-group v-model="ruleForm.roomnumber">
						<el-checkbox label="一室" name="一室"></el-checkbox>
						<el-checkbox label="两室" name="两室"></el-checkbox>
						<el-checkbox label="三室" name="三室"></el-checkbox>
						<el-checkbox label="四室" name="四室"></el-checkbox>
						<el-checkbox label="五室或以上" name="五室或以上"></el-checkbox>
					</el-checkbox-group>
				</el-form-item> 

				<el-form-item label="4️⃣卫浴数目_Bathroom Number" prop="bathroomnumber">
					<p class="label_info">请选择至少一种卫浴数目，可多选</p>
					<el-checkbox-group v-model="ruleForm.bathroomnumber">
						<el-checkbox label="一卫浴" name="一卫浴"></el-checkbox>
						<el-checkbox label="两卫浴" name="两卫浴"></el-checkbox>
						<el-checkbox label="三卫浴" name="三卫浴"></el-checkbox>
						<el-checkbox label="四卫浴及以上" name="四卫浴及以上"></el-checkbox>
					</el-checkbox-group>
				</el-form-item> 
				
				<el-form-item label="5️⃣每周租金预算_Weekly Budget" prop="weeklybudget">
					<p class="label_info">单位：当地货币单位，请填写<span style="color: #fb5058;">周租金</span>数目，可写租金区间，如：200、200-300；</p>
					<el-input v-model="ruleForm.weeklybudget" maxlength="100" clearable></el-input>
				</el-form-item>
				

				<el-form-item label="6️⃣期望入住时间_Expected Moing-in Date" prop="expecteddate">
					<el-date-picker v-model="ruleForm.expecteddate" :editable="false" type="date" value-format="yyyy-MM-dd" placeholder="选择日期" clearable ></el-date-picker>
				</el-form-item>

				<el-form-item label="7️⃣【选填】是否需要家具电器？_Do you need Furniture?" prop="furniture">
					<el-radio-group v-model="ruleForm.furniture">
						<el-radio label="需要_Yes"></el-radio>
						<el-radio label="不需要_No"></el-radio>
					</el-radio-group>
				</el-form-item>

				<el-form-item label="8️⃣如何联系您？（可填写微信或手机号）_Contact" prop="contact">
					<el-input v-model="ruleForm.contact" maxlength="100" clearable></el-input>
				</el-form-item>

				<el-form-item label="9️⃣您的姓名 _Name" prop="name">
					<el-input v-model="ruleForm.name" maxlength="100" clearable></el-input>
				</el-form-item>


				<el-form-item label="🔟【选填】其它任何补充要求_Any Note?" prop="anynote">
					<el-input type="textarea" v-model="ruleForm.anynote" maxlength="100" :autosize="{ minRows: 4, maxRows: 6}"></el-input>
				</el-form-item>
				<el-form-item class="early_btn_wrapper">
					<el-button :loading="buttonStatus" type="primary" @click="submitForm('ruleForm')">提交</el-button>
				</el-form-item>
			</el-form>
		</b-container>
	</b-container>
</template>

<script>
	import $ from 'jquery';
	export default {
		layout: 'activity',
		head() {
			return {
				title: '澳洲定制租房基本需求信息确认-Channel',
				meta: [{
						hid: 'description',
						name: 'description',
						content: '为澳洲定制租房基本需求信息确认-Channel提交数据。请您说说对房源的简单需求，顾问来为您看看适合的房源哦~ Please tell us you...'
					},

					{
						name: '我的姓名',
						content: '这里是名字的内容的'
					},

					{
						'property': 'og:url',
						content: 'https://www.inyihome.com/activity/early_bird'
					},
					{
						'property': 'og:type',
						content: 'webpage'
					},
					{
						'property': 'og:title',
						content: '澳洲定制租房基本需求信息确认-Channel'
					},
					{
						'property': 'og:description',
						content: '为澳洲定制租房基本需求信息确认-Channel提交数据。请您说说对房源的简单需求，顾问来为您看看适合的房源哦~ Please tell us you...'
					},
					{
						'property': 'og:image',
						content: 'https://inyihome.com/early_logo.png'
					},
				]
			}
		},
		data() {
			return {
				buttonStatus:false,
				fullscreenLoading:false,
				ruleForm: {
					channel: [],
					countryName:'',
					city: '',
					cityEn:'',
					area: '',
					propertytype: [],
					roomnumber: [],
					bathroomnumber: [],
					weeklybudget: '',
					expecteddate: '',
					furniture:'',
					contact:'',
					anynote:'',
					name:'',
					userid:this.$route.query.tokenId?this.$route.query.tokenId:''
				},
				rules: {
					channel:[
						{ required: true, message: '请选择此项', trigger: 'change' }
					],
					countryName:[
						{ required: true, message: '请选择求租国家', trigger: 'change' }
					],
					city: [
						{required: true, message: '请选择求租城市', trigger: 'change' }
					],
					area :[
						{ required: true, message: '请填写此项', trigger: 'blur' },
					],
					propertytype:[
						{ required: true, message: '请选择此项', trigger: 'change' }
					],
					roomnumber: [
						{ type: 'array', required: true, message: '请至少选择一项', trigger: 'change' }
					],
					bathroomnumber: [
						{ type: 'array', required: true, message: '请至少选择一项', trigger: 'change' }
					],
					weeklybudget :[
						{ required: true, message: '请填写每周租金预算', trigger: 'blur' },
					],
					expecteddate: [
						{ required: true, message: '请选择日期', trigger: 'change' }
					],
					// furniture: [
					// 	{ required: true, message: '请选择活动资源', trigger: 'change' }
					// ],
					contact:[
						{ required: true, message: '请填写您的微信或手机号', trigger: 'blur' },
					],
					name:[
						{ required: true, message: '请填写您的姓名', trigger: 'blur' },
					]
				}
			}
		},
		created() {
			console.log(this.$route.query.tokenId)
		},
		methods:{
			submitForm(formName){
				console.log(this.ruleForm)
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.buttonStatus = true;
						this.fullscreenLoading = true;
						console.log(this.ruleForm)
						this.ruleForm.channel = this.ruleForm.channel.join(',');
						this.ruleForm.propertytype = this.ruleForm.propertytype.join(',');
						this.ruleForm.roomnumber = this.ruleForm.roomnumber.join(',');
						this.ruleForm.bathroomnumber = this.ruleForm.bathroomnumber.join(',');
						
						this.$request.earlyBirdSubmit(this.ruleForm).then(res=>{
							this.buttonStatus = false;
							this.fullscreenLoading = false;
							if(res){
								this.$alert('数据提交成功', '信息', {
									confirmButtonText: '确定',
									type:'success',
									callback: action => {
										window.location.href = 'https://www.inyihome.com'
									}
								});
							}else{
								this.$alert('数据提交失败', '信息', {
									confirmButtonText: '确定',
									type:'error',
									callback: action => {
										
									}
								});
							}
						}).catch(e=>{
							this.fullscreenLoading = false;
							this.buttonStatus = false;
							this.$alert('网络错误，数据提交失败', '信息', {
								confirmButtonText: '确定',
								type:'error',
								callback: action => {
									
								}
							});
						})
						
					} else {
						
						console.log(this.ruleForm)
						
						
						setTimeout(()=>{
							//console.log($('.is-error'))
							$('html, body').animate({
							 	scrollTop: $('.is-error').offset().top
							}, 500)
						},100)
						//console.log('error submit!!');
						return false;
					}
				});
			},
			
		}
	}
</script>

<style scoped="scoped">
	.container-fluid {
		padding: 0;
		min-height: 100%;
		background-image: url(~assets/images/early_bird_bg.png);
		background-position: top center;
		background-attachment: fixed;
		background-size: cover;
		background-repeat: no-repeat;
		padding-top: 30px;
		padding-bottom: 30px;
	}

	.container {
		max-width: 700px;
		background-color: rgb(255, 255, 255);
		border-color: rgba(255, 255, 255, 0);
		border-width: 0px;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .2);
	}

	.form-header__container {
		padding: 25px 30px 10px;
	}

	.form-header__title {
		font-size: 20px;
		line-height: 30px;
		font-weight: normal;
		color: rgb(4, 35, 31);
	}

	.field__description {
		word-break: break-word;
		color: #666;
		max-width: 100%;
		-overflow: auto;
	}

	.field__description p {
		color: #000080;
		font-size: 16px;
		line-height: 20px;
	}

	.early_btn_wrapper {
		padding: 28px;
		text-align: center;
	}
	.early_btn_wrapper button{
		width: 140px;
		outline: none;
		background-color: #3B44AC;
		border-color: #3B44AC;
	}
	.label_info {
		color: #3B44AC;
		font-weight: bolder;
		font-size: 14px;
		line-height: 17px;
	}
	@media only screen and (max-width: 768px) {
		.form-header__container{
			padding: 25px 0 10px;
		}
		.container-fluid{
			padding-left: 15px;
			padding-right: 15px;
		}
	}
	@media only screen and (max-width: 376px) {
		
	}
</style>
<style>
	.early_ruleForm .el-input {
		width: 320px;
	}

	.early_ruleForm .el-form-item__label {
		margin-bottom: 0;
		padding-bottom: 0;
		font-size: 14px;
		font-weight: bold;
		color: rgb(4, 35, 31);
	}
	@media only screen and (max-width: 768px) {
		.early_ruleForm .el-form-item__label{
			font-size: 13px;
		}
		.el-message-box{
			width: 344px;
		}
	}
</style>
