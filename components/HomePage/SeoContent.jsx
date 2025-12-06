// import React from "react";

// const SeoContent = () => {
//   return (
//     <div className="seoMain">
//       <div className="container">
//         <div className="seoMainItem">
//           <div className="seoMainItemTop">
//             <h2>YERUSALIM 18 –</h2>
//             <p>Premium Scented Candles for Every Space</p>
//           </div>
//           <div className="seoMainItemContent">
//             <p>
//               Discover thoughtfully crafted scented candles made with premium
//               natural wax blends for a clean, even burn. From everyday jar
//               candles to sculptural pillar & taper pieces,
//               <strong>Yerusalim 18</strong> brings
//               <strong>
//                 woody & warm, gourmand & spice, fresh & clean, and floral
//                 fragrance families
//               </strong>
//               to life. Explore gift sets and discovery kits to sample our
//               most-loved scents, or shop seasonal candles inspired by cozy
//               evenings, festive gatherings, and slow weekend mornings. Each
//               candle is hand-poured for balanced scent throw, longer burn time,
//               and an elegant minimalist look that suits any interior.
//               <br />
//               <br />
//               Looking for the perfect match? Shop by Fragrance to browse cedar,
//               sandalwood, amber, vanilla, cinnamon, sea salt, citrus, rose, and
//               jasmine notes. Enhance your ritual with home fragrance
//               essentials—reed diffusers and room sprays—and keep your candles in
//               top shape with wick ..
//             </p>
//             <div className="readMoreSeo">
//               <button>
//                 <span>Read More</span> <p>+</p>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SeoContent;














// "use client";

// import React from "react";

// const SPLIT_LIMIT = 450; // ilk görünən hissə üçün max simvol sayı

// const SeoContent = ({ seoText }) => {
//   const [isExpanded, setIsExpanded] = React.useState(false);

//   const handleToggle = () => {
//     setIsExpanded((prev) => !prev);
//   };

//   // Gələcəkdə BURDA real data olacaq:
//   // seoText backend-dən gələn tam uzun mətn olacaq (string)
//   const fullText =
//     seoText ||
//     "Discover thoughtfully crafted scented candles made with premium natural wax blends for a clean, even burn. From everyday jar candles to sculptural pillar & taper pieces, Yerusalim 18 brings woody & warm, gourmand & spice, fresh & clean, and floral fragrance families to life. Explore gift sets and discovery kits to sample our most-loved scents, or shop seasonal candles inspired by cozy evenings, festive gatherings, and slow weekend mornings. Each candle is hand-poured for balanced scent throw, longer burn time, and an elegant minimalist look that suits any interior. Looking for the perfect match? Shop by Fragrance to browse cedar, sandalwood, amber, vanilla, cinnamon, sea salt, citrus, rose, and jasmine notes. Enhance your ritual with home fragrance essentials—reed diffusers and room sprays—and keep your candles in top shape with wick ..";

//   const shortText = fullText.slice(0, SPLIT_LIMIT);
//   const moreText = fullText.slice(SPLIT_LIMIT);

//   return (
//     <div className="seoMain">
//       <div className="container">
//         <div className="seoMainItem">
//           <div className="seoMainItemTop">
//             {/* 🔒 Bu hissəyə toxunmuram – həmişə statik qalır */}
//             <h2>YERUSALIM 18 –</h2>
//             <p>Premium Scented Candles for Every Space</p>
//           </div>
//           <div className="seoMainItemContent">
//             <p>
//               {shortText}
//               {!isExpanded && moreText && "..."}
//             </p>

//             {moreText && (
//               <div className={`seoMoreText ${isExpanded ? "open" : ""}`}>
//                 <p>{moreText}</p>
//               </div>
//             )}

//             {moreText && (
//               <div className="readMoreSeo">
//                 <button onClick={handleToggle}>
//                   <span>{isExpanded ? "Read Less" : "Read More"}</span>
//                   <p>{isExpanded ? "-" : "+"}</p>
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SeoContent;














"use client";

import React from "react";

const SeoContent = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="seoMain">
      <div className="container">
        <div className="seoMainItem">
          <div className="seoMainItemTop">
            <h2>YERUSALIM 18 –</h2>
            <p>Premium Scented Candles for Every Space</p>
          </div>
          <div className="seoMainItemContent">
            <p>
              Discover thoughtfully crafted scented candles made with premium
              natural wax blends for a clean, even burn. From everyday jar
              candles to sculptural pillar & taper pieces,
              <strong>Yerusalim 18</strong> brings
              <strong>
                {" "}
                woody & warm, gourmand & spice, fresh & clean, and floral
                fragrance families{" "}
              </strong>
              to life. Explore gift sets and discovery kits to sample our
              most-loved scents, or shop seasonal candles inspired by cozy
              evenings, festive gatherings, and slow weekend mornings. Each
              candle is hand-poured for balanced scent throw, longer burn time,
              and an elegant minimalist look that suits any interior.
              <br />
              <br />
              Looking for the perfect match? Shop by Fragrance to browse cedar,
              sandalwood, amber, vanilla, cinnamon, sea salt, citrus, rose, and
              jasmine notes. Enhance your ritual with home fragrance
              essentials—reed diffusers and room sprays—and keep your candles in
              top shape with wick ..
            </p>

            {/* Açılanda görünəcək əlavə SEO kontenti */}
            <div className={`seoMoreText ${isExpanded ? "open" : ""}`}>
              <p>
                Extend the ambiance of your home with layered fragrance rituals
                designed to complement every room—from living spaces and
                bedrooms to bathrooms and entryways. <strong>Yerusalim 18</strong>{" "}
                candles are crafted with a focus on clean formulations, using
                carefully selected ingredients to minimize soot and maximize
                scent clarity. Thoughtful vessel designs make each candle a
                decorative object, whether styled alone or grouped in sets.
                <br />
                <br />
                For gifting, choose from curated candle duos, trio collections,
                and limited-edition boxes that arrive ready to present. Whether
                you’re setting the mood for a calm evening, celebrating a special
                occasion, or simply elevating your daily routine,{" "}
                <strong>Yerusalim 18</strong> offers timeless fragrances that
                feel modern, warm, and deeply inviting.
              </p>
            </div>

            <div className="readMoreSeo">
              <button onClick={handleToggle}>
                <span>{isExpanded ? "Read Less" : "Read More"}</span>
                <p>{isExpanded ? "-" : "+"}</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoContent;
