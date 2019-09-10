/* 
自定义vue插件模块
 */
(function (window) {

  // 定义一个空对象模块
  const MyPlugin = {}
  
  // 模块必须有一个install方法
  MyPlugin.install = function (Vue, options) {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
      console.log('全局方法 myGlobalMethod()')
    }
  
    // 2. 自定义全局指令
    Vue.directive('my-directive', (el, binding) => {
      el.innerText = 'my-directive---' + binding.value
    })
  
    // 4. 添加一个实例方法
    Vue.prototype.$myMethod = function () {
      console.log('实例方法 $myMethod()')
    }
  }

  // 向外暴露
  window.MyPlugin = MyPlugin

})(window)