/*
 * @Author: xiaohu
 * @Date: 2022-12-07 15:34:10
 * @LastEditors: xiaohu
 * @LastEditTime: 2023-06-27 11:52:20
 * @FilePath: \Explores\apps\react-demo-ts\src\main.tsx
 * @Description: 
 */
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router'
import router from "./router/index"
import './index.less'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router}/>
)
