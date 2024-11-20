import React, { useState } from "react";
import {
  Box,
  Text,
  Input,
  Button,
  VStack,
  Select,
  Checkbox,
  Switch,
  ScrollView,
  HStack,
  Center,
} from "native-base";
import SecondaryHeader from "../../components/headers/secondary-header";
import { View } from "react-native";
import FastImage from "react-native-fast-image";
import { icons } from "../../constants";
import { COLORS } from '../../constants/theme';

export default function AddFarmDetailsScreen({ navigation }) {
  const [enableLocation, setEnableLocation] = useState(false);
  const [farmSize, setFarmSize] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("");

  return (
    <View
      style={{ flex: 1, backgroundColor: COLORS.green, justifyContent: "center" }}
    >
      <SecondaryHeader title="Add Farm Details" />

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
                Fill in the farm details
              </Text>
            </Center>

            <VStack space={3}>
              <Text fontSize="sm"  color="black">
                Farm ID
              </Text>
              <Input
                variant="filled"
                bg={COLORS.green}
                borderColor="gray.300"
                isDisabled={true}
                value="12345"
              />

              <Text fontSize="sm"  color="black">
                Region
              </Text>
              <Select
                selectedValue={selectedRegion}
                minWidth="100%"
                bg={COLORS.green}
                borderColor="gray.300"
                placeholder="Region"
                onValueChange={(itemValue) => setSelectedRegion(itemValue)}
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
                <Select.Item label="Region 1" value="region1" />
                <Select.Item label="Region 2" value="region2" />
              </Select>

              <Text fontSize="sm"  color="black">
                Division
              </Text>
              <Select
                selectedValue={selectedDivision}
                minWidth="100%"
                bg={COLORS.green}
                borderColor="gray.300"
                placeholder="Division"
                onValueChange={(itemValue) => setSelectedDivision(itemValue)}
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
                <Select.Item label="Division 1" value="division1" />
                <Select.Item label="Division 2" value="division2" />
              </Select>

              <Text fontSize="sm"  color="black">
                Administrative Location
              </Text>
              <Input
                variant="filled"
                bg={COLORS.green}
                borderColor="gray.300"
                placeholder="Administrative Location"
              />

              <HStack justifyContent="space-between" alignItems="center">
                <Text fontSize="sm"  color="black">
                  Enable location
                </Text>
                <Switch
                  isChecked={enableLocation}
                  onToggle={() => setEnableLocation(!enableLocation)}
                  offTrackColor="gray.200"
                  onTrackColor="emerald.500"
                  size="sm"
                />
              </HStack>

              <Text fontSize="sm"  color="black">
                Farm Size
              </Text>
              <Input
                variant="filled"
                bg={COLORS.green}
                borderColor="gray.300"
                placeholder="Farm Size"
                keyboardType="numeric"
                value={farmSize}
                onChangeText={setFarmSize}
              />

              <VStack space={2}>
                <Text fontSize="sm" fontWeight="500" color="black">
                  Types of Farming
                </Text>
                <Checkbox value="dairy-cattle">Dairy cattle</Checkbox>
                <Checkbox value="beef-cattle">Beef cattle</Checkbox>
                <Checkbox value="dairy-meat-goat">Dairy and Meat goat</Checkbox>
                <Checkbox value="sheep-goats">Sheep and Goats</Checkbox>
                <Checkbox value="poultry">Poultry</Checkbox>
                <Checkbox value="rabbit">Rabbit</Checkbox>
                <Checkbox value="pigs">Pigs (Swine)</Checkbox>
              </VStack>

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
                  onPress={() => console.log("Saving...")}
                 backgroundColor={COLORS.green2}
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
