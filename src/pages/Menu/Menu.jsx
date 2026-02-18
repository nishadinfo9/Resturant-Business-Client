import React from "react";
import { products } from "../../data/products";

const Menu = () => {
  const adminPhone = "8801736052046";
  const order = (p) => {
    const msg = `Order Request:%0AProduct: ${p.name}%0AProduct ID: ${p.id}%0APrice: ${p.price}৳%0AQuantity: 1%0A%0ACustomer Name:%0AAddress:`;
    window.open(`https://wa.me/${adminPhone}?text=${msg}`, "_blank");
  };
  return (
    <div className="p-8 grid md:grid-cols-3 gap-4">
      {products.map((p) => (
        <div key={p.id} className="border p-4 rounded">
          <h3 className="font-semibold">{p.name}</h3>
          <p>ID: {p.id}</p>
          <p>{p.price}৳</p>
          <button
            onClick={() => order(p)}
            className="mt-2 bg-green-600 text-white px-3 py-1 rounded"
          >
            Order on WhatsApp
          </button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
