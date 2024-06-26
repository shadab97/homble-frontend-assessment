import { toast } from "react-toastify";
import useFetch from "./useFetch";

const useDashboard = () => {
  const { loading, data, error, refetch } = useFetch({
    url: "/dashboard",
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
  return {
    products: data,
    isLoading: loading,
  };
};

export default useDashboard;
