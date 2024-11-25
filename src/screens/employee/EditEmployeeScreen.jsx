import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Text, Input, Button, Select, Modal, Box } from "native-base";
import SecondaryHeader from "../../components/headers/secondary-header";
import { View } from "react-native";
import FastImage from "react-native-fast-image";
import DateTimePicker from '@react-native-community/datetimepicker';

export default function EditEmployeeScreen({ navigation }) {
  const employeeData = {
    employeeId: "EMP12345",
    farmId: "FARM123",
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "1234567890",
    dateOfEmployment: "2023-01-01",
    employmentType: "Full-Time",
    paymentRate: "20",
    workingHours: ["Morning", "Evening"],
  };

  const [fullName, setFullName] = useState(employeeData.fullName);
  const [phone, setPhone] = useState(employeeData.phone);
  const [dateOfEmployment, setDateOfEmployment] = useState(employeeData.dateOfEmployment);
  const [emergencyContact, setEmergencyContact] = useState(employeeData.emergencyContact);
  const [position, setPosition] = useState(employeeData.position);
  const [employmentType, setEmploymentType] = useState(employeeData.employmentType);
  const [workingHours, setWorkingHours] = useState(employeeData.workingHours);
  const [paymentRate, setPaymentRate] = useState(employeeData.paymentRate);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());

  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
      setDateOfEmployment(selectedDate.toLocaleDateString());
    }
  };

  return (
    <View className="bg-white flex-1">
      <SecondaryHeader title="Edit Employee" />
      <ScrollView className="p-4">
        <View style={styles.formField}>
          <Text style={styles.label}>Full Name</Text>
          <Input
            value={fullName}
            onChangeText={setFullName}
            placeholder="Full Name"
            style={styles.input}
            backgroundColor="#e8f5e9"
          />
        </View>

        <View style={styles.formField}>
          <Text style={styles.label}>Phone Number</Text>
          <Input
            value={phone}
            onChangeText={setPhone}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            style={styles.input}
            backgroundColor="#e8f5e9"
          />
        </View>

              <Text fontSize="sm" color="black">
                Last Name
              </Text>
              <Input
                variant="filled"
                bg={COLORS.green}
                borderColor="gray.300"
                placeholder="Last Name"
                value={formData.lastName}
                onChangeText={(value) =>
                  setFormData({ ...formData, lastName: value })
                }
              />

        <View style={styles.formField}>
          <Text style={styles.label}>Date of Employment</Text>
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <Input
              value={dateOfEmployment}
              isReadOnly
              placeholder="Select Date"
              style={styles.input}
              backgroundColor="#e8f5e9"
            />
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              onChange={onDateChange}
            />
          )}
        </View>

        <View style={styles.formField}>
          <Text style={styles.label}>Position</Text>
          <Input
            value={position}
            onChangeText={setPosition}
            placeholder="Position"
            style={styles.input}
            backgroundColor="#e8f5e9"
          />
        </View>

        <View style={styles.formField}>
          <Text style={styles.label}>Employment Type</Text>
          <Select
            selectedValue={employmentType}
            minWidth="200"
            accessibilityLabel="Select Employment Type"
            placeholder="Select Employment Type"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <FastImage source={icons.right_arrow} className="w-[20px] h-[20px]" tintColor='white' />

            }}
            mt={1}
            onValueChange={setEmploymentType}
          >
            <Select.Item label="Permanent" value="permanent" />
            <Select.Item label="Contractual" value="contractual" />
          </Select>
        </View>

        <View style={styles.formField}>
          <Text style={styles.label}>Working Hours</Text>
          <Select
            selectedValue={workingHours}
            minWidth="200"
            accessibilityLabel="Choose Working Hours"
            placeholder="Choose Working Hours"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <FastImage source={icons.right_arrow} className="w-[20px] h-[20px]" tintColor='white' />

            }}
            mt={1}
            onValueChange={setWorkingHours}
          >
            <Select.Item label="Full-Time" value="full-time" />
            <Select.Item label="Part-Time Morning and Evening" value="part-time-morning-evening" />
            <Select.Item label="Weekends Only" value="weekends-only" />
            <Select.Item label="Seasonal (Harvest Periods)" value="seasonal" />
          </Select>
        </View>

        <View style={styles.formField}>
          <Text style={styles.label}>Payment Rate</Text>
          <Input
            value={paymentRate}
            onChangeText={setPaymentRate}
            placeholder="Payment Rate"
            keyboardType="numeric"
            style={styles.input}
            backgroundColor="#e8f5e9"
          />
        </View>

        <Button className="bg-emerald-600 rounded-md h-12 justify-center">
          <Text className="text-white font-semibold">Save Changes</Text>
        </Button>
        <View className="h-[60px]" />

      </ScrollView>
    </View >
  );
}
