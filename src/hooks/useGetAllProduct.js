import { toast } from "react-toastify";
import useFetch from "./useFetch";

const useGetAllProduct = () => {
  const { loading, data, error, refetch } = useFetch({
    url: "/products",
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
    const productSortedBySellingPrice = data?.sort(
      (a, b) => a.selling_price - b.selling_price
    );
    return productSortedBySellingPrice;
  }

  return {
    products: data,
    isLoading: loading,
  };
};

export default useGetAllProduct;
