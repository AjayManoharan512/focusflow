import { useForm } from "./useForm";

const EyeIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    );
};
const EyeOffIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19C5 19 1 12 1 12a21.89 21.89 0 0 1 5.06-5.94" />
            <path d="M9.9 4.24A10.94 10.94 0 0 1 12 5c7 0 11 7 11 7a21.86 21.86 0 0 1-3.17 4.31" />
            <path d="M14.12 14.12A3 3 0 0 1 9.88 9.88" />
            <path d="M1 1l22 22" />
        </svg>
    );
};
function Forms() {
    const {
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
    } = useForm();

    return (
        <>
            <div className="form-wrapper">
                <div className="stepper">
                    {steps.map((step, index) => {
                        const isActive = step.key === stepper;
                        const isCompleted = index < activeIndex;
                        const isDoneStepActive = step.key === "done" && stepper === "done";
                        return (
                            <div
                                key={step.key}
                                className={`stepper-item ${isActive ? "active" : ""} ${isCompleted ? "completed" : ""} ${isDoneStepActive ? "completed" : ""}`}
                            >
                                <div className="stepper-circle">{isCompleted || isDoneStepActive ? "✓" : index + 1}</div>
                                <div className="stepper-label">{step.label}</div>
                            </div>
                        );
                    })}
                </div>

                {(() => {
                    switch (stepper) {
                        case "personal":
                            return (
                                <div className="form-card">
                                    <div className="form-card__header">
                                        <h4 className="form-card__title">Personal Info</h4>
                                        <p className="form-card__subtitle">Tell us a bit about yourself.</p>
                                    </div>
                                    <div className="form-fields">
                                        <div className="form-field">
                                            <label>Name:</label>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Enter name"
                                                value={userdetails.name}
                                                onChange={handlechange}
                                                className="form-input"
                                            />
                                            {err.name ? <span className="form-error">{err.name}</span> : null}
                                        </div>
                                        <div className="form-field">
                                            <label>Email:</label>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Enter email address"
                                                value={userdetails.email}
                                                onChange={handlechange}
                                                className="form-input"
                                            />
                                            {err.email ? <span className="form-error">{err.email}</span> : null}
                                        </div>
                                        <div className="form-field">
                                            <label>Age:</label>
                                            <input
                                                type="number"
                                                name="age"
                                                placeholder="Enter age"
                                                value={userdetails.age}
                                                onChange={handlechange}
                                                className="form-input"
                                            />
                                            {err.age ? <span className="form-error">{err.age}</span> : null}
                                        </div>
                                    </div>
                                    <div className="form-actions form-actions--end">
                                        <button type="button" onClick={handleSubmit}>Next</button>
                                    </div>
                                </div>
                            );
                        case "account":
                            return (
                                <div className="form-card">
                                    <div className="form-card__header">
                                        <h4 className="form-card__title">Account setup</h4>
                                        <p className="form-card__subtitle">Choose your username and a secure password.</p>
                                    </div>
                                    <div className="form-fields">
                                        <div className="form-field">
                                            <label>Username:</label>
                                            <input
                                                type="text"
                                                name="username"
                                                placeholder="Enter name"
                                                value={userdetails.username}
                                                onChange={handlechange}
                                                className="form-input"
                                            />
                                            {err.username ? <span className="form-error">{err.username}</span> : null}
                                        </div>
                                        <div className="form-field">
                                            <label>Password:</label>
                                            <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    name="password"
                                                    placeholder="Enter your password"
                                                    className="form-input"
                                                    style={{ paddingRight: "40px", width: "100%" }}
                                                    value={userdetails.password}
                                                    onChange={handlechange}
                                                />
                                                <span
                                                    onClick={() => setShowPassword((s) => !s)}
                                                    style={{
                                                        position: "absolute",
                                                        right: "10px",
                                                        top: "50%",
                                                        transform: "translateY(-50%)",
                                                        cursor: "pointer",
                                                        display: "flex",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                                                </span></div>
                                            {err.password ? <span className="form-error">{err.password}</span> : null}
                                        </div>
                                        <div className="form-field">
                                            <label>Confirm Password:</label>
                                            <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                                                <input
                                                    type={showConfirmPassword ? "text" : "password"}
                                                    name="confirmpassword"
                                                    placeholder="Confirm password"
                                                    className="form-input"
                                                    style={{ paddingRight: "40px", width: "100%" }}
                                                    value={userdetails.confirmpassword}
                                                    onChange={handlechange}
                                                />
                                                <span
                                                    onClick={() => setShowConfirmPassword((s) => !s)}
                                                    style={{
                                                        position: "absolute",
                                                        right: "10px",
                                                        top: "50%",
                                                        transform: "translateY(-50%)",
                                                        cursor: "pointer",
                                                        display: "flex",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
                                                </span>
                                            </div>
                                            {err.confirmpassword ? <span className="form-error">{err.confirmpassword}</span> : null}
                                        </div>
                                    </div>
                                    <div className="form-actions">
                                        <button type="button" onClick={() => setstepper("personal")}>Back</button>
                                        <button type="button" onClick={handleAccountNext}>Next</button>
                                    </div>
                                </div>
                            );
                        case "view":
                            return (
                                <div className="form-card">
                                    <div className="form-card__header">
                                        <h4 className="form-card__title">View</h4>
                                        <p className="form-card__subtitle">just check the details before submit</p>
                                    </div>
                                    <div style={{ display: "flex", marginBottom: "12px" }}>
                                        <div style={{ width: "50%" }}>Name</div>
                                        <div style={{ width: "50%" }}>{userdetails.name}</div>
                                    </div>
                                    <div style={{ display: "flex", marginBottom: "12px" }}>
                                        <div style={{ width: "50%" }}>Age</div>
                                        <div style={{ width: "50%" }}>{userdetails.age}</div>
                                    </div>
                                    <div style={{ display: "flex", marginBottom: "12px" }}>
                                        <div style={{ width: "50%" }}>Username</div>
                                        <div style={{ width: "50%" }}>{userdetails.username}</div>
                                    </div>
                                    <div style={{ display: "flex", marginBottom: "12px" }}>
                                        <div style={{ width: "50%" }}>Password</div>
                                        <div style={{ width: "50%" }}>••••••••</div>
                                    </div>
                                   
                                    <div className="form-actions">
                                        <button type="button" onClick={() => setstepper("account")}>Back</button>
                                        <button type="button" onClick={handleFinalSubmit}>Submit</button>
                                    </div>
                                </div>
                            );
                        case "done":
                            return (
                                <div className="form-card">

                                    <div style={{ textAlign: "center", padding: "20px 0" }}>
                                        <strong>✓ Success</strong>
                                        <p>Thank you! Your Profile has been created</p>
                                    </div>
                                </div>
                            );
                        default:
                            return null;
                    }
                })()}
            </div>
        </>
    );
}

export default Forms;