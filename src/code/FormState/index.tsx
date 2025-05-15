import { useState } from "react";

const Form = () => {
    const [dataForm, setDataForm] = useState({
        email: "",
        password: "",
    });

    return (
        <>
            <div>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Email"
                            onChange={(e) =>
                                setDataForm({ ...dataForm, email: e.target.value })
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            onChange={(e) =>
                                setDataForm({ ...dataForm, password: e.target.value })
                            }
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={() => console.log(dataForm)}>
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};

export default Form;
