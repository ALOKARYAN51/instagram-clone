import { Button, Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react"
import { useState } from "react"
import { FaPhotoVideo } from "react-icons/fa"
import "./CreatePostModel.css";
import { GrEmoji } from 'react-icons/gr'
import { GoLocation } from "react-icons/go";

const CreatePostModel = (
  {onClose, isOpen}
) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [file, setFile] = useState();
  const [caption, setCaption] = useState("");


  const handleDrop = (event) => {
    event.preventDefalult()
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile.type.startsWith("image") || droppedFile.type.startsWith("video/")) {
      setFile(droppedFile)
    }
  }


  const handleDragOver = (event) => {
    event.preventDefalult();
    event.dataTransfer.dropEffect = "copy";
    setIsDragOver(true);
  }
  const handleDragLeave = () => {
    setIsDragOver(false)
  }

  const handleOnchange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type.startsWith("image/") || file.type.startsWith("video/"))) {
      setFile(file);
      console.log("file : ", file)
    }
    else {
      setFile(null);
      alert("please select video")
    }
  }

  const handleCaptionChange=(e)=>{
    setCaption(e.target.value)
  }
  return (
    <div>
      <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <div className="flex justify-between py-1 px-10 items-center">
            <p>Create new Post</p>
            <Button className='' variant={"ghost"} size="sm" colorScheme={"blue"}>
              share
            </Button>
          </div>
          <hr />
          <ModalBody>
            <div className="h-[70vh] justify-between pb-5 flex">
              <div className="w-[50%]">
                {!file && <div
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  className="drag-drop h-full"
                >
                  <div>
                    <FaPhotoVideo className="text-3xl" />
                    <p>Drag Photos or videos</p>
                  </div>
                  <label htmlFor="file-upload" className="custom-file-upload">Select From Computer</label>
                  <input className="fileInput" type="file" id="file-upload" accept='image/*, video/*' onChange={handleOnchange} />
                </div>}
                {file && <img className="max-h-full" src={URL.createObjectURL(file)} alt="" />}


              </div>
              <div className="w-[1px] border h-full"></div>
              <div className="w-[50%]">
                <div className="flex item-center px-2">
                  <img className="w-7 h-7 rounded-full " src="https://cdn.pixabay.com/photo/2023/05/30/13/46/carnival-8028612_1280.jpg" alt="" />
                  <p className="fony-semibold ml-4">username</p>
                </div>
                <div className="px-2">
                  <textarea 
                  placeholder="write a caption" 
                  className="captionInput" name='caption' 
                  row ='8'
                  onChange={handleCaptionChange}
                  ></textarea>
                </div>

                <div className="flex justify-between px-2">
                  <GrEmoji/>
                  <p className="opacity-70">{caption?.length} /2, 200 </p>
                </div>
                <hr />
                <div className="p-2 flex justify-between items-center">
                  <input
                    className="locationInput"
                    type="text"
                    placeholder="Add Location"
                    name="location"
                  />
                  <GoLocation />
                </div>
                <hr />
               
              </div>

            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}
export default CreatePostModel