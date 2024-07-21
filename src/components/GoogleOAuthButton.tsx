"use client";
import React from "react";
import { Button } from "./ui/button";
import { FcGoogle } from "react-icons/fc";
import { getGoogleOauthConsentUrl } from "@/app/authenticate/auth.action";
import { toast } from "sonner";

const GoogleOAuthButton = () => {
  return (
    <Button
      onClick={async () => {
        const res = await getGoogleOauthConsentUrl();
        if (res.url) {
          window.location.href = res.url;
        } else {
          toast.error(res.error);
        }
      }}
    >
      <FcGoogle className="w-4 h-4 mr-2" /> Continue with Google!
    </Button>
  );
};

export default GoogleOAuthButton;
