// Счетчик слайдера
const num1 = document.querySelector(".swiper-paginations .num1");
const num2 = document.querySelector(".swiper-paginations .num2");
const slide = document.querySelectorAll(".swiper-slide");
const swPag = document.querySelectorAll(".swiper-pagination-bullet");
const btnSwiper = document.querySelectorAll(".swiper-button");

slide.forEach((item, idx) => {
  num2.textContent = idx + 1;
});

swPag.forEach((item) => {
  item.addEventListener("click", () => {
    setTimeout(() => {
      slideCheck();
    }, 100);
  });
});
btnSwiper.forEach((item) => {
  item.addEventListener("click", () => {
    setTimeout(() => {
      slideCheck();
    }, 100);
  });
});
slide.forEach((item) => {
  item.addEventListener("touchend", () => {
    setTimeout(() => {
      slideCheck();
    }, 100);
  });
});
function slideCheck() {
  slide.forEach((item, idx) => {
    if (idx === 0 && item.classList.contains("swiper-slide-active")) {
      num1.textContent = "1";
    } else if (idx === 1 && item.classList.contains("swiper-slide-active")) {
      num1.textContent = "2";
    } else if (idx === 2 && item.classList.contains("swiper-slide-active")) {
      num1.textContent = "3";
    } else if (idx === 3 && item.classList.contains("swiper-slide-active")) {
      num1.textContent = "4";
    } else if (idx === 4 && item.classList.contains("swiper-slide-active")) {
      num1.textContent = "5";
    } else if (idx === 5 && item.classList.contains("swiper-slide-active")) {
      num1.textContent = "6";
    } else if (idx === 6 && item.classList.contains("swiper-slide-active")) {
      num1.textContent = "7";
    } else if (idx === 7 && item.classList.contains("swiper-slide-active")) {
      num1.textContent = "8";
    } else if (idx === 8 && item.classList.contains("swiper-slide-active")) {
      num1.textContent = "9";
    } else if (idx === 9 && item.classList.contains("swiper-slide-active")) {
      num1.textContent = "10";
    }
  });
}

// Счетчик коментариев
function countComment() {
  const comment = document.querySelectorAll(".rewiew__people");
  let commetCount = document.querySelector(".count__comment");
  let commetCountBtn = document.querySelector(".count__comment_btn");
  let hideComent = document.querySelectorAll(
    ".hide__review_block .rewiew__people"
  );
  comment.forEach((item, idx) => {
    commetCount.textContent = idx + 1;
  });
  hideComent.forEach((item, idx) => {
    if (commetCountBtn) {
      commetCountBtn.textContent = idx + 1;
    }
  });
}
countComment();

// Открыть - спрятать коментарии
const openComment = document.querySelector(".review__button .button");
const hideBlock = document.querySelector(".hide__review_block");
openComment.addEventListener("click", () => {
  if (openComment.textContent === "Приховати") {
    hideBlock.style.display = "none";
    openComment.innerHTML =
      '<span>Показати ще </span> <span class="count__comment_btn"></span> <span> відгуків</span>';
    countComment();
  } else {
    hideBlock.style.display = "block";
    openComment.innerHTML = "<span>Приховати</span>";
  }
});

//Работа с формой
let nameInput = document.querySelector("#name");
let commentInput = document.querySelector("#com");
const btnForm = document.querySelector(".appraisal__form form button");
const blockComment = document.querySelector(".main__review_block");

// btnForm.addEventListener("click", (e) => {
//   e.preventDefault();
//   let starsInfo = Array.from(
//     document.querySelectorAll(".appraisal__stars svg")
//   );

