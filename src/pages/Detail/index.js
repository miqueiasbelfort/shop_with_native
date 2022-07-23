import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

import Dot from '../../components/Dot'
import SizeButton from '../../components/SizeButton'
import Button from '../../components/Button'
import Footer from '../../components/Footer'

const Detail = ({navigation}) => {
  
    navigation.setOptions({
      headerTitle: "Nike Air Max"
    })

  return (
    <ScrollView style={styles.container}>
      <Image 
        source={require("../../assets/detail.png")}
        style={styles.image}
        resizeMode="cover"
      />
      <View>

        <View>
          <Text style={[styles.title, {fontSize: 24}]}>R$ 247,99</Text>
        </View>
        <View opacity={0.4}>
          <Text style={[styles.title, {fontSize: 30}]}>Nike Downshifter 10</Text>
        </View>

        <View style={styles.dotContainer}>
          <Dot color="#2379f4"/>
          <Dot color="#fb6e53"/>
          <Dot color="#ddd"/>
          <Dot color="#000"/>
        </View>

        <View style={{flexDirection: "row", width: "100%"}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SizeButton bgColor="#17181a" color="#fff">40</SizeButton>
            <SizeButton>37</SizeButton>
            <SizeButton>39</SizeButton>
            <SizeButton>42</SizeButton>
          </ScrollView>
        </View>

        <View style={styles.textContent}>
          <Text style={styles.textTitle}>
            Nike Downshifter 10
          </Text>
          <Text style={styles.textContent}>
            Inspired by the open architecture of Paris’s Centre Pompidou, Nike Designer Tinker Hatfield cut a small window into the Air Max 1’s midsole, making Nike Air visible for the first time
          </Text>
          <Text style={styles.textList}>
            - Categoria: Amorteciomento
          </Text>
          <Text style={styles.textList}>
            - Materia: Mash
          </Text>
        </View>

        <Button/>

        <View style={styles.line}></View>

        <Footer/>

      </View>
    </ScrollView>
  )
}

export default Detail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff"
  },
  image: {
    width: "100%"
  },
  title: {
    fontFamily: "Anton_400Regular",
    paddingHorizontal: "2%"
  },
  dotContainer: {
    flexDirection: "row",
    marginVertical: "7%"
  },
  textContent: {
    fontSize: 16,
    lineHeight: 25,
    marginVertical: "2%",
    paddingHorizontal: "2%",
  },
  textTitle: {
    fontSize: 22,
    marginVertical: "2%"
  },
  textList: {
    fontSize: 16,
    lineHeight: 25,
  },
  line: {
    borderWidth: 1,
    borderBottomColor: "#ddd",
    marginVertical: "2%"
  }
})