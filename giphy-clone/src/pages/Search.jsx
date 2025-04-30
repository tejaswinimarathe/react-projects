
import { useEffect, useState } from "react";
import { GifState } from "../context/GifContext";
import { useParams } from "react-router-dom";
import Gif from "../components/Gif";
import FilterGif from "../components/FilterGif";
import Loader from "../components/Loader";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const { gf, filter } = GifState();
  const { query } = useParams();

  const fetchSearchResults = async () => {
    try {
      setLoading(true);
      const { data } = await gf.search(query, {
        sort: "relevant",
        lang: "en",
        type: filter,
        limit: 20,
      });
      setSearchResults(data);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSearchResults();
  }, [filter, query]);

  return (
    <div className="my-4">
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2 className="text-5xl pb-3 font-extrabold">{query}</h2>
          <FilterGif alignLeft={true} />
          {searchResults.length > 0 ? (
            <div className="columns-2 md:columns-3 lg:columns-4 gap-2">
              {searchResults.map((gif) => (
                <Gif gif={gif} key={gif.id} />
              ))}
            </div>
          ) : (
            <span>No GIFs found for {query}. Try searching for Stickers instead?</span>
          )}
        </>
      )}
    </div>
  );
};

export default Search;
