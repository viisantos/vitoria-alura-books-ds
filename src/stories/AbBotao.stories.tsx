// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, nextjs-vite, etc.
import type{ Meta, StoryObj } from '@storybook/react-vite';

import { AbBotao } from '../componentes/AbBotao';

const meta = {
    component: AbBotao,
} satisfies Meta<typeof AbBotao>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primario: Story = {
    args: {
        backgroundColor: '#ff0',
        label: 'Button',
    },
};