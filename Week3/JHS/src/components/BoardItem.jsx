import styles from './BoardItem.module.scss';

function BoardItem({ post }) {
  return (
    <li className={styles.boardItem}>
      {post.title} - {post.content}
    </li>
  );
}

export default BoardItem;