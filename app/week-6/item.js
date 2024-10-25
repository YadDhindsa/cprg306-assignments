const Item = ({ name, quantity, category }) => {
    return (
      <li className="flex justify-between items-center p-3 bg-gray-800 rounded-lg shadow-md mb-3">
        <div className="text-lg font-semibold text-white">{name}</div>
        <div className="text-sm text-gray-400">Category: {category}</div>
        <div className="text-sm text-gray-400">Quantity: {quantity}</div>
      </li>
    );
  };
  
  export default Item;
  