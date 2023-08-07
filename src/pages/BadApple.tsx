/*
 * @Author: lzy-Jerry
 * @Date: 2023-07-29 20:54:23
 * @LastEditors: lzy-Jerry
 * @LastEditTime: 2023-08-07 23:24:42
 * @Description: 
 */
import { useEffect, useRef } from 'react'
import videoUrl from "@/assets/video.mp4"
import "./BadApple.less"

interface Props {}

function BadApple(props: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const divRef = useRef<HTMLDivElement | null>(null)

  const generateText = (g: number) => {
      if (g <= 30) {
          return '#';
      } else if (g > 30 && g <= 60) {
          return '&';
      } else if (g > 60 && g <= 120) {
          return '$';
      }  else if (g > 120 && g <= 150) {
          return '*';
      } else if (g > 150 && g <= 180) {
          return 'o';
      } else if (g > 180 && g <= 210) {
          return '!';
      } else if (g > 210 && g <= 240) {
          return ';';
      }  else {
          return '';
      }
  }

  const paint = (width: number, height: number) => {
      if(videoRef.current && canvasRef.current && divRef.current) {
        const ctx = canvasRef.current.getContext('2d')!
        if(videoRef.current.readyState > 1) {
          ctx.drawImage(videoRef.current, 0, 0, width, height)
          // NOTE Uint8ClampedArray类数组
          const imageData = ctx.getImageData(0, 0, width, height)
          const data: Uint8ClampedArray = imageData.data
          let finallyHtml = ''
          // 索引：(行 * width + 列) * 4
          // h 代表行 w代表列
          for(let h=0; h<height; h+=12) {
            let p = '<div>'
            for(let w=0; w<width; w+=6) {
              // NOTE canvas 获取像素位置算法 https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas
              const i = (h * width + w) * 4
              const r = data[i], g = data[i+1], b = data[i+2]
              const gray = 0.299 * r + 0.578 * g + 0.114 * b 
              p += generateText(gray)
            }
            finallyHtml += (p + '</div>')
          }
          divRef.current.innerHTML = finallyHtml
          renderFrame(width, height)
        }
    }
  }

  const renderFrame = (width: number, height: number) => {
    window.requestAnimationFrame(() => {
      paint(width, height)
    })
  }


  useEffect(() => {
    document.title = "💃"
  })

  useEffect(() => {
    videoRef.current?.addEventListener("play", () => {
      if(videoRef.current && canvasRef.current) {
        const width = videoRef.current.offsetWidth
        const height = videoRef.current.offsetHeight
        canvasRef.current.width = width 
        canvasRef.current.height = height 
        renderFrame(width, height)
      }
    })
  })

  return (
    <>
        <div className='bad-apple-wrapper'>
          <video ref={videoRef} src={videoUrl} width={600} height={480} controls autoPlay={false} loop={true}></video>
          <canvas ref={canvasRef}/>
          <div ref={divRef} className='bad-apple-screen'></div>
        </div>
    </>
  )
}

export default BadApple