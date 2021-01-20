import CoinImage from "./CoinImage";
import { useState } from "react";

function FlipCoin({images}){
  const [counts, setCounts] = useState({
    head : 0,
    tail: 0,
    total : 0,
  });
  const [currentCoin, setCurrentCoin] = useState("");

  console.log("images", images);
  function flip() {
    let randomIdx = Math.floor(Math.random() * 2);
    const result = randomIdx === 0 ? "head" : "tail";
    setCurrentCoin(result);
    let currentCounts = {...counts};
    currentCounts.total++;
    currentCounts[result]++;
    setCounts(currentCounts);
    return result;
  }

  return (
    <div className="FlipCoin-container">
      <h3>Let's Flip A Coin!</h3>
      {currentCoin === "" ? null : <CoinImage image={images[currentCoin]} /> }
      <button className="FlipCoin-button" onClick={()=>{flip()}}>Flip Meee</button>
      <p className="FlipCoin-currentcounts">Out of {counts.total}, there have been {counts.head} heads and {counts.tail} tails!</p>

    </div>
  )
}

FlipCoin.defaultProps = {
  images : {
    head : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/ATB_silver_bullion_quarter_obverse.jpg/220px-ATB_silver_bullion_quarter_obverse.jpg",
    tail : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/2019_San_Antonio_Missions_-_ATB_silver_bullion_quarter_reverse.jpg/220px-2019_San_Antonio_Missions_-_ATB_silver_bullion_quarter_reverse.jpg",
  },
};

export default FlipCoin;