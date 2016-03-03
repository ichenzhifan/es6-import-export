/**
 * 可以正常工作, 这种写法.
 * export const sqrt = Math.sqrt
 *
 *
 * 不能正常工作.
 * const sqrt = Math.sqrt;
 * export sqrt;
 */
//export const sqrt = Math.sqrt;
export let sqrt = Math.sqrt;
