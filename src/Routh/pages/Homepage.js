import { useLocation } from "react-router"
import { Link } from "react-router-dom"
import { useAuth } from "../../services/auth"

const Homepage = () => {
    const { user } = useAuth()
    const { state } = useLocation()


    return (
        <div>

            {
                state?.from === 'auth' && <h1>Welcome back {user.displayName}</h1>
            }

            Homepage


            <Link to='/protected'>
                GO TO protected
            </Link>
        </div>
    )
}

export default Homepage