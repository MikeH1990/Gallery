/* eslint-disable @next/next/no-img-element */

import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image, index) => {
          return (
            <div key={image.id + "-" + index} className="flex w-48 flex-col">
              <img src={image.url} alt="img" />
              <div>{image.name}</div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
