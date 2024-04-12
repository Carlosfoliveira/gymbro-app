import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home} from '@/pages'
const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='home' component={Home} />
        </Navigator>
    )
}
