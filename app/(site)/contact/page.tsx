import ContactMain from '@/app/components/contact/ContactMain'
import BlogHero from '@/app/components/reusable/BlogHero'
import React from 'react'

function page() {
  return (
    <div>
        <BlogHero title="Contacts" backgroundImage="/images/blog_header.webp" />
        <ContactMain />
    </div>
  )
}

export default page