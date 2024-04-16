/* eslint-disable @next/next/no-img-element */

import { db } from "~/server/db";

const mockUrls: string[] = [
  "https://utfs.io/f/a42a52cc-b5e7-4a6c-ba71-b17addb9b44c-mx6fym.jpg",
  "https://utfs.io/f/84f96e5e-42fb-4cee-bdad-506dffec8dcb-mx6fyk.jpg",
  "https://utfs.io/f/e3e716a2-78ef-427b-9876-eedec54e9c77-1jv9y0.jpg",
  "https://utfs.io/f/5f4f1341-efd2-41d5-b040-6dfda7e2a6f1-mx6fyj.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => {
          return (
            <div key={image.id + "-" + index} className="w-48">
              <img src={image.url} alt="img" />
            </div>
          );
        })}
      </div>
    </main>
  );
}
