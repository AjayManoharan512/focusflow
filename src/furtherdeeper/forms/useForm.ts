import { useState } from "react";

export const steps = [
    { key: "personal", label: "Personal" },
    { key: "account", label: "Account" },
    { key: "view", label: "Review" },
    { key: "done", label: "Done" },
] as const;

export function useForm() {
    const [userdetails, setuserdetails] = useState({
        name: "",
        age: "",
        email: "",
        username: "",
        password: "",
        confirmpassword: "",
    });
    const [stepper, setstepper] = useState("personal");
    const [err, seterr] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handlechange = (e) => {
        const { name, value } = e.target;

        setuserdetails((prev) => ({ ...prev, [name]: value }));
        seterr((prev) => ({ ...prev, [name]: "" }));
    };

    const validate = (values, step) => {
        const errors = {};

        if (step === "personal") {
            if (!values.name) {
                errors.name = "Name required";
            } else if (values.name.length < 4) {
                errors.name = "Min 4 characters";
            }

            if (!values.age) {
                errors.age = "Please enter age";
            } else if (Number(values.age) < 18) {
                errors.age = "Must be 18 or older";
            }

            if (!values.email) {
                errors.email = "Please enter email";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = "Enter a valid email address";
            }
        }

        if (step === "account") {
            if (!values.username) {
                errors.username = "Username required";
            } else if (/\s/.test(values.username)) {
                errors.username = "No spaces allowed";
            }

            if (!values.password) {
                errors.password = "Password required";
            } else if (values.password.length < 6) {
                errors.password = "Password must be at least 6 characters";
            }

            if (!values.confirmpassword) {
                errors.confirmpassword = "Please confirm password";
            } else if (values.password !== values.confirmpassword) {
                errors.confirmpassword = "Passwords do not match";
            }
        }

        seterr(errors);
        return errors;
    };

    const handleSubmit = () => {
        const errs = validate(userdetails, "personal");

        if (Object.keys(errs).length === 0) {
            setstepper("account");
        }
    };

    const handleAccountNext = () => {
        const errs = validate(userdetails, "account");

        if (Object.keys(errs).length === 0) {
            setstepper("view");
        }
    };

    const handleFinalSubmit = () => {
        setstepper("done");
    };

    const activeIndex = steps.findIndex((step) => step.key === stepper);

    return {
        userdetails,
        stepper,
        err,
        showPassword,
        showConfirmPassword,
        steps,
        activeIndex,
        handlechange,
        handleSubmit,
        handleAccountNext,
        handleFinalSubmit,
        setstepper,
        setShowPassword,
        setShowConfirmPassword,
    };
}

export default useForm;
