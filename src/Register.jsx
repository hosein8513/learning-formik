import { useFormik } from "formik";

const Register = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        onSubmit: value => {
            console.log(value);

        },
        validate: value => {
            let errors = {}
            if (!value.name) {
                errors.name = "please fill this part"
            }
            if (!value.email) {
                errors.email = "please fill this part"
            } else if (!  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value.email)) {
                errors.email = "please write an email"
            }
            if (!value.password) {
                errors.password = "please fill this part"
            }
            return errors
        }
    })
    console.log(formik);

    return (
        <div className="w-full h-screen bg-purple-300 flex flex-col justify-center items-center gap-4">

            <div className="w-3/12 h-6/12 rounded-lg bg-white/50">

                <form className="w-full h-full flex flex-col justify-center items-center gap-7 rounded-lg" onSubmit={formik.handleSubmit}>
                    <h1 className="text-[20px] font-bold">Sign In</h1>
                    <div className="flex flex-col justify-center items-center w-full">
                        <input type="text" placeholder="name:" className="w-7/12 bg-black/40 rounded-lg p-2" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.errors.name && formik.touched.name ? <span className="text-[15px] text-center text-red-500">{formik.errors.name}</span> : ''}
                    </div>
                    <div className="flex flex-col justify-center items-center w-full">
                        <input type="email" placeholder="email:" className="w-7/12 bg-black/40 rounded-lg p-2" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.errors.email  ? <span className="text-[15px] text-center text-red-500">{formik.errors.email}</span> : ''}
                    </div>
                    <div className="flex flex-col justify-center items-center w-full">
                        <input type="password" placeholder="password:" className="w-7/12 bg-black/40 rounded-lg p-2" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.errors.password && formik.touched.password ? <span className="text-[15px] text-center text-red-500">{formik.errors.password}</span> : ''}
                    </div>
                    <button className="w-[90px] h-[45px] rounded-lg text-white bg-green-500" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Register;