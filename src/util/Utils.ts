/*
 * @Author: kekeqy
 * @Date: 2018-12-10 17:04:12
 * @LastEditors: kekeqy
 * @LastEditTime: 2018-12-10 17:07:16
 * @Description: 描述
 */
export class Utils {
    /**
     * 判断是否布尔值
     * @memberof THING.Utils
     * @param {*} value js元素
     * @return {boolean}
     */
    public static isBoolean(value: any): boolean {
        throw new Error('未实现！');
    }

    /**
     * 判断是否DOM元素
     * @memberof THING.Utils
     * @param {*} value js元素
     * @return {boolean}
     */
    public static isDom(value: any): boolean {
        throw new Error('未实现！');
    }

    /**
     * 判断是否空
     * @memberof THING.Utils
     * @param {*} o js元素
     * @return {boolean}
     */
    public static isNull(o: any): boolean {
        throw new Error('未实现！');
    }

    /**
     * 判断是否空白字符串
     * @memberof THING.Utils
     * @param {*} o js元素
     * @return {boolean}
     */
    public static isBlank(o: any): boolean {
        throw new Error('未实现！');
    }

    /**
     * 判断是否空结构体
     * @memberof THING.Utils
     * @param {*} o js元素
     * @return {boolean}
     */
    public static isEmptyObj(o: any): boolean {
        throw new Error('未实现！');
    }

    /**
     * 判断是否空数组
     * @memberof THING.Utils
     * @param {*} o js元素
     * @return {boolean}
     */
    public static isEmptyArray(o: any): boolean {
        throw new Error('未实现！');
    }

    /**
     * 字符串转成小写
     * @memberof THING.Utils
     * @param {string} s 字符串
     * @return {string}
     */
    public static toLowerCase(s: string): string {
        throw new Error('未实现！');
    }

    /**
     * 成员键值全部转换成小写
     * @memberof THING.Utils
     * @param {Object} input 要处理的 js 对象
     * @param {Boolean} deep 是否需要转换所有的键值
     * @param {Function} filter 键值过滤函数
     * @return {Object}
     */
    public static objectKeysToLowerCase(input: any, deep: boolean, filter: () => any): any {
        throw new Error('未实现！');
    }

    /**
     * 克隆对象
     * @memberof THING.Utils
     * @param {Object} obj js对象
     * @param {Boolean} shallow 是否进行浅层克隆, 如果是 false 则会完全进行克隆处理
     * @return {Object}
     */
    public static cloneObject(obj: any, shallow: boolean): any {
        throw new Error('未实现！');
    }

    /**
     * 合并简单对象
     * @memberof THING.Utils
     * @param {object} target 目标结构体
     * @param {object} source 源结构体
     * @param {boolean} overwrite 是否更新已经存在的属性
     * @return {object}
     */
    public static mergeObject(target: object, source: object, overwrite: boolean): object {
        throw new Error('未实现！');
    }

    /**
     * 判断结构体是否完全相等
     * @memberof THING.Utils
     * @param {Object} o1 第一个结构体
     * @param {Object} o2 第二个结构体
     * @return {Boolean}
     */
    public static isEqual(o1: any, o2: any): boolean {
        throw new Error('未实现！');
    }

    /**
     * 异步加载
     * @memberof THING.Utils
     * @param {String} url 请求连接地址
     * @param {Function} callback 回调方法
     */
    public static dynamicLoadJSON(url: string, callback: () => any): void {
        throw new Error('未实现！');
    }

    /**
     * 动态加载 javascript 脚本后多app初始化参数记录
     * @memberof THING.Utils
     */
    public static _getJSLaunchArguments(): void {
        throw new Error('未实现！');
    }

    /**
     * 动态加载 javascript
     * @memberof THING.Utils
     * @param {String|Array<string>} url JS文件路径
     * @param {Function} callback 回调方法
     */
    public static dynamicLoadJS(url: string | string[], callback: () => any): void {
        throw new Error('未实现！');
    }

    /**
     * 动态加载 css
     * @memberof THING.Utils
     * @param {String|Array<string>} url css 文件路径
     * @param {Function} callback 回调方法
     */
    public static dynamicLoadCSS(url: string | string[], callback: () => any): void {
        throw new Error('未实现！');
    }

    /**
     * 添加物体类型转换规则
     * @param {String} type 物体类名
     * @param {String} condition 转换条件, 比如使用 /name/ 进行正则表达式匹配，能匹配上的才能进行转换
     * @param {String} params? 新类型默认创建参数, 在转换成新类型后，会成为替换创建参数列表
     * @example
     * 1. 我们想把 id 为 1 的物体转换成 '.Cabinet' 类型，则可以通过以下接口实现
     *  THING.Utils.addCastType('Cabinet', '#1');
     * 2. 我们想把名字包含 'spotLight' 的物体都转换成 '.Cabinet' 类型，则可以通过以下接口实现
     *  THING.Utils.addCastType('Cabinet', /spotLight/);
     * 调用之后在场景加载的过程中，符合条件的物体都会以指定的类型创建，场景加载完成后，此规则自动被清除
     */
    public static addCastType(type: string, condition: string, params?: string): void {
        throw new Error('未实现！');
    }

    /**
     * 删除物体类型转换规则
     * @param {String} type 物体类名
     * @param {String} condition 转换条件
     * @param {String} params? 新类型默认创建参数
     */
    public static removeCastType(type: string, condition: string, params?: string): void {
        throw new Error('未实现！');
    }

    /**
     * 异步执行函数
     * @param {Function} callback 回调函数
     * @example
     * THING.Utils.runAsync(function() {
     *  // ...
     * });
     */
    public static runAsync(callback: () => any): void {
        throw new Error('未实现！');
    }

}