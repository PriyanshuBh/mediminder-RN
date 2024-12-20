import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import Colors from './../../constant/Colors';
import moment from 'moment';
import { GetPrevDateRangeToDisplay } from '../../service/ConvertDateTime';
import { getLocalStorage } from '../../service/Storage';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../config/FirebaseConfig';
import MedicationCardItem from '../../components/MedicationCardItem';
import EmptyState from '../../components/EmptyState';
import { useRouter } from 'expo-router';

export default function History() {
  const [datesRange, setDatesRange] = useState();
  const [medList, setMedList] = useState();
  const router = useRouter();

  const [selectedDate, setSelectedDate] = useState(
    moment().format('MM/DD/YYYY')
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GetDateList();
  }, []);

  const GetDateList = () => {
    const dates = GetPrevDateRangeToDisplay();
    setDatesRange(dates);
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
    <FlatList
      data={[]}
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}
      ListHeaderComponent={
        <View style={styles.mainContainer}>
          <Image
            source={require('./../../assets/images/med-history.png')}
            style={styles.imageBanner}
          />
          <Text style={styles.header}>Medication History</Text>
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
                <TouchableOpacity
                  onPress={() =>
                    router.push({
                      pathname: '/action-modal',
                      params: {
                        ...item,
                        selectedDate: selectedDate,
                      },
                    })
                  }
                >
                  <MedicationCardItem
                    medicine={item}
                    selectedDate={selectedDate}
                  />
                </TouchableOpacity>
              )}
            />
          ) : (
            <Text
              style={{
                fontSize: 25,
                padding: 30,
                fontWeight: 'bold',
                color: Colors.GRAY,
                textAlign: 'center',
              }}
            >
              No Medications Found{' '}
            </Text>
          )}
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 25,
    backgroundColor: 'white',
  },
  imageBanner: {
    width: '100%',
    height: 200,
    borderRadius: 15,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
  },
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
