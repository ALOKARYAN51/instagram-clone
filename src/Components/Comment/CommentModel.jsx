import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { BsEmojiSmile, BsThreeDots } from "react-icons/bs";
import CommentCard from "./CommentCard";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { RiSendPlane2Line } from 'react-icons/ri';
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import "./CommentModel.css";
const CommentModel = ({ 
  onClose, 
  isOpen, 
  isSaved, 
  isPostLiked, 
  handlePostLike, 
  handleSavePost 
}) => {
  
  return (
    <div>
      <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <div className=" flex h-[75vh]">
              <div className="w-[45%] flex flex-col justify-center">
                <img className='max-h-full w-full' src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg" alt="" />
              </div>
              <div className="w-[55%] pl-10 relative">
                <div className="flex justify-between items-center py-5">
                  <div className="flex items-center">
                    <div>
                      <img className="w-9 h-9 rounded-full" src="https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295430_1280.png" alt="" />
                    </div>
                    <div className="ml-2">
                      <p>username</p>
                    </div>
                  </div>
                  <BsThreeDots />
                </div>
                <hr />
                <div className="comments">
                  {[1, 1, 1, 1, 1,].map(() => <CommentCard />)}
                </div>
                <div className="absolute bottom-0 w-[90%]">
                  <div className='flex justify-between items-center w-full py-4'>
                    <div className='flex items-center space-x-2'>
                      {isPostLiked ? <AiFillHeart className='text-2xl hover:opacity-50 cursor-pointer text-red-600' onClick={handlePostLike} /> : <AiOutlineHeart className='text-2xl hover:opacity-50 cursor-pointer' onClick={handlePostLike} />}

                      <FaRegComment className='text-2xl hover:opacity-50 cursor-pointer' />
                      <RiSendPlane2Line className='text-2xl hover:opacity-50 cursor-pointer' />

                    </div>

                    <div className='cursor-pointer'>
                      {isSaved ? <BsBookmarkFill onClick={handleSavePost} className='text-2xl hover:opacity-50 cursor-pointer' /> : <BsBookmark onClick={handleSavePost} className='text-2xl hover:opacity-50 cursor-pointer' />}


                    </div>
                  </div>
                  <div className='w-full py-2'>
                    <p>10 Likes</p>
                    <p className='opacity-50 text-sm'>1 day ago</p>
                  </div>

                  
                    <div className='flex w-full items-center'>
                      <BsEmojiSmile />
                      <input className="commentInput" type="text" placeholder='Add a comment..' />
                    </div>
                
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}
export default CommentModel