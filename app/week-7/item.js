const Item = ({ name, quantity, category }) => {
    return (
      <li className="flex justify-between items-center p-4 bg-gray-800 rounded-lg shadow-md mb-2 hover:bg-gray-700 transition">
        <div className="flex flex-col">
          <span className="text-lg font-semibold text-gray-50">{name}</span>
          <span className="text-xs font-light text-gray-400">Category: {category}</span>
        </div>
        <div className="text-sm font-medium text-gray-50">Qty: {quantity}</div>
      </li>
    );
  };
  
  export default Item;