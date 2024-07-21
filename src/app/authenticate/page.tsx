import TabSwitcher from "@/components/Tabswitcher";
import React from "react";
import SignInForm from "./SigninForm";
import SignUpForm from "./SignupForm";
import { getUser } from "@/lib/lucia";
import { redirect } from "next/navigation";
import GoogleOAuthButton from "@/components/GoogleOAuthButton";
import { Card } from "@/components/ui/card";

const AuthenticatePage = async () => {
  const user = await getUser();
  if (user) {
    return redirect("/dashboard");
  }
  return (
    <div className="relative flex w-full h-screen bg-background">
      <div className="max-w-3xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Card className="p-1 flex items-center justify-center flex-col">
          <TabSwitcher SigninTab={<SignInForm />} SignupTab={<SignUpForm />} />
        </Card>
      </div>
    </div>
  );
};

export default AuthenticatePage;
