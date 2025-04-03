// 정규식 정의 (특정 형식의 텍스트 찾기)
const findRegex = /\s*\/\/\s*([^|]+?)\|([\s\S]+?)\/\/\s*/g;
const replaceWith = `
  <details class="editable-toggle">
    <summary>$1</summary>
    <div class="toggle-content">$2</div>
    <button class="edit-btn">편집</button>
    <button class="delete-btn">삭제</button>
  </details>
`;

// 확장이 실행될 때 토글 기능을 적용하는 함수
function applyToggle() {
  document.querySelectorAll(".mes_text").forEach((element) => {
    element.innerHTML = element.innerHTML.replace(findRegex, replaceWith);
  });
}

// 편집 및 삭제 기능 추가
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (event) => {
    if (event.target.classList.contains("edit-btn")) {
      const toggle = event.target.closest(".editable-toggle");
      const contentDiv = toggle.querySelector(".toggle-content");

      // 기존 내용 가져오기
      const currentText = contentDiv.innerHTML;

      // 편집 입력창 표시
      const newText = prompt("새로운 내용을 입력하세요:", currentText);
      if (newText !== null) {
        contentDiv.innerHTML = newText;
      }
    }

    // 삭제 버튼 클릭 시
    if (event.target.classList.contains("delete-btn")) {
      const toggle = event.target.closest(".editable-toggle");
      toggle.remove(); // 해당 토글만 삭제
    }
  });

  // "적용" 버튼을 눌렀을 때 실행
  document.getElementById("apply_toggle")?.addEventListener("click", applyToggle);
});
