/*
 * @Author: lzy-Jerry
 * @Date: 2023-08-08 23:13:07
 * @LastEditors: lzy-Jerry
 * @LastEditTime: 2023-09-01 21:56:50
 * @Description: 
 */
import {ChangeEvent, useEffect, useRef} from 'react';
import "./Upload.less"

interface IUploadProps {
    text?: string;
    onChange?: (url: string) => void;
}

function Upload(props: IUploadProps) {
    const { text = "Upload Video", onChange } = props
    const inputRef = useRef<HTMLInputElement>(null)

    const handleClick = () => {
        inputRef.current?.click()
    }

    useEffect(() => {
        inputRef.current?.addEventListener("change", (e: Event) => {
            const files = inputRef.current?.files || []
            const blob = new Blob([files[0]])
            const url = URL.createObjectURL(blob)
            onChange && onChange(url)
        })
    })

    return (
        <>
            <span role='button'>
                <input type="file" ref={inputRef} className='file' accept='video/*'/>
                <button className='button' onClick={handleClick}>
                    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4902" width="200" height="200"><path d="M901.566101 964.140871h-722.645419a60.220452 60.220452 0 0 1 0-120.440903h722.645419a60.220452 60.220452 0 0 1 0 120.440903z m-99.785288-570.468337L601.668252 191.75336v502.599888a28.785376 28.785376 0 0 1-28.785375 28.785376H510.795591a28.785376 28.785376 0 0 1-28.785376-28.785376V196.751657L283.704268 395.539368c-25.35281 24.630165-60.882877 26.496999-86.235686 1.866834-25.35281-24.630165-23.485976-58.895602 1.866834-83.525767L500.558114 19.402427c25.35281-24.569944 60.882877-26.496999 86.235687-1.866834l295.561976 298.151456c25.35281 24.630165 27.279865 58.895602 1.866834 83.525766-25.35281 24.690385-57.088988 19.089883-82.441798-5.540281z" fill="#ffffff" p-id="4903"></path></svg>
                    {text}
                </button>
            </span>
        </>
    );
}

export default Upload;