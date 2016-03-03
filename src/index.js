/**
 * 方式1：import name from “module-name”
 * 此种方式获得的name，对应于模块包中export default name；导出的，其他导出的被忽略
 *
 * 实例1:
 * export default class Person{
 *		getAge(){
 *			return 10;
 *		}
 *	}
 *
 * import Person from './modules/mathhasdefault';
 * let p = new Person();
 * alert(p.getAge());
 *
 * 实例2:
 * const pi = 3.14;
 * export default pi;
 *
 * import pi from './modules/mathhasdefault';
 * alert(pi); // 3.14
 *
 *
 * 实例3:
 * let obj = {
 * 	name: 'joke',
 * 	age: 12,
 * 	perf(){
 * 		return 'excellent';
 * 	}
 * }
 * export default obj;
 *
 * import obj from './modules/objhasdefault'; 
 */


/**
 * 方式2：import {member} from “module-name”
 * 此种方式获取的member，对应于模块包中export member;(member名字一致)，其他被忽略
 *
 * 实例:
 * export const sqrt = Math.Sqrt;
 *
 * import {sqrt} from './modules/math';
 */
// import {sqrt} from './modules/math';
// alert(sqrt(4)); // 2
