import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Settings, User , LogOut } from 'lucide-react-native';
import Colors from '@/constant/Colors';
import ProfileHeader from '@/components/ProfileHeader';
import ProfileField from '@/components/ProfileField';
import { getLocalStorage, RemoveLocalStorage } from '@/service/Storage';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('info');
  const [user,setUser] = useState();
  useEffect(() => {
    GetUserDetail();
  }, []);

  const GetUserDetail = async () => {
    const userInfo = await getLocalStorage("userDetail");
    setUser(userInfo);
    // console.log(userInfo);
   
  };
  const logout = async () => {
   await RemoveLocalStorage();
  }

  // interface UserProfile {
  //   id: string;
  //   displayName: string;
  //   lastName: string;
  //   dateOfBirth: string;
  //   gender: 'male' | 'female' | 'other' | 'prefer_not_to_say';
  //   email?: string;
  //   phone?: string;
  //   avatar?: string;
  //   allergies: string[];
  //   conditions: string[];
  //   bloodType?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-' | 'unknown';
  //   weight?: number;
  //   height?: number;
  
  // }
  
   const mockProfile = {
  
    id: "user1",
    displayName: user?.displayName || "Bharti",
    lastName: user?.lastName || "",
    dateOfBirth: user?.dateOfBirth || "1990-01-01",
    gender: user?.gender || "prefer_not_to_say",
    email: user?.email,
    phone: user?.phone || "123-456-7890",
    avatar: user?.avatar ||  "https://i.pravatar.cc/300",
    allergies: ["Penicillin", "Peanuts"],
    conditions: ["Healthy", "No Disease"],
    bloodType: user?.bloodType || "O-",
    weight: 180,
    height: 70,
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
        <TouchableOpacity style={styles.settingsButton}>
          <Settings size={24} color={Colors.neutral[800]} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <ProfileHeader
          profile={mockProfile}
          onEditPress={() => {}}
          onAvatarPress={() => {}}
        />

        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'info' && styles.activeTab]}
            onPress={() => setActiveTab('info')}
          >
            <Text style={[styles.tabText, activeTab === 'info' && styles.activeTabText]}>
              Information
            </Text>
          </TouchableOpacity>
        </View>

        {activeTab === 'info' && (
          <View style={styles.sectionContainer}>
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <User size={20} color={Colors.primary[600]} />
                <Text style={styles.sectionTitle}>Personal Information</Text>
              </View>

              <ProfileField
                label="Full Name"
                value={`${mockProfile.displayName} ${mockProfile.lastName}`}
                onPress={() => {}}
              />
              
              <ProfileField
                label="Gender"
                value={mockProfile.gender === 'male' ? 'Male' : 
                       mockProfile.gender === 'female' ? 'Female' : 
                       mockProfile.gender === 'other' ? 'Other' : 'Prefer not to say'}
                onPress={() => {}}
              />
              <ProfileField
                label="Email"
                value={mockProfile.email}
                onPress={() => {}}
              />
              <ProfileField
                label="Phone"
                value={mockProfile.phone || 'Not provided'}
                onPress={() => {}}
              />
            </View>

           

            <TouchableOpacity style={styles.logoutButton} onPress={() => {logout()}} >
              <LogOut size={20} color={Colors.error[600]} />
              <Text style={styles.logoutText}>Log Out</Text>
            </TouchableOpacity>
          </View>
        )}

     

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral[50],
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 20,
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 28,
    color: Colors.neutral[900],
  },
  settingsButton: {
    width: 40,
    height: 40,
    backgroundColor: Colors.white,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  content: {
    padding: 16,
    paddingBottom: 40,
  },
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.neutral[100],
    borderRadius: 12,
    padding: 4,
    marginBottom: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  tabText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Colors.neutral[600],
  },
  activeTabText: {
    color: Colors.primary[700],
  },
  sectionContainer: {
    gap: 16,
  },
  section: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: Colors.neutral[900],
    marginLeft: 8,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggle: {
    width: 50,
    height: 28,
    borderRadius: 14,
    backgroundColor: Colors.neutral[300],
    padding: 2,
    justifyContent: 'center',
  },
  toggleActive: {
    backgroundColor: Colors.primary[500],
    justifyContent: 'flex-end',
  },
  toggleThumb: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  toggleInactiveThumb: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    paddingVertical: 16,
    borderRadius: 12,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  logoutText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: Colors.error[600],
    marginLeft: 8,
  },
  contactHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  addContactButton: {
    padding: 4,
  },
  emptyText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.neutral[500],
    textAlign: 'center',
    paddingVertical: 16,
  }
});