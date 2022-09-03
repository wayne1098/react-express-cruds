import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Input from "../../components/Input";
const port = process.env.PORT || 3003;

const Edit = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState(0);
  const [status, setStatus] = useState(false);
  const { id } = useParams();


  
  useEffect(() => {
    // other code
    getProductById();
 
    // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [])

  const getProductById = async () => {
    const res = await axios.get(`http://localhost:${port}/api/v2/product/${id}`);
    setName(res.data.name);
    setPrice(res.data.price);
    setStock(res.data.stock);
    setStatus(res.data.status);
  };

  const updateProduct = async (e) => {
    
    try {
      await axios.put(`http://localhost:${port}/api/v2/product/${id}`, {
        name,
        price,
        stock,
      });
      alert('succes edit');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="main">
      <div className="card">
        <h2>Edit Produk</h2>
        <br />
        <form onSubmit={updateProduct}>
          <Input
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Nama"
          />
          <Input
            name="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            label="Harga"
          />
          <Input
            name="Stock"
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            label="Stock"
          />
          <Input name="status" 
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

export default Edit;