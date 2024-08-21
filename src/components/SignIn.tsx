
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Container } from "@mui/material"
import Image from "next/image"
import imgUrl from "../../public/img/background.jpg"
import Link from "next/link"
export default function Component() {
  return (
    <Container className="flex justify-center overflow-clip  relative py-20 bg-lime-500 bg-opacity-60 rounded-3xl">
        <Image alt="" src={imgUrl} fill className="object-cover opacity-80"/>
        <Card className="w-full max-w-sm z-50">
      <CardHeader>
        <CardTitle className="text-2xl">تسجيل الدخول</CardTitle>
        <CardDescription>سجل بريدك الالكتروني للدخول</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">الايميل</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">البريد</Label>
          <Input id="password" type="password" required />
        </div>
      </CardContent>
      <CardFooter>
        <Link href={"/home"} className="w-full"><Button className="w-full">تسجيل الدخول</Button></Link>
      </CardFooter>
    </Card>
    </Container>
  )
}