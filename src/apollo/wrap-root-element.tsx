import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './xola-client';

interface RootProps {
    element: React.ReactNode
}



export const wrapRootElement: React.FC<RootProps> = ({ element }) => (
    <ApolloProvider client={client}> {element} </ApolloProvider>
)