import Validator from './Validator/Validator'
import validate from './directives/validate'
import verify from './methods/verify'
export { rules } from './Validator/Validator'

export default  class ValidatePlugin {
  constructor() {
    throw new Error('不允许实例化 ValidatePlugin')
  }
  static createValidator(ValidatePlugin, el, binding, vNode, _Vue) {
    ValidatePlugin.validators[vNode.context._uid] = new Validator(el, binding, vNode, _Vue)
  }
  static install(_Vue, options) {
    if (!ValidatePlugin.validation) {
      ValidatePlugin.validation = {} // 存放所有校验实例的容器
    }
    _Vue.directive('validate', validate(ValidatePlugin, _Vue))
    // 可供组件直接调用的校验方法
    _Vue.prototype.$verify = verify
  }
}
