import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useAuth } from '../hooks/useAuth';

export function ProfileScreen() {
  const { user, signOut } = useAuth();

  const profileActions = [
    {
      title: 'Edit Profile',
      description: 'Update your personal information',
      icon: 'person',
      onPress: () => Alert.alert('Edit Profile', 'Coming soon!'),
    },
    {
      title: 'Change Password',
      description: 'Update your account password',
      icon: 'lock-closed',
      onPress: () => Alert.alert('Change Password', 'Coming soon!'),
    },
    {
      title: 'API Keys',
      description: 'Manage your API keys',
      icon: 'key',
      onPress: () => Alert.alert('API Keys', 'Coming soon!'),
    },
    {
      title: 'Export Data',
      description: 'Download your account data',
      icon: 'download',
      onPress: () => Alert.alert('Export Data', 'Coming soon!'),
    },
  ];

  const stats = [
    { label: 'Projects', value: '12' },
    { label: 'API Tests', value: '47' },
    { label: 'Code Scans', value: '156' },
    { label: 'Days Active', value: '23' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* Profile Header */}
          <Card style={styles.profileHeader}>
            <View style={styles.avatarContainer}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                  {user?.email?.charAt(0).toUpperCase() || 'U'}
                </Text>
              </View>
              <TouchableOpacity style={styles.editAvatarButton}>
                <Ionicons as any name="camera" size={16} color="#fff" />
              </TouchableOpacity>
            </View>
            <Text style={styles.userName}>
              {user?.email?.split('@')[0] || 'User'}
            </Text>
            <Text style={styles.userEmail}>{user?.email}</Text>
            
            {/* Member since */}
            <View style={styles.memberSince}>
              <Ionicons as any name="calendar" size={16} color="#666" />
              <Text style={styles.memberSinceText}>
                Member since {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </Text>
            </View>
          </Card>

          {/* Stats */}
          <Card style={styles.statsCard}>
            <Text style={styles.statsTitle}>Activity Stats</Text>
            <View style={styles.statsContainer}>
              {stats.map((stat, index) => (
                <View key={index} style={styles.statItem}>
                  <Text style={styles.statValue}>{stat.value}</Text>
                  <Text style={styles.statLabel}>{stat.label}</Text>
                </View>
              ))}
            </View>
          </Card>

          {/* Profile Actions */}
          <Card padding={0}>
            {profileActions.map((action, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.actionItem,
                  index < profileActions.length - 1 && styles.actionItemBorder,
                ]}
                onPress={action.onPress}
              >
                <View style={styles.actionIcon}>
                  <Ionicons as any name={action.icon as any} size={20} color="#007AFF" />
                </View>
                <View style={styles.actionContent}>
                  <Text style={styles.actionTitle}>{action.title}</Text>
                  <Text style={styles.actionDescription}>{action.description}</Text>
                </View>
                <Ionicons as any name="chevron-forward" size={20} color="#C7C7CC" />
              </TouchableOpacity>
            ))}
          </Card>

          {/* Account Actions */}
          <Card>
            <Text style={styles.sectionTitle}>Account</Text>
            <View style={styles.accountActions}>
              <Button
                title="Backup Data"
                variant="outline"
                onPress={() => Alert.alert('Backup Data', 'Coming soon!')}
                style={styles.accountButton}
              />
              <Button
                title="Delete Account"
                variant="outline"
                onPress={() => Alert.alert(
                  'Delete Account',
                  'This action cannot be undone. Are you sure?',
                  [
                    { text: 'Cancel', style: 'cancel' },
                    { text: 'Delete', style: 'destructive' },
                  ]
                )}
                style={StyleSheet.flatten([styles.accountButton, styles.deleteButton]) as any}
                textStyle={styles.deleteButtonText}
              />
            </View>
          </Card>
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
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  editAvatarButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#34C759',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  userEmail: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  memberSince: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  memberSinceText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 6,
  },
  statsCard: {
    marginVertical: 8,
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  actionItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  actionIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f0f8ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  actionContent: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1a1a1a',
  },
  actionDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 16,
  },
  accountActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  accountButton: {
    flex: 1,
  },
  deleteButton: {
    borderColor: '#FF3B30',
  },
  deleteButtonText: {
    color: '#FF3B30',
  },
});
