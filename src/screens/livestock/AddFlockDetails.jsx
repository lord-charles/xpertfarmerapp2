import React, { useState } from "react";
import { View, ScrollView as RNScrollView, StyleSheet } from "react-native";
import { Text, Input, Button, Radio, Modal, VStack, HStack } from "native-base";
import SecondaryHeader from "../../components/headers/secondary-header";
import { COLORS } from "../../constants/theme";

export default function AddFlockDetailsScreen({ navigation }) {
  const [formData, setFormData] = useState({
    flockId: "",
    dateOfBirth: "",
    gender: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    setShowModal(true);
  };

  const handleAddAnother = () => {
    setFormData({
      flockId: "",
      dateOfBirth: "",
      gender: "",
    });
    setShowModal(false);
  };

  const renderFormField = (
    label,
    value,
    onChangeText,
    keyboardType = "default",
    placeholder = ""
  ) => (
    <View style={styles.formField}>
      <Text style={styles.label}>{label}</Text>
      <Input
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        placeholder={placeholder}
        style={styles.input}
        backgroundColor={COLORS.green}
        borderWidth={0}
        fontSize="sm"
        height={10}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <SecondaryHeader title="Add Flock Details" />
      <RNScrollView style={styles.scrollView}>
        <View style={styles.formContainer}>
          <Text style={styles.subtitle}>Fill in the flock details</Text>

          {renderFormField(
            "Flock ID / Poultry ID",
            formData.flockId,
            (value) => setFormData((prev) => ({ ...prev, flockId: value }))
          )}

          {renderFormField(
            "Date of Birth (DD/MM/YYYY)",
            formData.dateOfBirth,
            (value) => setFormData((prev) => ({ ...prev, dateOfBirth: value }))
          )}

          <View style={styles.formField}>
            <Text style={styles.label}>Gender</Text>
            <Radio.Group
              name="gender"
              value={formData.gender}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, gender: value }))
              }
            >
              <VStack space={2}>
                <Radio value="Male">
                  <Text>Male</Text>
                </Radio>
                <Radio value="Female">
                  <Text>Female</Text>
                </Radio>
                <Radio value="Mixed">
                  <Text>Mixed</Text>
                </Radio>
              </VStack>
            </Radio.Group>
          </View>

          <HStack space={3} mt={6} justifyContent="space-between">
            <Button
              flex={1}
              variant="outline"
              onPress={() => navigation.goBack()}
              borderColor={COLORS.green2}
              _text={{ color: COLORS.green2 }}
            >
              Back
            </Button>
            <Button
              flex={1}
              bg={COLORS.green2}
              onPress={handleSubmit}
              _text={{ color: "white" }}
              style={styles.submitButton}
            >
              Submit
            </Button>
          </HStack>
        </View>
      </RNScrollView>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content style={styles.modalContent}>
          <Modal.Body>
            <VStack space={6} alignItems="center" style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Add another flock</Text>
              <Text style={styles.modalSubtitle}>
                Feel free to add another flock, the more the better
              </Text>
              <HStack space={4} width="100%">
                <Button
                  flex={1}
                  variant="outline"
                  onPress={() => navigation.goBack()}
                  borderColor={COLORS.gray}
                  _text={{ color: COLORS.gray }}
                  style={styles.modalButton}
                >
                  No
                </Button>
                <Button
                  flex={1}
                  onPress={handleAddAnother}
                  bg={COLORS.green2}
                  _text={{ color: "white" }}
                  style={[styles.modalButton, styles.modalSubmitButton]}
                >
                  Yes
                </Button>
              </HStack>
            </VStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.green,
  },
  scrollView: {
    flex: 1,
  },
  formContainer: {
    backgroundColor: "white",
    margin: 16,
    borderRadius: 12,
    padding: 32,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.gray,
    marginBottom: 20,
    textAlign: "center",
  },
  formField: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: COLORS.black,
    marginBottom: 8,
  },
  input: {
    borderRadius: 8,
    backgroundColor: COLORS.green,
  },
  submitButton: {
    borderWidth: 0,
  },
  modalContent: {
    borderRadius: 16,
    margin: 20,
  },
  modalContainer: {
    padding: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: COLORS.black,
  },
  modalSubtitle: {
    fontSize: 14,
    color: COLORS.gray,
    textAlign: "center",
  },
  modalButton: {
    height: 45,
    borderRadius: 8,
  },
  modalSubmitButton: {
    backgroundColor: COLORS.green2,
  },
});
