import axios from 'axios';

export async function getPaths() {
  const paths = await axios.get(
    `${process.env.NEXT_PUBLIC_HOST}/api/get-articles-paths`
  );
  return paths.data.map((id) => ({ params: { id } }));
}
