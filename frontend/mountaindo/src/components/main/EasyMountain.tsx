import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import AppText from '../AppText';
import AppTextBold from '../AppTextBold';

interface Props {
  dummyEasy: {
    id: number;
    profile: any;
    course: string;
    name: string;
    meter: number;
  }[];
}

function EasyMountain({dummyEasy}: Props) {
  return (
    <View>
      <ScrollView horizontal={true}>
        {dummyEasy.map(item => (
          <View key={item.id}>
            <AppTextBold style={styles.mountainCourse}>
              {item.course}
            </AppTextBold>
            <Image source={item.profile} style={styles.imgStyle} />
            <AppText style={styles.mountainTitle}>{item.name}</AppText>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mountainCourse: {
    fontSize: 12,
    marginLeft: 8,
  },
  mountainTitle: {
    fontSize: 10,
    marginLeft: 5,
    marginBottom: 7,
  },

  imgStyle: {
    width: 90,
    height: 90,
    margin: 5,
  },
});

export default EasyMountain;
