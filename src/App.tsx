/*
 * @Author: xiaohu
 * @Date: 2022-12-07 15:34:10
 * @LastEditors: lzy-Jerry
 * @LastEditTime: 2023-08-07 23:18:52
 * @FilePath: \Explores\apps\react-demo-ts\src\App.tsx
 * @Description: 
 */
import { FC } from "react"
import DanceText from "./pages/BadApple"
import './App.less'
interface IProps {

}

const App: FC<IProps> = (props) => {
  return (
    <div className="App">
      <DanceText />
    </div>
  )
}

export default App
