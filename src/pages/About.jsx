import { useNavigate } from "react-router-dom"

export default function About(){
    const navigate = useNavigate()
    return (
        <div>
            <h1>About</h1>
            <button onClick={()=>navigate('/')}>Go to hOME page</button>
        </div>
    )
}