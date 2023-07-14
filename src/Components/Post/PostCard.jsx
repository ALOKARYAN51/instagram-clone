import { useState } from 'react'
import { BsEmojiSmile, BsThreeDots } from 'react-icons/bs'
import "./PostCard.css";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { RiSendPlane2Line } from 'react-icons/ri';
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import CommentModel from '../Comment/CommentModel';
import { useDisclosure } from '@chakra-ui/react';


const PostCard = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [isPostLiked, setIsPostLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()


  const handleSavePost = () => {
    setIsSaved(!isSaved)
  };
  const handlePostLike = () => {
    setIsPostLiked(!isPostLiked);
  };
  const handleClick = () => {
    setShowDropDown(!showDropDown);
  };
  const handleOpenCommentModel = () => {
    onOpen()
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

        <div className='flex justify-between items-center w-full px-5 py-4'>
          <div className='flex items-center space-x-2'>
            {isPostLiked ? <AiFillHeart className='text-2xl hover:opacity-50 cursor-pointer text-red-600' onClick={handlePostLike} /> : <AiOutlineHeart className='text-2xl hover:opacity-50 cursor-pointer' onClick={handlePostLike} />}

            <FaRegComment onClick={handleOpenCommentModel} className='text-2xl hover:opacity-50 cursor-pointer' />
            <RiSendPlane2Line className='text-2xl hover:opacity-50 cursor-pointer' />

          </div>

          <div className='cursor-pointer'>
            {isSaved ? <BsBookmarkFill onClick={handleSavePost} className='text-2xl hover:opacity-50 cursor-pointer' /> : <BsBookmark onClick={handleSavePost} className='text-2xl hover:opacity-50 cursor-pointer' />}


          </div>
        </div>
        <div className='w-full py-2 px-5'>
          <p>10 Likes</p>
          <p className='opacity-50 py-2 cursor-pointer'>view all 10 comments</p>
        </div>
        <div className='border border-t w-full'>
          <div className='flex w-full items-center px-5'>
            <BsEmojiSmile />
            <input className="commentInput" type="text" placeholder='Add a comment..' />
          </div>
        </div>
      </div>

      <CommentModel
        handleLikePost={handlePostLike}
        onClose={onClose}
        isOpen={isOpen}
        handleSavePost={handleSavePost}
        isPostLiked={isPostLiked}
        isSaved={isSaved}

      />
    </div>
  )
}
export default PostCard