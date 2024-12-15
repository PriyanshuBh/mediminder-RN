import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import MedicationCardItem from '../../components/MedicationCardItem';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../../constant/Colors';
import { db } from './../../config/FirebaseConfig';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import moment from 'moment';

export default function MedicationActionModal() {
  const medicine = useLocalSearchParams();
  const router = useRouter();

  const UpdateActionStatus = async (status) => {
    try {
      const docRef = doc(db, 'medication', medicine?.docId);
      await updateDoc(docRef, {
        action: arrayUnion({
          status: status,
          time: moment().format('LT'),
          date: medicine?.selectedDate,
        }),
      });
      Alert.alert(status, 'Response Saved!', [
        {
          text: 'Ok',
          onPress: () => router.replace('(tabs)'),
        },
      ]);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./../../assets/images/notification.gif')}
        style={{
          width: 80,
          height: 80,
        }}
      />
      <Text style={{ fontSize: 18 }}>{medicine?.selectedDate}</Text>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
        {medicine?.reminder}
      </Text>
      <Text styles={{ fontSize: 18 }}>It's Time to take </Text>
      <MedicationCardItem medicine={medicine} />
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.closeBtn}
          onPress={() => UpdateActionStatus('Missed')}
        >
          <Ionicons name="close-outline" size={24} color="red" />
          <Text
            style={{
              fontSize: 20,
              color: 'red',
            }}
          >
            Missed
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.successBtn}
          onPress={() => UpdateActionStatus('Taken')}
        >
          <Ionicons name="checkmark-outline" size={24} color="white" />
          <Text
            style={{
              fontSize: 20,
              color: 'white',
            }}
          >
            Taken
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => router.back()}
        style={{
          position: 'absolute',
          bottom: 25,
        }}
      >
        <Ionicons name="close-circle" size={44} color={Colors.GRAY} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
  closeBtn: {
    padding: 10,
    flexDirection: 'row',
    gap: 6,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: 'red',
    borderRadius: 10,
  },
  btnContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 25,
  },
  successBtn: {
    padding: 10,
    flexDirection: 'row',
    gap: 6,
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: Colors.GREEN,
    borderRadius: 10,
  },
});
