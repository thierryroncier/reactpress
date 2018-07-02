import AuthorListItem from "./AuthorListItem";
const PostList = ({ authors }) => (
  <span>
    {authors.map(author => <AuthorListItem key={author.id} author={author} />)}
  </span>
);

export default PostList;