//   let nameInputVal = nameInput.value;
//   let commentinputVal = commentInput.value;
//   let newComment0 = `<div class="rewiew__people rewiew__people_next">
//   <div class="rewiew__people_header">
//     <div class="people__name">
//       <span>${nameInputVal}</span>
//       <p class="date_custom date_now"></p>
//     </div>
//     <div class="people__stars">
//       <div class="section__reviews_stars">
//         <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
//         <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
//       </svg></div>
//         <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
//         <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
//       </svg></div>
//         <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
//         <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
//       </svg></div>
//         <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
//         <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
//       </svg></div>
//         <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
//         <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
//       </svg></div>
//       </div>
//     </div>
//   </div>
//   <div class="rewiew__desc">
//     <p>${commentinputVal}
//      </p>
//   </div>
//   <div class="rewiew__people_footer">
//     <div class="rewiew__people_footer_like">
//       <div class="like__img"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M0.00223912 6.12938C-0.00492236 6.0469 0.00513922 5.96383 0.0317855 5.88544C0.0584318 5.80705 0.101081 5.73506 0.157026 5.67403C0.212972 5.613 0.280993 5.56427 0.356772 5.53092C0.432552 5.49758 0.514435 5.48035 0.597227 5.48033H1.73792C1.89635 5.48033 2.0483 5.54327 2.16033 5.6553C2.27236 5.76733 2.3353 5.91927 2.3353 6.0777V11.7528C2.3353 11.9112 2.27236 12.0632 2.16033 12.1752C2.0483 12.2872 1.89635 12.3502 1.73792 12.3502H1.09096C0.941444 12.3502 0.797351 12.2942 0.687138 12.1931C0.576925 12.0921 0.508606 11.9534 0.495673 11.8045L0.00223912 6.12938ZM4.12743 5.89102C4.12743 5.64132 4.28275 5.4179 4.50826 5.31157C5.00079 5.07919 5.83981 4.61234 6.21825 3.98121C6.70601 3.16758 6.798 1.69773 6.81294 1.36111C6.81503 1.31392 6.81383 1.26673 6.8201 1.22013C6.90105 0.636793 8.02681 1.3181 8.45841 2.03854C8.69288 2.42922 8.72275 2.94267 8.69826 3.34381C8.67168 3.77272 8.54593 4.18701 8.42257 4.5986L8.15972 5.47585H11.4026C11.4949 5.47584 11.5859 5.49722 11.6686 5.53831C11.7512 5.5794 11.8232 5.63908 11.8789 5.71267C11.9346 5.78626 11.9725 5.87176 11.9896 5.96246C12.0068 6.05315 12.0026 6.14658 11.9776 6.23541L10.3736 11.9153C10.3382 12.0405 10.2628 12.1508 10.159 12.2293C10.0551 12.3078 9.92851 12.3503 9.79833 12.3502H4.7248C4.56637 12.3502 4.41443 12.2872 4.3024 12.1752C4.19037 12.0632 4.12743 11.9112 4.12743 11.7528V5.89102Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg> <span>Корисно</span>(<span>0</span>)</div>
//     </div>
//     <div class="rewiew__people_footer_message"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M8.45 1.3V5.85H2.0605L1.677 6.2335L1.3 6.6105V1.3H8.45ZM9.1 0H0.65C0.2925 0 0 0.2925 0 0.65V9.75L2.6 7.15H9.1C9.4575 7.15 9.75 6.8575 9.75 6.5V0.65C9.75 0.2925 9.4575 0 9.1 0ZM12.35 2.6H11.05V8.45H2.6V9.75C2.6 10.1075 2.8925 10.4 3.25 10.4H10.4L13 13V3.25C13 2.8925 12.7075 2.6 12.35 2.6Z" fill="#999999"></path></svg></div>
//   </div>
// </div>`;
//   let newComment1 = `<div class="rewiew__people rewiew__people_next">
//   <div class="rewiew__people_header">
//     <div class="people__name">
//       <span>${nameInputVal}</span>
//       <p class="date_custom date_now"></p>
//     </div>
//     <div class="people__stars">
//       <div class="section__reviews_stars">
//         <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
//           <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
//         </svg></div>
//         <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
//         <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
//       </svg></div>
//         <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
//         <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
//       </svg></div>
//         <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
//         <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
//       </svg></div>
//         <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
//         <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
//       </svg></div>
//       </div>
//     </div>
//   </div>
//   <div class="rewiew__desc">
//     <p>${commentinputVal}
//      </p>
//   </div>
//   <div class="rewiew__people_footer">
//     <div class="rewiew__people_footer_like">
//       <div class="like__img"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M0.00223912 6.12938C-0.00492236 6.0469 0.00513922 5.96383 0.0317855 5.88544C0.0584318 5.80705 0.101081 5.73506 0.157026 5.67403C0.212972 5.613 0.280993 5.56427 0.356772 5.53092C0.432552 5.49758 0.514435 5.48035 0.597227 5.48033H1.73792C1.89635 5.48033 2.0483 5.54327 2.16033 5.6553C2.27236 5.76733 2.3353 5.91927 2.3353 6.0777V11.7528C2.3353 11.9112 2.27236 12.0632 2.16033 12.1752C2.0483 12.2872 1.89635 12.3502 1.73792 12.3502H1.09096C0.941444 12.3502 0.797351 12.2942 0.687138 12.1931C0.576925 12.0921 0.508606 11.9534 0.495673 11.8045L0.00223912 6.12938ZM4.12743 5.89102C4.12743 5.64132 4.28275 5.4179 4.50826 5.31157C5.00079 5.07919 5.83981 4.61234 6.21825 3.98121C6.70601 3.16758 6.798 1.69773 6.81294 1.36111C6.81503 1.31392 6.81383 1.26673 6.8201 1.22013C6.90105 0.636793 8.02681 1.3181 8.45841 2.03854C8.69288 2.42922 8.72275 2.94267 8.69826 3.34381C8.67168 3.77272 8.54593 4.18701 8.42257 4.5986L8.15972 5.47585H11.4026C11.4949 5.47584 11.5859 5.49722 11.6686 5.53831C11.7512 5.5794 11.8232 5.63908 11.8789 5.71267C11.9346 5.78626 11.9725 5.87176 11.9896 5.96246C12.0068 6.05315 12.0026 6.14658 11.9776 6.23541L10.3736 11.9153C10.3382 12.0405 10.2628 12.1508 10.159 12.2293C10.0551 12.3078 9.92851 12.3503 9.79833 12.3502H4.7248C4.56637 12.3502 4.41443 12.2872 4.3024 12.1752C4.19037 12.0632 4.12743 11.9112 4.12743 11.7528V5.89102Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg> <span>Корисно</span>(<span>0</span>)</div>
//     </div>
//     <div class="rewiew__people_footer_message"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M8.45 1.3V5.85H2.0605L1.677 6.2335L1.3 6.6105V1.3H8.45ZM9.1 0H0.65C0.2925 0 0 0.2925 0 0.65V9.75L2.6 7.15H9.1C9.4575 7.15 9.75 6.8575 9.75 6.5V0.65C9.75 0.2925 9.4575 0 9.1 0ZM12.35 2.6H11.05V8.45H2.6V9.75C2.6 10.1075 2.8925 10.4 3.25 10.4H10.4L13 13V3.25C13 2.8925 12.7075 2.6 12.35 2.6Z" fill="#999999"></path></svg></div>
//   </div>
// </div>`;
//   let newComment2 = `<div class="rewiew__people rewiew__people_next">
//   <div class="rewiew__people_header">
//     <div class="people__name">
//       <span>${nameInputVal}</span>
//       <p class="date_custom date_now"></p>
//     </div>
//     <div class="people__stars">
//       <div class="section__reviews_stars">
//         <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
//           <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
//         </svg></div>
//         <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
//           <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
//         </svg></div>
//         <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
//         <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
//       </svg></div>
//         <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
//         <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
//       </svg></div>
//         <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
//         <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
//       </svg></div>
//       </div>
//     </div>
//   </div>
//   <div class="rewiew__desc">
//     <p>${commentinputVal}
//      </p>
//   </div>
//   <div class="rewiew__people_footer">
//     <div class="rewiew__people_footer_like">
//       <div class="like__img"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M0.00223912 6.12938C-0.00492236 6.0469 0.00513922 5.96383 0.0317855 5.88544C0.0584318 5.80705 0.101081 5.73506 0.157026 5.67403C0.212972 5.613 0.280993 5.56427 0.356772 5.53092C0.432552 5.49758 0.514435 5.48035 0.597227 5.48033H1.73792C1.89635 5.48033 2.0483 5.54327 2.16033 5.6553C2.27236 5.76733 2.3353 5.91927 2.3353 6.0777V11.7528C2.3353 11.9112 2.27236 12.0632 2.16033 12.1752C2.0483 12.2872 1.89635 12.3502 1.73792 12.3502H1.09096C0.941444 12.3502 0.797351 12.2942 0.687138 12.1931C0.576925 12.0921 0.508606 11.9534 0.495673 11.8045L0.00223912 6.12938ZM4.12743 5.89102C4.12743 5.64132 4.28275 5.4179 4.50826 5.31157C5.00079 5.07919 5.83981 4.61234 6.21825 3.98121C6.70601 3.16758 6.798 1.69773 6.81294 1.36111C6.81503 1.31392 6.81383 1.26673 6.8201 1.22013C6.90105 0.636793 8.02681 1.3181 8.45841 2.03854C8.69288 2.42922 8.72275 2.94267 8.69826 3.34381C8.67168 3.77272 8.54593 4.18701 8.42257 4.5986L8.15972 5.47585H11.4026C11.4949 5.47584 11.5859 5.49722 11.6686 5.53831C11.7512 5.5794 11.8232 5.63908 11.8789 5.71267C11.9346 5.78626 11.9725 5.87176 11.9896 5.96246C12.0068 6.05315 12.0026 6.14658 11.9776 6.23541L10.3736 11.9153C10.3382 12.0405 10.2628 12.1508 10.159 12.2293C10.0551 12.3078 9.92851 12.3503 9.79833 12.3502H4.7248C4.56637 12.3502 4.41443 12.2872 4.3024 12.1752C4.19037 12.0632 4.12743 11.9112 4.12743 11.7528V5.89102Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg> <span>Корисно</span>(<span>0</span>)</div>
//     </div>
//     <div class="rewiew__people_footer_message"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M8.45 1.3V5.85H2.0605L1.677 6.2335L1.3 6.6105V1.3H8.45ZM9.1 0H0.65C0.2925 0 0 0.2925 0 0.65V9.75L2.6 7.15H9.1C9.4575 7.15 9.75 6.8575 9.75 6.5V0.65C9.75 0.2925 9.4575 0 9.1 0ZM12.35 2.6H11.05V8.45H2.6V9.75C2.6 10.1075 2.8925 10.4 3.25 10.4H10.4L13 13V3.25C13 2.8925 12.7075 2.6 12.35 2.6Z" fill="#999999"></path></svg></div>
//   </div>
// </div>`;
//   let newComment3 = `<div class="rewiew__people rewiew__people_next">
//   <div class="rewiew__people_header">
//     <div class="people__name">
//       <span>${nameInputVal}</span>
//       <p class="date_custom date_now"></p>
//     </div>
//     <div class="people__stars">
//       <div class="section__reviews_stars">
//         <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
//           <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
//         </svg></div>
//         <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
//           <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
//         </svg></div>
//         <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
//           <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
//         </svg></div>
//         <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
//         <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
//       </svg></div>
//         <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
//         <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
//       </svg></div>
//       </div>
//     </div>
//   </div>
//   <div class="rewiew__desc">
//     <p>${commentinputVal}
//      </p>
//   </div>
//   <div class="rewiew__people_footer">
//     <div class="rewiew__people_footer_like">
//       <div class="like__img"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M0.00223912 6.12938C-0.00492236 6.0469 0.00513922 5.96383 0.0317855 5.88544C0.0584318 5.80705 0.101081 5.73506 0.157026 5.67403C0.212972 5.613 0.280993 5.56427 0.356772 5.53092C0.432552 5.49758 0.514435 5.48035 0.597227 5.48033H1.73792C1.89635 5.48033 2.0483 5.54327 2.16033 5.6553C2.27236 5.76733 2.3353 5.91927 2.3353 6.0777V11.7528C2.3353 11.9112 2.27236 12.0632 2.16033 12.1752C2.0483 12.2872 1.89635 12.3502 1.73792 12.3502H1.09096C0.941444 12.3502 0.797351 12.2942 0.687138 12.1931C0.576925 12.0921 0.508606 11.9534 0.495673 11.8045L0.00223912 6.12938ZM4.12743 5.89102C4.12743 5.64132 4.28275 5.4179 4.50826 5.31157C5.00079 5.07919 5.83981 4.61234 6.21825 3.98121C6.70601 3.16758 6.798 1.69773 6.81294 1.36111C6.81503 1.31392 6.81383 1.26673 6.8201 1.22013C6.90105 0.636793 8.02681 1.3181 8.45841 2.03854C8.69288 2.42922 8.72275 2.94267 8.69826 3.34381C8.67168 3.77272 8.54593 4.18701 8.42257 4.5986L8.15972 5.47585H11.4026C11.4949 5.47584 11.5859 5.49722 11.6686 5.53831C11.7512 5.5794 11.8232 5.63908 11.8789 5.71267C11.9346 5.78626 11.9725 5.87176 11.9896 5.96246C12.0068 6.05315 12.0026 6.14658 11.9776 6.23541L10.3736 11.9153C10.3382 12.0405 10.2628 12.1508 10.159 12.2293C10.0551 12.3078 9.92851 12.3503 9.79833 12.3502H4.7248C4.56637 12.3502 4.41443 12.2872 4.3024 12.1752C4.19037 12.0632 4.12743 11.9112 4.12743 11.7528V5.89102Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg> <span>Корисно</span>(<span>0</span>)</div>
//     </div>
//     <div class="rewiew__people_footer_message"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M8.45 1.3V5.85H2.0605L1.677 6.2335L1.3 6.6105V1.3H8.45ZM9.1 0H0.65C0.2925 0 0 0.2925 0 0.65V9.75L2.6 7.15H9.1C9.4575 7.15 9.75 6.8575 9.75 6.5V0.65C9.75 0.2925 9.4575 0 9.1 0ZM12.35 2.6H11.05V8.45H2.6V9.75C2.6 10.1075 2.8925 10.4 3.25 10.4H10.4L13 13V3.25C13 2.8925 12.7075 2.6 12.35 2.6Z" fill="#999999"></path></svg></div>
//   </div>
// </div>`;
//   let newComment4 = `<div class="rewiew__people rewiew__people_next">
//   <div class="rewiew__people_header">
//     <div class="people__name">
//       <span>${nameInputVal}</span>
//       <p class="date_custom date_now"></p>
//     </div>
//     <div class="people__stars">
//       <div class="section__reviews_stars">
//         <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
//           <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
//         </svg></div>
//         <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
//           <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
//         </svg></div>
//         <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
//           <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
//         </svg></div>
//         <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
//           <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
//         </svg></div>
//         <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
//         <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
//       </svg></div>
//       </div>
//     </div>
//   </div>
//   <div class="rewiew__desc">
//     <p>${commentinputVal}
//      </p>
//   </div>
//   <div class="rewiew__people_footer">
//     <div class="rewiew__people_footer_like">
//       <div class="like__img"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M0.00223912 6.12938C-0.00492236 6.0469 0.00513922 5.96383 0.0317855 5.88544C0.0584318 5.80705 0.101081 5.73506 0.157026 5.67403C0.212972 5.613 0.280993 5.56427 0.356772 5.53092C0.432552 5.49758 0.514435 5.48035 0.597227 5.48033H1.73792C1.89635 5.48033 2.0483 5.54327 2.16033 5.6553C2.27236 5.76733 2.3353 5.91927 2.3353 6.0777V11.7528C2.3353 11.9112 2.27236 12.0632 2.16033 12.1752C2.0483 12.2872 1.89635 12.3502 1.73792 12.3502H1.09096C0.941444 12.3502 0.797351 12.2942 0.687138 12.1931C0.576925 12.0921 0.508606 11.9534 0.495673 11.8045L0.00223912 6.12938ZM4.12743 5.89102C4.12743 5.64132 4.28275 5.4179 4.50826 5.31157C5.00079 5.07919 5.83981 4.61234 6.21825 3.98121C6.70601 3.16758 6.798 1.69773 6.81294 1.36111C6.81503 1.31392 6.81383 1.26673 6.8201 1.22013C6.90105 0.636793 8.02681 1.3181 8.45841 2.03854C8.69288 2.42922 8.72275 2.94267 8.69826 3.34381C8.67168 3.77272 8.54593 4.18701 8.42257 4.5986L8.15972 5.47585H11.4026C11.4949 5.47584 11.5859 5.49722 11.6686 5.53831C11.7512 5.5794 11.8232 5.63908 11.8789 5.71267C11.9346 5.78626 11.9725 5.87176 11.9896 5.96246C12.0068 6.05315 12.0026 6.14658 11.9776 6.23541L10.3736 11.9153C10.3382 12.0405 10.2628 12.1508 10.159 12.2293C10.0551 12.3078 9.92851 12.3503 9.79833 12.3502H4.7248C4.56637 12.3502 4.41443 12.2872 4.3024 12.1752C4.19037 12.0632 4.12743 11.9112 4.12743 11.7528V5.89102Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg> <span>Корисно</span>(<span>0</span>)</div>
//     </div>
//     <div class="rewiew__people_footer_message"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M8.45 1.3V5.85H2.0605L1.677 6.2335L1.3 6.6105V1.3H8.45ZM9.1 0H0.65C0.2925 0 0 0.2925 0 0.65V9.75L2.6 7.15H9.1C9.4575 7.15 9.75 6.8575 9.75 6.5V0.65C9.75 0.2925 9.4575 0 9.1 0ZM12.35 2.6H11.05V8.45H2.6V9.75C2.6 10.1075 2.8925 10.4 3.25 10.4H10.4L13 13V3.25C13 2.8925 12.7075 2.6 12.35 2.6Z" fill="#999999"></path></svg></div>
//   </div>
// </div>`;

