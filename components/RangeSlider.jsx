
// import * as React from "react";
// import Box from "@mui/material/Box";
// import Slider from "@mui/material/Slider";

// function valuetext(value) {
//   return `${value}°C`;
// }

// export default function RangeSlider() {
//   const [value, setValue] = React.useState([0, 100]);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: 290 }}>
//       <Slider
//         value={value}
//         onChange={handleChange}
//         valueLabelDisplay="off"
//         getAriaValueText={valuetext}
//         sx={{
//           color: "#000", // əsas aktiv track rəngi

//           "& .MuiSlider-track": {
//             height: "0.3rem",
//             backgroundColor: "#000",
//             border: "none",
//           },

//           "& .MuiSlider-rail": {
//             height: "0.2rem",
//             backgroundColor: "#000",
//             opacity: 0.3,
//           },

//           "& .MuiSlider-thumb": {
//             width: 15,
//             height: 15,
//             backgroundColor: "#fff", // thumb-lar ağ rəngdə
//             border: "3px solid #000", // 2px qara border
//           },
//         }}
//       />
//     </Box>
//   );
// }




















import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function RangeSlider({ value, onChange }) {
  const handleChange = (event, newValue) => {
    onChange(newValue);
  };

  return (
    <Box sx={{ width: 290 }}>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="off"
        sx={{
          color: "#000",
          "& .MuiSlider-track": { height: "0.3rem", backgroundColor: "#000", border: "none" },
          "& .MuiSlider-rail": { height: "0.2rem", backgroundColor: "#000", opacity: 0.3 },
          "& .MuiSlider-thumb": {
            width: 15,
            height: 15,
            backgroundColor: "#fff",
            border: "3px solid #000",
            "&:hover, &.Mui-active, &.Mui-focusVisible": { boxShadow: "none" },
          },
        }}
      />
    </Box>
  );
}
