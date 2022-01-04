
const CommentsList = ({comments}) => {
  
  return(
        comments.map(e=>
      <li key={e._id}>{e.comment} rate {e.rate}</li>
            )
)
};

export default CommentsList;
