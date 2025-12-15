// import React from "react";

// const FilterPriceRange = () => {
//   return (
//     <div className="filterAccordionContentPricesItems">
//       <div className="filterAccordionContentPricesItemsMinPrice">
//         <p>Min.</p>
//         <input type="text" />
//       </div>
//     </div>
//   );
// };

// export default FilterPriceRange;








// components/PriceFilter.jsx
"use client";

import React, { useEffect } from "react";
// import './price-filter.scss';

const FilterPriceRange = () => {

  // helper functions mirror original behaviour with minimal changes
  function updateRange(type) {
    const rangeMin = document.getElementById('rangeMin');
    const rangeMax = document.getElementById('rangeMax');
    const minInput = document.getElementById('minPrice');
    const maxInput = document.getElementById('maxPrice');

    let minVal = parseInt(rangeMin.value, 10);
    let maxVal = parseInt(rangeMax.value, 10);

    if (maxVal - minVal < 100) {
      if (type === 'min') {
        rangeMin.value = Math.max(0, maxVal - 100);
        minVal = parseInt(rangeMin.value, 10);
      } else {
        rangeMax.value = Math.min(parseInt(rangeMax.max, 10), minVal + 100);
        maxVal = parseInt(rangeMax.value, 10);
      }
    }

    minInput.value = minVal;
    maxInput.value = maxVal;
    updateProgressBar();
    updateResultDisplay();
  }

  function updateFromInput(type) {
    const minInput = document.getElementById('minPrice');
    const maxInput = document.getElementById('maxPrice');
    const rangeMin = document.getElementById('rangeMin');
    const rangeMax = document.getElementById('rangeMax');

    let minVal = parseInt(minInput.value, 10);
    let maxVal = parseInt(maxInput.value, 10);

    if (isNaN(minVal)) minVal = 0;
    if (isNaN(maxVal)) maxVal = 0;

    if (minVal < 0) minVal = 0;
    if (maxVal > parseInt(rangeMax.max, 10)) maxVal = parseInt(rangeMax.max, 10);

    if (minVal >= maxVal) {
      if (type === 'min') {
        minVal = Math.max(0, maxVal - 100);
      } else {
        maxVal = Math.min(parseInt(rangeMax.max, 10), minVal + 100);
      }
    }

    minInput.value = minVal;
    maxInput.value = maxVal;
    rangeMin.value = minVal;
    rangeMax.value = maxVal;

    updateProgressBar();
    updateResultDisplay();
  }

  function updateProgressBar() {
    const rangeMin = document.getElementById('rangeMin');
    const rangeMax = document.getElementById('rangeMax');
    const rangeProgress = document.getElementById('rangeProgress');

    if (!rangeMin || !rangeMax || !rangeProgress) return;

    const minVal = parseInt(rangeMin.value, 10);
    const maxVal = parseInt(rangeMax.value, 10);
    const max = parseInt(rangeMax.max, 10);

    const minPercent = (minVal / max) * 100;
    const maxPercent = (maxVal / max) * 100;

    rangeProgress.style.left = minPercent + '%';
    rangeProgress.style.width = (maxPercent - minPercent) + '%';
  }

  function updateResultDisplay() {
    const minInput = document.getElementById('minPrice');
    const maxInput = document.getElementById('maxPrice');
    const resultDisplay = document.getElementById('resultDisplay');

    if (!resultDisplay) return;

    const minVal = parseInt(minInput.value, 10) || 0;
    const maxVal = parseInt(maxInput.value, 10) || 0;

    resultDisplay.innerHTML = `Seçilmiş qiymət aralığı: <strong>${minVal} ₼ - ${maxVal} ₼</strong>`;
  }

  function toggleFilter() {
    const content = document.querySelector('.filter-content');
    const icon = document.querySelector('.toggle-icon');

    if (!content || !icon) return;

    content.classList.toggle('open');
    icon.classList.toggle('active');
  }

//   return null;
};

export default FilterPriceRange;
