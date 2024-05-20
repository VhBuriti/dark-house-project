
export async function PostStory(
  postAuthor: string,
  postTitle: string,
  postContent: string,
  postCategory: string,
) {
    
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const story = {
    author: postAuthor,
    title: postTitle,
    content: postContent,
    postDate: formattedDate,
    category: postCategory,
  };

  const res = await fetch("/api/all-stories", {
    method: "POST",
    body: JSON.stringify({ story: story }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const newPost = await res.json();

  console.log('newPost', newPost)

  return newPost;
}
