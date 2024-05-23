import React, { useEffect, useState } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = async () => {
        try {
            let result = await fetch("http://localhost:5000/products");
            result = await result.json();
            if (Array.isArray(result)) {
                setProducts(result);
                console.log("products", result);
            } else {
                setProducts([]);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    return (
        <div className="product-list-container">
            <h3>Product List</h3>
            <table className="product-table">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length > 0 ? products.map((product, index) => (
                        <tr key={product._id}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.category}</td>
                            <td>{product.company}</td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan="5">No products available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;
