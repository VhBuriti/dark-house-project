export async function GetPost(id: any) {
    const res = await fetch(`/api/all-stories/story/${id}`, {
        method: "GET"
    });
    const story = await res.json();
    return story;
  }
  