function BoardItem({ post }) {
  return (
    <li>{post.title} - {post.content}</li>
  );
}

export default BoardItem;