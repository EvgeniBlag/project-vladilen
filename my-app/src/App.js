import React from "react";
import Food from "./Food";




const foodILike = [
  {
   'id': 1,
   'name':'pezcado',
   'properthy':'more product',
   'rating': 4.5
  },

  {
    'id': 2,
    'name':'ternera',
  'properthy':'myaso',
  'rating': 3.7
  },

  {
    'id': 3,
    'name':'pomidor',
   'properthy':'ovosh',
   'rating': 2.6
  }
]




function App() {
  return (

<div >


<h1>Hello</h1>

{foodILike.map((obj)=>
    <Food
       key={obj.id}
       name={obj.name}
       properthy={obj.properthy}
       rating={obj.rating}
                           />
)};

    </div>
  
  );
}

export default App;
