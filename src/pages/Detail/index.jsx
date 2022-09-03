import { Link, useParams } from "react-router-dom";
import "./index.scss";
import axios from "axios";
import { useEffect, useState } from "react";
const port = process.env.PORT || 3003;
const Detail = () => {
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState('');
//   const [stock, setStock] = useState('');
//   const { id } = useParams();

//   useEffect(() => {
//     getProductById();
//   }, []);

//   const getProductById = async () => {
//     try {
//     const res = await axios.get(`http://localhost:3003/api/v2/product/${id}`);
//     setName(res.data.name);
//     setPrice(res.data.price);
//     setStock(res.data.stock);
// } catch (error) {
//   console.log(error);
// }
// };
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState(0);
  const { id } = useParams();



  useEffect(() => {
    getProductById();
  });

  const getProductById = async () => {
    const res = await axios.get(`http://localhost:${port}/api/v2/product/${id}`);
    setName(res.data.name);
    setPrice(res.data.price);
    setStock(res.data.stock);
  };

  return (
    <div className="main">
      <Link to="/" className="btn btn-primary">
        Kembali
      </Link>

      <table className="table">
        <tbody>
          <tr>
            <td>ID</td>
            <td>{id}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>: {name}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>: {price}</td>
          </tr>
          <tr>
            <td>Stock</td>
            <td>: {stock}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Detail;