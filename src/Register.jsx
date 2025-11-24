import { useFormik } from "formik";

const Register = () => {

    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            password:''
        },
        onSubmit: value=>{
            console.log(value);
            
        }
    })
    return (
        <div className="w-full h-screen bg-purple-300 flex flex-col justify-center items-center">
            <div className="w-3/12 h-6/12 rounded-lg bg-white/50">
                <form className="w-full h-full flex flex-col justify-center items-center gap-7 rounded-lg"onSubmit={formik.handleSubmit}>
                <input type="text" placeholder="name:" className="w-7/12 bg-black/40 rounded-lg" name="name" value={formik.values.name} onChange={formik.handleChange}/>
                <input type="email" placeholder="email:" className="w-7/12 bg-black/40 rounded-lg" name="email"value={formik.values.email} onChange={formik.handleChange}/>
                <input type="password" placeholder="password:" className="w-7/12 bg-black/40 rounded-lg" name="password" value={formik.values.password} onChange={formik.handleChange}/>
                <button className="w-[90px] h-[45px] rounded-lg text-white bg-green-500" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Register;