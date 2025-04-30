import {useEffect, useState} from "react";
import {GifState} from "../context/GifContext";
import banner from '../assets/banner.gif'
import Gif from "../components/Gif";
import FilterGif from "../components/FilterGif";
import GifSearch from "../components/GifSearch";
import Loader from "../components/Loader";

function Home() {
  const {gf, gifs, setGifs, filter} = GifState();
  const [loading,setLoading]=useState(false);
  const fetchTrendingGIFs = async () => {
    setLoading(true)
    const {data: gifs} = await gf.trending({
      limit: 20,
      type: filter,
      rating: "g",
    });
    setGifs(gifs);
    setLoading(false);
  };

  useEffect(() => {
    fetchTrendingGIFs();
  }, [filter]);

  return (
   <>
   {
    loading ?
    <Loader/> :
    <div className="">
    <GifSearch/>
      <img
        src={banner}
        alt="earth banner"
        className="mt-2 rounded w-full"
      />

      <FilterGif showTrending />
      
      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
        {gifs.map((gif) => (
          <Gif gif={gif} key={gif.id} />
        ))}
      </div>
    </div>
   }
   </>
  );
}

export default Home;