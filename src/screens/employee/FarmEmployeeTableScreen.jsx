import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Box, Text, Checkbox, HStack, VStack, Pressable } from "native-base";
import FastImage from "react-native-fast-image";
import SecondaryHeader from "../../components/headers/secondary-header";
import icons from "../../constants/icons";

export default function FarmEmployeeTableScreen({ navigation }) {
  const [selectedRows, setSelectedRows] = useState([]);

  const tableData = [
    { fullName: "John Doe", farmId: "F001", position: "Farm Manager", phone: "123-456-7890", dateOfEmployment: "2023-01-15" },
    { fullName: "Jane Smith", farmId: "F002", position: "Assistant Manager", phone: "098-765-4321", dateOfEmployment: "2023-03-22" },
    { fullName: "Alice Johnson", farmId: "F003", position: "Field Supervisor", phone: "456-123-7890", dateOfEmployment: "2022-11-01" },
    { fullName: "Robert Brown", farmId: "F004", position: "Crop Technician", phone: "789-456-1230", dateOfEmployment: "2023-02-10" },
    { fullName: "Sarah Wilson", farmId: "F005", position: "Livestock Specialist", phone: "321-654-0987", dateOfEmployment: "2023-05-15" },
    { fullName: "Michael Chen", farmId: "F006", position: "Equipment Operator", phone: "654-789-0123", dateOfEmployment: "2023-06-01" },
    { fullName: "Emily Davis", farmId: "F007", position: "Quality Inspector", phone: "147-258-3690", dateOfEmployment: "2023-04-12" },
    { fullName: "David Martinez", farmId: "F008", position: "Maintenance Technician", phone: "369-852-1470", dateOfEmployment: "2023-07-20" },
    { fullName: "Lisa Anderson", farmId: "F009", position: "Data Analyst", phone: "741-852-9630", dateOfEmployment: "2023-08-05" },
    { fullName: "James Wilson", farmId: "F010", position: "Farm Hand", phone: "258-147-3690", dateOfEmployment: "2023-09-15" },
    { fullName: "Olivia Lewis", farmId: "F011", position: "Veterinarian", phone: "123-456-7891", dateOfEmployment: "2023-10-20" },
    { fullName: "Ethan Taylor", farmId: "F012", position: "Horticulturist", phone: "098-765-4322", dateOfEmployment: "2023-02-18" },
    { fullName: "Mia Thompson", farmId: "F013", position: "Agrochemicals Specialist", phone: "456-123-7891", dateOfEmployment: "2022-12-25" },
    { fullName: "Noah Garcia", farmId: "F014", position: "Soil Scientist", phone: "789-456-1231", dateOfEmployment: "2023-03-30" },
    { fullName: "Isabella Martinez", farmId: "F015", position: "Irrigation Specialist", phone: "321-654-0988", dateOfEmployment: "2023-05-20" },
    { fullName: "William Rodriguez", farmId: "F016", position: "Organic Certification Coordinator", phone: "654-789-0124", dateOfEmployment: "2023-01-10" },
    { fullName: "Sophia Davis", farmId: "F017", position: "Sustainability Coordinator", phone: "147-258-3691", dateOfEmployment: "2023-11-01" },
    { fullName: "Benjamin White", farmId: "F018", position: "Environmental Health Officer", phone: "369-852-1471", dateOfEmployment: "2023-06-25" },
    { fullName: "Lucas Harris", farmId: "F019", position: "Field Worker", phone: "741-852-9631", dateOfEmployment: "2023-08-15" },
    { fullName: "Amelia Clark", farmId: "F020", position: "Research Scientist", phone: "258-147-3691", dateOfEmployment: "2023-09-05" },
  ];

  const toggleSelectAll = () => {
    setSelectedRows(
      selectedRows.length === tableData.length ? [] : tableData.map((_, i) => i)
    );
  };

  const toggleSelectRow = (index) => {
    setSelectedRows((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <Box flex={1} backgroundColor="#fff">
      <SecondaryHeader title="Employees" />

      <HStack
        justifyContent="flex-end"
        px={4}
        py={3}
        style={styles.fixedControls}
        borderBottomWidth={1}
        borderBottomColor="#e0e0e0"
      >
        <Pressable onPress={() => console.log("Delete Selected")}>
          <HStack space={2}>
            <FastImage
              source={icons.remove}
              style={{ width: 20, height: 20 }}
              tintColor="#dc3545"
            />
            <Text color="#dc3545">Delete</Text>
          </HStack>
        </Pressable>
        <Pressable onPress={() => console.log("Filter Options")} ml={4}>
          <HStack space={2}>
            <FastImage
              source={icons.filter}
              style={{ width: 20, height: 20 }}
              tintColor="#666"
            />
            <Text color="#666">Filters</Text>
          </HStack>
        </Pressable>
        <Pressable onPress={() => console.log("Export Data")} ml={4}>
          <HStack space={2}>
            <FastImage
              source={icons.download}
              style={{ width: 20, height: 20 }}
              tintColor="#666"
            />
            <Text color="#666">Export</Text>
          </HStack>
        </Pressable>
      </HStack>

      {/* Vertical Scroll for entire content */}
      <ScrollView showsVerticalScrollIndicator>
        {/* Horizontal Scroll for the table */}
        <ScrollView horizontal={true} style={styles.scrollableTable}>
          <VStack>
            {/* Table Header */}
            <HStack backgroundColor="emerald.600" paddingY={3}>
              <Box width="50px" alignItems="center">
                <Checkbox
                  isChecked={selectedRows.length === tableData.length}
                  onChange={toggleSelectAll}
                  accessibilityLabel="Select All"
                  colorScheme="green"
                />
              </Box>
              <Text color="white" fontWeight="600" width="120px" px={2}>
                Farm ID
              </Text>
              <Text color="white" fontWeight="600" width="150px" px={2}>
                Full Name
              </Text>
              <Text color="white" fontWeight="600" width="150px" px={2}>
                Position
              </Text>
              <Text color="white" fontWeight="600" width="120px" px={2}>
                Phone
              </Text>
              <Text color="white" fontWeight="600" width="150px" px={2}>
                Date of Employment
              </Text>
            </HStack>

            {/* Table Rows */}
            {tableData.map((item, index) => (
              <Pressable key={index} onPress={() => toggleSelectRow(index)}>
                <HStack
                  paddingY={3}
                  borderBottomWidth={1}
                  borderBottomColor="#e0e0e0"
                  backgroundColor={
                    selectedRows.includes(index) ? "#f5f5f5" : "white"
                  }
                >
                  <Box width="50px" alignItems="center">
                    <Checkbox
                      isChecked={selectedRows.includes(index)}
                      onChange={() => toggleSelectRow(index)}
                      accessibilityLabel="Select Row"
                      colorScheme="green"
                    />
                  </Box>
                  <Text width="120px" color="#333" px={2}>
                    {item.farmId}
                  </Text>
                  <Text width="150px" color="#333" px={2}>
                    {item.fullName}
                  </Text>
                  <Text width="150px" color="#333" px={2}>
                    {item.position}
                  </Text>
                  <Text width="120px" color="#333" px={2}>
                    {item.phone}
                  </Text>
                  <Text width="150px" color="#333" px={2}>
                    {item.dateOfEmployment}
                  </Text>
                </HStack>
              </Pressable>
            ))}
          </VStack>
        </ScrollView>
      </ScrollView>
    </Box>
  );
}

const styles = StyleSheet.create({
  fixedControls: {
    backgroundColor: "#fff",
    zIndex: 10,
  },
  scrollableTable: {
    marginTop: -1,
  },
});
