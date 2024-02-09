"use client";

import { Form, Formik } from "formik";
import { Button } from "@material-tailwind/react";

import { TextField } from "../../atoms";
import { loginSchema } from "./loginSchema";
import useLogin from "./useLogin";

const LoginPage = () => {
  const { isPending, mutate } = useLogin();

  return (
    <div className="p-4 rounded-lg bg-white w-1/3">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          mutate({
            email: values.email,
            password: values.password,
          });
        }}
      >
        {(props) => {
          const { handleChange, values, touched, errors, handleSubmit } = props;
          return (
            <Form>
              <div className="flex flex-col gap-2 overflow-hidden">
                <TextField
                  name="email"
                  type="text"
                  placeholder="Email"
                  onChange={handleChange}
                  value={values.email}
                  error={!!(errors.email && touched.email)}
                  success={!errors.email && touched.email}
                  errorMessage={errors.email}
                />

                <TextField
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={values.password}
                  error={!!(errors.password && touched.password)}
                  success={!errors.password && touched.password}
                  errorMessage={errors.password}
                />

                <Button
                  color="light-blue"
                  ripple
                  placeholder={undefined}
                  disabled={isPending}
                  onClick={() => handleSubmit()}
                >
                  Submit
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default LoginPage;