//   let newComment5 = `<div class="rewiew__people rewiew__people_next">
//   <div class="rewiew__people_header">
//     <div class="people__name">
//       <span>${nameInputVal}</span>
//       <p class="date_custom date_now"></p>
//     </div>
//     <div class="people__stars">
//       <div class="section__reviews_stars">
//         <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
//           <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
//         </svg></div>
//         <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
//           <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
//         </svg></div>
//         <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
//           <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
//         </svg></div>
//         <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
//           <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
//         </svg></div>
//         <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
//           <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
//         </svg></div>
//       </div>
//     </div>
//   </div>
//   <div class="rewiew__desc">
//     <p>${commentinputVal}
//      </p>
//   </div>
//   <div class="rewiew__people_footer">
//     <div class="rewiew__people_footer_like">
//       <div class="like__img"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M0.00223912 6.12938C-0.00492236 6.0469 0.00513922 5.96383 0.0317855 5.88544C0.0584318 5.80705 0.101081 5.73506 0.157026 5.67403C0.212972 5.613 0.280993 5.56427 0.356772 5.53092C0.432552 5.49758 0.514435 5.48035 0.597227 5.48033H1.73792C1.89635 5.48033 2.0483 5.54327 2.16033 5.6553C2.27236 5.76733 2.3353 5.91927 2.3353 6.0777V11.7528C2.3353 11.9112 2.27236 12.0632 2.16033 12.1752C2.0483 12.2872 1.89635 12.3502 1.73792 12.3502H1.09096C0.941444 12.3502 0.797351 12.2942 0.687138 12.1931C0.576925 12.0921 0.508606 11.9534 0.495673 11.8045L0.00223912 6.12938ZM4.12743 5.89102C4.12743 5.64132 4.28275 5.4179 4.50826 5.31157C5.00079 5.07919 5.83981 4.61234 6.21825 3.98121C6.70601 3.16758 6.798 1.69773 6.81294 1.36111C6.81503 1.31392 6.81383 1.26673 6.8201 1.22013C6.90105 0.636793 8.02681 1.3181 8.45841 2.03854C8.69288 2.42922 8.72275 2.94267 8.69826 3.34381C8.67168 3.77272 8.54593 4.18701 8.42257 4.5986L8.15972 5.47585H11.4026C11.4949 5.47584 11.5859 5.49722 11.6686 5.53831C11.7512 5.5794 11.8232 5.63908 11.8789 5.71267C11.9346 5.78626 11.9725 5.87176 11.9896 5.96246C12.0068 6.05315 12.0026 6.14658 11.9776 6.23541L10.3736 11.9153C10.3382 12.0405 10.2628 12.1508 10.159 12.2293C10.0551 12.3078 9.92851 12.3503 9.79833 12.3502H4.7248C4.56637 12.3502 4.41443 12.2872 4.3024 12.1752C4.19037 12.0632 4.12743 11.9112 4.12743 11.7528V5.89102Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg> <span>Корисно</span>(<span>0</span>)</div>
//     </div>
//     <div class="rewiew__people_footer_message"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M8.45 1.3V5.85H2.0605L1.677 6.2335L1.3 6.6105V1.3H8.45ZM9.1 0H0.65C0.2925 0 0 0.2925 0 0.65V9.75L2.6 7.15H9.1C9.4575 7.15 9.75 6.8575 9.75 6.5V0.65C9.75 0.2925 9.4575 0 9.1 0ZM12.35 2.6H11.05V8.45H2.6V9.75C2.6 10.1075 2.8925 10.4 3.25 10.4H10.4L13 13V3.25C13 2.8925 12.7075 2.6 12.35 2.6Z" fill="#999999"></path></svg></div>
//   </div>
// </div>`;

//   if (!starsInfo[0].classList.contains("active__stars")) {
//     blockComment.insertAdjacentHTML("afterbegin", newComment0);
//   } else if (
//     starsInfo[0].classList.contains("active__stars") &&
//     starsInfo[1].classList.contains("active__stars") &&
//     starsInfo[2].classList.contains("active__stars") &&
//     starsInfo[3].classList.contains("active__stars") &&
//     starsInfo[4].classList.contains("active__stars")
//   ) {
//     blockComment.insertAdjacentHTML("afterbegin", newComment5);
//   } else if (
//     starsInfo[0].classList.contains("active__stars") &&
//     starsInfo[1].classList.contains("active__stars") &&
//     starsInfo[2].classList.contains("active__stars") &&
//     starsInfo[3].classList.contains("active__stars")
//   ) {
//     blockComment.insertAdjacentHTML("afterbegin", newComment4);
//   } else if (
//     starsInfo[0].classList.contains("active__stars") &&
//     starsInfo[1].classList.contains("active__stars") &&
//     starsInfo[2].classList.contains("active__stars")
//   ) {
//     blockComment.insertAdjacentHTML("afterbegin", newComment3);
//   } else if (
//     starsInfo[0].classList.contains("active__stars") &&
//     starsInfo[1].classList.contains("active__stars")
//   ) {
//     blockComment.insertAdjacentHTML("afterbegin", newComment2);
//   } else if (starsInfo[0].classList.contains("active__stars")) {
//     blockComment.insertAdjacentHTML("afterbegin", newComment1);
//   }

//   countComment();
//   dateNow();
//   nameInput.value = "";
//   commentInput.value = "";
// });

// Работа со звездами

const stars = document.querySelector(".appraisal__stars");
const star = Array.from(document.querySelectorAll(".appraisal__stars path"));

stars.addEventListener("click", (e) => {
  if (
    e.target === star[0] ||
    e.target === star[1] ||
    e.target === star[2] ||
    e.target === star[3] ||
    e.target === star[4]
  )
    star.forEach((item) => {
      item.closest("svg").classList.remove("active__stars");
    });
  if (e.target === star[0]) {
    e.target.closest("svg").classList.add("active__stars");
  } else if (e.target === star[1]) {
    star[0].closest("svg").classList.add("active__stars");
    star[1].closest("svg").classList.add("active__stars");
  } else if (e.target === star[2]) {
    star[0].closest("svg").classList.add("active__stars");
    star[1].closest("svg").classList.add("active__stars");
    star[2].closest("svg").classList.add("active__stars");
  } else if (e.target === star[3]) {
    star[0].closest("svg").classList.add("active__stars");
    star[1].closest("svg").classList.add("active__stars");
    star[2].closest("svg").classList.add("active__stars");
    star[3].closest("svg").classList.add("active__stars");
  } else if (e.target === star[4]) {
    star[0].closest("svg").classList.add("active__stars");
    star[1].closest("svg").classList.add("active__stars");
    star[2].closest("svg").classList.add("active__stars");
    star[3].closest("svg").classList.add("active__stars");
    star[4].closest("svg").classList.add("active__stars");
  }
});

// Получаем текущую дату
const today = new Date();

// Извлекаем компоненты даты: день, месяц и год
const day = String(today.getDate()).padStart(2, "0");
const month = String(today.getMonth() + 1).padStart(2, "0"); // Месяцы начинаются с 0
const year = today.getFullYear();

// Формируем дату в нужном формате
const formattedDate = `${day}.${month}.${year}`;
const formattedDate2 = `${day - 1}.${month}.${year}`;
const formattedDate3 = `${day - 2}.${month}.${year}`;

const dateBlock2 = document.querySelectorAll(".date_custom2");
const dateBlock3 = document.querySelectorAll(".date_custom3");

dateNow();
dateBlock2.forEach((item) => {
  item.insertAdjacentHTML("afterbegin", formattedDate2);
});
dateBlock3.forEach((item) => {
  item.insertAdjacentHTML("afterbegin", formattedDate3);
});
function dateNow() {
  let dateBlock = document.querySelectorAll(".date_now");
  dateBlock.forEach((item) => {
    item.textContent = "";
    item.insertAdjacentHTML("afterbegin", formattedDate);
  });
}

let likeComment = Array.from(document.querySelectorAll(".like__img"));

