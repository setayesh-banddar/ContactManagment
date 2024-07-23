import { Field, Form, Formik } from "formik";
import { useContext } from "react";
import * as Yup from "yup";
import { ContactContext } from "../contactContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function CreateNewContact() {
  const notify = () => toast("مخاطب مورد نظر شما ثبت شد");
    const { createNew } = useContext(ContactContext);
    return (
      <Formik
        initialValues={{ name: "", lastName: "" , phone:"", email:"" , relation:"" }}
        onSubmit={(values) => {
          notify()
          createNew({ name: values.name, lastName: values.lastName , phone: values.phone, email: values.email , relation:values.relation});
          createNew
        } }
        validationSchema={Yup.object({
          name: Yup.string()
            .required("فیلد نام الزامی می باشد")
            .max(20, "نام شما باید کمتر از 20 کاراکتر باش")
            .strict(),
            lastName: Yup.string()
            .required("فیلد نام خانوادگی الزامی می باشد")
            .max(30, "نام خانوادگی شما باید کمتر از 30 کاراکتر باش")
            .strict(),
          //   phone: Yup.string().matches(
          //   "/^\+?[1-9][0-9]{7,14}$/",
          //   "شماره تماس صحیح نمی باشد"
          // ).required("فیلد شماره تماس الزامی می باشد"),
          // relation: Yup.string().required("انتخاب نسبت الزامی می باشد"),
          //  email: Yup.string().matches(
          //   "\A[A-Z0-9+_.-]+@[A-Z0-9.-]+\Z ",
          //   "ایمیل صحیح نمی باشد"
          // ).required("فیلد ایمیل الزامی می باشد"),
        })}
        validateOnChange={false}
        validateOnBlur={true}
      >
        {({ errors , isSubmitting  }) => (
          <Form>
         
            <Field id="name" name="name" placeholder="نام"  className="w-[300px] border rounded-md p-1" />
            <p style={{ color: "red" }}>{errors.name}</p>
            <br />
            <Field id="lastName" name="lastName" placeholder="نام خانوادگی"  className="w-[300px] border  rounded-md p-1"/>
            <p style={{ color: "red" }}>{errors.lastName}</p>
            <br />
            <Field id="phone" name="phone" placeholder="شماره تماس" type="number"  className="w-[300px] border rounded-md p-1" />
            <p style={{ color: "red" }}>{errors.phone}</p>
            <br />
            <Field as="select" name="relation" className="w-[300px] border rounded-md p-1 mb-4">
             <option> نسبت</option>
             <option value="اعضای خانواده">اعضای خانواده</option>
             <option value="دوست">دوست</option>
             <option value="همکار">همکار</option>
             <option value="فامیل">فامیل</option>

           </Field>
           <br/>
            <Field id="email" name="email" placeholder="ایمیل" type="email"  className="w-[300px] border rounded-md p-1" />
            <p style={{ color: "red" }}>{errors.email}</p>
            <br />
            <div className="text-center" ><button disabled={isSubmitting}  className="bg-blue-900 px-3 py-1 text-white rounded-md"  type="submit">اضافه کردن</button></div>
            <ToastContainer />
          </Form>
        )}
      </Formik>
    );
}
