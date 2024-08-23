"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Container } from "@mui/material";
import Image from "next/image";
import imgUrl from "../../public/img/background.jpg";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string(),
  password: z.string(),
});
export default function Component() {
  const Router= useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  });
  const user1 = {
    email: "admin@gmail.com",
    password: "admin123",
    isAdmin: true,
  };
  const user2 = {
    email: "user@gmail.com",
    password: "user123",
    isAdmin: false,
  };
  function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.email === user1.email && values.password === user1.password) {
      console.log("login success as admin");
      Router.push("/add-products")
      localStorage.setItem("user",JSON.stringify(user1))
      

    } else if (
      values.email === user2.email &&
      values.password === user2.password
    ) {
      console.log("login success as user");
      Router.push("/home")
      localStorage.setItem("user",JSON.stringify(user2))

    } else {
      alert("خطأ في تسجيل الدخول");
    }
  }

  return (
    <Container className="flex justify-center overflow-clip  relative py-20 bg-lime-500 bg-opacity-60 rounded-3xl">
      <Image alt="" src={imgUrl} fill className="object-cover opacity-80" />
      <Card className="w-full max-w-sm z-50">
        <CardHeader>
          <CardTitle className="text-2xl">تسجيل الدخول</CardTitle>
          <CardDescription>سجل بريدك الالكتروني للدخول</CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="grid gap-4">
              
              
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel >
                        البريد
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="البريد الاكتروني" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel >
                        كلمة السر
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="كلمة السر" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              
            </CardContent>
            <CardFooter>
              
                <Button type="submit" className="w-full">
                  تسجيل الدخول
                </Button>
             
            </CardFooter>
          </form>
        </Form>
      </Card>
    </Container>
  );
}
