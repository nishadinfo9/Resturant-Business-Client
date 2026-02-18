import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold">Grow your business online</h1>
      <p className="mt-2">Menu, WhatsApp orders, simple admin.</p>
      <Link
        to="/menu"
        className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded"
      >
        View Menu
      </Link>
    </section>
  );
};

export default Home;
