const findRegex = /\s*\/\/\s*([^|]+?)\|([\s\S]+?)\/\/\s*/g;

const replaceWith = `
  <details class="editable-toggle">
    <summary>$1</summary>
    <div class="toggle-content">$2</div>
    <button class="edit-btn">편집</button>
    <button class="delete-btn">삭제</button>
  </details>
`;

document.addEventListener("DOMContentLoaded", () => {
  // 편집 버튼 클릭 시
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
});
