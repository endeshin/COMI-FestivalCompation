import CustomDrawerContent from '@/components/customDrawerContent';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <Drawer
    screenOptions={{
      drawerLabelStyle: {
            fontSize: 16,
          },
      drawerActiveTintColor: "white",
      drawerInactiveTintColor: "#8A2BE2",
      drawerPosition: 'right',
      headerTitleStyle: {
            display: 'none'
          },
    }}
    drawerContent={CustomDrawerContent}
    >
      <Drawer.Screen
        name="index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Home',

          swipeEnabled: true,
          headerTransparent: true,
          overlayColor: "#090932",
          drawerStyle: {
            backgroundColor: '#151561'
          }
        }}
      />
      <Drawer.Screen
        name="register" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Register',

          swipeEnabled: true,
          headerTransparent: true,
          overlayColor: "#090932",
          drawerStyle: {
            backgroundColor: '#151561'
          }
        }}
      />
      <Drawer.Screen
        name="signIn" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Sign In',
          swipeEnabled: true,
          headerTransparent: true,
          overlayColor: "#090932",
          drawerStyle: {
            backgroundColor: '#151561'
          }
        }}
      />
      <Drawer.Screen
        name="festival" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Festival',
          swipeEnabled: true,
          headerTransparent: true,
          overlayColor: "#090932",
          drawerStyle: {
            backgroundColor: '#151561'
          }
        }}
      />
    </Drawer>
  );
}
