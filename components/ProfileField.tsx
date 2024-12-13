import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '@/constant/Colors';
import { ChevronRight } from 'lucide-react-native';

interface ProfileFieldProps {
  label: string;
  value: string | React.ReactNode;
  onPress?: () => void;
  showArrow?: boolean;
}

export default function ProfileField({
  label,
  value,
  onPress,
  showArrow = true,
}: ProfileFieldProps) {
  const FieldContainer = onPress ? TouchableOpacity : View;

  return (
    <FieldContainer
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.content}>
        <Text style={styles.label}>{label}</Text>
        {typeof value === 'string' ? (
          <Text style={styles.value}>{value}</Text>
        ) : (
          value
        )}
      </View>
      {onPress && showArrow && (
        <ChevronRight size={20} color={Colors.neutral[400]} />
      )}
    </FieldContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 0,
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral[200],
  },
  content: {
    flex: 1,
  },
  label: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.neutral[500],
    marginBottom: 4,
  },
  value: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: Colors.neutral[900],
  },
});