//
btnForm.addEventListener("click", (e) => {
  e.preventDefault();

  let getLocalComments = JSON.parse(localStorage.getItem("comments"));
  if (getLocalComments) {
    const message = document.querySelector(".messageLocal");
    message.classList.remove("hide");
    setTimeout(() => {
      message.classList.add("hide");
    }, 2000);
  } else {
    if (nameInput.value === "" && commentInput.value === "") {
      const message = document.querySelector(".messageLocall");
      message.classList.remove("hide");
      setTimeout(() => {
        message.classList.add("hide");
      }, 2000);
    } else {
      let countStarsLocal = 0;
      let starsInfo = Array.from(
        document.querySelectorAll(".appraisal__stars svg")
      );
      if (!starsInfo[0].classList.contains("active__stars")) {
        countStarsLocal = 0;
      } else if (
        starsInfo[0].classList.contains("active__stars") &&
        starsInfo[1].classList.contains("active__stars") &&
        starsInfo[2].classList.contains("active__stars") &&
        starsInfo[3].classList.contains("active__stars") &&
        starsInfo[4].classList.contains("active__stars")
      ) {
        countStarsLocal = 5;
      } else if (
        starsInfo[0].classList.contains("active__stars") &&
        starsInfo[1].classList.contains("active__stars") &&
        starsInfo[2].classList.contains("active__stars") &&
        starsInfo[3].classList.contains("active__stars")
      ) {
        countStarsLocal = 4;
      } else if (
        starsInfo[0].classList.contains("active__stars") &&
        starsInfo[1].classList.contains("active__stars") &&
        starsInfo[2].classList.contains("active__stars")
      ) {
        countStarsLocal = 3;
      } else if (
        starsInfo[0].classList.contains("active__stars") &&
        starsInfo[1].classList.contains("active__stars")
      ) {
        countStarsLocal = 2;
      } else if (starsInfo[0].classList.contains("active__stars")) {
        countStarsLocal = 1;
      }

      let localComment = {
        nameInputVal: nameInput.value,
        commentinputVal: commentInput.value,
        countStarsLocal: countStarsLocal,
        dateNows: formattedDate,
      };
      localStorage.setItem("comments", JSON.stringify(localComment));
      let getLocalComments = JSON.parse(localStorage.getItem("comments"));

      let newComment0 = `<div class="rewiew__people rewiew__people_next">
      <div class="rewiew__people_header">
        <div class="people__name">
          <span>${getLocalComments.nameInputVal}</span>
          <p class="date_custom">${getLocalComments.dateNows}</p>
        </div>
        <div class="people__stars">
          <div class="section__reviews_stars">
            <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
            <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
          </svg></div>
            <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
            <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
          </svg></div>
            <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
            <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
          </svg></div>
            <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
            <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
          </svg></div>
            <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
            <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
          </svg></div>
          </div>
        </div>
      </div>
      <div class="rewiew__desc">
        <p>${getLocalComments.commentinputVal}
         </p>
      </div>
      <div class="rewiew__people_footer">
        <div class="rewiew__people_footer_like">
          <div class="like__img"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M0.00223912 6.12938C-0.00492236 6.0469 0.00513922 5.96383 0.0317855 5.88544C0.0584318 5.80705 0.101081 5.73506 0.157026 5.67403C0.212972 5.613 0.280993 5.56427 0.356772 5.53092C0.432552 5.49758 0.514435 5.48035 0.597227 5.48033H1.73792C1.89635 5.48033 2.0483 5.54327 2.16033 5.6553C2.27236 5.76733 2.3353 5.91927 2.3353 6.0777V11.7528C2.3353 11.9112 2.27236 12.0632 2.16033 12.1752C2.0483 12.2872 1.89635 12.3502 1.73792 12.3502H1.09096C0.941444 12.3502 0.797351 12.2942 0.687138 12.1931C0.576925 12.0921 0.508606 11.9534 0.495673 11.8045L0.00223912 6.12938ZM4.12743 5.89102C4.12743 5.64132 4.28275 5.4179 4.50826 5.31157C5.00079 5.07919 5.83981 4.61234 6.21825 3.98121C6.70601 3.16758 6.798 1.69773 6.81294 1.36111C6.81503 1.31392 6.81383 1.26673 6.8201 1.22013C6.90105 0.636793 8.02681 1.3181 8.45841 2.03854C8.69288 2.42922 8.72275 2.94267 8.69826 3.34381C8.67168 3.77272 8.54593 4.18701 8.42257 4.5986L8.15972 5.47585H11.4026C11.4949 5.47584 11.5859 5.49722 11.6686 5.53831C11.7512 5.5794 11.8232 5.63908 11.8789 5.71267C11.9346 5.78626 11.9725 5.87176 11.9896 5.96246C12.0068 6.05315 12.0026 6.14658 11.9776 6.23541L10.3736 11.9153C10.3382 12.0405 10.2628 12.1508 10.159 12.2293C10.0551 12.3078 9.92851 12.3503 9.79833 12.3502H4.7248C4.56637 12.3502 4.41443 12.2872 4.3024 12.1752C4.19037 12.0632 4.12743 11.9112 4.12743 11.7528V5.89102Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg> <span>Корисно</span>(<span>0</span>)</div>
        </div>
        <div class="rewiew__people_footer_message"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M8.45 1.3V5.85H2.0605L1.677 6.2335L1.3 6.6105V1.3H8.45ZM9.1 0H0.65C0.2925 0 0 0.2925 0 0.65V9.75L2.6 7.15H9.1C9.4575 7.15 9.75 6.8575 9.75 6.5V0.65C9.75 0.2925 9.4575 0 9.1 0ZM12.35 2.6H11.05V8.45H2.6V9.75C2.6 10.1075 2.8925 10.4 3.25 10.4H10.4L13 13V3.25C13 2.8925 12.7075 2.6 12.35 2.6Z" fill="#999999"></path></svg></div>
      </div>
    </div>`;
      let newComment1 = `<div class="rewiew__people rewiew__people_next">
      <div class="rewiew__people_header">
        <div class="people__name">
          <span>${getLocalComments.nameInputVal}</span>
          <p class="date_custom">${getLocalComments.dateNows}</p>
        </div>
        <div class="people__stars">
          <div class="section__reviews_stars">
            <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
              <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
            </svg></div>
            <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
            <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
          </svg></div>
            <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
            <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
          </svg></div>
            <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
            <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
          </svg></div>
            <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
            <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
          </svg></div>
          </div>
        </div>
      </div>
      <div class="rewiew__desc">
        <p>${getLocalComments.commentinputVal}
         </p>
      </div>
      <div class="rewiew__people_footer">
        <div class="rewiew__people_footer_like">
          <div class="like__img"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M0.00223912 6.12938C-0.00492236 6.0469 0.00513922 5.96383 0.0317855 5.88544C0.0584318 5.80705 0.101081 5.73506 0.157026 5.67403C0.212972 5.613 0.280993 5.56427 0.356772 5.53092C0.432552 5.49758 0.514435 5.48035 0.597227 5.48033H1.73792C1.89635 5.48033 2.0483 5.54327 2.16033 5.6553C2.27236 5.76733 2.3353 5.91927 2.3353 6.0777V11.7528C2.3353 11.9112 2.27236 12.0632 2.16033 12.1752C2.0483 12.2872 1.89635 12.3502 1.73792 12.3502H1.09096C0.941444 12.3502 0.797351 12.2942 0.687138 12.1931C0.576925 12.0921 0.508606 11.9534 0.495673 11.8045L0.00223912 6.12938ZM4.12743 5.89102C4.12743 5.64132 4.28275 5.4179 4.50826 5.31157C5.00079 5.07919 5.83981 4.61234 6.21825 3.98121C6.70601 3.16758 6.798 1.69773 6.81294 1.36111C6.81503 1.31392 6.81383 1.26673 6.8201 1.22013C6.90105 0.636793 8.02681 1.3181 8.45841 2.03854C8.69288 2.42922 8.72275 2.94267 8.69826 3.34381C8.67168 3.77272 8.54593 4.18701 8.42257 4.5986L8.15972 5.47585H11.4026C11.4949 5.47584 11.5859 5.49722 11.6686 5.53831C11.7512 5.5794 11.8232 5.63908 11.8789 5.71267C11.9346 5.78626 11.9725 5.87176 11.9896 5.96246C12.0068 6.05315 12.0026 6.14658 11.9776 6.23541L10.3736 11.9153C10.3382 12.0405 10.2628 12.1508 10.159 12.2293C10.0551 12.3078 9.92851 12.3503 9.79833 12.3502H4.7248C4.56637 12.3502 4.41443 12.2872 4.3024 12.1752C4.19037 12.0632 4.12743 11.9112 4.12743 11.7528V5.89102Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg> <span>Корисно</span>(<span>0</span>)</div>
        </div>
        <div class="rewiew__people_footer_message"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M8.45 1.3V5.85H2.0605L1.677 6.2335L1.3 6.6105V1.3H8.45ZM9.1 0H0.65C0.2925 0 0 0.2925 0 0.65V9.75L2.6 7.15H9.1C9.4575 7.15 9.75 6.8575 9.75 6.5V0.65C9.75 0.2925 9.4575 0 9.1 0ZM12.35 2.6H11.05V8.45H2.6V9.75C2.6 10.1075 2.8925 10.4 3.25 10.4H10.4L13 13V3.25C13 2.8925 12.7075 2.6 12.35 2.6Z" fill="#999999"></path></svg></div>
      </div>
    </div>`;
      let newComment2 = `<div class="rewiew__people rewiew__people_next">
      <div class="rewiew__people_header">
        <div class="people__name">
          <span>${getLocalComments.nameInputVal}</span>
          <p class="date_custom">${getLocalComments.dateNows}</p>
        </div>
        <div class="people__stars">
          <div class="section__reviews_stars">
            <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
              <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
            </svg></div>
            <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
              <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
            </svg></div>
            <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
            <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
          </svg></div>
            <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
            <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
          </svg></div>
            <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
            <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
          </svg></div>
          </div>
        </div>
      </div>
      <div class="rewiew__desc">
        <p>${getLocalComments.commentinputVal}
         </p>
      </div>
      <div class="rewiew__people_footer">
        <div class="rewiew__people_footer_like">
          <div class="like__img"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M0.00223912 6.12938C-0.00492236 6.0469 0.00513922 5.96383 0.0317855 5.88544C0.0584318 5.80705 0.101081 5.73506 0.157026 5.67403C0.212972 5.613 0.280993 5.56427 0.356772 5.53092C0.432552 5.49758 0.514435 5.48035 0.597227 5.48033H1.73792C1.89635 5.48033 2.0483 5.54327 2.16033 5.6553C2.27236 5.76733 2.3353 5.91927 2.3353 6.0777V11.7528C2.3353 11.9112 2.27236 12.0632 2.16033 12.1752C2.0483 12.2872 1.89635 12.3502 1.73792 12.3502H1.09096C0.941444 12.3502 0.797351 12.2942 0.687138 12.1931C0.576925 12.0921 0.508606 11.9534 0.495673 11.8045L0.00223912 6.12938ZM4.12743 5.89102C4.12743 5.64132 4.28275 5.4179 4.50826 5.31157C5.00079 5.07919 5.83981 4.61234 6.21825 3.98121C6.70601 3.16758 6.798 1.69773 6.81294 1.36111C6.81503 1.31392 6.81383 1.26673 6.8201 1.22013C6.90105 0.636793 8.02681 1.3181 8.45841 2.03854C8.69288 2.42922 8.72275 2.94267 8.69826 3.34381C8.67168 3.77272 8.54593 4.18701 8.42257 4.5986L8.15972 5.47585H11.4026C11.4949 5.47584 11.5859 5.49722 11.6686 5.53831C11.7512 5.5794 11.8232 5.63908 11.8789 5.71267C11.9346 5.78626 11.9725 5.87176 11.9896 5.96246C12.0068 6.05315 12.0026 6.14658 11.9776 6.23541L10.3736 11.9153C10.3382 12.0405 10.2628 12.1508 10.159 12.2293C10.0551 12.3078 9.92851 12.3503 9.79833 12.3502H4.7248C4.56637 12.3502 4.41443 12.2872 4.3024 12.1752C4.19037 12.0632 4.12743 11.9112 4.12743 11.7528V5.89102Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg> <span>Корисно</span>(<span>0</span>)</div>
        </div>
        <div class="rewiew__people_footer_message"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M8.45 1.3V5.85H2.0605L1.677 6.2335L1.3 6.6105V1.3H8.45ZM9.1 0H0.65C0.2925 0 0 0.2925 0 0.65V9.75L2.6 7.15H9.1C9.4575 7.15 9.75 6.8575 9.75 6.5V0.65C9.75 0.2925 9.4575 0 9.1 0ZM12.35 2.6H11.05V8.45H2.6V9.75C2.6 10.1075 2.8925 10.4 3.25 10.4H10.4L13 13V3.25C13 2.8925 12.7075 2.6 12.35 2.6Z" fill="#999999"></path></svg></div>
      </div>
    </div>`;
      let newComment3 = `<div class="rewiew__people rewiew__people_next">
      <div class="rewiew__people_header">
        <div class="people__name">
          <span>${getLocalComments.nameInputVal}</span>
          <p class="date_custom">${getLocalComments.dateNows}</p>
        </div>
        <div class="people__stars">
          <div class="section__reviews_stars">
            <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
              <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
            </svg></div>
            <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
              <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
            </svg></div>
            <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
              <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
            </svg></div>
            <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
            <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
          </svg></div>
            <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
            <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
          </svg></div>
          </div>
        </div>
      </div>
      <div class="rewiew__desc">
        <p>${getLocalComments.commentinputVal}
         </p>
      </div>
      <div class="rewiew__people_footer">
        <div class="rewiew__people_footer_like">
          <div class="like__img"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M0.00223912 6.12938C-0.00492236 6.0469 0.00513922 5.96383 0.0317855 5.88544C0.0584318 5.80705 0.101081 5.73506 0.157026 5.67403C0.212972 5.613 0.280993 5.56427 0.356772 5.53092C0.432552 5.49758 0.514435 5.48035 0.597227 5.48033H1.73792C1.89635 5.48033 2.0483 5.54327 2.16033 5.6553C2.27236 5.76733 2.3353 5.91927 2.3353 6.0777V11.7528C2.3353 11.9112 2.27236 12.0632 2.16033 12.1752C2.0483 12.2872 1.89635 12.3502 1.73792 12.3502H1.09096C0.941444 12.3502 0.797351 12.2942 0.687138 12.1931C0.576925 12.0921 0.508606 11.9534 0.495673 11.8045L0.00223912 6.12938ZM4.12743 5.89102C4.12743 5.64132 4.28275 5.4179 4.50826 5.31157C5.00079 5.07919 5.83981 4.61234 6.21825 3.98121C6.70601 3.16758 6.798 1.69773 6.81294 1.36111C6.81503 1.31392 6.81383 1.26673 6.8201 1.22013C6.90105 0.636793 8.02681 1.3181 8.45841 2.03854C8.69288 2.42922 8.72275 2.94267 8.69826 3.34381C8.67168 3.77272 8.54593 4.18701 8.42257 4.5986L8.15972 5.47585H11.4026C11.4949 5.47584 11.5859 5.49722 11.6686 5.53831C11.7512 5.5794 11.8232 5.63908 11.8789 5.71267C11.9346 5.78626 11.9725 5.87176 11.9896 5.96246C12.0068 6.05315 12.0026 6.14658 11.9776 6.23541L10.3736 11.9153C10.3382 12.0405 10.2628 12.1508 10.159 12.2293C10.0551 12.3078 9.92851 12.3503 9.79833 12.3502H4.7248C4.56637 12.3502 4.41443 12.2872 4.3024 12.1752C4.19037 12.0632 4.12743 11.9112 4.12743 11.7528V5.89102Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg> <span>Корисно</span>(<span>0</span>)</div>
        </div>
        <div class="rewiew__people_footer_message"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M8.45 1.3V5.85H2.0605L1.677 6.2335L1.3 6.6105V1.3H8.45ZM9.1 0H0.65C0.2925 0 0 0.2925 0 0.65V9.75L2.6 7.15H9.1C9.4575 7.15 9.75 6.8575 9.75 6.5V0.65C9.75 0.2925 9.4575 0 9.1 0ZM12.35 2.6H11.05V8.45H2.6V9.75C2.6 10.1075 2.8925 10.4 3.25 10.4H10.4L13 13V3.25C13 2.8925 12.7075 2.6 12.35 2.6Z" fill="#999999"></path></svg></div>
      </div>
    </div>`;
      let newComment4 = `<div class="rewiew__people rewiew__people_next">
      <div class="rewiew__people_header">
        <div class="people__name">
          <span>${getLocalComments.nameInputVal}</span>
          <p class="date_custom">${getLocalComments.dateNows}</p>
        </div>
        <div class="people__stars">
          <div class="section__reviews_stars">
            <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
              <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
            </svg></div>
            <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
              <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
            </svg></div>
            <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
              <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
            </svg></div>
            <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
              <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
            </svg></div>
            <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
            <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
          </svg></div>
          </div>
        </div>
      </div>
      <div class="rewiew__desc">
        <p>${getLocalComments.commentinputVal}
         </p>
      </div>
      <div class="rewiew__people_footer">
        <div class="rewiew__people_footer_like">
          <div class="like__img"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M0.00223912 6.12938C-0.00492236 6.0469 0.00513922 5.96383 0.0317855 5.88544C0.0584318 5.80705 0.101081 5.73506 0.157026 5.67403C0.212972 5.613 0.280993 5.56427 0.356772 5.53092C0.432552 5.49758 0.514435 5.48035 0.597227 5.48033H1.73792C1.89635 5.48033 2.0483 5.54327 2.16033 5.6553C2.27236 5.76733 2.3353 5.91927 2.3353 6.0777V11.7528C2.3353 11.9112 2.27236 12.0632 2.16033 12.1752C2.0483 12.2872 1.89635 12.3502 1.73792 12.3502H1.09096C0.941444 12.3502 0.797351 12.2942 0.687138 12.1931C0.576925 12.0921 0.508606 11.9534 0.495673 11.8045L0.00223912 6.12938ZM4.12743 5.89102C4.12743 5.64132 4.28275 5.4179 4.50826 5.31157C5.00079 5.07919 5.83981 4.61234 6.21825 3.98121C6.70601 3.16758 6.798 1.69773 6.81294 1.36111C6.81503 1.31392 6.81383 1.26673 6.8201 1.22013C6.90105 0.636793 8.02681 1.3181 8.45841 2.03854C8.69288 2.42922 8.72275 2.94267 8.69826 3.34381C8.67168 3.77272 8.54593 4.18701 8.42257 4.5986L8.15972 5.47585H11.4026C11.4949 5.47584 11.5859 5.49722 11.6686 5.53831C11.7512 5.5794 11.8232 5.63908 11.8789 5.71267C11.9346 5.78626 11.9725 5.87176 11.9896 5.96246C12.0068 6.05315 12.0026 6.14658 11.9776 6.23541L10.3736 11.9153C10.3382 12.0405 10.2628 12.1508 10.159 12.2293C10.0551 12.3078 9.92851 12.3503 9.79833 12.3502H4.7248C4.56637 12.3502 4.41443 12.2872 4.3024 12.1752C4.19037 12.0632 4.12743 11.9112 4.12743 11.7528V5.89102Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg> <span>Корисно</span>(<span>0</span>)</div>
        </div>
        <div class="rewiew__people_footer_message"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M8.45 1.3V5.85H2.0605L1.677 6.2335L1.3 6.6105V1.3H8.45ZM9.1 0H0.65C0.2925 0 0 0.2925 0 0.65V9.75L2.6 7.15H9.1C9.4575 7.15 9.75 6.8575 9.75 6.5V0.65C9.75 0.2925 9.4575 0 9.1 0ZM12.35 2.6H11.05V8.45H2.6V9.75C2.6 10.1075 2.8925 10.4 3.25 10.4H10.4L13 13V3.25C13 2.8925 12.7075 2.6 12.35 2.6Z" fill="#999999"></path></svg></div>
      </div>
    </div>`;
      let newComment5 = `<div class="rewiew__people rewiew__people_next">
      <div class="rewiew__people_header">
        <div class="people__name">
          <span>${getLocalComments.nameInputVal}</span>
          <p class="date_custom">${getLocalComments.dateNows}</p>
        </div>
        <div class="people__stars">
          <div class="section__reviews_stars">
            <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
              <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
            </svg></div>
            <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
              <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
            </svg></div>
            <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
              <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
            </svg></div>
            <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
              <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
            </svg></div>
            <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
              <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
            </svg></div>
          </div>
        </div>
      </div>
      <div class="rewiew__desc">
        <p>${getLocalComments.commentinputVal}
         </p>
      </div>
      <div class="rewiew__people_footer">
        <div class="rewiew__people_footer_like">
          <div class="like__img"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M0.00223912 6.12938C-0.00492236 6.0469 0.00513922 5.96383 0.0317855 5.88544C0.0584318 5.80705 0.101081 5.73506 0.157026 5.67403C0.212972 5.613 0.280993 5.56427 0.356772 5.53092C0.432552 5.49758 0.514435 5.48035 0.597227 5.48033H1.73792C1.89635 5.48033 2.0483 5.54327 2.16033 5.6553C2.27236 5.76733 2.3353 5.91927 2.3353 6.0777V11.7528C2.3353 11.9112 2.27236 12.0632 2.16033 12.1752C2.0483 12.2872 1.89635 12.3502 1.73792 12.3502H1.09096C0.941444 12.3502 0.797351 12.2942 0.687138 12.1931C0.576925 12.0921 0.508606 11.9534 0.495673 11.8045L0.00223912 6.12938ZM4.12743 5.89102C4.12743 5.64132 4.28275 5.4179 4.50826 5.31157C5.00079 5.07919 5.83981 4.61234 6.21825 3.98121C6.70601 3.16758 6.798 1.69773 6.81294 1.36111C6.81503 1.31392 6.81383 1.26673 6.8201 1.22013C6.90105 0.636793 8.02681 1.3181 8.45841 2.03854C8.69288 2.42922 8.72275 2.94267 8.69826 3.34381C8.67168 3.77272 8.54593 4.18701 8.42257 4.5986L8.15972 5.47585H11.4026C11.4949 5.47584 11.5859 5.49722 11.6686 5.53831C11.7512 5.5794 11.8232 5.63908 11.8789 5.71267C11.9346 5.78626 11.9725 5.87176 11.9896 5.96246C12.0068 6.05315 12.0026 6.14658 11.9776 6.23541L10.3736 11.9153C10.3382 12.0405 10.2628 12.1508 10.159 12.2293C10.0551 12.3078 9.92851 12.3503 9.79833 12.3502H4.7248C4.56637 12.3502 4.41443 12.2872 4.3024 12.1752C4.19037 12.0632 4.12743 11.9112 4.12743 11.7528V5.89102Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg> <span>Корисно</span>(<span>0</span>)</div>
        </div>
        <div class="rewiew__people_footer_message"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M8.45 1.3V5.85H2.0605L1.677 6.2335L1.3 6.6105V1.3H8.45ZM9.1 0H0.65C0.2925 0 0 0.2925 0 0.65V9.75L2.6 7.15H9.1C9.4575 7.15 9.75 6.8575 9.75 6.5V0.65C9.75 0.2925 9.4575 0 9.1 0ZM12.35 2.6H11.05V8.45H2.6V9.75C2.6 10.1075 2.8925 10.4 3.25 10.4H10.4L13 13V3.25C13 2.8925 12.7075 2.6 12.35 2.6Z" fill="#999999"></path></svg></div>
      </div>
    </div>`;

      if (getLocalComments.countStarsLocal === 0) {
        blockComment.insertAdjacentHTML("afterbegin", newComment0);
      } else if (getLocalComments.countStarsLocal === 1) {
        blockComment.insertAdjacentHTML("afterbegin", newComment1);
      } else if (getLocalComments.countStarsLocal === 2) {
        blockComment.insertAdjacentHTML("afterbegin", newComment2);
      } else if (getLocalComments.countStarsLocal === 3) {
        blockComment.insertAdjacentHTML("afterbegin", newComment3);
      } else if (getLocalComments.countStarsLocal === 4) {
        blockComment.insertAdjacentHTML("afterbegin", newComment4);
      } else if (getLocalComments.countStarsLocal === 5) {
        blockComment.insertAdjacentHTML("afterbegin", newComment5);
      }

      countComment();
      dateNow();
      nameInput.value = "";
      commentInput.value = "";
      likeComment = Array.from(document.querySelectorAll(".like__img"));
      comLike();
      const starsGray = document.querySelectorAll('.appraisal__stars svg')
      starsGray.forEach(item=>{
        item.classList.remove('active__stars');
      })
    }
  }
});

