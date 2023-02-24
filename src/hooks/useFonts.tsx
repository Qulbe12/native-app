import * as Font from 'expo-font';

// @ts-ignore
export default useFonts = async () =>
    await Font.loadAsync({
        'Lato-Black': require('../fonts/Lato-Black.ttf'),
        'Lato-Bold': require('../fonts/Lato-Bold.ttf'),
        'Lato-Regular': require('../fonts/Lato-Regular.ttf'),
        'Rancho-Regular': require('../fonts/Rancho-Regular.ttf'),
    });

