import {useRef, useState} from "react"

function Plus() {
    const reducerCount = useRef(0)
    const [count, setCount] = useState(0)
    let cnt = 0

    const handleClick = () => {
        reducerCount.current += 1
        setCount(c => c+1)
        cnt++
        console.log(reducerCount.current, cnt)
    }
    return(
        <>
            <p>버튼 클릭 횟수 : {count}</p>
            <button onClick={() => handleClick()}>증가</button>
        </>
    )
}
export default Plus