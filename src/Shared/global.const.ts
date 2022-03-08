import { createTheme } from '@mui/material/styles';

export const appStyle = {
    forms_padding: 10
}

export const DATE_FORMAT: string = "DD-MM-yyyy";



export const appTheme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            //   main: purple[500],
            main: '#5D5FEF',
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#EF5DA8',
        },
    },
});