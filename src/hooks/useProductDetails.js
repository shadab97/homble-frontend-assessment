import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useFetch from "./useFetch";

const useProductDetails = () => {
  const { id } = useParams();

  const { loading, data, error, refetch } = useFetch({
    url: `/products/${id}`,
    onError,
    onSuccess,
  });
  function onError(err) {
    if (err) {
      toast.error("data fetched failed");
    }
  }
  function onSuccess(data) {
    toast.success("data fetched successfully");
  }

  const accordianArray = [
    {
      name: "Description",
      value: data?.description,
    },
    {
      name: "Allergen information",
      value: data?.allergen_info,
    },
    {
      name: "Cooking instruction",
      value: data?.cooking_instruction,
    },
  ];

  return {
    accordianArray,
    product: data,
    isLoading: loading,
  };
};

export default useProductDetails;
