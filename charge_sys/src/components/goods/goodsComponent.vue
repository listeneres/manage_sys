<template>
	<div id="listens">
    <div class="ti">
      <tr>
      <th width="150px" id="storage" class="hidden">
          <select class="text-input form-control" id="editStorage"></select>
          </th>
          <th width="150px" id="tagGoods">
          <select class="text-input form-control" id="editTagGoods">
            <option value="selectTagGoods">所有标签</option>
            <option value="C597504C-4CF8-4EA9-94DB-CB69DC814FE2">爆品 (0)</option>
            <option value="43515FB3-8D78-4203-BED2-7A4119972FCE">新品 (0)</option>
            <option value="26B026AF-7764-402D-87E0-F99470F943CB">清货 (0)</option>
            <option value="42F934B3-6B57-4FF1-A2A4-66C7B8B8AD6A">不管库存 (0)</option>
          </select>
          </th>
        <th width="60px">
          <button type="button" class="btn btn-link btn-sm" data-toggle="tooltip" title="高级筛选" id="goodsFilter" aria-label="Left Align"><i class=""></i>&nbsp;开启筛选</button>
        </th>
        <!-- 按钮 -->
        <th class="goods-content-top">
          <div class="btn-group" role="group">
            <button id="btnAdd" type="button" class="btn btn-default btn-sm" data-toggle="tooltip" title="新增" @click="addGoods();" aria-label="Left Align">
              <span class="" aria-hidden="true"></span> 新增
            </button>

            <button id="btnDeletd" type="button" class="btn btn-default btn-sm" data-toggle="tooltip" title="删除" @click="delGoods();" aria-label="Left Align" >
              <span class="" aria-hidden="true"></span> 删除
            </button>
            <button id="btnDeletd" type="button" class="btn btn-default btn-sm" data-toggle="tooltip" title="编辑" @click="changeGoods();" aria-label="Left Align" >
              <span class="" aria-hidden="true"></span> 编辑你选中的一条数据
            </button>
          </div>
        </th>

        <th width="180px">
          <div class="input-group input-group-sm">
            <input id="searchText" type="text" class="form-control" placeholder="请输入搜索条件..." @change='search()' />
            <span class="input-group-btn">
              <button class="btn btn-primary" type="button" @Click="doSearch();" id="btnSearch">
                <span class="">。</span>
              </button>
            </span>
          </div>
        </th>
        <th>
          <div class="spaceW5"></div>
        </th>
      </tr>  
    </div>
    <div class="con">
      <thead>
        <tr>
         <th><input type="checkbox" @click='all()' /></th>
         <th  v-for="(value,key) in datas[0]">{{key}}</th>
       </tr>
     </thead>
     <tbody>
      <tr v-for="(value,key1) in datas">
        <td><input type="checkbox" /></td>
        <td class="twInput" v-for='(name,key2) in value' :name=name><input type="text" :value=name></td>
      </tr>
      <tr  id="button">
          <td v-for='(item,index) in pages'><input type="button" name="" class="bb" :value="index+1" @click="click()"/></td>
        </tr>
    </tbody>
  </div>
</div>
</template>

<script type="text/javascript">
  import $ from 'jquery'
  import {mapGetters, mapActions} from "vuex";
  export default {
    data: function(){
      return {
      	value:1,
        pageNum:1
      }
    },

    methods:{	
     ...mapActions(["delGoods","addGoods","save","changeGoods","all","click"]),
      loginBtn: function() {
        console.log(this.userName, this.psw, this.code)
        this.isLogin = false;
        this.hasLogin = true
        var obj = {
          userName: this.userName,
          psw: this.psw,
          code: this.code
        }
        login(obj)
        this.isLogin = false;
        this.hasLogin = true
      },
       all:function(){
        try {
         this.$store.dispatch("all" )
       }catch(error) {
         alert(error)
       }
     },
      addGoods(){
        this.$store.dispatch("addGoods")
        this.$store.dispatch("render")
      },
      delGoods:function(){
        try {
          this.$store.dispatch("delGoods" )
        }catch(error) {
          alert(error)
        }
      },
      click(){ 
                var self = this;
           $('#button')[0].onclick=function(ev){
               var ev = ev || window.event;
                var target = ev.target || ev.srcElement;
            var pageNum = target.value;
            self.$store.dispatch("render",pageNum)
          }
      },
      save(){
        var arr=JSON.stringify(this.datas[0]).replace('{','').replace('}','').split(',')

        this.$store.dispatch("save",arr)
      },
      closeWin(){
        try {
          $('.model').hide()
        }catch(error) {
          alert(error)
        }
      },
      doSearch(){
        try {
          var serMessage =  $('#searchText').val()
          this.$store.dispatch("doSearch",serMessage)
        }catch(error) {
          alert(error)
        } 
      }
    },
    changeGoods:function(){
      try {
        this.$store.dispatch("changeGoods" )
      }catch(error) {
        alert(error)
      }
   },
   computed: mapGetters(['datas','pages']),
   created(){
    try {
     this.$store.dispatch("render")
   }catch(error) {
     alert(error)
   }
 },
}
</script>

<style lang="css">
  @import url("./goodsComponent.css");
</style>
