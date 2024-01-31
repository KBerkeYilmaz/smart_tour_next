import SigninForm from "@components/forms/SigninForm";
import { unstable_setRequestLocale } from "next-intl/server";

const SignIn = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  return (
    <main className="flex justify-center items-center w-screen">
      <SigninForm />
    </main>
  );
};

export default SignIn;
