import colors from '../styles/colors';
import spacing from 'material-ui/styles/spacing';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  spacing,
  fontFamily: 'Roboto, sans-serif',
  datePicker: {
    selectColor: colors.brand.blue,
  },
  timePicker: {
    headerColor: colors.brand.blue,
  },
  palette: {
    primary1Color: colors.brand.blue,
    primary2Color: colors.brand.turquoise,
    primary3Color: colors.neutral.silver,
    accent1Color: colors.brand.violet,
    accent2Color: colors.neutral.fog,
    accent3Color: colors.neutral.gray,
    textColor: colors.neutral.dark,
    alternateTextColor: colors.neutral.white,
    canvasColor: colors.neutral.white,
    borderColor: colors.neutral.typhoon,
    disabledColor: colors.neutral.dim,
    pickerHeaderColor: colors.neutral.turquoise,
    clockCircleColor: colors.neutral.typhoon,
    shadowColor: colors.neutral.black,
  },
});

export default muiTheme;
