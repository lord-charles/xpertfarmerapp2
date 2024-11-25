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
import SecondaryHeader from "../../../components/headers/secondary-header";
import { View, TouchableOpacity } from "react-native";
import { COLORS } from "../../../constants/theme";

export default function LivestockFeedingScreen({ navigation }) {
  const [feedType, setFeedType] = useState("");
  const [feedSource, setFeedSource] = useState("");
  const [feedingSchedule, setFeedingSchedule] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const [costPerUnit, setCostPerUnit] = useState("");
  const [totalCost, setTotalCost] = useState("");
  const [supplierName, setSupplierName] = useState("");
  const [feedingMethod, setFeedingMethod] = useState("");
  const [storageCost, setStorageCost] = useState("");
  const [storageLocation, setStorageLocation] = useState("");
  const [nutritionalValue, setNutritionalValue] = useState("");
  const [remarks, setRemarks] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const calculateTotalCost = () => {
    const cost = parseFloat(quantity || 0) * parseFloat(costPerUnit || 0);
    setTotalCost(cost ? cost.toFixed(2) : "");
  };

  const handleSubmit = () => {
    const feedingData = {
      feedType,
      feedSource,
      feedingSchedule,
      quantity,
      unit,
      costPerUnit,
      totalCost,
      supplierName,
      feedingMethod,
      storageCost,
      storageLocation,
      nutritionalValue,
      remarks,
      date: date.toLocaleDateString(),
    };
    console.log(feedingData);
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.green }}>
      <SecondaryHeader title="Livestock Feeding Record" />

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
              <Text fontSize="lg" >
                Add Livestock Feeding Details
              </Text>
            </Center>

            <VStack space={3}>
              <Text fontSize="sm"  color="black">
                Feed Type
              </Text>
              <Select
                selectedValue={feedType}
                minWidth="100%"
                bg={COLORS.green}
                borderColor="gray.300"
                placeholder="Select Feed Type"
                onValueChange={(itemValue) => setFeedType(itemValue)}
                _selectedItem={{
                  bg: "teal.600",
                  _text: { color: "white" },
                }}
              >
                <Select.Item label="Grains" value="Grains" />
                <Select.Item label="Silage" value="Silage" />
                <Select.Item label="Supplements" value="Supplements" />
                <Select.Item label="Hay" value="Hay" />
              </Select>

              <Text fontSize="sm"  color="black">
                Feed Source
              </Text>
              <Select
                selectedValue={feedSource}
                minWidth="100%"
                bg={COLORS.green}
                borderColor="gray.300"
                placeholder="Select Feed Source"
                onValueChange={(itemValue) => setFeedSource(itemValue)}
                _selectedItem={{
                  bg: "teal.600",
                  _text: { color: "white" },
                }}
              >
                <Select.Item label="Personal Grown" value="Personal Grown" />
                <Select.Item label="Purchased" value="Purchased" />
              </Select>

              <Text fontSize="sm"  color="black">
                Feeding Schedule
              </Text>
              <Input
                variant="filled"
                bg={COLORS.green}
                borderColor="gray.300"
                placeholder="Enter Feeding Schedule"
                value={feedingSchedule}
                onChangeText={setFeedingSchedule}
              />

              <Text fontSize="sm"  color="black">
                Quantity
              </Text>
              <HStack space={3}>
                <Input
                  flex={1}
                  variant="filled"
                  bg={COLORS.green}
                  borderColor="gray.300"
                  placeholder="Enter Quantity"
                  value={quantity}
                  onChangeText={(value) => {
                    setQuantity(value);
                    calculateTotalCost();
                  }}
                  keyboardType="numeric"
                />
                <Select
                  flex={1}
                  selectedValue={unit}
                  bg={COLORS.green}
                  borderColor="gray.300"
                  placeholder="Unit"
                  onValueChange={(itemValue) => setUnit(itemValue)}
                  _selectedItem={{
                    bg: "teal.600",
                    _text: { color: "white" },
                  }}
                >
                  <Select.Item label="kg" value="kg" />
                  <Select.Item label="ton" value="ton" />
                  <Select.Item label="bale" value="bale" />
                </Select>
              </HStack>

              <Text fontSize="sm"  color="black">
                Cost per Unit
              </Text>
              <Input
                variant="filled"
                bg={COLORS.green}
                borderColor="gray.300"
                placeholder="Enter Cost per Unit"
                value={costPerUnit}
                onChangeText={(value) => {
                  setCostPerUnit(value);
                  calculateTotalCost();
                }}
                keyboardType="numeric"
              />

              <Text fontSize="sm"  color="black">
                Total Cost
              </Text>
              <Input
                variant="filled"
                bg={COLORS.green}
                borderColor="gray.300"
                value={totalCost}
                isReadOnly
                placeholder="Calculated Total Cost"
              />

              <Text fontSize="sm"  color="black">
                Storage Cost
              </Text>
              <Input
                variant="filled"
                bg={COLORS.green}
                borderColor="gray.300"
                placeholder="Enter Storage Cost"
                value={storageCost}
                onChangeText={setStorageCost}
                keyboardType="numeric"
              />

              <Text fontSize="sm"  color="black">
                Storage Location
              </Text>
              <Input
                variant="filled"
                bg={COLORS.green}
                borderColor="gray.300"
                placeholder="Enter Storage Location"
                value={storageLocation}
                onChangeText={setStorageLocation}
              />

              <Text fontSize="sm"  color="black">
                Nutritional Value
              </Text>
              <Input
                variant="filled"
                bg={COLORS.green}
                borderColor="gray.300"
                placeholder="Enter Nutritional Info (e.g., Protein %)"
                value={nutritionalValue}
                onChangeText={setNutritionalValue}
              />

              <Text fontSize="sm"  color="black">
                Date
              </Text>
              <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                <Input
                  variant="filled"
                  bg={COLORS.green}
                  borderColor="gray.300"
                  value={date.toLocaleDateString()}
                  isReadOnly
                  placeholder="Select Date"
                />
              </TouchableOpacity>
              {showDatePicker && (
                <DateTimePicker
                  value={date}
                  mode="date"
                  onChange={onDateChange}
                />
              )}

              <Text fontSize="sm"  color="black">
                Remarks
              </Text>
              <Input
                variant="filled"
                bg={COLORS.green}
                borderColor="gray.300"
                placeholder="Enter any remarks"
                value={remarks}
                onChangeText={setRemarks}
                multiline
                numberOfLines={3}
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
