import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Camera, CreditCard as Edit2 } from "lucide-react-native";
import Colors from "@/constant/Colors";

interface UserProfile {
  id: string;
  displayName: string;
  lastName: string;
  dateOfBirth: string;
  gender: "male" | "female" | "other" | "prefer_not_to_say";
  email?: string;
  phone?: string;
  avatar?: string;
  allergies: string[];
  conditions: string[];
  bloodType?:
    | "A+"
    | "A-"
    | "B+"
    | "B-"
    | "AB+"
    | "AB-"
    | "O+"
    | "O-"
    | "unknown";
  weight?: number;
  height?: number;
}
interface ProfileHeaderProps {
  profile: UserProfile;
  onEditPress?: () => void;
  onAvatarPress?: () => void;
}

export default function ProfileHeader({
  profile,
  onEditPress,
  onAvatarPress,
}: ProfileHeaderProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.avatarContainer}
        onPress={onAvatarPress}
        activeOpacity={0.8}
      >
        {profile.avatar ? (
          <Image source={{ uri: profile.avatar }} style={styles.avatar} />
        ) : (
          <View style={styles.avatarPlaceholder}>
            <Text style={styles.avatarText}>
              {profile.displayName[0] + profile.lastName[0]}
            </Text>
          </View>
        )}
        <View style={styles.cameraButton}>
          <Camera size={14} color={Colors.white} />
        </View>
      </TouchableOpacity>

      <View style={styles.infoContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>
            {profile.displayName} {profile.lastName}
          </Text>
          {onEditPress && (
            <TouchableOpacity
              style={styles.editButton}
              onPress={onEditPress}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Edit2 size={16} color={Colors.primary[600]} />
            </TouchableOpacity>
          )}
        </View>

        <Text style={styles.email}>{profile.email}</Text>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{profile.allergies.length}</Text>
            <Text style={styles.statLabel}>Allergies</Text>
          </View>
          <View style={[styles.statItem, styles.statDivider]}>
            <Text style={styles.statValue}>{profile.conditions.length}</Text>
            <Text style={styles.statLabel}>Conditions</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{profile.bloodType || "?"}</Text>
            <Text style={styles.statLabel}>Blood Type</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: Colors.white,
    borderRadius: 12,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 16,
  },
  avatarContainer: {
    alignSelf: "center",
    marginBottom: 16,
    position: "relative",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: Colors.primary[100],
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.primary[100],
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: Colors.primary[50],
  },
  avatarText: {
    fontFamily: "Inter-Bold",
    fontSize: 36,
    color: Colors.primary[700],
  },
  cameraButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: Colors.primary[600],
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: Colors.white,
  },
  infoContainer: {
    alignItems: "center",
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  name: {
    fontFamily: "Inter-Bold",
    fontSize: 24,
    color: Colors.neutral[900],
    marginRight: 8,
  },
  editButton: {
    padding: 4,
  },
  email: {
    fontFamily: "Inter-Regular",
    fontSize: 14,
    color: Colors.neutral[500],
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 8,
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statDivider: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: Colors.neutral[200],
  },
  statValue: {
    fontFamily: "Inter-Bold",
    fontSize: 18,
    color: Colors.primary[700],
    marginBottom: 4,
  },
  statLabel: {
    fontFamily: "Inter-Regular",
    fontSize: 12,
    color: Colors.neutral[500],
  },
});
