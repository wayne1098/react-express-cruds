import axios from "axios";
import { useState } from "react";
import Input from "../../components/Input";
import "./index.scss";
const port = process.env.PORT || 3003;
const Tambah = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [status, setStatus] = useState(false);

  const addProduct = async (e) => {
    try {
      await axios.post(`http://localhost:${port}/api/v2/product`, {
        name,
        price,
        stock,
        status,
      });
      alert('succes add');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main">
      <div className="card">
        <h2>Tambah Produk</h2>
        <br />
        <form onSubmit={addProduct}>
          <Input
            name="name"
            type="text"
            placeholder="Nama Produk..."
            label="Nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            name="price"
            type="number"
            placeholder="Harga Produk..."
            label="Harga"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <Input
            name="Stock"
            type="number"
            placeholder="Stock Produk..."
            label="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
          <Input
            name="status"
            type="checkbox"
            label="Active"
            // checked
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default Tambah;