// Отображение коментария с localStorage
let getLocalComments = JSON.parse(localStorage.getItem("comments"));
if (getLocalComments) {
  openLocalComment();
}
function openLocalComment() {
  let getLocalComments = JSON.parse(localStorage.getItem("comments"));

  let newComment0 = `<div class="rewiew__people rewiew__people_next">
  <div class="rewiew__people_header">
    <div class="people__name">
      <span>${getLocalComments.nameInputVal}</span>
      <p class="date_custom">${getLocalComments.dateNows}</p>
    </div>
    <div class="people__stars">
      <div class="section__reviews_stars">
        <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
        <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
      </svg></div>
        <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
        <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
      </svg></div>
        <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
        <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
      </svg></div>
        <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
        <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
      </svg></div>
        <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
        <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
      </svg></div>
      </div>
    </div>
  </div>
  <div class="rewiew__desc">
    <p>${getLocalComments.commentinputVal}
     </p>
  </div>
  <div class="rewiew__people_footer">
    <div class="rewiew__people_footer_like">
      <div class="like__img"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M0.00223912 6.12938C-0.00492236 6.0469 0.00513922 5.96383 0.0317855 5.88544C0.0584318 5.80705 0.101081 5.73506 0.157026 5.67403C0.212972 5.613 0.280993 5.56427 0.356772 5.53092C0.432552 5.49758 0.514435 5.48035 0.597227 5.48033H1.73792C1.89635 5.48033 2.0483 5.54327 2.16033 5.6553C2.27236 5.76733 2.3353 5.91927 2.3353 6.0777V11.7528C2.3353 11.9112 2.27236 12.0632 2.16033 12.1752C2.0483 12.2872 1.89635 12.3502 1.73792 12.3502H1.09096C0.941444 12.3502 0.797351 12.2942 0.687138 12.1931C0.576925 12.0921 0.508606 11.9534 0.495673 11.8045L0.00223912 6.12938ZM4.12743 5.89102C4.12743 5.64132 4.28275 5.4179 4.50826 5.31157C5.00079 5.07919 5.83981 4.61234 6.21825 3.98121C6.70601 3.16758 6.798 1.69773 6.81294 1.36111C6.81503 1.31392 6.81383 1.26673 6.8201 1.22013C6.90105 0.636793 8.02681 1.3181 8.45841 2.03854C8.69288 2.42922 8.72275 2.94267 8.69826 3.34381C8.67168 3.77272 8.54593 4.18701 8.42257 4.5986L8.15972 5.47585H11.4026C11.4949 5.47584 11.5859 5.49722 11.6686 5.53831C11.7512 5.5794 11.8232 5.63908 11.8789 5.71267C11.9346 5.78626 11.9725 5.87176 11.9896 5.96246C12.0068 6.05315 12.0026 6.14658 11.9776 6.23541L10.3736 11.9153C10.3382 12.0405 10.2628 12.1508 10.159 12.2293C10.0551 12.3078 9.92851 12.3503 9.79833 12.3502H4.7248C4.56637 12.3502 4.41443 12.2872 4.3024 12.1752C4.19037 12.0632 4.12743 11.9112 4.12743 11.7528V5.89102Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg> <span>Корисно</span>(<span>0</span>)</div>
    </div>
    <div class="rewiew__people_footer_message"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M8.45 1.3V5.85H2.0605L1.677 6.2335L1.3 6.6105V1.3H8.45ZM9.1 0H0.65C0.2925 0 0 0.2925 0 0.65V9.75L2.6 7.15H9.1C9.4575 7.15 9.75 6.8575 9.75 6.5V0.65C9.75 0.2925 9.4575 0 9.1 0ZM12.35 2.6H11.05V8.45H2.6V9.75C2.6 10.1075 2.8925 10.4 3.25 10.4H10.4L13 13V3.25C13 2.8925 12.7075 2.6 12.35 2.6Z" fill="#999999"></path></svg></div>
  </div>
</div>`;
  let newComment1 = `<div class="rewiew__people rewiew__people_next">
  <div class="rewiew__people_header">
    <div class="people__name">
      <span>${getLocalComments.nameInputVal}</span>
      <p class="date_custom">${getLocalComments.dateNows}</p>
    </div>
    <div class="people__stars">
      <div class="section__reviews_stars">
        <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
          <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
        </svg></div>
        <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
        <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
      </svg></div>
        <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
        <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
      </svg></div>
        <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
        <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
      </svg></div>
        <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
        <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
      </svg></div>
      </div>
    </div>
  </div>
  <div class="rewiew__desc">
    <p>${getLocalComments.commentinputVal}
     </p>
  </div>
  <div class="rewiew__people_footer">
    <div class="rewiew__people_footer_like">
      <div class="like__img"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M0.00223912 6.12938C-0.00492236 6.0469 0.00513922 5.96383 0.0317855 5.88544C0.0584318 5.80705 0.101081 5.73506 0.157026 5.67403C0.212972 5.613 0.280993 5.56427 0.356772 5.53092C0.432552 5.49758 0.514435 5.48035 0.597227 5.48033H1.73792C1.89635 5.48033 2.0483 5.54327 2.16033 5.6553C2.27236 5.76733 2.3353 5.91927 2.3353 6.0777V11.7528C2.3353 11.9112 2.27236 12.0632 2.16033 12.1752C2.0483 12.2872 1.89635 12.3502 1.73792 12.3502H1.09096C0.941444 12.3502 0.797351 12.2942 0.687138 12.1931C0.576925 12.0921 0.508606 11.9534 0.495673 11.8045L0.00223912 6.12938ZM4.12743 5.89102C4.12743 5.64132 4.28275 5.4179 4.50826 5.31157C5.00079 5.07919 5.83981 4.61234 6.21825 3.98121C6.70601 3.16758 6.798 1.69773 6.81294 1.36111C6.81503 1.31392 6.81383 1.26673 6.8201 1.22013C6.90105 0.636793 8.02681 1.3181 8.45841 2.03854C8.69288 2.42922 8.72275 2.94267 8.69826 3.34381C8.67168 3.77272 8.54593 4.18701 8.42257 4.5986L8.15972 5.47585H11.4026C11.4949 5.47584 11.5859 5.49722 11.6686 5.53831C11.7512 5.5794 11.8232 5.63908 11.8789 5.71267C11.9346 5.78626 11.9725 5.87176 11.9896 5.96246C12.0068 6.05315 12.0026 6.14658 11.9776 6.23541L10.3736 11.9153C10.3382 12.0405 10.2628 12.1508 10.159 12.2293C10.0551 12.3078 9.92851 12.3503 9.79833 12.3502H4.7248C4.56637 12.3502 4.41443 12.2872 4.3024 12.1752C4.19037 12.0632 4.12743 11.9112 4.12743 11.7528V5.89102Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg> <span>Корисно</span>(<span>0</span>)</div>
    </div>
    <div class="rewiew__people_footer_message"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M8.45 1.3V5.85H2.0605L1.677 6.2335L1.3 6.6105V1.3H8.45ZM9.1 0H0.65C0.2925 0 0 0.2925 0 0.65V9.75L2.6 7.15H9.1C9.4575 7.15 9.75 6.8575 9.75 6.5V0.65C9.75 0.2925 9.4575 0 9.1 0ZM12.35 2.6H11.05V8.45H2.6V9.75C2.6 10.1075 2.8925 10.4 3.25 10.4H10.4L13 13V3.25C13 2.8925 12.7075 2.6 12.35 2.6Z" fill="#999999"></path></svg></div>
  </div>
</div>`;
  let newComment2 = `<div class="rewiew__people rewiew__people_next">
  <div class="rewiew__people_header">
    <div class="people__name">
      <span>${getLocalComments.nameInputVal}</span>
      <p class="date_custom">${getLocalComments.dateNows}</p>
    </div>
    <div class="people__stars">
      <div class="section__reviews_stars">
        <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
          <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
        </svg></div>
        <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
          <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
        </svg></div>
        <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
        <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
      </svg></div>
        <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
        <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
      </svg></div>
        <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
        <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
      </svg></div>
      </div>
    </div>
  </div>
  <div class="rewiew__desc">
    <p>${getLocalComments.commentinputVal}
     </p>
  </div>
  <div class="rewiew__people_footer">
    <div class="rewiew__people_footer_like">
      <div class="like__img"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M0.00223912 6.12938C-0.00492236 6.0469 0.00513922 5.96383 0.0317855 5.88544C0.0584318 5.80705 0.101081 5.73506 0.157026 5.67403C0.212972 5.613 0.280993 5.56427 0.356772 5.53092C0.432552 5.49758 0.514435 5.48035 0.597227 5.48033H1.73792C1.89635 5.48033 2.0483 5.54327 2.16033 5.6553C2.27236 5.76733 2.3353 5.91927 2.3353 6.0777V11.7528C2.3353 11.9112 2.27236 12.0632 2.16033 12.1752C2.0483 12.2872 1.89635 12.3502 1.73792 12.3502H1.09096C0.941444 12.3502 0.797351 12.2942 0.687138 12.1931C0.576925 12.0921 0.508606 11.9534 0.495673 11.8045L0.00223912 6.12938ZM4.12743 5.89102C4.12743 5.64132 4.28275 5.4179 4.50826 5.31157C5.00079 5.07919 5.83981 4.61234 6.21825 3.98121C6.70601 3.16758 6.798 1.69773 6.81294 1.36111C6.81503 1.31392 6.81383 1.26673 6.8201 1.22013C6.90105 0.636793 8.02681 1.3181 8.45841 2.03854C8.69288 2.42922 8.72275 2.94267 8.69826 3.34381C8.67168 3.77272 8.54593 4.18701 8.42257 4.5986L8.15972 5.47585H11.4026C11.4949 5.47584 11.5859 5.49722 11.6686 5.53831C11.7512 5.5794 11.8232 5.63908 11.8789 5.71267C11.9346 5.78626 11.9725 5.87176 11.9896 5.96246C12.0068 6.05315 12.0026 6.14658 11.9776 6.23541L10.3736 11.9153C10.3382 12.0405 10.2628 12.1508 10.159 12.2293C10.0551 12.3078 9.92851 12.3503 9.79833 12.3502H4.7248C4.56637 12.3502 4.41443 12.2872 4.3024 12.1752C4.19037 12.0632 4.12743 11.9112 4.12743 11.7528V5.89102Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg> <span>Корисно</span>(<span>0</span>)</div>
    </div>
    <div class="rewiew__people_footer_message"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M8.45 1.3V5.85H2.0605L1.677 6.2335L1.3 6.6105V1.3H8.45ZM9.1 0H0.65C0.2925 0 0 0.2925 0 0.65V9.75L2.6 7.15H9.1C9.4575 7.15 9.75 6.8575 9.75 6.5V0.65C9.75 0.2925 9.4575 0 9.1 0ZM12.35 2.6H11.05V8.45H2.6V9.75C2.6 10.1075 2.8925 10.4 3.25 10.4H10.4L13 13V3.25C13 2.8925 12.7075 2.6 12.35 2.6Z" fill="#999999"></path></svg></div>
  </div>
</div>`;
  let newComment3 = `<div class="rewiew__people rewiew__people_next">
  <div class="rewiew__people_header">
    <div class="people__name">
      <span>${getLocalComments.nameInputVal}</span>
      <p class="date_custom">${getLocalComments.dateNows}</p>
    </div>
    <div class="people__stars">
      <div class="section__reviews_stars">
        <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
          <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
        </svg></div>
        <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
          <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
        </svg></div>
        <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
          <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
        </svg></div>
        <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
        <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
      </svg></div>
        <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
        <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
      </svg></div>
      </div>
    </div>
  </div>
  <div class="rewiew__desc">
    <p>${getLocalComments.commentinputVal}
     </p>
  </div>
  <div class="rewiew__people_footer">
    <div class="rewiew__people_footer_like">
      <div class="like__img"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M0.00223912 6.12938C-0.00492236 6.0469 0.00513922 5.96383 0.0317855 5.88544C0.0584318 5.80705 0.101081 5.73506 0.157026 5.67403C0.212972 5.613 0.280993 5.56427 0.356772 5.53092C0.432552 5.49758 0.514435 5.48035 0.597227 5.48033H1.73792C1.89635 5.48033 2.0483 5.54327 2.16033 5.6553C2.27236 5.76733 2.3353 5.91927 2.3353 6.0777V11.7528C2.3353 11.9112 2.27236 12.0632 2.16033 12.1752C2.0483 12.2872 1.89635 12.3502 1.73792 12.3502H1.09096C0.941444 12.3502 0.797351 12.2942 0.687138 12.1931C0.576925 12.0921 0.508606 11.9534 0.495673 11.8045L0.00223912 6.12938ZM4.12743 5.89102C4.12743 5.64132 4.28275 5.4179 4.50826 5.31157C5.00079 5.07919 5.83981 4.61234 6.21825 3.98121C6.70601 3.16758 6.798 1.69773 6.81294 1.36111C6.81503 1.31392 6.81383 1.26673 6.8201 1.22013C6.90105 0.636793 8.02681 1.3181 8.45841 2.03854C8.69288 2.42922 8.72275 2.94267 8.69826 3.34381C8.67168 3.77272 8.54593 4.18701 8.42257 4.5986L8.15972 5.47585H11.4026C11.4949 5.47584 11.5859 5.49722 11.6686 5.53831C11.7512 5.5794 11.8232 5.63908 11.8789 5.71267C11.9346 5.78626 11.9725 5.87176 11.9896 5.96246C12.0068 6.05315 12.0026 6.14658 11.9776 6.23541L10.3736 11.9153C10.3382 12.0405 10.2628 12.1508 10.159 12.2293C10.0551 12.3078 9.92851 12.3503 9.79833 12.3502H4.7248C4.56637 12.3502 4.41443 12.2872 4.3024 12.1752C4.19037 12.0632 4.12743 11.9112 4.12743 11.7528V5.89102Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg> <span>Корисно</span>(<span>0</span>)</div>
    </div>
    <div class="rewiew__people_footer_message"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M8.45 1.3V5.85H2.0605L1.677 6.2335L1.3 6.6105V1.3H8.45ZM9.1 0H0.65C0.2925 0 0 0.2925 0 0.65V9.75L2.6 7.15H9.1C9.4575 7.15 9.75 6.8575 9.75 6.5V0.65C9.75 0.2925 9.4575 0 9.1 0ZM12.35 2.6H11.05V8.45H2.6V9.75C2.6 10.1075 2.8925 10.4 3.25 10.4H10.4L13 13V3.25C13 2.8925 12.7075 2.6 12.35 2.6Z" fill="#999999"></path></svg></div>
  </div>
</div>`;
  let newComment4 = `<div class="rewiew__people rewiew__people_next">
  <div class="rewiew__people_header">
    <div class="people__name">
      <span>${getLocalComments.nameInputVal}</span>
      <p class="date_custom">${getLocalComments.dateNows}</p>
    </div>
    <div class="people__stars">
      <div class="section__reviews_stars">
        <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
          <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
        </svg></div>
        <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
          <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
        </svg></div>
        <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
          <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
        </svg></div>
        <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
          <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
        </svg></div>
        <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
        <path fill="rgb(221, 221, 221)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
      </svg></div>
      </div>
    </div>
  </div>
  <div class="rewiew__desc">
    <p>${getLocalComments.commentinputVal}
     </p>
  </div>
  <div class="rewiew__people_footer">
    <div class="rewiew__people_footer_like">
      <div class="like__img"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M0.00223912 6.12938C-0.00492236 6.0469 0.00513922 5.96383 0.0317855 5.88544C0.0584318 5.80705 0.101081 5.73506 0.157026 5.67403C0.212972 5.613 0.280993 5.56427 0.356772 5.53092C0.432552 5.49758 0.514435 5.48035 0.597227 5.48033H1.73792C1.89635 5.48033 2.0483 5.54327 2.16033 5.6553C2.27236 5.76733 2.3353 5.91927 2.3353 6.0777V11.7528C2.3353 11.9112 2.27236 12.0632 2.16033 12.1752C2.0483 12.2872 1.89635 12.3502 1.73792 12.3502H1.09096C0.941444 12.3502 0.797351 12.2942 0.687138 12.1931C0.576925 12.0921 0.508606 11.9534 0.495673 11.8045L0.00223912 6.12938ZM4.12743 5.89102C4.12743 5.64132 4.28275 5.4179 4.50826 5.31157C5.00079 5.07919 5.83981 4.61234 6.21825 3.98121C6.70601 3.16758 6.798 1.69773 6.81294 1.36111C6.81503 1.31392 6.81383 1.26673 6.8201 1.22013C6.90105 0.636793 8.02681 1.3181 8.45841 2.03854C8.69288 2.42922 8.72275 2.94267 8.69826 3.34381C8.67168 3.77272 8.54593 4.18701 8.42257 4.5986L8.15972 5.47585H11.4026C11.4949 5.47584 11.5859 5.49722 11.6686 5.53831C11.7512 5.5794 11.8232 5.63908 11.8789 5.71267C11.9346 5.78626 11.9725 5.87176 11.9896 5.96246C12.0068 6.05315 12.0026 6.14658 11.9776 6.23541L10.3736 11.9153C10.3382 12.0405 10.2628 12.1508 10.159 12.2293C10.0551 12.3078 9.92851 12.3503 9.79833 12.3502H4.7248C4.56637 12.3502 4.41443 12.2872 4.3024 12.1752C4.19037 12.0632 4.12743 11.9112 4.12743 11.7528V5.89102Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg> <span>Корисно</span>(<span>0</span>)</div>
    </div>
    <div class="rewiew__people_footer_message"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M8.45 1.3V5.85H2.0605L1.677 6.2335L1.3 6.6105V1.3H8.45ZM9.1 0H0.65C0.2925 0 0 0.2925 0 0.65V9.75L2.6 7.15H9.1C9.4575 7.15 9.75 6.8575 9.75 6.5V0.65C9.75 0.2925 9.4575 0 9.1 0ZM12.35 2.6H11.05V8.45H2.6V9.75C2.6 10.1075 2.8925 10.4 3.25 10.4H10.4L13 13V3.25C13 2.8925 12.7075 2.6 12.35 2.6Z" fill="#999999"></path></svg></div>
  </div>
</div>`;
  let newComment5 = `<div class="rewiew__people rewiew__people_next">
  <div class="rewiew__people_header">
    <div class="people__name">
      <span>${getLocalComments.nameInputVal}</span>
      <p class="date_custom">${getLocalComments.dateNows}</p>
    </div>
    <div class="people__stars">
      <div class="section__reviews_stars">
        <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
          <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
        </svg></div>
        <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
          <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
        </svg></div>
        <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
          <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
        </svg></div>
        <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
          <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
        </svg></div>
        <div class="stars__block"><svg viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 2px">
          <path fill="rgb(255, 193, 7)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
        </svg></div>
      </div>
    </div>
  </div>
  <div class="rewiew__desc">
    <p>${getLocalComments.commentinputVal}
     </p>
  </div>
  <div class="rewiew__people_footer">
    <div class="rewiew__people_footer_like">
      <div class="like__img"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M0.00223912 6.12938C-0.00492236 6.0469 0.00513922 5.96383 0.0317855 5.88544C0.0584318 5.80705 0.101081 5.73506 0.157026 5.67403C0.212972 5.613 0.280993 5.56427 0.356772 5.53092C0.432552 5.49758 0.514435 5.48035 0.597227 5.48033H1.73792C1.89635 5.48033 2.0483 5.54327 2.16033 5.6553C2.27236 5.76733 2.3353 5.91927 2.3353 6.0777V11.7528C2.3353 11.9112 2.27236 12.0632 2.16033 12.1752C2.0483 12.2872 1.89635 12.3502 1.73792 12.3502H1.09096C0.941444 12.3502 0.797351 12.2942 0.687138 12.1931C0.576925 12.0921 0.508606 11.9534 0.495673 11.8045L0.00223912 6.12938ZM4.12743 5.89102C4.12743 5.64132 4.28275 5.4179 4.50826 5.31157C5.00079 5.07919 5.83981 4.61234 6.21825 3.98121C6.70601 3.16758 6.798 1.69773 6.81294 1.36111C6.81503 1.31392 6.81383 1.26673 6.8201 1.22013C6.90105 0.636793 8.02681 1.3181 8.45841 2.03854C8.69288 2.42922 8.72275 2.94267 8.69826 3.34381C8.67168 3.77272 8.54593 4.18701 8.42257 4.5986L8.15972 5.47585H11.4026C11.4949 5.47584 11.5859 5.49722 11.6686 5.53831C11.7512 5.5794 11.8232 5.63908 11.8789 5.71267C11.9346 5.78626 11.9725 5.87176 11.9896 5.96246C12.0068 6.05315 12.0026 6.14658 11.9776 6.23541L10.3736 11.9153C10.3382 12.0405 10.2628 12.1508 10.159 12.2293C10.0551 12.3078 9.92851 12.3503 9.79833 12.3502H4.7248C4.56637 12.3502 4.41443 12.2872 4.3024 12.1752C4.19037 12.0632 4.12743 11.9112 4.12743 11.7528V5.89102Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg> <span>Корисно</span>(<span>0</span>)</div>
    </div>
    <div class="rewiew__people_footer_message"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M8.45 1.3V5.85H2.0605L1.677 6.2335L1.3 6.6105V1.3H8.45ZM9.1 0H0.65C0.2925 0 0 0.2925 0 0.65V9.75L2.6 7.15H9.1C9.4575 7.15 9.75 6.8575 9.75 6.5V0.65C9.75 0.2925 9.4575 0 9.1 0ZM12.35 2.6H11.05V8.45H2.6V9.75C2.6 10.1075 2.8925 10.4 3.25 10.4H10.4L13 13V3.25C13 2.8925 12.7075 2.6 12.35 2.6Z" fill="#999999"></path></svg></div>
  </div>
</div>`;

  if (getLocalComments.countStarsLocal === 0) {
    blockComment.insertAdjacentHTML("afterbegin", newComment0);
  } else if (getLocalComments.countStarsLocal === 1) {
    blockComment.insertAdjacentHTML("afterbegin", newComment1);
  } else if (getLocalComments.countStarsLocal === 2) {
    blockComment.insertAdjacentHTML("afterbegin", newComment2);
  } else if (getLocalComments.countStarsLocal === 3) {
    blockComment.insertAdjacentHTML("afterbegin", newComment3);
  } else if (getLocalComments.countStarsLocal === 4) {
    blockComment.insertAdjacentHTML("afterbegin", newComment4);
  } else if (getLocalComments.countStarsLocal === 5) {
    blockComment.insertAdjacentHTML("afterbegin", newComment5);
  }
  countComment();
  likeComment = Array.from(document.querySelectorAll(".like__img"));
}

