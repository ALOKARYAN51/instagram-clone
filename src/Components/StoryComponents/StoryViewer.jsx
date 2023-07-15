import styled from "@emotion/styled";
import { useCallback, useEffect, useState } from "react"
import Progressbar from "./Progressbar";

const StoryViewerContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
  background-color:black;
`;
const StoryImage = styled.img`
max-height:90vh;
object-fit:contain;
`;
const StoryViewer = ({stories}) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextStory = useCallback(() => {
    if(currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1)
      setActiveIndex(activeIndex + 1);
    }
    else if(currentStoryIndex === stories.length - 1) {
      setCurrentStoryIndex(0);
      setActiveIndex(0);
    }
  }, [currentStoryIndex, stories.length, activeIndex]);

  useEffect(() => {
    const interval = setInterval(() => { handleNextStory() }, 2000)
    return () => clearInterval(interval);
  }, [handleNextStory]);


  return (

      <div className="relative w-full">
        <StoryViewerContainer>
          <StoryImage src={stories?.[currentStoryIndex].image} />
        </StoryViewerContainer>
        <div className="absolute top-0 flex w-full">
          {stories.map((item,index)=><Progressbar key={index} duration={2000} index={index} activeIndex={activeIndex} />)}
        </div>
      </div>

  )
}
export default StoryViewer