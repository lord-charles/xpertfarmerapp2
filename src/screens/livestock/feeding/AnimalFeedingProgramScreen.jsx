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
import SecondaryHeader from '../../../components/headers/secondary-header';
import { View } from "react-native";
import FastImage from "react-native-fast-image";
import { icons } from '../../../constants';
import { COLORS } from '../../../constants/theme';

export default function AddAnimalFeedingProgramScreen({ navigation }) {
  const [selectedFeedingPrograms, setSelectedFeedingPrograms] = useState([]);
  const [selectedAnimalId, setSelectedAnimalId] = useState("");
  const [selectedAnimalType, setSelectedAnimalType] = useState("");
  const [feedType, setFeedType] = useState("");
  const [feedSource, setFeedSource] = useState("");
  const [feedingSchedule, setFeedingSchedule] = useState("");
  const [quantity, setQuantity] = useState("");
  const [costPerUnit, setCostPerUnit] = useState("");
  const [supplierName, setSupplierName] = useState("");

  const handleFeedingProgramChange = (program) => {
    setSelectedFeedingPrograms((prev) =>
      prev.includes(program)
        ? prev.filter((item) => item !== program)
        : [...prev, program]
    );
  };

  const handleSubmit = () => {
    const feedingData = {
      selectedFeedingPrograms,
      selectedAnimalId,
      selectedAnimalType,
      feedType,
      feedSource,
      feedingSchedule,
      quantity,
      costPerUnit,
      supplierName,
    };
    console.log("Feeding Data:", feedingData);
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.green }}>
      <SecondaryHeader title="Animal Feeding Program" />

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
                Add Animal Feeding Program
              </Text>
            </Center>

            <VStack space={3}>
              <Text fontSize="sm"  color="black">
                Select Feeding Programs
              </Text>
              <Checkbox
                isChecked={selectedFeedingPrograms.includes(
                  "Single Animal Feeding Program"
                )}
                onChange={() =>
                  handleFeedingProgramChange("Single Animal Feeding Program")
                }
                value="Single Animal Feeding Program"
              >
                Single Animal Feeding Program
              </Checkbox>
              <Checkbox
                isChecked={selectedFeedingPrograms.includes(
                  "Group Feeding Program"
                )}
                onChange={() =>
                  handleFeedingProgramChange("Group Feeding Program")
                }
                value="Group Feeding Program"
              >
                Group Feeding Program
              </Checkbox>

              <Text fontSize="sm"  color="black">
                Animal ID
              </Text>
              <Select
                selectedValue={selectedAnimalId}
                minWidth="100%"
                bg={COLORS.green}
                borderColor="gray.300"
                placeholder="Select Animal ID"
                onValueChange={(value) => {
                  setSelectedAnimalId(value);
                  setSelectedAnimalType("");
                }}
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
                <Select.Item label="Dairy" value="Dairy" />
                <Select.Item label="Beef" value="Beef" />
                <Select.Item label="Swine" value="Swine" />
                <Select.Item label="Poultry" value="Poultry" />
                <Select.Item label="Sheep & Goats" value="Sheep & Goats" />
              </Select>

              {selectedAnimalId === "Dairy" && (
                <View>
                  <Text fontSize="sm"  color="black">
                    Animal Type
                  </Text>
                  <Select
                    selectedValue={selectedAnimalType}
                    minWidth="100%"
                    bg={COLORS.green}
                    borderColor="gray.300"
                    placeholder="Select Animal Type"
                    onValueChange={(value) => setSelectedAnimalType(value)}
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
                    <Select.Item label="Calf" value="Calf" />
                    <Select.Item label="Heifer" value="Heifer" />
                    <Select.Item label="Lactating Cow" value="Lactating Cow" />
                    <Select.Item label="Dry Cow" value="Dry Cow" />
                  </Select>
                </View>
              )}

              <Text fontSize="sm"  color="black">
                Feed Type
              </Text>
              <Select
                selectedValue={feedType}
                minWidth="100%"
                bg={COLORS.green}
                borderColor="gray.300"
                placeholder="Select Feed Type"
                onValueChange={(value) => setFeedType(value)}
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
                <Select.Item label="Concentrate" value="Concentrate" />
                <Select.Item label="Roughage" value="Roughage" />
                <Select.Item label="Supplement" value="Supplement" />
              </Select>

              <Text fontSize="sm"  color="black">
                Source of Feed
              </Text>
              <Select
                selectedValue={feedSource}
                minWidth="100%"
                bg={COLORS.green}
                borderColor="gray.300"
                placeholder="Select Source of Feed"
                onValueChange={(value) => setFeedSource(value)}
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
                <Select.Item label="Personally Grown" value="Personally Grown" />
                <Select.Item label="Purchased" value="Purchased" />
                <Select.Item label="Mixed" value="Mixed" />
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
              <Input
                variant="filled"
                bg={COLORS.green}
                borderColor="gray.300"
                placeholder="Enter Quantity"
                value={quantity}
                onChangeText={setQuantity}
                keyboardType="numeric"
              />

              <Text fontSize="sm"  color="black">
                Cost Per Unit
              </Text>
              <Input
                variant="filled"
                bg={COLORS.green}
                borderColor="gray.300"
                placeholder="Enter Cost Per Unit"
                value={costPerUnit}
                onChangeText={setCostPerUnit}
                keyboardType="numeric"
              />

              <Text fontSize="sm"  color="black">
                Supplier Name
              </Text>
              <Input
                variant="filled"
                bg={COLORS.green}
                borderColor="gray.300"
                placeholder="Enter Supplier Name"
                value={supplierName}
                onChangeText={setSupplierName}
              />

              <HStack space={3} justifyContent="space-between" mt={4}>
                <Button
                  flex={1}
                  variant="outline"
                  onPress={() => navigation.goBack()}
                  _text={{ color: "emerald.600", fontSize: "md" }}
                  borderColor="emerald.600"
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
