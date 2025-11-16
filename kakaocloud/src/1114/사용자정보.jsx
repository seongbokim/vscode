import './App.css'

function App() {
  let stylen = {border: "1px solid black", width: "100px"}
  let styleg = {border: "1px solid black", width: "50px"}
  let stylem = {border: "1px solid black", width: "200px"}
  let s = []
  let h = 0
  while(h<3){
    let n = prompt("이름을 적으시오")
    if(n == "" || n == null){break}
    let g = prompt("성별을 적으시오")
    let m = prompt("전화번호를 적으시오")
    s.push({n, g, m})
    h++
  }
  return (
    <>
    <h1> 사용자 정보 </h1>
    <table border={1}>
      <thead>
      <tr><th style = {stylen}>이름</th><th style ={styleg}>성별</th><th style = {stylem}>전화번호</th></tr>
      </thead>
      <tbody>
        {
          s.map((user, x) => <tr key = {x}><td>{user.n}</td><td>{user.g}</td><td>{user.m}</td></tr>)
        }
      </tbody>
    </table>
    </>
  )
}

export default App