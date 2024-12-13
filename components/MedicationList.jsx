import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { GetDateRangeToDisplay } from '../service/ConvertDateTime';
import Colors from './../constant/Colors';
import moment from 'moment';
import { getLocalStorage } from './../service/Storage';
import { db } from './../config/FirebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import MedicationCardItem from './MedicationCardItem';
import EmptyState from './EmptyState';
import { useRouter } from 'expo-router';
export default function MedicationList() {
  const [medList, setMedList] = useState();
  const [datesRange, setDatesRange] = useState();
  const [selectedDate, setSelectedDate] = useState(
    moment().format('MM/DD/YYYY')
  );
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  useEffect(() => {
    GetDateRangesList();
    GetMedicationList(selectedDate);
  }, [selectedDate]);
  const GetDateRangesList = () => {
    const dateRange = GetDateRangeToDisplay();
    setDatesRange(dateRange);
  };

  const GetMedicationList = async (selectedDate) => {
    setLoading(true);
    const user = await getLocalStorage('userDetail');
    setMedList([]);

    try {
      const q = query(
        collection(db, 'medication'),
        where('userEmail', '==', user?.email),
        where('dates', 'array-contains', selectedDate)
      );
      const querySelector = await getDocs(q);

      querySelector.forEach((doc) => {
        console.log('docId:' + doc.id + '==>', doc.data());
        setMedList((prev) => [...prev, doc.data()]);
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <View
      style={{
        marginTop: 25,
        
      }}
    >
      <Image
        source={require('./../assets/images/medication.jpeg')}
        style={{ width: '100%', height: 300, borderRadius: 15 }}
      />

      <FlatList
        data={datesRange}
        style={{ marginTop: 15 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              setSelectedDate(item?.formattedDate);
              GetMedicationList(item?.formattedDate);
            }}
            key={index}
            style={[
              styles.dateGroup,
              {
                backgroundColor:
                  item?.formattedDate == selectedDate
                    ? Colors.PRIMARY
                    : Colors.LIGHT_GRAY_BORDER,
              },
            ]}
          >
            <Text
              style={[
                styles.day,
                {
                  color:
                    item?.formattedDate == selectedDate ? 'white' : 'black',
                },
              ]}
            >
              {item.day}
            </Text>
            <Text
              style={[
                styles.date,
                {
                  color:
                    item?.formattedDate == selectedDate ? 'white' : 'black',
                },
              ]}
            >
              {item.date}
            </Text>
          </TouchableOpacity>
        )}
      />

      {medList?.length > 0 ? (
        <FlatList
          data={medList}
          onRefresh={() => GetMedicationList(selectedDate)}
          refreshing={loading}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={()=> router.push({
              pathname: '/action-modal',
              params: {
                ...item,
                selectedDate: selectedDate 
              }
            })}>
              <MedicationCardItem medicine={item} selectedDate={selectedDate} />
            </TouchableOpacity>
          )}
        />
      ) : (
        <EmptyState />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  dateGroup: {
    padding: 10,
    backgroundColor: Colors.LIGHT_GRAY_BORDER,
    display: 'flex',
    alignItems: 'center',
    borderRadius: 15,
    marginRight: 10,
  },
  day: {
    fontSize: 20,
  },
  date: {
    fontSize: 26,
    fontWeight: 'bold',
  },
});
