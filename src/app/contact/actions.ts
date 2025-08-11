"use server"

import * as z from "zod"

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
})

export async function handleContactForm(values: z.infer<typeof formSchema>) {
  const validatedFields = formSchema.safeParse(values)

  if (!validatedFields.success) {
    return { success: false, message: "Invalid data provided." }
  }
  
  // Here you would typically use a service like Resend, SendGrid, or Nodemailer
  // to send an email. For this example, we'll just log to the console.
  console.log("New contact form submission:")
  console.log("Name:", validatedFields.data.name)
  console.log("Email:", validatedFields.data.email)
  console.log("Message:", validatedFields.data.message)

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Always return a success message in this simulation
  return { success: true, message: "Message sent successfully!" }
}
