export async function GetAllPosts() {
  const res = await fetch("/api/all-stories");
  const allPosts = await res.json();
  return allPosts;
}
