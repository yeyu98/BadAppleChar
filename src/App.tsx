/*
 * @Author: xiaohu
 * @Date: 2022-12-07 15:34:10
 * @LastEditors: xiaohu
 * @LastEditTime: 2023-09-07 20:22:17
 * @FilePath: \NewExpore\BadAppleChar\src\App.tsx
 * @Description: 
 */
import { FC } from "react"
import DanceText from "./pages/BadApple"
import Star from "./components/Star"
import './App.less'
interface IProps {

}

const App: FC<IProps> = (props) => {
  return (
    <div className="App">
      <Star />
      <DanceText />
    </div>
  )
}

export default App
