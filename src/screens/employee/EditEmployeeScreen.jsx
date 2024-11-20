import React, { useState } from "react";
import {
  Box,
  Text,
  Input,
  Button,
  VStack,
  Select,
  Checkbox,
  ScrollView,
  HStack,
  Center,
} from "native-base";
import SecondaryHeader from "../../components/headers/secondary-header";
import { View } from "react-native";
import FastImage from "react-native-fast-image";
import { icons } from "../../constants";
import { COLORS } from "../../constants/theme";

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

  const [formData, setFormData] = useState(employeeData);
  const [selectedWorkingHours, setSelectedWorkingHours] = useState(
    new Set(employeeData.workingHours)
  );

  const handleCheckboxChange = (value) => {
    setSelectedWorkingHours((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(value)) {
        newSet.delete(value);
      } else {
        newSet.add(value);
      }
      return newSet;
    });
  };

  const handleSubmit = () => {
    const updatedData = {
      ...formData,
      workingHours: Array.from(selectedWorkingHours),
    };
    console.log("Updated Employee Data:", updatedData);
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.green }}>
      <SecondaryHeader title="Edit Employee Details" />

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
              <Text fontSize="sm" color="black">
                Employee ID
              </Text>
              <Input
                variant="filled"
                bg={COLORS.green}
                borderColor="gray.300"
                isDisabled={true}
                value={formData.employeeId}
              />

              <Text fontSize="sm" color="black">
                Farm ID
              </Text>
              <Input
                variant="filled"
                bg={COLORS.green}
                borderColor="gray.300"
                placeholder="Farm ID"
                value={formData.farmId}
                onChangeText={(value) => setFormData({ ...formData, farmId: value })}
              />

              <Text fontSize="sm" color="black">
                First Name
              </Text>
              <Input
                variant="filled"
                bg={COLORS.green}
                borderColor="gray.300"
                placeholder="First Name"
                value={formData.firstName}
                onChangeText={(value) =>
                  setFormData({ ...formData, firstName: value })
                }
              />

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

              <Text fontSize="sm" color="black">
                Phone Number
              </Text>
              <Input
                variant="filled"
                bg={COLORS.green}
                borderColor="gray.300"
                placeholder="Phone Number"
                keyboardType="numeric"
                value={formData.phoneNumber}
                onChangeText={(value) =>
                  setFormData({ ...formData, phoneNumber: value })
                }
              />

              <Text fontSize="sm" color="black">
                Date of Employment
              </Text>
              <Input
                variant="filled"
                bg={COLORS.green}
                borderColor="gray.300"
                placeholder="Date of Employment"
                value={formData.dateOfEmployment}
                onChangeText={(value) =>
                  setFormData({ ...formData, dateOfEmployment: value })
                }
              />

              <Text fontSize="sm" color="black">
                Employment Type
              </Text>
              <Select
                selectedValue={formData.employmentType}
                minWidth="100%"
                bg={COLORS.green}
                borderColor="gray.300"
                placeholder="Select Employment Type"
                onValueChange={(value) =>
                  setFormData({ ...formData, employmentType: value })
                }
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: (
                    <FastImage
                      source={icons.right_arrow}
                      style={{ width: 20, height: 20 }}
                      tintColor="white"
                    />
                  ),
                }}
              >
                <Select.Item label="Full-Time" value="Full-Time" />
                <Select.Item label="Part-Time" value="Part-Time" />
              </Select>

              <Text fontSize="sm" color="black">
                Working Hours
              </Text>
              <VStack space={2}>
                <Checkbox
                  isChecked={selectedWorkingHours.has("Morning")}
                  onChange={() => handleCheckboxChange("Morning")}
                >
                  Morning
                </Checkbox>
                <Checkbox
                  isChecked={selectedWorkingHours.has("Evening")}
                  onChange={() => handleCheckboxChange("Evening")}
                >
                  Evening
                </Checkbox>
                <Checkbox
                  isChecked={selectedWorkingHours.has("Weekends")}
                  onChange={() => handleCheckboxChange("Weekends")}
                >
                  Weekends
                </Checkbox>
              </VStack>

              <Text fontSize="sm" color="black">
                Payment Rate
              </Text>
              <Input
                variant="filled"
                bg={COLORS.green}
                borderColor="gray.300"
                placeholder="Payment Rate"
                keyboardType="numeric"
                value={formData.paymentRate}
                onChangeText={(value) =>
                  setFormData({ ...formData, paymentRate: value })
                }
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
                  _text={{ fontSize: "md" }}
                  py="3"
                  borderRadius="lg"
                >
                  Save Changes
                </Button>
              </HStack>
            </VStack>
          </Box>
        </Center>
      </ScrollView>
    </View>
  );
}
