import { useState } from "react";


function AngryButton(){
  const [anger, setAnger] = useState(0);

const handleClick = (amount) => {
  if (anger < 1) {
    setAnger (anger + amount); 
  } else {
    setAnger (0);
  }


}

  return (
    <button style={{ backgroundColor: `rgba(255,0,0,${anger})` }} onClick={() => handleClick(0.1)} className="AngryButton">
      {/* If you have NOT reached the maximum */}  
      {anger < 1 && <span>Don't click me too much! </span>}

      {/* If you HAVE reached the maximum */}
      {anger > 1 && <span>Rawr!</span>}
    </button>
  );
}

export default AngryButton;