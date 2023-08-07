/*
 * @Author: xiaohu
 * @Date: 2023-01-13 09:51:33
 * @LastEditors: xiaohu
 * @LastEditTime: 2023-06-26 20:09:39
 * @FilePath: \Explores\apps\react-demo-ts\src\global.d.ts
 * @Description: 
 */
declare module 'foo' {
  export const name: string;
}

declare module '*.less' {
  const classes: {[key: string]:  string}
  export default classes
}