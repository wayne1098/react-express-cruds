import { Link, useParams } from "react-router-dom";
import "./index.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const Detail = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState(0);
  const { id } = useParams();

//   useEffect(() => {
//     // other code
//     getProductById();
 
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//  }, [])

  useEffect(() => {
    getProductById();
  });

  const getProductById = async () => {
    const res = await axios.get(`http://localhost:3003/api/v2/product/${id}`);
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