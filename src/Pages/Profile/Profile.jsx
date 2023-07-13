import React from "react"
import ProfileUserDetail from "../../Components/ProfileComponents/ProfileUserDetail"
import ReqUserPost from "../../Components/ProfileComponents/ReqUserPost"

const Profile = () => {
  return (
    <div className="px-20">
      <div>
        <ProfileUserDetail/>
      </div>
      <div>
        <ReqUserPost/>
      </div>
    </div>
  )
}
export default Profile