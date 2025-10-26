import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Card } from '../componentes/Card/index';

export default {
    title: 'componentes/Card',
    component: Card,
} as ComponentMeta<typeof Card>;

export const CardComponent = () => {
    return(
        <Card>
            <h1>Olá, sou um card</h1>
        </Card>
    )
}

