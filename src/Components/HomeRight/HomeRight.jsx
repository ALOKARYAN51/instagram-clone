import SuggestionCard from "./SuggestionCard"

const HomeRight = () => {
  return (
    <div className="">
      <div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div>
              <img className="w-12 h-12 rounded-full" src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295399_640.png" alt="" />
            </div>
            <div className="ml-3">
              <p>Fullname</p>
              <p className="opacity-70">username</p>
            </div>
          </div>

          <div><p className="text-blue-700 font-semibold">Switch</p></div>

        </div>
        <div className="space-y-5 mt-10">
          {[1, 1, 1, 1, 1, 1].map((item) => <SuggestionCard />)}
        </div>
      </div>
    </div>
  )
}
export default HomeRight