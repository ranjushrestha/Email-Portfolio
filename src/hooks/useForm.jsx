import { useState } from "react";
import validate from "../utils/validate";

const useForm = ({ defaultValues = {}, validations = {} } = {}) => {
  const [formData, setFormData] = useState(defaultValues);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    if (!e || !e.target) return;

    const { name, type, value, checked } = e.target;
    const val = type === "checkbox" ? checked : value;

    const updatedData = { ...formData, [name]: val };
    setFormData(updatedData);

    // Validate field after first submit
    if (isSubmitted) {
      const fieldError = validate(
        { [name]: val },
        { [name]: validations[name] }
      );

      setErrors((prevErrors) => {
        const updatedErrors = { ...prevErrors };

        if (fieldError[name]) {
          // Still invalid → set error
          updatedErrors[name] = fieldError[name];
        } else {
          // Now valid → remove error
          delete updatedErrors[name];
        }

        return updatedErrors;
      });
    }
  };

  // Handle form submission
  const handleSubmit = (callback) => (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    const validationErrors = validate(formData, validations);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      callback(formData);
    }
  };

  return { formData, errors, handleChange, handleSubmit };
};

export default useForm;