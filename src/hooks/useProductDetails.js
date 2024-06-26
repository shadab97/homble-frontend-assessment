import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRequest } from "../axios";

const useProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      getRequest(`/products/${id}`)
        .then((products) => {
          setProduct(products.data);
        })
        .catch(() => {
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
