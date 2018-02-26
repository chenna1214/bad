<template>
  <div id="main-wrapper">
    <div class="navbar-inverse" role="navigation">
      <div class="navbar-header">
        <div class="logo"><h1>女神衣柜</h1></div>
      </div>
    </div>
    <div class="template-page-wrapper">
      <form class="form-horizontal templatemo-signin-form" role="form" action="index.html" method="get">
        <div class="form-group">
          <div class="col-md-12">
            <label for="username" class="col-sm-2 control-label">用户名</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="username" placeholder="请输入用户名">
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-md-12">
            <label for="password" class="col-sm-2 control-label">密码</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="password" placeholder="请输入密码">
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-md-12">
            <div class="col-sm-offset-2 col-sm-10">
              <div class="checkbox">
                <label>
                  <input type="checkbox"> 记住密码
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-md-12">
            <div class="col-sm-offset-2 col-sm-10">
              <input type="submit" value="登录" class="btn btn-default">
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
   name: 'signIn',


}
</script>

<style scoped>

</style>



