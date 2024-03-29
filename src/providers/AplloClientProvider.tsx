"use client"
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { ReactNode } from 'react'

// Apollo client ->

const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
})


export const AplloClientProvider = ({ children }: { children: ReactNode }) => {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}