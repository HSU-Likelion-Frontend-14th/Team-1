import { useState } from 'react';
import BoardForm from '../components/BoardForm';
import BoardList from '../components/BoardList';
import styles from './Board.module.scss';

function Board() {
  const [posts, setPosts] = useState(() => {
    const stored = localStorage.getItem('posts');
    console.log(stored)
    return stored ? JSON.parse(stored) : [];
  });

  const handleAdd = (newPost) => {
    const updated = [...posts, newPost];
    setPosts(updated);
    localStorage.setItem("posts", JSON.stringify(updated));
  };

  const handleDelete = (id) => {
    const updated = posts.filter((post) => post.id !== id);
    setPosts(updated);
    localStorage.setItem("posts", JSON.stringify(updated));  // 삭제 시에도 동기화
  };

  return (
    <div className={styles.board}>
      <h2>📝 자유 게시판</h2>
      <BoardForm onAdd={handleAdd} />
      <BoardList posts={posts} onDelete={handleDelete} />
    </div>
  );
}

export default Board;