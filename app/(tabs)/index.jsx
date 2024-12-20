import { View, FlatList } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import Header from '../../components/Header';
import MedicationList from '../../components/MedicationList';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <FlatList
      data={[]}
      ListHeaderComponent={
        <View
          style={{
            padding: 25,
            backgroundColor: 'white',
            height: '100%',
            width: '100%',
          }}
        >
          <Header />
          {/* <EmptyState /> */}
          <MedicationList />
        </View>
      }
    />
  );
}
