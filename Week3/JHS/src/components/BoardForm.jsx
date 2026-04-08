function BoardForm({ onAdd }) {
  const handleSubmit = () => {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    if (!title || !content) return;
    onAdd({ id: Date.now(), title, content });
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
  };

  return (
    <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }}>
      <h3>게시글 작성 영역 (BoardForm)</h3>
      <input id="title" type="text" placeholder="제목을 입력하세요" />
      <input id="content" type="text" placeholder="내용을 입력하세요" />
      <button onClick={handleSubmit}>추가</button>
    </div>
  );
}

export default BoardForm;