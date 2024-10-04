// 버튼 클릭 시 alert-box 보여주기
const box = document.querySelector(".alert-box");

const notivication = (state) => {
  box.style.display = state;
  // allert1 클릭 시 : 아이디를 입력해 주세요
  // allert2 클릭 시 : 비밀번호를 입력해 주세요
  // console.log(box.firstChild);
  // console.log(box.firstElementChild);

  box.firstChild = "아이디를";
};

document
  .querySelector(".alert1")
  .addEventListener("click", () =>
    notivication("block", "아이디를 입력해 주세요")
  );
document
  .querySelector(".alert2")
  .addEventListener("click", () =>
    notivication("block", "비밀번호를 입력해 주세요")
  );
document
  .querySelector(".close")
  .addEventListener("click", () => notivication("none"));
