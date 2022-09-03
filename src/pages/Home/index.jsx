import {  Link } from 'react-router-dom';
import './index.scss';
import axios from "axios";
import { useEffect, useState } from "react";
const port = process.env.PORT || 3003;
const Home = () => {


  // const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);

//   useEffect(() => {

//     const getProducts =  async () => {
//       try {
//       const res = await axios(
//       `http://localhost:3003/api/v2/product?name=${query}`
//         );
//       setProducts(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };
// getProducts();
// }, [query]);


  useEffect(() => {
    getProducts();
  }, []);


  const getProducts = async () => {
    try {
      const res = await axios.get(`http://localhost:${port}/api/v2/product`);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:${port}/api/v2/product/${id}`);
      getProducts();
      alert('succes dellete');
    } catch (error) {
      console.log(error);
    }
  };

  const handlesearch = async (e) => {
    console.log(e.currentTarget.value);
    try {
    const res = await axios.get(`http://localhost:3003/api/v2/product`);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

  return (
    <div className="main">
      <Link to="/tambah" className="btn btn-primary">
        Tambah Produk
      </Link>
      <div className="search">
        <input
          type="text"
          onChange={handlesearch}
          // onChange={(e) => { setQuery(e.target.value); }}           value={query} 
          placeholder="Masukan kata kunci..."
        />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th className="text-right">Price</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product._id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td className="text-right">{product.price}</td>
              <td className="text-center">
                <Link
                  to={`/detail/${product._id}`}
                  className="btn btn-sm btn-info"
                >
                  Detail
                </Link>
                <Link
                  to={`/edit/${product._id}`}
                  className="btn btn-sm btn-warning"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteProduct(product._id)}
                  className="btn btn-sm btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home;