import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="p-6">
      <h1 className="text-4xl font-bold text-center text-white-300 mb-8">
        Shopping List
      </h1>
      <ItemList />
    </main>
  );
}