import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { DataTable } from "react-native-paper";
import { useEffect } from "react/cjs/react.development";

export default function Display(props) {
  const { input } = props.route.params;
  
  const { itemname,Buyer,contact,date,time,quantity, priceperquantity, discount, gst} = input;
  useEffect(() => {
   if(!itemname || !Buyer || !contact || !date || !time  || !quantity ||  !priceperquantity || !discount || !gst)
   {alert("fill all fields first")
     props.navigation.goBack('Home')}
  }, [])
  const val=quantity*priceperquantity-discount+gst;

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 10 }}>
        <DataTable>
          <DataTable.Header style={{ backgroundColor: "#bdc3c7" }}>
            <DataTable.Title style={styles.setcenter}>
              <Text style={styles.font}>Buyer Name</Text>
            </DataTable.Title>
            <DataTable.Title style={styles.setcenter}>
              <Text style={styles.font}>Contact Number</Text>
            </DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell style={styles.setcenter}>
              <Text style={styles.font}>{input.Buyer}</Text>
            </DataTable.Cell>
            <DataTable.Cell style={styles.setcenter}>
              <Text style={styles.font}>{input.contact}</Text>
            </DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </View>
      <View style={{ marginTop: 10}}>
        <DataTable>
          <DataTable.Header style={{ backgroundColor: "#bdc3c7" }}>
            <DataTable.Title style={styles.setcenter}>
              <Text style={styles.font}>Date</Text>
            </DataTable.Title>
            <DataTable.Title style={styles.setcenter}>
              <Text style={styles.font}>Time</Text>
            </DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell style={styles.setcenter}>
              <Text style={styles.font}>{input.date}</Text>
            </DataTable.Cell>
            <DataTable.Cell style={styles.setcenter}>
              <Text style={styles.font}>{input.time}</Text>
            </DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </View>

      <View style={{ marginTop: 10 }}>
        <DataTable>
          <DataTable.Header style={{ backgroundColor: "#bdc3c7" }}>
            <DataTable.Title style={styles.setcenter}>
              <Text style={styles.font}>Item Name</Text>
            </DataTable.Title>
            <DataTable.Title style={styles.setcenter}>
              <Text style={styles.font}>Quantity</Text>
            </DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell style={styles.setcenter}>
              <Text style={styles.font}>{input.itemname}</Text>
            </DataTable.Cell>
            <DataTable.Cell style={styles.setcenter}>
              <Text style={styles.font}>{input.quantity}</Text>
            </DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </View>

      <View style={{ marginTop: 10 }}>
        <DataTable>
          <DataTable.Header style={{ backgroundColor: "#bdc3c7" }}>
            <DataTable.Title style={styles.setcenter}>
              <Text style={styles.font}>Price per quantity</Text>
            </DataTable.Title>
            <DataTable.Title style={styles.setcenter}>
              <Text style={styles.font}>Discount</Text>
            </DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell style={styles.setcenter}>
              <Text style={styles.font}>{input.priceperquantity}</Text>
            </DataTable.Cell>
            <DataTable.Cell style={styles.setcenter}>
              <Text style={styles.font}>{input.discount}</Text>
            </DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </View>

      <View style={{ marginTop: 10 }}>
        <DataTable>
          <DataTable.Header style={{ backgroundColor: "#bdc3c7" }}>
            <DataTable.Title style={styles.setcenter}>
              <Text style={styles.font}>GST</Text>
            </DataTable.Title>
            <DataTable.Title style={styles.setcenter}>
              <Text style={styles.font}>Total Amount</Text>
            </DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell style={styles.setcenter}>
              <Text style={styles.font}>{input.gst}</Text>
            </DataTable.Cell>
            <DataTable.Cell style={styles.setcenter}>
              <Text style={styles.font}>{val}</Text>
            </DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: StatusBar.currentHeight,

    height: "100%",
    marginBottom: 50,
  },
  setcenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  font: {
    fontSize: 18,
    color:"#34495e"
  },
});
