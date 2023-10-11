import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Feather} from '@expo/vector-icons'

import Inicial from '../screens/telaInicial'
import Sobre from '../screens/telaSobre'
import Config from '../screens/telaConfig'

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return(
        <Tab.Navigator>
            <Tab.Screen
                name='Home'
                component={Inicial}
                options={{
                    tabBarIcon:() => <Feather name='home' size={25}/>
                }}
            />
            <Tab.Screen
                name='Info'
                component={Sobre}
                options={{
                    tabBarIcon:() => <Feather name='info' size={25}/>
                }}
            />
            <Tab.Screen
                name='Settings'
                component={Config}
                options={{
                    tabBarIcon:() => <Feather name='settings' size={25}/>
                }}
            />
        </Tab.Navigator>
    )
}