import Loading from '@/components/Animations/Loading'
import TextReveal from '@/components/Animations/TextReveal'
import Head from '@/components/Head'
import Layout from '@/components/Layout/Inner'

import React from 'react'

export default function Home() {

  return (
    <>
      <Head title="Anshuman Tiwari" description="Anshuman Tiwari's Portfolio" key={'Anshuman Tiwari'} />
      <Layout>
        <Loading />
        <div className="h-screen">
          <TextReveal key="home-h1" text='Home' lineHeight='10vw' />
        </div>
      </Layout>
    </>
  )
}