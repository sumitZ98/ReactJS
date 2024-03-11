import { useParams } from "react-router-dom"
import img from '../../../public/img-2.jpg'
function User() {
    const params = useParams();
  return (
    <div>
      I am {params.username} 
      <img src={img} alt="" />
    </div>
  )
}

export default User
