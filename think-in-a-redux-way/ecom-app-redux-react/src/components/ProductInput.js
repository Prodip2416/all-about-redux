import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/product/actions";

const ProductInput = () => {
  const totalProduct = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    id: 0,
    title: "",
    category: "",
    imageUrl: "",
    price: 0,
    quantity: 0,
  });

  const handleClick = (e) => {
    e.preventDefault();

    if (
      product.title &&
      product.category &&
      product.imageUrl &&
      product.price &&
      product.quantity
    ) {
      const newProduct = {
        ...product,
        id: totalProduct.length + 1,
      };
      dispatch(addProduct(newProduct));
      setProduct({
        id: 0,
        title: "",
        category: "",
        imageUrl: "",
        price: 0,
        quantity: 0,
      });
    } else {
      alert("Please enter all the information");
    }
  };
  return (
    <div className="formContainer">
      <h4 className="formTitle">Add New Product</h4>
      <form className="space-y-4 text-[#534F4F]" id="lws-addProductForm">
        {/* <!-- product name --> */}
        <div className="space-y-2">
          <label for="lws-inputName">Product Name</label>
          <input
            className="addProductInput"
            id="lws-inputName"
            type="text"
            required
            value={product.title}
            onChange={(e) => setProduct({ ...product, title: e.target.value })}
          />
        </div>
        {/* <!-- product category --> */}
        <div className="space-y-2">
          <label for="lws-inputCategory">Category</label>
          <input
            className="addProductInput"
            id="lws-inputCategory"
            type="text"
            required
            value={product.category}
            onChange={(e) =>
              setProduct({ ...product, category: e.target.value })
            }
          />
        </div>
        {/* <!-- product image url --> */}
        <div className="space-y-2">
          <label for="lws-inputImage">Image Url</label>
          <input
            className="addProductInput"
            id="lws-inputImage"
            type="text"
            required
            value={product.imageUrl}
            onChange={(e) =>
              setProduct({ ...product, imageUrl: e.target.value })
            }
          />
        </div>
        {/* <!-- price & quantity container --> */}
        <div className="grid grid-cols-2 gap-8 pb-4">
          {/* <!-- price --> */}
          <div className="space-y-2">
            <label for="ws-inputPrice">Price</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputPrice"
              required
              value={product.price}
              onChange={(e) =>
                setProduct({ ...product, price: e.target.valueAsNumber })
              }
            />
          </div>
          {/* <!-- quantity --> */}
          <div className="space-y-2">
            <label for="lws-inputQuantity">Quantity</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputQuantity"
              required
              value={product.quantity}
              onChange={(e) =>
                setProduct({ ...product, quantity: e.target.valueAsNumber })
              }
            />
          </div>
        </div>
        {/* <!-- submit button --> */}
        <button
          type="submit"
          id="lws-inputSubmit"
          className="submit"
          onClick={handleClick}
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductInput;
