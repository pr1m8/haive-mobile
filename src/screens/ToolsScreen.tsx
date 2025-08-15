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

export function ToolsScreen() {
  const tools = [
    {
      category: 'Development',
      items: [
        {
          title: 'Code Scanner',
          description: 'Scan and analyze code snippets using your camera',
          icon: 'scan',
          color: '#34C759',
          onPress: () => Alert.alert('Code Scanner', 'Coming soon!'),
        },
        {
          title: 'API Tester',
          description: 'Test REST APIs and view responses',
          icon: 'globe',
          color: '#007AFF',
          onPress: () => Alert.alert('API Tester', 'Coming soon!'),
        },
        {
          title: 'JSON Formatter',
          description: 'Format and validate JSON data',
          icon: 'code-slash',
          color: '#FF9500',
          onPress: () => Alert.alert('JSON Formatter', 'Coming soon!'),
        },
      ],
    },
    {
      category: 'AI Assistant',
      items: [
        {
          title: 'Code Helper',
          description: 'Get AI assistance with coding problems',
          icon: 'chatbubble-ellipses',
          color: '#5856D6',
          onPress: () => Alert.alert('Code Helper', 'Coming soon!'),
        },
        {
          title: 'Debug Assistant',
          description: 'AI-powered debugging suggestions',
          icon: 'bug',
          color: '#FF3B30',
          onPress: () => Alert.alert('Debug Assistant', 'Coming soon!'),
        },
        {
          title: 'Code Review',
          description: 'Get AI feedback on your code',
          icon: 'checkmark-done',
          color: '#30D158',
          onPress: () => Alert.alert('Code Review', 'Coming soon!'),
        },
      ],
    },
    {
      category: 'Utilities',
      items: [
        {
          title: 'Base64 Encoder',
          description: 'Encode and decode Base64 strings',
          icon: 'swap-horizontal',
          color: '#8E8E93',
          onPress: () => Alert.alert('Base64 Encoder', 'Coming soon!'),
        },
        {
          title: 'Hash Generator',
          description: 'Generate MD5, SHA256, and other hashes',
          icon: 'finger-print',
          color: '#AF52DE',
          onPress: () => Alert.alert('Hash Generator', 'Coming soon!'),
        },
        {
          title: 'Color Picker',
          description: 'Pick colors and get hex/RGB values',
          icon: 'color-palette',
          color: '#FF2D92',
          onPress: () => Alert.alert('Color Picker', 'Coming soon!'),
        },
      ],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.title}>Developer Tools</Text>
          <Text style={styles.subtitle}>
            Powerful tools to boost your development productivity
          </Text>

          {tools.map((category, categoryIndex) => (
            <View key={categoryIndex} style={styles.category}>
              <Text style={styles.categoryTitle}>{category.category}</Text>
              <Card padding={12}>
                {category.items.map((tool, toolIndex) => (
                  <TouchableOpacity
                    key={toolIndex}
                    style={[
                      styles.toolItem,
                      toolIndex < category.items.length - 1 && styles.toolItemBorder,
                    ]}
                    onPress={tool.onPress}
                  >
                    <View style={[styles.toolIcon, { backgroundColor: tool.color }]}>
                      <Ionicons as any name={tool.icon as any} size={20} color="#fff" />
                    </View>
                    <View style={styles.toolContent}>
                      <Text style={styles.toolTitle}>{tool.title}</Text>
                      <Text style={styles.toolDescription}>{tool.description}</Text>
                    </View>
                    <Ionicons as any name="chevron-forward" size={20} color="#C7C7CC" />
                  </TouchableOpacity>
                ))}
              </Card>
            </View>
          ))}
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
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 32,
    lineHeight: 22,
  },
  category: {
    marginBottom: 32,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 12,
  },
  toolItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 4,
  },
  toolItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  toolIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  toolContent: {
    flex: 1,
  },
  toolTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1a1a1a',
  },
  toolDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
    lineHeight: 18,
  },
});
