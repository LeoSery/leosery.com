export function extractYoutubeId(url)
{
  if (!url)
  {
    return null;
  }

  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/);
  
  return m ? m[1] : null;
}