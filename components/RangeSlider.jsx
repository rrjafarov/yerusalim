
// import * as React from "react";
// import Box from "@mui/material/Box";
// import Slider from "@mui/material/Slider";

// export default function RangeSlider({ value, onChange }) {
//   const handleChange = (event, newValue) => {
//     onChange(newValue);
//   };

//   return (
//     <Box sx={{ width: 290 }}>
//       <Slider
//         value={value}
//         onChange={handleChange}
//         valueLabelDisplay="off"
//         sx={{
//           color: "#000",
//           "& .MuiSlider-track": { height: "0.3rem", backgroundColor: "#000", border: "none" },
//           "& .MuiSlider-rail": { height: "0.2rem", backgroundColor: "#000", opacity: 0.3 },
//           "& .MuiSlider-thumb": {
//             width: 15,
//             height: 15,
//             backgroundColor: "#fff",
//             border: "3px solid #000",
//             "&:hover, &.Mui-active, &.Mui-focusVisible": { boxShadow: "none" },
//           },
//         }}
//       />
//     </Box>
//   );
// }












// ! filter price



import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

// ✅ DƏYİŞDİ — min/max prop-ları əlavə olundu
export default function RangeSlider({ value, onChange, min = 0, max = 999 }) {
  const handleChange = (event, newValue) => {
    onChange(newValue);
  };

  return (
    <Box sx={{ width: "100%"  }}>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="off"
        min={min}
        max={max}
        sx={{
          color: "#000",
          "& .MuiSlider-track": {
            height: "0.3rem",
            backgroundColor: "#000",
            border: "none",
          },
          "& .MuiSlider-rail": {
            height: "0.2rem",
            backgroundColor: "#000",
            opacity: 0.3,
          },
          "& .MuiSlider-thumb": {
            width: 15,
            height: 15,
            backgroundColor: "#fff",
            border: "3px solid #000",
            "&:hover, &.Mui-active, &.Mui-focusVisible": {
              boxShadow: "none",
            },
          },
        }}
      />
    </Box>
  );
}