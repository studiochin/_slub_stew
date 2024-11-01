import type { MetaFunction } from "@remix-run/node";


export const meta: MetaFunction = () => {
  return [
    { title: "Slub Studios" },
    { name: "description", content: "Hi" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Hello World</h1>
      <h2>testing remix</h2>
    </div>
  );
}
