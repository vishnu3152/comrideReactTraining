import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "./card";
const ContactUs = () => {
  const [data, setData] = useState({});
  const [page, setPage] = useState(0);
  const [color, setColor] = useState("#000");
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  console.log(location.pathname);

  const increment = () => {
    setPage((prevState) => page + 1);
  };

  useEffect(()=>{
    axios.get(url).then((res) => setData(res.data));

  },[])

  let url =
    "https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10";



//   useEffect(() => handleClick(), [page]);

//   return (
//     <div>
//         {page}
//         <button onClick={increment}>increase</button>
//       {data?.jokes?.map((item) => {
//         return <Card item={item} />;
//       })}
//     </div>
//   );
// };

  console.log(data);
  
  return (
    <div className="container">
      <div className="d-flex">
        <div className="mt-5 mb-5 text-center">
         
        </div>
      </div>
      <div className="d-flex">
        <input
          className="form-control"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Type to search"
        />
         <input
            className="form-control"
            type="text"
            value={color}
            placeholder="Type to change color"
            onChange={(e) => setColor(e.target.value)}
          />
      </div>
      <div className="row">
        {data?.jokes
          ?.filter((item) => {
            if (searchTerm == "") {
              return item;
            } else if (
              item.category
                .toLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
            ) {
              return item;
            }
          })
          .map((item) => {
            return <Card color={color} item={item} />;
          })}
      </div>
    </div>
  );
};

export default ContactUs;
