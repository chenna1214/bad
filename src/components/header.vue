<template>
<div>
   <div class="navbar navbar-inverse" role="navigation">
      <div class="navbar-header">
        <div class="logo"><h1>女神衣柜</h1></div>
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
    </div>
    <div class="template-page-wrapper">
      <div class="navbar-collapse collapse templatemo-sidebar">
        <ul class="templatemo-sidebar-menu">
          <li>
            <form class="navbar-form">
              <input type="text" class="form-control" id="templatemo_search_box" placeholder="搜索……">
              <span class="btn btn-default">Go</span>
            </form>
          </li>
          <li class="active"><a href="#"><i class="fa fa-home"></i>首页</a></li>
          <li class="sub open">
            <a href="javascript:;">
              <i class="fa fa-database"></i> 衣帽间 <div class="pull-right"><span class="caret"></span></div>
            </a>
            <ul class="templatemo-submenu">
              <li><a href="#">上衣</a></li>
              <li><a href="#">裙子</a></li>
              <li><a href="#">裤子</a></li>
              <li><a href="#">帽子</a></li>
              <li><a href="#">配饰</a></li>
            </ul>
          </li>
          <li><a href="data-visualization.html"><i class="fa fa-cubes"></i><span class="badge pull-right">9</span>衣服统计</a></li>
          <li><a href="maps.html"><i class="fa fa-map-marker"></i><span class="badge pull-right">42</span>衣服存放位置</a></li>
          <li><a href="tables.html"><i class="fa fa-users"></i><span class="badge pull-right">NEW</span>衣服管理</a></li>
          <li><a href="preferences.html"><i class="fa fa-cog"></i>设置</a></li>
          <li><a href="javascript:;" data-toggle="modal" data-target="#confirmModal"><i class="fa fa-sign-out"></i>退出登录</a></li>
        </ul>
      </div><!--/.navbar-collapse -->
</div>
</div>
</template>

<script>
export default {
  name:'top',
  mounted(){
    // $(document).ready( function() {
	// sidebar menu click
	$('.templatemo-sidebar-menu li.sub a').click(function(){

		if($(this).parent().hasClass('open')) {
			$(this).parent().removeClass('open');
		} else {
			$(this).parent().addClass('open');
		}
	});  // sidebar menu click

// }); // document.ready
  }

}
</script>

<style lang="less" scoped>

</style>



