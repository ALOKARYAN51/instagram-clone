import { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import "./PostCard.css";
import { AiFillAlert, AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { RiSendPlane2Line } from 'react-icons/ri';
const PostCard = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [isPostLiked, setIsPostLiked] = useState(false);

  const handlePostLike = () => {
    setIsPostLiked(!isPostLiked);
  }
  const handleClick = () => {
    setShowDropDown(!showDropDown);
  }
  return (
    <div>
      <div className='border rounded-md w-full'>
        <div className='flex justify-between items-center w-full py-4 px-5'>
          <div className="flex item-center">
            <img className="h-12 w-12 rounded-full" src="https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_640.png" alt="" />
            <div className="pl-2">
              <p className="font-semibold text-sm">username</p>
              <p className="font-thin text-sm">Location</p>
            </div>
          </div>

          <div className='dropdown'>
            <BsThreeDots className="dots" onClick={handleClick} />
            <div className='dropdown-content'>
              {showDropDown && <p className='bg-black text-white py-1 px-4 rounded-md cursor-pointer'>delete</p>}
            </div>
          </div>
        </div>

        <div className='w-full'>
          <img className="w-full" src="https://cdn.pixabay.com/photo/2017/12/11/15/34/lion-3012515_640.jpg" alt="" />
        </div>

        <div>
          <div>
            {isPostLiked ? <AiFillAlert className='text-xl hover:opacity-50 cursor-pointer' onClick={handlePostLike} /> : <AiOutlineHeart className='text-xl hover:opacity-50 cursor-pointer' onClick={handlePostLike} />}

            <FaRegComment className='text-xl hover:opacity-50 cursor-pointer'/>
            <RiSendPlane2Line className='text-xl hover:opacity-50 cursor-pointer'/>

          </div>
        </div>
      </div>
    </div>
  )
}
export default PostCard