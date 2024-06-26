import { useState } from "react";
import { toast } from "react-toastify";
import { postRequest } from "../axios";
const initialFormState = {
  name: "",
  description: "",
  allergen_info: "",
};
const useAddNewProduct = () => {
  const [show, setShow] = useState(false);
  const [formState, setFormState] = useState(initialFormState);
  const [errorState, setErrorState] = useState("");
  const [loading, setLoading] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSetFormState = (e) => {
    setFormState((prev) => ({
      ...prev,
      [e?.target?.name]: e?.target?.value,
    }));
  };

  const handleAddNeProduct = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!formState.name) {
      setErrorState("Please enter name");
      setLoading(false);
      return;
    }
    if (!formState.description) {
      setErrorState("Please enter description");
      setLoading(false);
      return;
    }
    if (!formState.allergen_info) {
      setErrorState("Please enter allergen info");
      setLoading(false);
      return;
    }
    // formState
    await postRequest("/products", formState)
      .then((data) => {
        if (data.status === 201) {
          toast.success(data.data);
          handleClose();
        }
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => {
        setLoading(false);
        setErrorState("");
      });
  };

  return {
    show,
    loading,
    handleShow,
    errorState,
    handleClose,
    handleAddNeProduct,
    handleSetFormState,
  };
};

export default useAddNewProduct;