// Работа с лайками в коментариях
function comLike() {
  likeComment.forEach((item) => {
    let count = 0;
    item.addEventListener("click", (e) => {
      if (count === 0) {
        item.lastElementChild.textContent =
          +item.lastElementChild.textContent + 1;
        item.firstElementChild.style.fill = "#fff";
        count++;
      } else {
        count--;
        item.lastElementChild.textContent =
          +item.lastElementChild.textContent - 1;
        item.firstElementChild.style.fill = "transparent";
      }
    });
  });
}
comLike();


// Плавная прокрутка к якорю
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

// 
const btnFormServiceBtn = Array.from(document.querySelectorAll('.servise__form_price_btn button')) 
const btnFormService = document.querySelectorAll('.servise__form_wrapper')
let countService = 0;



btnFormService.forEach((item,idx)=>{
  item.addEventListener('click',()=>{
    if(idx === 0){
      if(countService === 0){
        btnFormServiceBtn[0].innerHTML = '<i class="fa-solid fa-check"></i>';
      countService = 1;
      } else {
        btnFormServiceBtn[0].innerHTML = '<i class="fa-solid fa-cart-shopping"></i>';
      countService = 0;
      }
    } else if (idx === 1) {
      if(countService === 0){
        btnFormServiceBtn[1].innerHTML = '<i class="fa-solid fa-check"></i>';
      countService = 1;
      } else {
        btnFormServiceBtn[1].innerHTML = '<i class="fa-solid fa-cart-shopping"></i>';
      countService = 0;
      }
    }
   
    
  })
})