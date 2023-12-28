// 등록하기 버튼 클릭 시 등록 폼 띄우기
const formWrap = document.querySelector('.form_wrap');
const formRegister = document.querySelector('#register');
formRegister.addEventListener('click', function () {
  formWrap.classList.add('form_wrap_show');
});

// 등록 폼 취소하기 버튼 클릭 시 등록 폼 닫기, 폼 value 초기화.
const formClose = document.querySelector('#form_close');
formClose.addEventListener('click', function () {
  formWrap.classList.remove('form_wrap_show');
  document.querySelector('#user_name').value = '';
  document.querySelector('#user_mbti').value = '';
  document.querySelector('#user_vlog').value = '';
  document.querySelector('#user_advantages').value = '';
  document.querySelector('#user_flaw').value = '';
  document.querySelector('#img_box').src =
    'https://i0.wp.com/adventure.co.kr/wp-content/uploads/2020/09/no-image.jpg';
});

// 사진 업로드
const fileDOM = document.querySelector('#file');
const preview = document.querySelector('#img_box');

fileDOM.addEventListener('change', () => {
  const reader = new FileReader();
  reader.onload = ({ target }) => {
    preview.src = target.result;
  };
  reader.readAsDataURL(fileDOM.files[0]);
});

// form 입력 후 등록하기 버튼 클릭 시 카드 추가기능, 동시에 form값 초기화 후 닫기.

document.querySelector('#push_btn').addEventListener('click', function () {
  let userImage = document.querySelector('#img_box').src;
  let userName = document.querySelector('#user_name').value;
  let userCardContent = document.querySelector('.user_card_container');

  let temp_html = `
      <div class="user_card">
        <div class="user_card_front">
          <img src="${userImage}">
        </div>
        <div class="user_card_back">
          <img src="${userImage}">
          <strong>${userName}</strong>
          <button type="button" class="look_btn">자세히보기</button>
        </div>
      </div>
      `;
  userCardContent.insertAdjacentHTML('beforeend', temp_html);

  formWrap.classList.remove('form_wrap_show');
  document.querySelector('#user_name').value = '';
  document.querySelector('#user_mbti').value = '';
  document.querySelector('#user_vlog').value = '';
  document.querySelector('#user_advantages').value = '';
  document.querySelector('#user_flaw').value = '';
  document.querySelector('#img_box').src =
    'https://i0.wp.com/adventure.co.kr/wp-content/uploads/2020/09/no-image.jpg';
});

// 카드 등록 폼 값 가져오는 기능

document.querySelector('#push_btn').addEventListener('click', function () {
  let userImage = document.querySelector('#img_box').src;
  let userName = document.querySelector('#user_name').value;
  let userCardContent = document.querySelector('.user_card_container');

  let temp_html = `
      <div class="user_card">
        <div class="user_card_front">
          <img src="${userImage}">
        </div>
        <div class="user_card_back">
          <img src="${userImage}">
          <strong>${userName}</strong>
          <button type="button" class="look_btn">자세히보기</button>
        </div>
      </div>
      `;
  userCardContent.insertAdjacentHTML('beforeend', temp_html);

  formWrap.classList.remove('form_wrap_show');
  document.querySelector('#user_name').value = '';
  document.querySelector('#user_mbti').value = '';
  document.querySelector('#user_vlog').value = '';
  document.querySelector('#user_advantages').value = '';
  document.querySelector('#user_flaw').value = '';
  document.querySelector('#img_box').src =
    'https://i0.wp.com/adventure.co.kr/wp-content/uploads/2020/09/no-image.jpg';
});

//카드 자세히보기 클릭 시 모달창 나오는 기능
let sjsBtn = document.querySelector('#sjs_btn');
let kahBtn = document.querySelector('#kah_btn');
let gsjBtn = document.querySelector('#gsj_btn');
let psaBtn = document.querySelector('#psa_btn');
let kjsBtn = document.querySelector('#kjs_btn');
let modalWrap = document.querySelector('.modal_wrap');
sjsBtn.addEventListener('click', function () {
  modalWrap.classList.add('modal_show');
});
kahBtn.addEventListener('click', function () {
  modalWrap.classList.add('modal_show');
});
gsjBtn.addEventListener('click', function () {
  modalWrap.classList.add('modal_show');
});
psaBtn.addEventListener('click', function () {
  modalWrap.classList.add('modal_show');
});
kjsBtn.addEventListener('click', function () {
  modalWrap.classList.add('modal_show');
});


// 모달창 X버튼 클릭 시 모달창 닫기
const modalClose = document.querySelector('#modal_close');
modalClose.addEventListener('click', function () {
  modalWrap.classList.remove('modal_show');
  document.querySelector('#modal_user_name').value = '';
  document.querySelector('#modal_user_mbti').value = '';
  document.querySelector('#user_url').value = '';
  document.querySelector('#github_url').value = '';
  document.querySelector('#collaborate').value = '';
  document.querySelector('#advantages').value = '';
  // document.querySelector('#modal_img').src =
  //   'https://i0.wp.com/adventure.co.kr/wp-content/uploads/2020/09/no-image.jpg';
});
