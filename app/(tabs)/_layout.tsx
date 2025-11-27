import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Home',
          title: 'Home',

          headerTransparent: true
        }}
      />
      <Drawer.Screen
        name="register" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Register',
          headerTransparent: true,
        }}
      />
      <Drawer.Screen
        name="signIn" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Sign In',
          headerTransparent: true,
        }}
      />
      <Drawer.Screen
        name="festival" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Festival',
          headerTransparent: true
        }}
      />
    </Drawer>
  );
}
