/*
 * @Author: lzy-Jerry
 * @Date: 2023-08-08 23:13:07
 * @LastEditors: lzy-Jerry
 * @LastEditTime: 2023-08-09 00:14:04
 * @Description: 
 */
import {ChangeEvent, useEffect, useRef} from 'react';
import "./Upload.less"

interface IUploadProps {
    text?: string;
    onChange?: (url: string) => void;
}

function Upload(props: IUploadProps) {
    const { text = "上传", onChange } = props
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
                <input type="file" ref={inputRef} className='file'/>
                <div className='button' onClick={handleClick}>{text}</div> 
            </span>
        </>
    );
}

export default Upload;