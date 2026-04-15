import { useState } from 'react';
import styles from './BoardItem.module.scss';

function BoardItem({ post, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editContent, setEditContent] = useState(post.content);

  return (
    <li className={styles.boardItem}>
      <div>
        <h4>{post.title}</h4>
        {isEdit ? (
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
          />
        ) : (
          <p>{post.content}</p>
        )}
      </div>

      <div style={{ display: 'flex', gap: '8px' }}>
        {isEdit ? (
          <button type="button" onClick={() => setIsEdit(false)}>
            수정완료
          </button>
        ) : (
          <button type="button" onClick={() => setIsEdit(true)}>
            수정
          </button>
        )}

        <button type="button" onClick={() => onDelete(post.id)}>
          삭제
        </button>
      </div>
    </li>
  );
}

export default BoardItem;