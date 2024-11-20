import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Platform } from 'react-native';
import { Input, Button, Checkbox, VStack, HStack } from 'native-base';
import FastImage from 'react-native-fast-image';
import DateTimePicker from '@react-native-community/datetimepicker';
import SecondaryHeader from '../../components/headers/secondary-header';
import icons from '../../constants/icons';
import { COLORS } from '../../constants/theme';

export default function AddEmployeeScreen({ navigation }) {
  const [formData, setFormData] = useState({
    farmId: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    dateOfEmployment: new Date(),
    workingHours: {
      FullTime: false,
      MorningEvening: false,
      WeekendsOnly: false,
      HarvestPeriodsOnly: false
    },
    paymentRates: ''
  });
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || formData.dateOfEmployment; 
    setShowDatePicker(Platform.OS === 'ios'); 
    setFormData({ ...formData, dateOfEmployment: currentDate });
  };

  const toggleWorkingHour = (key) => {
    setFormData({
      ...formData,
      workingHours: {
        ...formData.workingHours,
        [key]: !formData.workingHours[key]
      }
    });
  };

  return (
    <View style={styles.container}>
      <SecondaryHeader title="Add Employee Details" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <VStack space={4} style={styles.formContainer}>
          <Text style={styles.headerText}>Fill in the employee details</Text>

          <Text style={styles.label}>Attached Farm ID</Text>
          <Input
            variant="unstyled"
            value={formData.farmId}
            onChangeText={(text) => setFormData({ ...formData, farmId: text })}
            placeholder="Attached Farm ID"
            style={styles.input}
          />

          <Text style={styles.label}>First Name</Text>
          <Input
            variant="unstyled"
            value={formData.firstName}
            onChangeText={(text) => setFormData({ ...formData, firstName: text })}
            style={styles.input}
          />

          <Text style={styles.label}>Last Name</Text>
          <Input
            variant="unstyled"
            value={formData.lastName}
            onChangeText={(text) => setFormData({ ...formData, lastName: text })}
            style={styles.input}
          />

          <Text style={styles.label}>Phone Number</Text>
          <Input
            variant="unstyled"
            value={formData.phoneNumber}
            onChangeText={(text) => setFormData({ ...formData, phoneNumber: text })}
            keyboardType="phone-pad"
            style={styles.input}
          />

          <Text style={styles.label}>Date of Employment</Text>
          <View style={styles.inputWithIcon}>
            <Text style={styles.inputText}>{formData.dateOfEmployment.toLocaleDateString()}</Text>
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <FastImage
                source={icons.calendar}
                style={styles.icon}
                resizeMode={FastImage.resizeMode.contain}
              />
            </TouchableOpacity>
          </View>
          {showDatePicker && (
            <DateTimePicker
              value={formData.dateOfEmployment}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}

          <Text style={styles.label}>Working Hours</Text>
          <Text style={styles.subLabel}>Select the type of working hours</Text>
          <VStack space={3}>
            {Object.keys(formData.workingHours).map((key) => (
              <Checkbox
                key={key}
                isChecked={formData.workingHours[key]}
                onChange={() => toggleWorkingHour(key)}
                style={styles.checkbox}
              >
                {key.split(/(?=[A-Z])/).join(" ")}
              </Checkbox>
            ))}
          </VStack>

          <Text style={styles.label}>Payment Rates</Text>
          <Input
            variant="unstyled"
            value={formData.paymentRates}
            onChangeText={(text) => setFormData({ ...formData, paymentRates: text })}
            keyboardType="numeric"
            style={styles.input}
          />

          <HStack space={2} style={styles.buttonContainer}>
            <Button onPress={() => navigation.goBack()} style={styles.backButton} variant="outline">Back</Button>
            <Button onPress={() => console.log('Form Data:', formData)} style={styles.submitButton}>Submit</Button>
          </HStack>
        </VStack>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.green,
  },
  scrollViewContent: {
    paddingVertical: 20,
  },
  formContainer: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerText: {
    fontSize: 18,
    color: 'black',
    marginBottom: 12,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    color: 'black',
    marginBottom: 4,
  },
  subLabel: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 8,
  },
  input: {
    backgroundColor: COLORS.green,
    height: 40,
    marginBottom: 5,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.green,
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 10,
    height: 40, 
  },
  inputText: {
    flex: 1,
    height: 30, 
    color: 'black',
    textAlignVertical: 'center', 
    fontSize: 16, 
  },
  icon: {
    width: 24,
    height: 24,
  },
  checkbox: {
    marginBottom: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  backButton: {
    flex: 1,
    borderColor: COLORS.green2,
  },
  submitButton: {
    flex: 1,
    backgroundColor: COLORS.green2,
  }
});
