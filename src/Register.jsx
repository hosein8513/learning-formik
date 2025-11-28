import { Field, Form, Formik, ErrorMessage, FastField, FieldArray, FormikContext } from "formik";
import * as Yup from "yup"
import Personalerror from "./Personalerror";
import Favorites from "./Favorites";
import { useEffect, useState } from "react";
import Formikcontrol from "../formikelement/Formikcontrol";


const initialValues = {
    name: '',
    email: '',
    password: '',
    address: {
        city: '',
        postalcode: ''
    },
    phone: ['', ''],
    favorites: [''],
    skills:[]
}
const onSubmit = (value, sub) => {
    console.log(value);
    setTimeout(() => {
        sub.setSubmitting(false)
        sub.resetForm()
    }, 5000);

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
    phone: Yup.array().of(Yup.string().required("please fill this part")),
    favorites: Yup.array().of(Yup.string().required("please fill this part"))
})



const Register = () => {
    const [data, setdata] = useState(null)
    const [myvalue, setmyvalue] = useState(null)
    const edu =[
{key:1 ,value:"ابتدایی"},
{key:2 ,value:"سیکل"},
{key:3 ,value:"دیپلم"},
{key:4, value:"لیسانس"}


    ]
    const gender =[
{key:1 ,value:"مرد"},
{key:2 ,value:"زن"}

    ]
    const skills =[
        {key:1,value:"HTML"},
        {key:2,value:"CSS"},
        {key:3,value:"JS"},
        {key:4,value:"REACT"}
    ]

    

    // const formik = useFormik({
    //     initialValues,
    //     onSubmit,
    //     // validate
    //     validationSchema
    // })
    // console.log(formik);
    const handlesave = (formik) => {
        localStorage.setItem('savedata', JSON.stringify(formik.values))
    }
    const handlegetdata = () => {
        setmyvalue(data)
    }
    useEffect(() => {
        const localsave = JSON.parse(localStorage.getItem('savedata'));
        setdata(localsave)

    }, [])
    return (
        <Formik
            initialValues={myvalue || initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            validateOnMount
            enableReinitialize
        // validateOnBlur={false}
        // validateOnChange={false}
        >
            {formik => {

                return (

                    <div className="w-full min-h-screen overflow-scroll bg-purple-300 flex flex-col justify-center items-center gap-4">

                        <div className="w-3/12 h-auto rounded-lg bg-white/50 p-4">

                            <Form className="w-full h-full flex flex-col justify-center items-center gap-4 rounded-lg">
                                <h1 className="text-[20px] font-bold">Sign In</h1>
                               
                                <Formikcontrol
                                control="input"
                                type="text"
                                name="name"
                                label="name"
                                />
                         
                                <Formikcontrol
                                control="input"
                                type="email"
                                name="email"
                                label="email"
                                />
                                <Formikcontrol
                                control="input"
                                type="password"
                                name="password"
                                label="password"
                                />
                                <Formikcontrol
                                control="select"
                                name="edu"
                                label="edu"
                                options={edu}
                                />
                                <Formikcontrol
                                control="radio"
                                name="gender"
                                label="gender"
                                options={gender}
                                />
                                <Formikcontrol
                                control="checkbox"
                                name="skills"
                                label="skills"
                                options={skills}
                                />
                                 <Formikcontrol
                                control="input"
                                type="text"
                                name="address.city"
                                label="city"
                                />
                                <Formikcontrol
                                control="input"
                                type="text"
                                name="address.postalcode"
                                label="postalcode"
                                />
                                <div className="flex w-full">
                                <Formikcontrol
                                control="input"
                                type="text"
                                name="phone[0]"
                                label="phone"
                                />
                                 <Formikcontrol
                                control="input"
                                type="text"
                                name="phone[1]"
                                label="telephone"
                                />
                                  
                                </div>
                                <div className="flex flex-col justify-center items-center w-full gap-2">
                                    <FieldArray type="text" className="w-full bg-black/40 rounded-lg p-2" name="favorites">
                                        {props => <Favorites {...props} />}
                                    </FieldArray>
                                </div>
                                {/* <button className="w-[90px] h-[45px] rounded-lg text-white bg-blue-500" type="button" onClick={() => formik.validateForm()}>form verify</button>
                                <button className="w-[90px] h-[45px] rounded-lg text-white bg-orange-500" type="button" onClick={() => formik.setTouched({
                                    name: true,
                                    email: true
                                })}>form touch</button> */}
                                {formik.isValid ? (
                                    <button className="w-[140px] h-[45px] rounded-lg text-white bg-amber-500 cursor-pointer" type="button" onClick={() => handlesave(formik)}>Save in System</button>
                                ) : null}
                                {data ? (
                                    <button className="w-[140px] h-[45px] rounded-lg text-white bg-indigo-500 cursor-pointer" onClick={handlegetdata} type="button">Get last Data</button>
                                ) : null}
                                <button className="w-[90px] h-[45px] rounded-lg text-white bg-green-500 cursor-pointer disabled:bg-green-500/30" type="submit" disabled={!formik.isValid || formik.isSubmitting}>
                                    {formik.isSubmitting ? (
                                        "Loading..."
                                    ) : ("Submit")}
                                </button>
                            </Form>
                        </div>
                    </div>
                )
            }}
        </Formik>
    );
};

export default Register;