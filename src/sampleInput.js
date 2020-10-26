import React from "react";
import { useForm } from "react-hook-form";

// export default function InputSet  () {
//   const { handleSubmit, register, errors } = useForm();
//   const onSubmit = values => console.log(values);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//         <span>email</span>
//       <input
//         name="email"
//         ref={register({
//           required: "Required",
//           pattern: {
//             value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//             message: "invalid email address"
//           }
//         })}
//       />
//       {errors.email && errors.email.message}
// <span>name</span>
//       <input
//         name="username"
//         ref={register({
//           validate: value => value !== "admin" || "Nice try!"
//         })}
//       />
//       {errors.username && errors.username.message}

//       <button type="submit">Submit</button>
//     </form>
//   );
// };
export default function InputSet() {
    const { control, handleSubmit, errors } = useForm();
    // const [data, setData] = useState({ firstName: "" });
  
    const onSubmit = data => console.log(data);
  
    // const onChangeHandler = e => {
    //   const { name, value } = e.target;
    //   const _data = { ...data };
    //   _data[name] = value;
    //   setData(_data);
    // };
  
    return (
      <>
        {/* <p>{JSON.stringify(data)}</p> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            name="firstName"
            id="firstName"
            label="First Name"
            control={control}
            // value={data.firstName}
            rules={{ required: true }}
            errors={errors.firstName}
            // onChange={([e]) => onChangeHandler(e)}
          />
  
          <input type="submit" />
        </form>
      </>
    );
  }