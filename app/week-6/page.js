import ItemList from './item-list';

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="max-w-xl w-full bg-white rounded-lg shadow-md p-5">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Shopping List</h1>
        <ItemList />
      </div>
    </main>
  );
}
