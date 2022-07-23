import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

import Shoes from '../Shoes'

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>VOCÊ TAMBÉM PODE GOSTAR!</Text>
      <View style={{flexDirection:"row"}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{marginHorizontal: 10}}>
            <Shoes
              img={require("../../assets/1.png")}
              cost="R$ 110,90"
            >Nike Air Max Dia</Shoes>
          </View>
          
          <View style={{marginHorizontal: 10}}>
            <Shoes
              img={require("../../assets/5.png")}
              cost="R$ 360,99"
            >Nike Epic React Flyknit 2</Shoes>
          </View>

          <View style={{marginHorizontal: 10}}>
            <Shoes
              img={require("../../assets/3.png")}
              cost="R$ 187,90"
            >Nike Squidward Tentacles</Shoes>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {

    },
    title: {
      fontSize: 24,
      fontFamily: "Anton_400Regular",
      marginVertical: "2%",
      paddingHorizontal: "2%"
    }
})