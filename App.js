import React, { useState } from 'react';
import {
    SafeAreaView, StyleSheet, ScrollView, View, Text, TouchableOpacity, Image
} from 'react-native';

const style = StyleSheet.create({
    centerAlign: { alignItems: 'center', justifyContent: 'center' },
    marginSide: { marginLeft: "3%", marginRight: "3%" },
    kbFont: { fontFamily: "KBHand2019" },
    largeText: { fontSize: 21 },
    middleText: { fontSize: 14 },
    smallText: { fontSize: 14 },
    whereViewContainer: { height: 20, marginTop : 30 },
    whereViewButtonContainer: { marginTop: 20, marginBottom: 20, height: 65, flexDirection: "row" },
    whereViewButtonDirection: { flex: 1, flexDirection: "row" },
    topMenuButton: { marginRight: 5, width: "30%", height: 32, borderRadius: 10 }
})

function WhereView(props) {
    const [how, setHow] = useState(false); // If false, 걸어서 선택.
    const [five, setFive] = useState(true); // 첫번째엔 5분 선택하게 하기.
    const [ten, setTen] = useState(false);
    const [tew, setTew] = useState(false);

    return(
        <View style={[props.style, {flexDirection: "column"}]}>
            <View style={style.whereViewContainer}>
                <Text style={[style.kbFont, style.largeText]}>어디에 있는걸 먹을까?</Text>
            </View>
            <View style={style.whereViewButtonContainer}>
                <View style={style.whereViewButtonDirection}>
                    <TopMenuButton 
                        text="차타고" 
                        selected={how} 
                        onPress={() => {setHow(true)}}
                    />
                    <TopMenuButton 
                        text="걸어서" 
                        selected={!how} 
                        onPress={() => {setHow(false)}}
                    />
                </View>
                <View style={style.whereViewButtonDirection}>
                    <TopMenuButton 
                        text="5분" 
                        selected={five} 
                        onPress={() => {
                            setFive(true);
                            setTen(false);
                            setTew(false);
                        }}    
                    />
                    <TopMenuButton 
                        text="10분" 
                        selected={ten} 
                        onPress={() => {
                            setFive(false);
                            setTen(true);
                            setTew(false);
                        }}    
                    />
                    <TopMenuButton 
                        text="20분" 
                        selected={tew} 
                        onPress={() => {
                            setFive(false);
                            setTen(false);
                            setTew(true);
                        }}  
                    />
                </View>
            </View>
        </View>
    );
}

function TopMenuButton(props) {
    if(props.selected) {
        return(
            <TouchableOpacity 
                style={[style.centerAlign, style.topMenuButton, { backgroundColor: "#FFA824" }]}
                onPress={() => {props.onPress()}}
            >
                <Text style={[style.kbFont, style.smallText, {color: "#FFFFFF"}]}>{props.text}</Text>
            </TouchableOpacity>
        )
    }
    else {
        return(
            <TouchableOpacity 
                style={[style.centerAlign, style.topMenuButton, { backgroundColor: "#FFFFFF" }]}
                onPress={() => {props.onPress()}}
            >
                <Text style={[style.kbFont, style.smallText]}>{props.text}</Text>
            </TouchableOpacity>
        )
    }
}

function JackPotSelector(props) {
    return(
        <View style={[props.style, {backgroundColor: "#FFFFFF"}]}>

        </View>
    )
}

function AdView(props) {
    return(
        <View style={[props.style, style.centerAlign, {marginTop: 10, marginBottom: 10}]}>
            <Image source={require('./asset/advertisement.png')} style={{flex:1, resizeMode: 'cover'}}/>
        </View>
    )
}

function Footer(props) {
    return(
        <View style={[props.style, {flexDirection: "row", marginBottom: 20, alignItems:'flex-end', justifyContent: 'flex-end'}]}>
            <Text style={[style.kbFont, style.largeText]}>뭐 먹지?</Text>
            <Text style={[style.kbFont, style.smallText, {marginLeft: 10}]}>Made By Vintz</Text>
        </View>
    )
}

function App(props){
    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={[{flex: 1, backgroundColor: "#F8F8F8"}, style.marginSide]}>
                <WhereView style={{flex: 1}}></WhereView>
                <JackPotSelector style={{flex: 1.5}}></JackPotSelector>
                <AdView style={{flex: 1.5}}></AdView>
                <Footer style={{flex: 0.2}}></Footer>
            </View>
        </SafeAreaView> 
    );
}

export default App;
