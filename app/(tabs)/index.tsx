import { Card, Text } from '@rneui/themed';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, View } from "react-native";

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export default function Index() {

const headers = {
  accept:'application/json'
}

type QuotesData = {
  content: string,
  author: string,
  authorSlug: string,
  length: number
}

const [quotesData, setQuotesData] = useState<QuotesData[]|null>(null)

const fetchQuotes = async () => {
  const response = await axios.get(`${apiUrl}/quote`,{headers:headers})
  setQuotesData(response.data)
} 

useEffect (() =>{
  fetchQuotes()
},[])

  return (
    <View style={styles.container}>
      <Image source={{uri:'https://res.cloudinary.com/dv7ai6yrb/image/upload/v1750831554/quotes_cerqdg.png'}} style={{height:40, width:40}}></Image>
      <Card containerStyle={styles.card}>
        
        <View style={styles.quote}>
        <Text h4 >{quotesData?.[0]?.content}</Text>
        </View>

        <View style={styles.author}>
        <Text>- {quotesData?.[0]?.author}</Text>
        </View>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  card:{
    height: 250,
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  quote: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  author: {
    flex:1,
    marginTop: 8,
    justifyContent:'center',
    alignItems:'center'
  }


})