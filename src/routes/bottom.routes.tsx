import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import User from "../pages/user";
import List from "../pages/list";
import CustomTabBar from "../components/CustomTabBar";
import { AuthProviderList } from "../context/authContext_list";

const Tab = createBottomTabNavigator();

export function BottomRoutes() {
    return (
        <AuthProviderList>
            <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={props => <CustomTabBar {...props} />}>
                <Tab.Screen name="List" component={List} />
                <Tab.Screen name="User" component={User} />
            </Tab.Navigator>
        </AuthProviderList>
    );
}