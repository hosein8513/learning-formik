import { ErrorMessage, Field } from "formik"
import Personalerror from "./Personalerror";
const Favorites = (props) => {
    const {form,push,remove} = props
    const {favorites} = form.values
    return (
        <>
            <i className='fas fa-plus text-green-400 w-5 h-5' onClick={()=>push('')}></i>
           
            {favorites.map((f,i)=>(
                <div key={i} className='relative'>
                    <Field type="text" className="w-full bg-black/40 rounded-lg p-2" name={`favorites[${i}]`} placeholder="favorites"/>
                    {
                        favorites.length > 1 ?(
                            <i className="fas fa-trash text-red-600  absolute top-3 right-1" onClick={()=>remove(i)}></i>
                        ):null
                    }
                     <ErrorMessage name={`favorites[${i}]`} component={Personalerror} />
                </div>
            ))}
        </>
    );
};

export default Favorites;