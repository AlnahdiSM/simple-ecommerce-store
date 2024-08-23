"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Grid, Paper } from "@mui/material";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";

import FileUploader from "@/components/FileUploader";
import NavBar from "@/components/NavBar";

const formSchema = z.object({
  title: z.string(),
  description: z.string(),
  price: z.string(),
  cardCover: z.instanceof(File).optional(), //this may to change,
  img1: z.instanceof(File).optional(), //this may to change,
  img2: z.instanceof(File).optional(), //this may to change,
  img3: z.instanceof(File).optional(), //this may to change,
  img4: z.instanceof(File).optional(), //this may to change,

  // thumbnail: z.instanceof(File),
  // image1: z.instanceof(File),
  // image2: z.instanceof(File),
  // image3: z.instanceof(File),
  // image4: z.instanceof(File),
  // image5: z.instanceof(File),
});
export default function page() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();

    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("price", values.price);

    if (!values.cardCover) return;
    formData.append("cardCover", values.cardCover);
    if (!values.img1) return;
    formData.append("img1", values.img1);
    if (!values.img2) return;
    formData.append("img2", values.img2);
    if (!values.img3) return;
    formData.append("img3", values.img3);
    if (!values.img4) return;
    formData.append("img4", values.img4);

    // formData.append("image1", values.image1);
    // formData.append("image2", values.image2);
    // formData.append("image3", values.image3);
    // formData.append("image4", values.image4);
    // formData.append("image5", values.image5);

    // Now you can send formData to your server using fetch or any other method
    console.log("Form Data:", formData);

    fetch("/api/upload", { method: "POST", body: formData });
  }

  return (
    <>
    <NavBar/>
      {" "}
      <Grid container className="p-6">
        <Grid item xs={12}>
          <Paper className="p-4 w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 w-full"
              >
                <div className="flex justify-between items-center">
                  <Grid container xs={6} className=" w-full">
                    <Grid item xs={6}>
                      <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel className="text-lg font-bold">
                              عنوان المنتج
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="عنوان المنتج" {...field} />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel className="text-lg font-bold">
                              وصف المنتج
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="إكتب وصف المنتج"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel className="text-lg font-bold">
                              سعر المنتج
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="سعر المنتج" {...field} />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="cardCover"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel className="text-lg font-bold">
                              كفر المنتج
                            </FormLabel>
                            <FormControl>
                              <FileUploader
                                setValue={form.setValue}
                                inputId="cardCover"
                                onChange={async (files) => {
                                  try {
                                    if (!files?.[0]) return;

                                    field.onChange(files[0]);
                                  } catch (error) {
                                    JSON.stringify(error);
                                  }
                                }}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </Grid>
                  </Grid>
                  <Grid container xs={6} columnSpacing={2} className=" w-full">
                    <Grid item xs={6}>
                      <FormField
                        control={form.control}
                        name="img1"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel className="text-lg font-bold">
                              صورة رقم 1
                            </FormLabel>
                            <FormControl>
                              <FileUploader
                                setValue={form.setValue}
                                inputId="img1"
                                onChange={async (files) => {
                                  try {
                                    if (!files?.[0]) return;

                                    field.onChange(files[0]);
                                  } catch (error) {
                                    JSON.stringify(error);
                                  }
                                }}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormField
                        control={form.control}
                        name="img2"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel className="text-lg font-bold">
                              صورة رقم 2
                            </FormLabel>
                            <FormControl>
                              <FileUploader
                                setValue={form.setValue}
                                inputId="img2"
                                onChange={async (files) => {
                                  try {
                                    if (!files?.[0]) return;

                                    field.onChange(files[0]);
                                  } catch (error) {
                                    JSON.stringify(error);
                                  }
                                }}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormField
                        control={form.control}
                        name="img3"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel className="text-lg font-bold">
                              صورة رقم 3
                            </FormLabel>
                            <FormControl>
                              <FileUploader
                                setValue={form.setValue}
                                inputId="img3"
                                onChange={async (files) => {
                                  try {
                                    if (!files?.[0]) return;

                                    field.onChange(files[0]);
                                  } catch (error) {
                                    JSON.stringify(error);
                                  }
                                }}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormField
                        control={form.control}
                        name="img4"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel className="text-lg font-bold">
                              صورة رقم 4
                            </FormLabel>
                            <FormControl>
                              <FileUploader
                                setValue={form.setValue}
                                inputId="img4"
                                onChange={async (files) => {
                                  try {
                                    if (!files?.[0]) return;

                                    field.onChange(files[0]);
                                  } catch (error) {
                                    JSON.stringify(error);
                                  }
                                }}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </Grid>
                  </Grid>
                </div>
                <Button type="submit" className="w-full">
                  إضافة المتنج
                </Button>
              </form>
            </Form>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
