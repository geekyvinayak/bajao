import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import "./App.css";
import Que from "./Que";
function App() {
  const [songs, setsongs] = useState([]);

  const [que,setque] = useState([])

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const fetch = async (dd) => {
    setsongs([])
    const { data } = await axios.get(
      `https://saavn.me/search/songs?query=${dd.name}`
    );
    setsongs(data.data.results);
  };

  const base = async (dd) => {
    const { data } = await axios.get(
      `https://saavn.me/search/songs?query=rockstar`
    );
    
    setsongs(data.data.results);

  };

  useEffect(() => {
    base();
  }, [])

   
  const Addtoque = (ele)=>{
    setque([...que,ele])
  }

  return (
    <div className="App">
      <h1>Hello</h1>
      <form onSubmit={handleSubmit(fetch)}>
        <label for="search"> Search Your song here     </label>
        <div>
        <input name="search" type="text" {...register("name")}></input>
        <button type="submit">Search</button>
        </div>
      </form>
      <div className="container">
      {songs?.map((ele) => (
        <div class="card">
          <div class="card-img">
            <img src={ele.image?.[ele.image.length - 1].link} />
          </div>
          <div class="card-info">
            <p class="text-title">{ele.name}</p>
            <p class="text-body">{ele.primaryArtists}</p>
          </div>
          <div class="card-footer">
              <button onClick={()=>Addtoque(ele)}>Add to Que</button>
          </div>
        </div>
      ))}
      </div>
      <Que list={que} setlist={setque}/>
      {/* {JSON.stringify(songs)} */}
    </div>
  );
}

export default App;

{/* <div class="card-footer">
              {" "}
              <audio controls>
                <source src={ele.downloadUrl[ele.downloadUrl.length - 1].link} type="audio/ogg" />
              </audio>
          </div> */}