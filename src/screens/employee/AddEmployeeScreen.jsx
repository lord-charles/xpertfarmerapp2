import React, { useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Text, Input, Button, Select, CheckIcon } from "native-base";
import FastImage from "react-native-fast-image";
import DateTimePicker from '@react-native-community/datetimepicker';
import SecondaryHeader from "../../components/headers/secondary-header";
import { icons } from "../../constants";

const AddEmployeeScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [dateOfEmployment, setDateOfEmployment] = useState("");
  const [paymentRate, setPaymentRate] = useState("");
  const [workingHour, setWorkingHour] = useState("");
  const [position, setPosition] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
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
    <View className="flex-1 bg-white">
      <SecondaryHeader title="Add Employee" />
      <ScrollView className="p-4">
        <View style={styles.formField}>
          <Text style={styles.label}>Full Name</Text>
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
          <Text style={styles.label}>Emergency Contact</Text>
          <Input
            value={emergencyContact}
            onChangeText={setEmergencyContact}
            placeholder="Emergency Contact"
            keyboardType="phone-pad"
            style={styles.input}
          />

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
          <Text style={styles.label}>Position</Text>
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
            backgroundColor="#e8f5e9"
          />
        </View>

        <Button className="bg-emerald-600 rounded-md h-12 justify-center">
          <Text className="text-white font-semibold">Submit</Text>
        </Button>
        <View className="h-[60px]" />
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
