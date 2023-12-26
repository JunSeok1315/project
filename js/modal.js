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
}); //모달 on, off

//onclick="" 수정
$("#fix").click(async function () {
  alert("수정되었습니다.");
  retouchBg.style.display = "none";
  location.reload();
});
// function fix() {
//     alert("수정되었습니다.");
//     retouchBg.style.display = "none";
//     location.reload();
// }

$("#del").click(async function () {
  alert("삭제되었습니다.");
  retouchBg.style.display = "none";
});
// function del() {
//     alert("삭제되었습니다.");
//     retouchBg.style.display = "none";
// }
// 자세히 보기 수정하기, 삭제하기

$("#savebtn").click(async function () {
  let file = $("#file1").val();
  let title = $("#title").val();
  let MBTI = $("#MBTI").val();
  let BLOG = $("#BLOG").val();
  let GITHUB = $("#GITHUB").val();
  let advantages = $("#advantages").val();
  let collaborate = $("#collaborate").val();

  await addDoc(xx(db, ""), doc);
  let doc = {
    file: file1,
    title: title,
    MBTI: MBTI,
    BLOG: BLOG,
    GITHUB: GITHUB,
    advantages: advantages,
    collaborate: collaborate,
  };

  alert("저장완료!");

  let temp_html = `<div class="card-flip">
                        <div class="card-inner" >
                            <div class="front-card">
                                <img src="https://img.freepik.com/free-vector/flat-design-thug-life-sunglasses-illustration_23-2150209328.jpg?w=826&t=st=1703205239~exp=1703205839~hmac=4ca364056d836fb07395ecb75d9f866abbd7e9e7e6513c7bcc112644a803f038"
                                    alt="card-img">
                            </div>
                            <div class="back-card">
                                <img src="https://img.freepik.com/free-vector/flat-design-thug-life-sunglasses-illustration_23-2150209328.jpg?w=826&t=st=1703205239~exp=1703205839~hmac=4ca364056d836fb07395ecb75d9f866abbd7e9e7e6513c7bcc112644a803f038"
                                    alt="card-img">
                                <h4 class="title">${title}</h4>
                                <a data-toggle="modal" href="#" class="readmore" onclick="readmore()" data-id="전달할 값">자세히 보기</a>
                            </div>
                        </div>
                    </div>`;

  $("#card").append(temp_html);
});
// 등록하기 버튼 뒤에 파이어베이스 연결하면 새로고침 추가해야댐

$(".readmore").click(function () {
  retouchBg.style.display = "flex";
  regmodal.style.display = "none";
  console.log("연결완료");
});
//자세히보기버튼 클래스 값 조정
