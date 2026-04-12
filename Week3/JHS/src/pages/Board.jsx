import { useState } from 'react';
import BoardForm from '../components/BoardForm';
import BoardList from '../components/BoardList';
import styles from './Board.module.scss';

function Board() {
  const [posts, setPosts] = useState([]);

  const handleAdd = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className={styles.board}>
      <h2>📝 자유 게시판</h2>
      <BoardForm onAdd={handleAdd} />
      <BoardList posts={posts} />
    </div>
  );
}

export default Board;