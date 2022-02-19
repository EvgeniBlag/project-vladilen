import React from "react";
import Food from "./Food";


const foodILike = [
  {'name':'pezcado',
   'properthy':'more product',
  },

  {'name':'ternera',
  'properthy':'myaso',
  },

  {'name':'pomidor',
   'properthy':'ovosh',
  }
]


function App() {
  return (
       <div >


<h1>Hello</h1>


{foodILike.map((obj)=>
   <Food name={obj.name}
         properthy={obj.properthy}
   />
)}


    </div>
  
  );
}

export default App;
