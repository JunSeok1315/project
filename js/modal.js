function readURL(input) {
  if (input.files && input.files[0]) {
    let reader = new FileReader();
    let image = document.getElementById("preview");
    image.style.width = "180px";
    image.style.height = "200px";

    reader.onload = function (e) {
      document.getElementById("preview").src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  } else {
    document.getElementById("preview").src = "";
  }
}
// 등록하기 이미지첨부

const regimodal = document.getElementById("regmodal");
const btnModal = document.getElementById("btn-modal");
btnModal.addEventListener("click", (e) => {
  regmodal.style.display = "flex";
  retouchBg.style.display = "none";
});
const closeBtn = document.getElementById("closemodal");
closeBtn.addEventListener("click", (e) => {
  regmodal.style.display = "none";
});
window.addEventListener("keyup", (e) => {
  if (regmodal.style.display === "flex" && e.key === "Escape") {
    regmodal.style.display = "none";
  }
});
// 등록하기 등록버튼 클릭 모달창 on, off

window.addEventListener("keyup", (e) => {
  if (retouchBg.style.display === "flex" && e.key === "Escape") {
    retouchBg.style.display = "none";
  }
});

$(".readmore").click(function () {
  retouchBg.style.display = "flex";
  regmodal.style.display = "none";
});

$("#del").click(function () {
  alert("삭제되었습니다.");
});
