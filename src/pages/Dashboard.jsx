import { useNavigate } from "react-router-dom"

export default function Dashboard(){
    const navigate = useNavigate()
    return (
        <div>
            <h1>new page ramis</h1>
            <button onClick={()=>navigate('/')}>Go to hOME page</button>
        </div>
    )
}