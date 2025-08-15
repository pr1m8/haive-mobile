declare module '@react-navigation/native' {
  import { ComponentType } from 'react';
  
  export const NavigationContainer: ComponentType<any>;
  export function useNavigation(): any;
}

declare module '@react-navigation/bottom-tabs' {
  import { ComponentType } from 'react';
  
  export function createBottomTabNavigator(): {
    Navigator: ComponentType<any>;
    Screen: ComponentType<any>;
  };
}

declare module '@react-navigation/native-stack' {
  import { ComponentType } from 'react';
  
  export function createNativeStackNavigator(): {
    Navigator: ComponentType<any>;
    Screen: ComponentType<any>;
  };
}

declare module '@expo/vector-icons' {
  import { ComponentType } from 'react';
  
  export const Ionicons: ComponentType<any> & {
    glyphMap: Record<string, any>;
  };
}
