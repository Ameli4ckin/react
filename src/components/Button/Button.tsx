import MUIButton from '@mui/material/Button';
import React from 'react';
import { FC } from 'react'

interface ButtonProps {
    label: string;
    disabled?: boolean;
    click?: () => void;
}

export const Button: FC<ButtonProps> = ({
    label,
    disabled = false,
    click = () => null,
}) => (
    <MUIButton 
        disabled={disabled} 
        variant="contained" 
        type="submit" 
        onClick={click}
    >
        {label}
    </MUIButton>
)