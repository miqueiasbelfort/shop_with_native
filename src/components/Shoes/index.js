import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Shoes({img, cost, children, onClick}) {

  function filterDesc(desc){
    if(desc.length < 20){
      return desc
    }
    return `${desc.substring(0, 20)}...`
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <Image
        source={img}
        style={styles.shoesImg}
      />
      <Text style={styles.shoesText}>
        {filterDesc(children)}
      </Text>
      <View style={{opacity: 0.4}}>
        <Text style={styles.shoesText}>{cost}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: "2%",
    alignItems: "center",
    justifyContent: "center"
  },
  shoesImg: {
    width: 175,
    height: 175,
  },
  shoesText: {
    fontSize: 16
  }
})