import { View, Text } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import { TabBarIcon } from "@/components/navigation/TabBarIcon"

const TabsLayout = () => {
  return (
    <>
        <Tabs
          screenOptions={{ 
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#ffa002',
            tabBarStyle: {
              borderTopWidth: 1,
              borderTopColor: '#232433',
              height: 60
            }

           }}
        >
            <Tabs.Screen
             name='dashboard'
             options={{ 
                title: "Home",
                headerShown: false,
                tabBarIcon: ({ color, focused}) => (
                    <View style={{ alignItems: 'center' , gap: 7}} >
                      <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
                      <Text style={{ color: color }} className={"font-pmedium"} >Home</Text>
                    </View>
                )
              }}
             />

            <Tabs.Screen
             name='layanan'
             options={{ 
                title: "Layanan",
                headerShown: false,
                tabBarIcon: ({ color, focused}) => (
                    <View style={{ alignItems: 'center' , gap: 7}} >
                      <TabBarIcon name={focused ? 'hand-left' : 'hand-left-outline'} color={color} />
                      <Text style={{ color: color }} className={"font-pmedium"} >Layanan</Text>
                    </View>
                )
              }}
             />

            <Tabs.Screen
             name='profile'
             options={{ 
                title: "Profile",
                headerShown: false,
                tabBarIcon: ({ color, focused}) => (
                    <View style={{ alignItems: 'center' , gap: 7}} >
                      <TabBarIcon name={focused ? 'person-circle' : 'person-circle-outline'} color={color} />
                      <Text style={{ color: color }} className={"font-pmedium"} >Profile</Text>
                    </View>
                )
              }}
             />
        </Tabs>
    </>
  )
}

export default TabsLayout