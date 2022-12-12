/** gnb toggle **/
const toggleBtn = document.querySelector('.gnbbar_menu_toggleBtn');
const menu = document.querySelector('.menu_list');
const gnbbar = document.querySelector('.gnb_bar');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    gnbbar.classList.toggle('active');
});


/** 모달 오픈 **/
const openButton = document.getElementById("open"); //오픈 버튼 = 문서 중에서 ID가 오픈을 불러오면 돼
const modal = document.querySelector(".modal"); //모달 = 문서안의 .모달이야
const closeBtn = modal.querySelector("button"); //클로즈 버튼 = .모달안의 버튼이야
const openModal = () => {
    modal.classList.remove("hidden"); //오픈 모달 기능 = 모달의 클래스 네임 히든을 지워
}
const closeModal = () => {
    modal.classList.add("hidden"); //클로즈 모달 기능 = 모달의 클래스 네임 히든을 붙여
}
closeBtn.addEventListener("click", closeModal); //클로즈버튼을 누르면 클로즈 모달이 실행돼
openButton.addEventListener("click", openModal); //오픈 모달을 누르면 오픈 모달이 실행돼


// react용 텍스트에리어 자동 높이 설정 

//     const textarea = useRef();
//     const handleResizeHeight = () => {
//     textarea.current.style.height = 'auto'
//     textarea.current.style.hegith = textarea.current.scrollHeight + 'px';
//     }    
