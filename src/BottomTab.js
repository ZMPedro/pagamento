import React from "react";
import { View } from "react-native";
import Icon from  "./Icon";
import Swiper from 'react-native-swiper';
import styles from './Styles';

import Money from './components/icons/ic_money.svg';
import Debit from './components/icons/ic_debit.svg';
import Credit from './components/icons/ic_credit.svg';
import VR from './components/icons/ic_vr.svg';
import Cupom from './components/icons/ic_cupom.svg';


export default function BottomTab() {
    return(
        <View style={styles.bottomTab} >
            <Swiper style={styles.wrapper} >
            <View style={styles.slide}>
                <Money width={40} height={40} />
                <Debit width={40} height={40} />
                <Credit width={40} height={40} />
            </View>
            <View style={styles.slide}>
                <VR width={40} height={40} />
                <Cupom width={40} height={40} />
            </View>
            </Swiper>
        </View> 
    );
}