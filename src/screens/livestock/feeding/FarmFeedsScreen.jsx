import React, { useState } from "react";
import {
  Box,
  Text,
  Input,
  Button,
  VStack,
  Select,
  Radio,
  ScrollView,
  HStack,
  Center,
} from "native-base";
import SecondaryHeader from "../../../components/headers/secondary-header";
import { View } from "react-native";
import { COLORS } from "../../../constants/theme";

export default function FarmFeedsScreen({ navigation }) {
  const [selectedFeedType, setSelectedFeedType] = useState("");
  const [sourceOfFeed, setSourceOfFeed] = useState("");
  const [feedingSchedule, setFeedingSchedule] = useState("");
  const [quantity, setQuantity] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [supplierName, setSupplierName] = useState("");

  const handleSubmit = () => {
    const feedingData = {
      selectedFeedType,
      sourceOfFeed,
      feedingSchedule,
      quantity,
      purchasePrice,
      supplierName,
    };
    console.log(feedingData);
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.green }}>
      <SecondaryHeader title="Farm Feeds" />

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
                Add Farm Feeds Details
              </Text>
            </Center>

            <VStack space={3}>
              <Text fontSize="sm"  color="black">
                Type of Feed
              </Text>
              <Select
                selectedValue={selectedFeedType}
                minWidth="100%"
                bg={COLORS.green}
                borderColor="gray.300"
                placeholder="Select Feed Type"
                onValueChange={(itemValue) => setSelectedFeedType(itemValue)}
                _selectedItem={{
                  bg: "teal.600",
                  _text: { color: "white" },
                }}
              >
                <Select.Item label="Basal feeds" value="Basal feeds" />
                <Select.Item label="Concentrates" value="Concentrates" />
                <Select.Item label="Supplements" value="Supplements" />
              </Select>

              <Text fontSize="sm"  color="black">
                Source of Feed
              </Text>
              <Radio.Group
                name="sourceOfFeed"
                value={sourceOfFeed}
                onChange={(value) => setSourceOfFeed(value)}
              >
                <VStack space={4}>
                  <Radio value="Personally Grown">Personally Grown</Radio>
                  <Radio value="Purchased">Purchased</Radio>
                  <Radio value="Mixed">Mixed</Radio>
                </VStack>
              </Radio.Group>

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
                Purchase Price
              </Text>
              <Input
                variant="filled"
                bg={COLORS.green}
                borderColor="gray.300"
                placeholder="Enter Purchase Price"
                value={purchasePrice}
                onChangeText={setPurchasePrice}
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
