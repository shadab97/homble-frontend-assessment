import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRequest } from "../axios";
import { toast } from "react-toastify";

const useProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      getRequest(`/products/${id}`)
        .then((products) => {
          toast.success("product fetched successfully");
          setProduct(products.data);
        })
        .catch(() => {
          toast.error("Error in fetching product");
          setProduct({});
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [id]);

  const accordianArray = [
    {
      name: "Description",
      value: product.description,
    },
    {
      name: "Allergen information",
      value: product.allergen_info,
    },
    {
      name: "Cooking instruction",
      value: product.cooking_instruction,
    },
  ];

  return {
    accordianArray,
    product,
    isLoading,
  };
};

export default useProductDetails;
