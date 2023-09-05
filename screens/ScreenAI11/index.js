import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, FlatList, Image, Picker } from 'react-native';

const BettingHistoryScreen = () => {
  const [search, setSearch] = useState('');
  const [sport, setSport] = useState('');
  const [date, setDate] = useState('');
  const dummyData = [{
    id: '1',
    sport: 'Football',
    date: '2021-09-01',
    bet: '100',
    outcome: 'Win'
  }, {
    id: '2',
    sport: 'Basketball',
    date: '2021-09-02',
    bet: '200',
    outcome: 'Loss'
  }, {
    id: '3',
    sport: 'Tennis',
    date: '2021-09-03',
    bet: '300',
    outcome: 'Win'
  }];
  return <SafeAreaView style={_styles.tMrxuOEz}>
      <View style={_styles.orzGVUZb}>
        <TextInput style={_styles.JNpaKNGj} onChangeText={text => setSearch(text)} value={search} placeholder="Search" />
        <Picker selectedValue={sport} style={_styles.KLDnAZOG} onValueChange={(itemValue, itemIndex) => setSport(itemValue)}>
          <Picker.Item label="Football" value="football" />
          <Picker.Item label="Basketball" value="basketball" />
          <Picker.Item label="Tennis" value="tennis" />
        </Picker>
        <TextInput style={_styles.VcFkEGwg} onChangeText={text => setDate(text)} value={date} placeholder="Date" />
        <FlatList data={dummyData} keyExtractor={item => item.id} renderItem={({
        item
      }) => <View style={_styles.ftTLZyDH}>
              <Image style={_styles.CxnMhieE} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
              <View>
                <Text>{item.sport}</Text>
                <Text>{item.date}</Text>
                <Text>{item.bet}</Text>
                <Text>{item.outcome}</Text>
              </View>
            </View>} />
      </View>
    </SafeAreaView>;
};

export default BettingHistoryScreen;

const _styles = StyleSheet.create({
  tMrxuOEz: {
    flex: 1,
    backgroundColor: "#fff"
  },
  orzGVUZb: {
    padding: 20
  },
  JNpaKNGj: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20
  },
  KLDnAZOG: {
    height: 50,
    width: 150
  },
  VcFkEGwg: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20
  },
  ftTLZyDH: {
    flexDirection: "row",
    marginBottom: 20
  },
  CxnMhieE: {
    width: 50,
    height: 50,
    marginRight: 10
  }
});