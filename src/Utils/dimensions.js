import { Dimensions } from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

export const windowsWidth = useWindowDimensions().width;
export const windowsHeight = useWindowDimensions().height;