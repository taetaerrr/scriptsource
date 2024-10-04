//tab-button 클릭시 짝 맞춰서 tab-content 보여주기

// 이벤트 대상 찾아오기
const firstLi = document.querySelector(".list li:nth-child(1)");
const secondLi = document.querySelector(".list li:nth-child(2)");
const lastLi = document.querySelector(".list li:nth-child(3)");

// show 클래스명을 부착할 요소 찾아오기
const firstDiv = document.querySelector(".list li:nth-child(2)");
const secondDiv = document.querySelector(".list li:nth-child(3)");
const lastDiv = document.querySelector(".list li:nth-child(4)");

// orange 클래스명 부착과 제거

//이벤트 연결
firstLi.addEventListener("click", (e) => {
  //firstDiv show 클래스명 부착
  firstDiv.classList.add("show");
  // 다른 secondDiv, lastDiv => show 제거
  secondDiv.classList.remove("show");
  lastDiv.classList.remove("show");

  firstLi.classList.add("orange");
  secondLi.classList.remove("orange");
  lastLi.classList.remove("orange");
});
secondLi.addEventListener("click", (e) => {
  //secondDiv show 클래스명 부착
  secondDiv.classList.add("show");
  // 다른 secondDiv, lastDiv => show 제거
  firstDiv.classList.remove("show");
  lastDiv.classList.remove("show");

  firstLi.classList.remove("orange");
  secondLi.classList.add("orange");
  lastLi.classList.remove("orange");
});
lastLi.addEventListener("click", (e) => {
  //lastDiv show 클래스명 부착
  lastDiv.classList.add("show");
  // 다른 secondDiv, lastDiv => show 제거
  secondDiv.classList.remove("show");
  firstDiv.classList.remove("show");

  firstLi.classList.remove("orange");
  secondLi.classList.remove("orange");
  lastLi.classList.add("orange");
});
