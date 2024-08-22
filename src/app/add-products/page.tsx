"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
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
const formSchema = z.object({
  title: z.string(),
  description: z.string(),
  price: z.string(),
  thumbnail: z.instanceof(File),
  image1: z.instanceof(File),
  image2:z.instanceof(File),
  image3: z.instanceof(File),
  image4: z.instanceof(File),
  image5: z.instanceof(File),
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
    formData.append("thumbnail", values.thumbnail);
    formData.append("image1", values.image1);
    formData.append("image2", values.image2);
    formData.append("image3", values.image3);
    formData.append("image4", values.image4);
    formData.append("image5", values.image5);

    // Now you can send formData to your server using fetch or any other method
    console.log("Form Data:", formData);
    // Example: fetch('/api/upload', { method: 'POST', body: formData })

  }
  return (
    <Grid container className="p-6">
      <Grid item xs={4}>
        <Paper className="p-4 w-full">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-2 w-full"
            >
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
                      <Textarea placeholder="إكتب وصف المنتج" {...field} />
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
                name="thumbnail"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-lg font-bold">
                      كفر المنتج
                    </FormLabel>
                    <FormControl>
                      <Input type="file" placeholder="كفر المنتج" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Grid container columnSpacing={2}>
                <Grid item xs={4}>
                  {" "}
                  <FormField
                    control={form.control}
                    name="thumbnail"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-lg font-bold">
                          صورة رقم 1
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            placeholder="صورة رقم 1"
                            onChange={(e) =>
                              field.onChange(e.target.files ? e.target.files[0] : null)
                            }
    
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormField
                    control={form.control}
                    name="thumbnail"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-lg font-bold">
                          صورة رقم 2
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            placeholder="صورة رقم 2"
                            {...field}
                            onChange={(e) =>
                              field.onChange(e.target.files ? e.target.files[0] : null)
                            }
    
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormField
                    control={form.control}
                    name="thumbnail"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-lg font-bold">
                          صورة رقم 3
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            placeholder="صورة رقم 3"
                            {...field}
                            onChange={(e) =>
                              field.onChange(e.target.files ? e.target.files[0] : null)
                            }
    
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormField
                    control={form.control}
                    name="thumbnail"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-lg font-bold">
                          صورة رقم 4
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            placeholder="صورة رقم 4"
                            {...field}
                            onChange={(e) =>
                              field.onChange(e.target.files ? e.target.files[0] : null)
                            }
    
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormField
                    control={form.control}
                    name="thumbnail"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-lg font-bold">
                          صورة رقم 5
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            placeholder="صورة رقم 5"
                            {...field}
                            onChange={(e) =>
                              field.onChange(e.target.files ? e.target.files[0] : null)
                            }
    
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </Grid>
              </Grid>
              <Button type="submit">إضافة المتنج</Button>
            </form>
          </Form>
        </Paper>
      </Grid>
    </Grid>
  );
}
