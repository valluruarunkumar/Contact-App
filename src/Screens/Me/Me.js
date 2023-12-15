import React from "react";
import { View, Text, Image, ScrollView ,Button} from 'react-native';
import {me} from '../../Config/Data';
import Icon from 'react-native-vector-icons/AntDesign';
import moment from 'moment';
import Colors from '../../Config/Colors';
import styles, { CHEVRON_SIZE } from './styles';


const Me = () => {


  return (
    <ScrollView>
      <View>
        <Image source={{ uri: me.picture.large }} style={{ width: 200, height: 200, borderRadius: 100, marginLeft: 100 }}/>
        <Text style={{marginLeft:120, fontSize:20}}>
            {me.name.first}{me.name.last}
        </Text>
        <Button title="Edit Profile" />
      </View>

      <View style={styles.details1}>
          <View style={styles.horizontalLine} />
          <Text style={styles.heading}>Email</Text>
          <Text style={styles.text}>
            {me.email}
            <Icon name="mail" style={styles.mailIcon} />
          </Text>
          <Text style={styles.heading}>Phone</Text>
          <Text style={styles.text}>
            {me.phone}
            <Icon name="phone" style={styles.phoneIcon} />
            <Icon name="message1" style={styles.messageIcon} />
          </Text>
          <View>
            <Text style={styles.heading}>Home</Text>
            <Text style={styles.text}>
              {me.cell}
              <Icon name="phone" style={styles.phoneIcon} />
            </Text>
          </View>
          <View style={styles.horizontalLine} />
        </View>


        <View style={styles.details2}>

          <View style={styles.horizontalLine} />

          <Text style={styles.heading}>City</Text>
          <Text style={styles.text}>{me.location.city}</Text>
          <Text style={styles.heading} >Birthday</Text>
          <Text style={styles.text}>{moment(me.dob).format('MMMM Do YYYY')}</Text>
          <Text style={styles.heading} >registered</Text>
          <Text style={styles.text}>{moment(me.registered).format('MMMM Do YYYY')}</Text>
          <Text style={styles.heading}>username</Text>
          <Text style={styles.text}>{me.login.username}</Text>

          <View style={styles.horizontalLine} />
        </View>

        
    </ScrollView>
  );
};

export default Me;
