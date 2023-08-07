/*
 * @Author: xiaohu
 * @Date: 2023-03-03 10:32:42
 * @LastEditors: lzy-Jerry
 * @LastEditTime: 2023-08-07 23:12:02
 * @FilePath: \Explores\apps\react-demo-ts\src\router\index.tsx
 * @Description: 
 */
import { createBrowserRouter } from "react-router-dom"
import App from "@/App"
import DanceText from "@/pages/BadApple"


export default createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/danceText",
    element: <DanceText />
  },
])