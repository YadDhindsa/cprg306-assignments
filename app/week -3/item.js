export default function Item({ name, quantity, category }) {
    return (
      <li className="bg-gray-800 text-white p-4 m-2 rounded-lg shadow-md">
        <h3 className="text-xl font-bold">{name}</h3>
        <p>Buy {quantity} in {category}</p>
      </li>
    );
  }
  