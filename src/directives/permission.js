import Vue from 'vue';
import store from '@/store';
import { get } from '@/utils';

// 是否有权限
const hasPermission = userPermission => {
  let userPermissionList = Array.isArray(userPermission) ? userPermission : [userPermission];
  
  // 当前用户的权限列表
  let permissionList = get(store, 'getters["user/permission"]', []);
  return userPermissionList.some(e => permissionList.includes(e));
};

// 指令
Vue.directive('per', {
  bind: (el, binding, vnode) => {
    if (!hasPermission(binding.value)) {
      el.parentNode.removeChild(el);
    }
  }
});

// 全局判断方法
Vue.prototype.$_has = hasPermission;