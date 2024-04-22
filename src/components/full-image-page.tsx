import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={image.url} className="w-96" alt="pic" />;
}
