import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#579DDA',
      main: '#2F5C84',
      dark: '#1D3D59',
      contrastText: '#EDF2F8',
    },
    secondary: {
      light: '#ffb74d',
      main: '#ff9800',
      dark: '#ff6d00',
      contrastText: '#0000',
    },
  },
});
export default theme;
