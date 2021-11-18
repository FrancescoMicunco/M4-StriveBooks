import { useState, useEffect } from "react";

const CommentsList = (props) => {

  const [Data, stateData]= useState([])

 
  useEffect(() => {
    if(props.asin){takeComments()}
  }, [props.asin]);

  const takeComments = async () => {
    let url = "https://striveschool-api.herokuapp.com/api/comments/";
    let headers = {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGQ1MWFhY2FhMjAwMTU1MmExNzUiLCJpYXQiOjE2MzY2NDAwMDcsImV4cCI6MTYzNzg0OTYwN30.1r54LazkgLREzT1_TEIEE0FuSEKO-RcLTPlod70DVo4",
    };

    let res = await fetch(url + props.asin, {
      headers,
    });
    try {
      if (res.ok) {
        let data = await res.json();
        console.log(data)
        stateData(data)
      } else {
        alert("bad request");
      }
    } catch (error) {
      console.log("Something wrong on your connection or server connection");
    }
  };
  return
//   return (Data.comments.map((comment) => <li>{props.comment}</li>));
};

export default CommentsList;
