import { useEffect, useState } from "react";
import { getRequest } from "../axios";

const useDashboard = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getRequest("/dashboard")
      .then((products) => {
        setProducts(products.data);
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

export default useDashboard;
