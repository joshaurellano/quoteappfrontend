import { Card, Text } from '@rneui/themed';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from "react-native";

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
      <Card containerStyle={styles.card}>
        <View style={styles.quote}>
        <Text>{quotesData?.[0]?.content}</Text>
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

})