import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { App } from './App';

describe('App', () => {
    it('render component', () => {
        render(<App />);
    });

    // it('send user message', async () => {
    //     render(<App />);

    //     await waitFor(() => expect(screen.getByText(/im BOT/)).toBeInTheDocument(), {
    //         timeout: 1600,
    //     });
    //     // const input = screen.getByTestId<HTMLInputElement>('input');
    //     // await userEvent.type(input, 'Hello');

    //     // const button = screen.getByTestId('button');
    //     // await userEvent.click(button);

    //     // expect(screen.getAllByTestId('li').length).toBe(1);
    // });

    


})