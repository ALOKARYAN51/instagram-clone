import StoryViewer from "../../Components/StoryComponents/StoryViewer"

const Story = () => {
  const story =[
    {
      image:"https://images.pexels.com/photos/17490386/pexels-photo-17490386/free-photo-of-a-portrait-of-a-woman-in-sunlight.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
    },
    {
      image:"https://images.pexels.com/photos/6640696/pexels-photo-6640696.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
    },
    {
      image:"https://images.pexels.com/photos/15577641/pexels-photo-15577641/free-photo-of-sky-sunset-sunny-fashion.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
    },
    {
      image:"https://images.pexels.com/photos/15919899/pexels-photo-15919899/free-photo-of-woman-sitting-on-subway-platform.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
    },
    {
      image:"https://images.pexels.com/photos/5540782/pexels-photo-5540782.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
    }

  ]
  return (
    <div>
      <StoryViewer stories={story} />
    </div>
  )
}
export default Story