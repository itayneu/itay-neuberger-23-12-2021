import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      name="query"
      className="form-control my-3"
      placeholder={"Search"}
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};

// const SearchBox = ({ value, onChange, dataType }) => {
//   // const [currentCity, setCurrentCity] = useState("");
  
  
//     function handleButtonClick() {
//       // if (currentCity.trim() === "") return;
//       // searchCity(currentCity);
//     }
  
//     function handleKeyPress(e) {
//       if (e.key === "Enter") handleButtonClick();
//     }

//     return (
//       <div class="row">
//         <div class="col-lg-6">
//           <div class="input-group">
//             <input type="text" class="form-control" placeholder="Search for..."/>
//             <span class="input-group-btn">
//               <button class="btn btn-default" type="button">Go!</button>
//             </span>
//           </div>
//         </div>
//       </div>
//   );
// };

export default SearchBox;
