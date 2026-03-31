import { useState } from 'react'
export default function App() {
  const [count, setCount] = useState(0)
  return (
    <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'#0a0a0a',color:'#fff',fontFamily:'system-ui'}}>
      <div style={{textAlign:'center',padding:'3rem',background:'#111',borderRadius:16,border:'1px solid #222'}}>
        <h1 style={{fontSize:'2rem',marginBottom:'1rem'}}>React Vite Deploy Test</h1>
        <p style={{color:'#888',marginBottom:'1.5rem'}}>If you see this, React deploy works!</p>
        <button onClick={() => setCount(c => c + 1)} style={{background:'#8b5cf6',color:'#fff',border:'none',padding:'12px 28px',borderRadius:8,fontSize:'1rem',cursor:'pointer'}}>
          Count: {count}
        </button>
      </div>
    </div>
  )
}
