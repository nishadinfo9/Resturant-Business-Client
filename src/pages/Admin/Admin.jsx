import React, { useState } from "react";
import { products } from "../../data/products";

const Admin = () => {
  // const [role, setRole] = useState("admin"); // admin | staff
  const [q, setQ] = useState("");
  const filtered = products.filter(
    (p) =>
      p.category.toLowerCase().includes(q.toLowerCase()) ||
      p.id.toLowerCase().includes(q.toLowerCase()),
  );
  // if (role !== "admin") return <div className="p-8">No access</div>;
  return (
    <div className="p-8">
      <h2 className="font-bold">Admin Panel</h2>
      <input
        className="border p-2 mt-2"
        placeholder="Search by category or ID"
        onChange={(e) => setQ(e.target.value)}
      />
      <ul className="mt-4">
        {filtered.map((p) => (
          <li key={p.id}>
            {p.id} — {p.name} — {p.stock}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
