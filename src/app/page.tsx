/* eslint-disable @next/next/no-img-element */

import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return (
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
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          <h1>Please sign in</h1>
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
