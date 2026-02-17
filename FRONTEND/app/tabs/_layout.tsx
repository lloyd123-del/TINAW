import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        
        // Tab Bar Customization with Rounded Corners
        tabBarStyle: {
          backgroundColor: '#ffffff',
          height: 90,
          paddingBottom: 8,
          paddingTop: 8,
          borderTopLeftRadius: 20,           
          borderTopRightRadius: 20,         
          borderTopWidth: 0,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
          elevation: 10,
          marginHorizontal: 0, 
        },
        
        tabBarItemStyle: {
          marginHorizontal: 4,
          marginVertical: 0,
          
        },
        
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '600',
          marginTop: 2,
        },
        
        tabBarActiveTintColor: '#4292C6',
        tabBarInactiveTintColor: '#08306B',
      }}
    >
        
      <Tabs.Screen
        name="home"
        options={{
          title: 'HOME',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={30} color={color} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="add"
        options={{
          title: 'ADD',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle" size={30} color={color} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="alerts"
        options={{
          title: 'ALERTS',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications" size={30} color={color} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="history"
        options={{
          title: 'HISTORY',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="document-text" size={30} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}