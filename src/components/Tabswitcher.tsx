"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

type Props = {
  SignupTab: React.ReactNode;
  SigninTab: React.ReactNode;
};

const Tabswitcher = (props: Props) => {
  return (
    <Tabs
      defaultValue="sign-in"
      className=" flex flex-col items-center justify-center "
    >
      <TabsList className="flex justify-center space-x-2 w-full">
        <TabsTrigger value="sign-in">Sign In</TabsTrigger>
        <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
      </TabsList>
      <TabsContent value="sign-in">{props.SigninTab}</TabsContent>
      <TabsContent value="sign-up">{props.SignupTab}</TabsContent>
    </Tabs>
  );
};

export default Tabswitcher;
