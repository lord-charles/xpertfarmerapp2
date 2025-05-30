import React, {useState} from 'react';
import {
  Box,
  Text,
  Input,
  Button,
  VStack,
  Select,
  ScrollView,
  HStack,
} from 'native-base';

import {View, TouchableOpacity, StyleSheet, Image, Modal} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import FastImage from 'react-native-fast-image';
import {icons} from '../../../constants';
import {COLORS} from '../../../constants/theme';
import SecondaryHeader from '../../../components/headers/secondary-header';

export default function AddBoostersRecords({navigation}) {
  const [animalIdOrFlockId, setAnimalIdOrFlockId] = useState('');
  const [boostersOrAdditives, setBoostersOrAdditives] = useState('');
  const [purpose, setPurpose] = useState('');
  const [quantityGiven, setQuantityGiven] = useState(1);
  const [dateAdministered, setDateAdministered] = useState(new Date());
  const [costOfBooster, setCostOfBooster] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [quantityUnit, setQuantityUnit] = useState('');

  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setDateAdministered(selectedDate);
    }
    setShowDatePicker(false);
  };

  const handleSubmit = () => {
    setModalVisible(true);
  };

  return (
    <View style={{flex: 1, backgroundColor: COLORS.lightGreen}}>
      <SecondaryHeader title="Booster and Additives" />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          marginTop: -80,
        }}>
        <Box bg="white" p={6} borderRadius={8} shadow={1} mx={6} my={8}>
          <VStack space={5}>
            <Box>
              <Text
                fontSize="sm"
                fontWeight="500"
                color={COLORS.darkGray3}
                mb={1}>
                Animal ID or Flock ID
              </Text>
              <Select
                selectedValue={animalIdOrFlockId}
                minWidth="100%"
                backgroundColor={COLORS.lightGreen}
                borderColor="gray.200"
                placeholder="Select ID"
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: (
                    <FastImage
                      source={icons.right_arrow}
                      style={{width: 20, height: 20}}
                      tintColor="white"
                    />
                  ),
                }}
                onValueChange={setAnimalIdOrFlockId}>
                <Select.Item label="ID 1" value="id1" />
                <Select.Item label="ID 2" value="id2" />
              </Select>
            </Box>

            <Box>
              <Text
                fontSize="sm"
                fontWeight="500"
                color={COLORS.darkGray3}
                mb={1}>
                Name of the Boosters or Additives
              </Text>
              <Input
                variant="outline"
                backgroundColor={COLORS.lightGreen}
                borderColor="gray.200"
                placeholder="Enter name of boosters or additives"
                value={boostersOrAdditives}
                onChangeText={setBoostersOrAdditives}
              />
            </Box>

            <Box>
              <Text
                fontSize="sm"
                fontWeight="500"
                color={COLORS.darkGray3}
                mb={1}>
                Purpose
              </Text>
              <Select
                selectedValue={purpose}
                minWidth="100%"
                backgroundColor={COLORS.lightGreen}
                borderColor="gray.200"
                placeholder="Select Purpose"
                _selectedItem={{
                  bg: 'teal.600',
                }}
                onValueChange={setPurpose}>
                <Select.Item label="Growth" value="growth" />
                <Select.Item label="Production" value="production" />
                <Select.Item label="Immunity" value="immunity" />
              </Select>
            </Box>

            <Box>
              <Text
                fontSize="sm"
                fontWeight="500"
                color={COLORS.darkGray3}
                mb={1}>
                Quantity Given
              </Text>
              <HStack alignItems="center" space={2}>
                <Select
                  selectedValue={quantityUnit}
                  minWidth="40%"
                  backgroundColor={COLORS.lightGreen}
                  borderColor="gray.200"
                  placeholder="Select Unit"
                  _selectedItem={{
                    bg: 'teal.600',
                  }}
                  onValueChange={setQuantityUnit}>
                  <Select.Item label="Liters (L)" value="liters" />
                  <Select.Item label="Kilograms (Kg)" value="kilograms" />
                  <Select.Item label="Milliliters (ml)" value="milliliters" />
                  <Select.Item label="Grams (g)" value="grams" />
                </Select>
                <HStack flex={1} alignItems="center" space={2}>
                  <Button
                    onPress={() => {
                      const currentValue = parseFloat(quantityGiven) || 1;
                      setQuantityGiven(
                        Math.max(currentValue - 1, 1).toString(),
                      );
                    }}
                    variant="outline"
                    p={2}>
                    -
                  </Button>
                  <Input
                    flex={1}
                    variant="outline"
                    backgroundColor={COLORS.lightGreen}
                    borderColor="gray.200"
                    placeholder="Enter Quantity"
                    keyboardType="numeric"
                    value={quantityGiven.toString()}
                    onChangeText={text => {
                      const numericText = text.replace(/[^0-9.]/g, '');
                      setQuantityGiven(numericText);
                    }}
                  />
                  <Button
                    onPress={() => {
                      const currentValue = parseFloat(quantityGiven) || 1;
                      setQuantityGiven((currentValue + 1).toString());
                    }}
                    variant="outline"
                    p={2}>
                    +
                  </Button>
                </HStack>
              </HStack>
              {quantityUnit && (
                <Text fontSize="xs" color="gray.500" mt={2}>
                  Quantity is recorded in {quantityUnit}.
                </Text>
              )}
            </Box>

            <View style={styles.formGroup}>
              <Text
                fontSize="sm"
                fontWeight="500"
                color={COLORS.darkGray3}
                mb={1}>
                Date Administered
              </Text>
              <View style={styles.dateContainer}>
                <Input
                  w="85%"
                  backgroundColor={COLORS.lightGreen}
                  value={dateAdministered.toLocaleDateString('en-GB')}
                  placeholder="DD/MM/YY"
                  isReadOnly
                />
                <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                  <Image
                    source={icons.calendar}
                    resizeMode="contain"
                    style={styles.calendarIcon}
                  />
                </TouchableOpacity>
              </View>
              {showDatePicker && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={dateAdministered}
                  mode="date"
                  is24Hour={true}
                  onChange={handleDateChange}
                />
              )}
            </View>

            <Box>
              <Text
                fontSize="sm"
                fontWeight="500"
                color={COLORS.darkGray3}
                mb={1}>
                Cost of Booster or Additives
              </Text>
              <Input
                variant="outline"
                backgroundColor={COLORS.lightGreen}
                borderColor="gray.200"
                placeholder="Enter cost"
                keyboardType="numeric"
                value={costOfBooster}
                onChangeText={setCostOfBooster}
              />
            </Box>

            <HStack justifyContent="center" mt={6} space={8}>
              <Button
                variant="outline"
                borderWidth={1}
                borderColor={COLORS.green}
                borderRadius={8}
                px={6}
                py={3}
                onPress={() => navigation.goBack()}>
                Cancel
              </Button>
              <Button
                backgroundColor={COLORS.green}
                borderRadius={8}
                px={6}
                py={3}
                _pressed={{
                  bg: 'emerald.700',
                }}
                onPress={handleSubmit}>
                Submit
              </Button>
            </HStack>
          </VStack>
        </Box>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FastImage className="w-[25px] h-[25px]" source={icons.tick} />
            <Text style={styles.modalText}>Record added successfully</Text>
            <Button
              backgroundColor={COLORS.green}
              borderRadius={8}
              px={6}
              py={2}
              onPress={() => {
                setModalVisible(false);
                navigation.navigate('BoostersRecordScreen');
              }}>
              Ok
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  formGroup: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: 'gray.700',
    marginBottom: 8,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  calendarIcon: {
    width: 40,
    height: 40,
    tintColor: COLORS.green2,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
  },
  checkIcon: {
    width: 50,
    height: 50,
    marginBottom: 15,
    tintColor: COLORS.green,
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
});