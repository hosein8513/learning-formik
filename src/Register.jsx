import { Field, Form, Formik, ErrorMessage, FastField } from "formik";
import * as Yup from "yup"


const initialValues= {
            name: '',
            email: '',
            password: ''
        }
        const  onSubmit= value => {
            console.log(value);

        }
        // const  validate = value => {
        //     let errors = {}
        //     if (!value.name) {
        //         errors.name = "please fill this part"
        //     }
        //     if (!value.email) {
        //         errors.email = "please fill this part"
        //     } else if (!  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value.email)) {
        //         errors.email = "please write an email"
        //     }
        //     if (!value.password) {
        //         errors.password = "please fill this part"
        //     }
        //     return errors
        // }
        const validationSchema = Yup.object({
            name:Yup.string().required("please fill this part"),
            email:Yup.string().required("please fill this part").email("please write an email"),
            password:Yup.string().required("please fill this part").min(7,"please enter atleast 7 chars")
        })



const Register = () => {

    // const formik = useFormik({
    //     initialValues,
    //     onSubmit,
    //     // validate
    //     validationSchema
    // })
    // console.log(formik);

    return (
        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        >
        <div className="w-full h-screen bg-purple-300 flex flex-col justify-center items-center gap-4">

            <div className="w-3/12 h-6/12 rounded-lg bg-white/50">

                <Form className="w-full h-full flex flex-col justify-center items-center gap-7 rounded-lg">
                    <h1 className="text-[20px] font-bold">Sign In</h1>
                    <div className="flex flex-col justify-center items-center w-full">
                        <FastField type="text" placeholder="name:" className="w-7/12 bg-black/40 rounded-lg p-2" name="name" />
                       <ErrorMessage name='name'/>
                    </div>
                    <div className="flex flex-col justify-center items-center w-full">
                        <FastField type="email" placeholder="email:" className="w-7/12 bg-black/40 rounded-lg p-2" name="email"/>
                        <ErrorMessage name="email"/>
                    </div>
                    <div className="flex flex-col justify-center items-center w-full">
                        <FastField type="password" placeholder="password:" className="w-7/12 bg-black/40 rounded-lg p-2" name="password" />
                       <ErrorMessage name="password"/>
                    </div>
                    <button className="w-[90px] h-[45px] rounded-lg text-white bg-green-500" type="submit">Submit</button>
                </Form>
            </div>
        </div>
        </Formik>
    );
};

export default Register;