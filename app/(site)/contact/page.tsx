import ContactMain from '@/app/components/contact/ContactMain'
import BlogHero from '@/app/components/reusable/BlogHero'
import React from 'react'

export const metadata = {
  title: "Contact Webentryx | Speak With Our Digital Strategy Team",
  description:
    "Get in touch with Webentryx for expert support in digital marketing, analytics, paid media, and tailored strategies to grow your business effectively.",
   alternates: {
    canonical: "https://www.webentryx.com/contact",
  },
};
function page() {
  return (
    <div>
        <BlogHero title="Contacts" backgroundImage="/images/blog_header.webp" />
        <ContactMain />
    </div>
  )
}

export default page