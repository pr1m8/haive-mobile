import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Switch,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card } from '../components/ui/Card';
import { useAuth } from '../hooks/useAuth';

interface SwitchSettingItem {
  title: string;
  description: string;
  type: 'switch';
  value: boolean;
  onValueChange: (value: boolean) => void;
  icon: string;
}

interface ActionSettingItem {
  title: string;
  description: string;
  type: 'action';
  onPress: () => void;
  icon: string;
}

interface InfoSettingItem {
  title: string;
  description: string;
  type: 'info';
  icon: string;
}

type SettingItem = SwitchSettingItem | ActionSettingItem | InfoSettingItem;

export function SettingsScreen() {
  const { signOut } = useAuth();
  const [notifications, setNotifications] = React.useState(true);
  const [biometric, setBiometric] = React.useState(false);
  const [analytics, setAnalytics] = React.useState(true);

  const handleSignOut = () => {
    Alert.alert(
      'Sign Out',
      'Are you sure you want to sign out?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Sign Out',
          style: 'destructive',
          onPress: () => signOut(),
        },
      ]
    );
  };

  const settingsSections: { title: string; items: SettingItem[] }[] = [
    {
      title: 'Preferences',
      items: [
        {
          title: 'Notifications',
          description: 'Receive push notifications',
          type: 'switch',
          value: notifications,
          onValueChange: setNotifications,
          icon: 'notifications',
        },
        {
          title: 'Biometric Authentication',
          description: 'Use Face ID or Touch ID',
          type: 'switch',
          value: biometric,
          onValueChange: setBiometric,
          icon: 'finger-print',
        },
        {
          title: 'Analytics',
          description: 'Help improve the app',
          type: 'switch',
          value: analytics,
          onValueChange: setAnalytics,
          icon: 'analytics',
        },
      ],
    },
    {
      title: 'Support',
      items: [
        {
          title: 'Help Center',
          description: 'Get help and support',
          type: 'action',
          onPress: () => Alert.alert('Help Center', 'Coming soon!'),
          icon: 'help-circle',
        },
        {
          title: 'Contact Us',
          description: 'Send feedback or report issues',
          type: 'action',
          onPress: () => Alert.alert('Contact Us', 'Coming soon!'),
          icon: 'mail',
        },
        {
          title: 'Privacy Policy',
          description: 'View our privacy policy',
          type: 'action',
          onPress: () => Alert.alert('Privacy Policy', 'Coming soon!'),
          icon: 'shield-checkmark',
        },
        {
          title: 'Terms of Service',
          description: 'View our terms of service',
          type: 'action',
          onPress: () => Alert.alert('Terms of Service', 'Coming soon!'),
          icon: 'document-text',
        },
      ],
    },
    {
      title: 'About',
      items: [
        {
          title: 'Version',
          description: '1.0.0',
          type: 'info',
          icon: 'information-circle',
        },
        {
          title: 'Build',
          description: 'Development',
          type: 'info',
          icon: 'construct',
        },
      ],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.title}>Settings</Text>

          {settingsSections.map((section, sectionIndex) => (
            <View key={sectionIndex} style={styles.section}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              <Card padding={0}>
                {section.items.map((item, itemIndex) => (
                  <TouchableOpacity
                    key={itemIndex}
                    style={[
                      styles.settingItem,
                      itemIndex < section.items.length - 1 && styles.settingItemBorder,
                    ]}
                    onPress={item.type === 'action' ? (item as ActionSettingItem).onPress : undefined}
                    disabled={item.type !== 'action'}
                  >
                    <Ionicons as any
                      name={item.icon as any}
                      size={20}
                      color="#007AFF"
                      style={styles.settingIcon}
                    />
                    <View style={styles.settingContent}>
                      <Text style={styles.settingTitle}>{item.title}</Text>
                      <Text style={styles.settingDescription}>
                        {item.description}
                      </Text>
                    </View>
                    {item.type === 'switch' && (
                      <Switch
                        value={(item as SwitchSettingItem).value}
                        onValueChange={(item as SwitchSettingItem).onValueChange}
                        trackColor={{ false: '#e9e9ea', true: '#007AFF' }}
                        thumbColor="#fff"
                      />
                    )}
                    {item.type === 'action' && (
                      <Ionicons as any name="chevron-forward" size={20} color="#C7C7CC" />
                    )}
                  </TouchableOpacity>
                ))}
              </Card>
            </View>
          ))}

          {/* Sign Out Button */}
          <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
            <Ionicons as any name="log-out" size={20} color="#FF3B30" />
            <Text style={styles.signOutText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 32,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  settingItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingIcon: {
    marginRight: 16,
  },
  settingContent: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1a1a1a',
  },
  settingDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  signOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingVertical: 16,
    borderRadius: 12,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  signOutText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FF3B30',
    marginLeft: 8,
  },
});
