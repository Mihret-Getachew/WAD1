import { useEffect, useState } from "react";
import { Comment } from "../types/types";
export default function useComment() {
  const [comments, setComments] = useState<Comment[]>([]);
  useEffect(() => {
    const getData = async () => {
      const result = await fetch("http://localhost:3004/comments");
      const data = await result.json();
      setComments(data);
    };
    getData();
  }, []);
  return { comments, setComments };
}
