import React from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";
import { useState, useEffect } from "react/cjs/react.development";


export default function Homepage({ navigation }) {
 

  //const [data,setData]=useState([])
  const [input, setInput] = useState(
    {
      Buyer: "",
      contact: "",
      date: "",
      time: "",
      itemname: "",
      quantity: "",
      priceperquantity: "",
      discount: "",
      gst: "",
    },
  );

  const handleInput = (e, name) => {
    setInput({ ...input, [name]: e });
 
  };


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headercolor}> Receipt Table Generation</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={styles.body}>
        
          <View style={styles.inputtext}>
            <Text style={styles.textstyle}>Buyer Name</Text>
            <TextInput
              placeholder="Enter Name"
              style={styles.inputstyle}
              value={input.Buyer}
              name="Buyer"
              onChangeText={(e) => handleInput(e, "Buyer")}
            />
          </View>

          <View style={styles.inputtext}>
            <Text style={styles.textstyle}>Enter Contact Number</Text>
            <TextInput
              placeholder="10 didgits no"
              style={styles.inputstyle}
              value={input.contact}
              name="contact"
              onChangeText={(e) => handleInput(e, "contact")}
            />
          </View>

          <View style={styles.inputtext}>
            <Text style={styles.textstyle}>Enter Date</Text>
            <TextInput
              placeholder="dd/mm/yy "
              style={styles.inputstyle}
              value={input.date}
              name="date"
              onChangeText={(e) => handleInput(e, "date")}
            />
          </View>

          <View style={styles.inputtext}>
            <Text style={styles.textstyle}>Enter Time</Text>
            <TextInput
              placeholder="hour:min"
              style={styles.inputstyle}
              value={input.time}
              name="time"
              onChangeText={(e) => handleInput(e, "time")}
            />
          </View>

          <View style={styles.inputtext}>
            <Text style={styles.textstyle}>Item</Text>
            <TextInput
              placeholder="Enter Item"
              style={styles.inputstyle}
              value={input.itemname}
              name="itemname"
              onChangeText={(e) => handleInput(e, "itemname")}
            />
          </View>
          <View style={styles.inputtext}>
            <Text style={styles.textstyle}>Enter Item Quantity</Text>
            <TextInput
              placeholder="Quantity of Item"
              style={styles.inputstyle}
              value={input.quantity}
              name="quantity"
              onChangeText={(e) => handleInput(e, "quantity")}
            />
          </View>
          <View style={styles.inputtext}>
            <Text style={styles.textstyle}>Enter Price of Quantity</Text>
            <TextInput
              placeholder="Price of Item in Rs"
              style={styles.inputstyle}
              value={input.priceperquantity}
              name="priceperquantity"
              onChangeText={(e) => handleInput(e, "priceperquantity")}
            />
          </View>
          <View style={styles.inputtext}>
            <Text style={styles.textstyle}>Discount on Item </Text>
            <TextInput
              placeholder="Enter discount in Rs"
              style={styles.inputstyle}
              value={input.discount}
              name="discount"
              onChangeText={(e) => handleInput(e, "discount")}
            />
          </View>
          <View style={styles.inputtext}>
            <Text style={styles.textstyle}>GST on item</Text>
            <TextInput
              placeholder="Enter GST in Rs "
              style={styles.inputstyle}
              value={input.gst}
              name="gst"
              onChangeText={(e) => handleInput(e, "gst")}
            />
          </View>

          <View style={styles.inputtext}>
          <Button
            onPress={() =>
              navigation.navigate("display", {
                input,
              })
            }
            title="Display"
            style={{ backgroundColor: "black" }}
          />
        </View>
        </View>

      
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: StatusBar.currentHeight,
 
    height: "100%",
    marginBottom:50
  },
  header: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderWidth: 3,
    flexDirection: "column",
    backgroundColor: "black",
  },
  headercolor: {
    color: "white",
    fontSize: 20,
    paddingVertical: 5,
  },
  body: {
    marginVertical: 20,
    width: "80%",

    alignSelf: "center",
    height: "100%",
    
  },
  textstyle: {
    fontSize: 18,
  },
  inputstyle: {
    fontSize: 16,
    borderWidth: 2,
    paddingLeft: 5,
  },
  inputtext: {
    marginVertical: 8,
  },
});
