import { Navigate } from "react-router-dom"

function ProtectedRoute({children , auth}) {
    const {isAuthenticated , isLoading} = auth 
    if(isLoading) return <div className="w-full text-center">Loading........</div>
    if(isAuthenticated) return children

    return (
        <Navigate to="/" />
    )
   
}

export default ProtectedRoute;
