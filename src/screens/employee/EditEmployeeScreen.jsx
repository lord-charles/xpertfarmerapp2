import React, { useState } from "react";
import {
  Box,
  Text,
  Input,
  Button,
  VStack,
  Select,
  ScrollView,
  HStack,
  Center,
} from "native-base";
import DateTimePicker from "@react-native-community/datetimepicker";
import { COLORS } from '../../constants/theme';
import SecondaryHeader from '../../components/headers/secondary-header';
import { View, TouchableOpacity } from "react-native";

export default function EditEmployeeScreen({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [dateOfEmployment, setDateOfEmployment] = useState(new Date());
  const [position, setPosition] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [workingHours, setWorkingHours] = useState("");
  const [paymentRate, setPaymentRate] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDateOfEmployment(selectedDate);
    }
  };

  const handleSubmit = () => {
    const employeeData = {
      fullName,
      phone,
      emergencyContact,
      dateOfEmployment: dateOfEmployment.toLocaleDateString(),
      position,
      employmentType,
      workingHours,
      paymentRate,
    };
    console.log(employeeData);
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.green }}>
      <SecondaryHeader title="Edit Employee" />

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          paddingVertical: "5%",
        }}
      >
        <Center>
          <Box bg="white" p={4} borderRadius={8} shadow={2} w="90%" my="2%">
            <Center mb={4}>
              <Text fontSize="lg">Edit Employee Details</Text>
            </Center>

            <VStack space={3}>
              <Text fontSize="sm" color="black">Full Name</Text>
              <Input
                variant="filled"
                bg={COLORS.green}
                borderColor="gray.300"
                placeholder="Enter Full Name"
                value={fullName}
                onChangeText={setFullName}
              />

              <Text fontSize="sm" color="black">Phone Number</Text>
              <Input
                variant="filled"
                bg={COLORS.green}
                borderColor="gray.300"
                placeholder="Enter Phone Number"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
              />

              <Text fontSize="sm" color="black">Emergency Contact</Text>
              <Input
                variant="filled"
                bg={COLORS.green}
                borderColor="gray.300"
                placeholder="Enter Emergency Contact"
                value={emergencyContact}
                onChangeText={setEmergencyContact}
                keyboardType="phone-pad"
              />

              <Text fontSize="sm" color="black">Date of Employment</Text>
              <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                <Input
                  variant="filled"
                  bg={COLORS.green}
                  borderColor="gray.300"
                  value={dateOfEmployment.toLocaleDateString()}
                  isReadOnly
                  placeholder="Select Date"
                />
              </TouchableOpacity>
              {showDatePicker && (
                <DateTimePicker
                  value={dateOfEmployment}
                  mode="date"
                  onChange={onDateChange}
                />
              )}

              <Text fontSize="sm" color="black">Position</Text>
              <Input
                variant="filled"
                bg={COLORS.green}
                borderColor="gray.300"
                placeholder="Enter Position"
                value={position}
                onChangeText={setPosition}
              />

              <Text fontSize="sm" color="black">Employment Type</Text>
              <Select
                selectedValue={employmentType}
                minWidth="100%"
                bg={COLORS.green}
                borderColor="gray.300"
                placeholder="Select Employment Type"
                onValueChange={(itemValue) => setEmploymentType(itemValue)}
                _selectedItem={{
                  bg: "teal.600",
                  _text: { color: "white" },
                }}
              >
                <Select.Item label="Permanent" value="Permanent" />
                <Select.Item label="Contractual" value="Contractual" />
              </Select>

              <Text fontSize="sm" color="black">Working Hours</Text>
              <Select
                selectedValue={workingHours}
                minWidth="100%"
                bg={COLORS.green}
                borderColor="gray.300"
                placeholder="Select Working Hours"
                onValueChange={(itemValue) => setWorkingHours(itemValue)}
                _selectedItem={{
                  bg: "teal.600",
                  _text: { color: "white" },
                }}
              >
                <Select.Item label="Full-Time" value="Full-Time" />
                <Select.Item label="Part-Time" value="Part-Time" />
              </Select>

              <Text fontSize="sm" color="black">Payment Rate</Text>
              <Input
                variant="filled"
                bg={COLORS.green}
                borderColor="gray.300"
                placeholder="Enter Payment Rate"
                value={paymentRate}
                onChangeText={setPaymentRate}
                keyboardType="numeric"
              />

              <HStack space={3} justifyContent="space-between" mt={4}>
                <Button
                  flex={1}
                  variant="outline"
                  onPress={() => navigation.goBack()}
                  _text={{ color: COLORS.green2, fontSize: "md" }}
                  borderColor={COLORS.green2}
                  py="3"
                  borderRadius="lg"
                >
                  Back
                </Button>
                <Button
                  flex={1}
                  onPress={handleSubmit}
                  bg={COLORS.green2}
                  _text={{ fontSize: "md", color: "white" }}
                  py="3"
                  borderRadius="lg"
                >
                  Submit
                </Button>
              </HStack>
            </VStack>
          </Box>
        </Center>
      </ScrollView>
    </View>
  );
}