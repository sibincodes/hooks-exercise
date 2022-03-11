import { useState,useEffect } from "react";
export default function App() {
  const [channels, addChannels] = useState([]);
const Clists = ["Asianet","StarPlus","SonyLiv","StarMovies","New24","DD Sports",
"Sony TEN 1",
"Sony TEN 2",	
"Sony TEN 3",	
"Sony TEN 1 HD",
"Sony TEN 2 HD",
"Sony TEN 3 HD",
"Sony ESPN",
"Sony ESPN HD",	
"Sony Six HD",
"Sony TEN Golf HD",	
"Star Sports Select 1",	
"Star Sports Select 2",	
"Star Sports Select HD 1",	
"Star Sports Select HD 2"]
useEffect(() => { 

});
  const setChannel = () => {
    addChannels([
      ...channels, 
      {
        id : channels.length,
        channelName :  Clists[channels.length]
      }
    ]) 
  }
  return (
    <div className="bg-blue-500 h-screen pt-24">
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
    <div>
    <div className="text-left sm:text-center">
      <div className="text-xl font-medium text-black">Super Sports</div>
      
      <button onClick={setChannel}>Click Here to add Channels</button>
      <p className="text-slate-500"> {channels.map(channel => (
        <li key={channel.id}>{channel.channelName}</li>
      ))}
      </p>
     </div>
     {/* <div className="flex">
      <div className="flex-row">
        1
      </div>
      <div className="flex-col">
        2
      </div>
      <div>
        3
      </div>
      <div>
        4
      </div>
     </div> */}
    </div>
  </div>
  </div>
  )
}
