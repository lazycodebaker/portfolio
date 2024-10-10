
import React from 'react'

export default function Head({
    title,
    description
}: {
    title: string,
    description: string
}) {
    return <React.Fragment>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> 
    </React.Fragment>
}