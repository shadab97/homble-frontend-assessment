import React, { useEffect, useState } from "react";
import { getRequest } from "../axios";

const useGetAllProduct = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getRequest("/products")
      .then((products) => {
        const productSortedBySellingPrice = products?.data?.sort(
          (a, b) => a.selling_price - b.selling_price
        );
        setProducts(productSortedBySellingPrice);
      })
      .catch(() => {
        setProducts([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return {
    products,
    isLoading,
  };
};

export default useGetAllProduct;
