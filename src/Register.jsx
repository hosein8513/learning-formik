import { Field, Form, Formik, ErrorMessage, FastField, FieldArray } from "formik";
import * as Yup from "yup"
import Personalerror from "./Personalerror";
import Favorites from "./Favorites";


const initialValues = {
    name: '',
    email: '',
    password: '',
    address: {
        city: '',
        postalcode: ''
    },
    phone:['',''],
    favorites:['']
}
const onSubmit = value => {
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
    name: Yup.string().required("please fill this part"),
    email: Yup.string().required("please fill this part").email("please write an email"),
    password: Yup.string().required("please fill this part").min(7, "please enter atleast 7 chars"),
    address: Yup.object({
        city: Yup.string().required("please fill this part"),
        postalcode: Yup.string().required("please fill this part")
    }),
    phone:Yup.array().of(Yup.string().required("please fill this part")),
    favorites:Yup.array().of(Yup.string().required("please fill this part"))
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
            // validateOnBlur={false}
            // validateOnChange={false}
        >
           {formik=>{
            console.log(formik);
            return(
            
             <div className="w-full h-auto bg-purple-300 flex flex-col justify-center items-center gap-4">

                <div className="w-3/12 h-auto rounded-lg bg-white/50 p-4">

                    <Form className="w-full h-full flex flex-col justify-center items-center gap-7 rounded-lg">
                        <h1 className="text-[20px] font-bold">Sign In</h1>
                        <div className="flex flex-col justify-center items-center w-full">
                            <FastField type="text" placeholder="name:" className="w-7/12 bg-black/40 rounded-lg p-2" name="name" />
                            <ErrorMessage name='name' component={Personalerror} />
                        </div>
                        <div className="flex flex-col justify-center items-center w-full">
                            <FastField type="email" placeholder="email:" className="w-7/12 bg-black/40 rounded-lg p-2" name="email" />
                            <ErrorMessage name="email" component={Personalerror} />
                        </div>
                        <div className="flex flex-col justify-center items-center w-full">
                            <FastField type="password" placeholder="password:" className="w-7/12 bg-black/40 rounded-lg p-2" name="password" />
                            <ErrorMessage name="password" component={Personalerror} />
                        </div>
                        <div className="flex flex-col justify-center items-center w-full">
                            <FastField type="text" placeholder="city:" className="w-7/12 bg-black/40 rounded-lg p-2" name="address.city" />
                            <ErrorMessage name="address.city" component={Personalerror} />
                        </div>
                        <div className="flex flex-col justify-center items-center w-full">
                            <FastField type="text" placeholder="postalcode:" className="w-7/12 bg-black/40 rounded-lg p-2" name="address.postalcode" />
                            <ErrorMessage name="address.postalcode" component={Personalerror} />
                        </div>
                        <div className="flex w-full">
                        <div className="flex flex-col justify-center items-center w-9/12">
                            <FastField type="text" placeholder="phone:" className="w-9/12 bg-black/40 rounded-lg p-2" name="phone[0]" />
                            <ErrorMessage name="phone[0]" component={Personalerror} />
                        </div>
                        <div className="flex flex-col justify-center items-center w-9/12">
                            <FastField type="text" placeholder="telephone:" className="w-9/12 bg-black/40 rounded-lg p-2" name="phone[1]" />
                            <ErrorMessage name="phone[1]" component={Personalerror} />
                        </div>
                        </div>
                         <div className="flex flex-col justify-center items-center w-full gap-2">
                          <FieldArray type="text" className="w-full bg-black/40 rounded-lg p-2" name="favorites">
                          {props=><Favorites {...props}/>}
                          </FieldArray>
                        </div>
                        <button className="w-[90px] h-[45px] rounded-lg text-white bg-blue-500" type="button" onClick={()=>formik.validateForm()}>form verify</button>
                        <button className="w-[90px] h-[45px] rounded-lg text-white bg-orange-500" type="button" onClick={()=>formik.setTouched({
                            name:true,
                            email:true
                        })}>form touch</button>
                        <button className="w-[90px] h-[45px] rounded-lg text-white bg-green-500" type="submit">Submit</button>
                    </Form>
                </div>
            </div>
           )}}
        </Formik>
    );
};

export default Register;