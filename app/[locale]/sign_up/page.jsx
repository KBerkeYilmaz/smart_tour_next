import SignupForm from "@components/forms/SignupForm";
import { unstable_setRequestLocale } from "next-intl/server";

const Signup = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  

  return (
      <SignupForm />
  );
};

export default Signup;
