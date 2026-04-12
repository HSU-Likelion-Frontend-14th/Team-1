import BoardItem from './BoardItem';
import styles from './BoardList.module.scss';

function BoardList({ posts }) {
  return (
    <div className={styles.boardList}>
      <h3>게시글 목록 영역 (BoardList)</h3>
      <ul>
        {posts.length === 0
          ? <li>아직 작성된 글이 없습니다.</li>
          : posts.map((post) => (
              <BoardItem key={post.id} post={post} />
            ))
        }
      </ul>
    </div>
  );
}

export default BoardList;