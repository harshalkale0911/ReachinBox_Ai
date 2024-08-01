import { useSelector } from "react-redux"

 
function Dashboard() {
    const {user} = useSelector(state => state.auth)
  return (
    <div className='text-2xl font-bold text-center mt-20'>
        {user && <span>Hello {user.emial} , you are now logged in .</span>}
    </div>
  )
}

export default Dashboard