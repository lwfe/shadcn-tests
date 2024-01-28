'use client'
import Image from "next/image"

import { Mail } from "@/components/mailExample/mail"

export default function MailPage() {
  return (
    <div className="overflow-hidden">
      <div className="md:hidden">
        <Image
          src="/examples/mail-dark.png"
          width={1280}
          height={727}
          alt="Mail"
          className="hidden dark:block"
        />
        <Image
          src="/examples/mail-light.png"
          width={1280}
          height={727}
          alt="Mail"
          className="block dark:hidden"
        />
      </div>
      <div className="hidden h-full flex-col md:flex">
        <Mail
          accounts={[{ email: "leonardo.lwfe@gmail.com", icon: null, label: "Leonardo LWFE" }]}
          mails={[]}
          defaultLayout={[265, 440, 655]}
          navCollapsedSize={4}
        />
      </div>
    </div>
  )
}