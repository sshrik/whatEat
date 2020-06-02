import React, { useState } from 'react';
import {
    SafeAreaView, StyleSheet, ScrollView, View, Text, TouchableOpacity, Image
} from 'react-native';

const style = StyleSheet.create({
    centerAlign: { 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    marginSide: { 
        marginLeft: "3%", 
        marginRight: "3%" 
    },
    kbFont: { 
        fontFamily: "KBHand2019" 
    },
    largeText: { 
        fontSize: 21 
    },
    middleText: { 
        fontSize: 17 
    },
    smallText: { 
        fontSize: 14 
    },
    whereViewContainer: { 
        height: 20,
        marginTop : 30 
    },
    whereViewButtonContainer: { 
        marginTop: 20,
        marginBottom: 20, 
        height: 65, 
        flexDirection: "row" 
    },
    whereViewButtonDirection: { 
        flex: 1, 
        flexDirection: "row" 
    },
    topMenuButton: { 
        marginRight: 5, 
        width: "30%", 
        height: 32, 
        borderRadius: 10 
    },
    jackPotContainer: { 
        flexDirection: 'row', 
        marginBottom: 36 
    },
    jackPotRollerContainer: { 
        flexDirection: "row", 
        backgroundColor: "#3E3E3E",  
        marginLeft: 25, 
        marginRight: 25 
    },
    jackPotTextContainer: { 
        flexDirection: "row", 
        alignItems: 'center',
        marginLeft: 25 
    },
    jackPotRollerMenuContainer: { 
        flex: 1, 
        marginLeft: 3, 
        backgroundColor: "#FFFFFF",
        marginRight: 3, 
        overflow: "hidden" 
    },
    jackPotRollerMenu: {
        position:'absolute', 
        marginTop: 5, 
        marginLeft: "5%", 
        marginRight: "5%", 
        height: 50, 
        width: "90%",
        borderRadius: 3
    },
    jackPotHandllerContainer: {
        alignItems:'center', 
        justifyContent: 'flex-end'
    }
})

function WhereView(props) {
    const [how, setHow] = useState(false); // If false, 걸어서 선택.
    const [five, setFive] = useState(true); // 첫번째엔 5분 선택하게 하기.
    const [ten, setTen] = useState(false);
    const [tew, setTew] = useState(false);

    return(
        <View style={[props.style, {flexDirection: "column"}]}>
            <View style={style.whereViewContainer}>
                <Text style={[style.kbFont, style.largeText, {color: "#3E3E3E"}]}>어디에 있는걸 먹을까?</Text>
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
                <Text style={[style.kbFont, style.smallText, { color: "#FFFFFF" }]}>{props.text}</Text>
            </TouchableOpacity>
        )
    }
    else {
        return(
            <TouchableOpacity 
                style={[style.centerAlign, style.topMenuButton, { backgroundColor: "#FFFFFF" }]}
                onPress={() => {props.onPress()}}
            >
                <Text style={[style.kbFont, style.smallText, { color: "#3E3E3E" }]}>{props.text}</Text>
            </TouchableOpacity>
        )
    }
}

function JackPotSelector(props) {
    let marketList = ['사칠싱싱 횟집', '가야 보쌈', '노랑 통닭', '슈퍼 족발', '신참 떡볶이', '맘스터치', '9988', '버거킹', '치폴레옹'];
    const [selectedIndex, setSelectedIndex] = useState([randomPicker(marketList), randomPicker(marketList), randomPicker(marketList)])

    return(
        <View style={[props.style, style.jackPotContainer]}>
            <JackPotShower style={{flex: 1}} marketList={marketList} selectedIndex={selectedIndex}/>
            <JackPotHandler style={{width: "15%", marginLeft: 15}} 
                onPress={() => {setSelectedIndex([randomPicker(marketList), randomPicker(marketList), randomPicker(marketList)])} }
            />
        </View>
    )
}

function randomPicker(marketList) {
    return Math.floor(Math.random() * marketList.length);
}

function JackPotShower(props) {
    return(
        <View style={[props.style, { backgroundColor: "#FFFFFF", borderRadius: 8 }]}>
            <View style={{flex: 1}}></View>
            <View style={[{flex: 2.5}, style.jackPotRollerContainer]}>
                <JackPotRoller marketList={props.marketList} selectedIndex={props.selectedIndex[0]}></JackPotRoller>
                <JackPotRoller marketList={props.marketList} selectedIndex={props.selectedIndex[1]}></JackPotRoller>
                <JackPotRoller marketList={props.marketList} selectedIndex={props.selectedIndex[2]}></JackPotRoller>
            </View>
            <View style={[{ flex: 1 }, style.jackPotTextContainer]}>
                <Text style={[style.kbFont, style.smallText, {color: "#558BDC"}]}>터치</Text>
                <Text style={[style.kbFont, style.smallText, {color: "#3E3E3E"}]}>해서 메뉴 보러 가기</Text>
            </View>
        </View>
    )
}

function JackPotRoller(props) {
    let beforeSelected = "주변에 음식점이 없어요...";
    let selected = "주변에 음식점이 없어요...";
    let afterSelected = "주변에 음식점이 없어요...";

    // index 에러 처리
    if(props.marketList.length != 0) {
        // 갯수가 0 이면 못함..
        selected = props.marketList[props.selectedIndex];
        if(props.selectedIndex == props.marketList.length - 1) {
            // 맨 끝 index인 경우,
            beforeSelected = props.marketList[props.selectedIndex - 1];
            afterSelected = props.marketList[0];
        }
        else if(props.selectedIndex == 0) {
            // 첫 index인 경우
            beforeSelected = props.marketList[props.marketList.length - 1];
            afterSelected = props.marketList[props.selectedIndex + 1];
        }
        else {
            beforeSelected = props.marketList[props.selectedIndex - 1];
            afterSelected = props.marketList[props.selectedIndex + 1];
        }
    }

    return(
        <View style={[props.style, style.jackPotRollerMenuContainer]}>
            <JackPotMenu style={{top: -30}} kinds={true} text={beforeSelected}></JackPotMenu>
            <JackPotMenu style={{top: 25}} kinds={false} text={selected}></JackPotMenu>
            <JackPotMenu style={{top: 80}} kinds={true} text={afterSelected}></JackPotMenu>
        </View>
    )
}

function JackPotMenu(props) {
    if(props.kinds) {
        // If kinds true, setting orange mode.
        return(
            <TouchableOpacity style={[props.style, style.centerAlign, style.jackPotRollerMenu, { backgroundColor: "#FFA824" }]}>
                <Text style={[style.middleText, style.kbFont, { margin: 7, color: "#FFFFFF" }]}>{props.text}</Text>
            </TouchableOpacity>
        )
    }
    else {
        // TODO: borderWidth 를 shadow로 바꿔야함.
        return(
            <TouchableOpacity style={[props.style, style.centerAlign, style.jackPotRollerMenu, { backgroundColor: "#FFFFFF", borderWidth: 1 }]}>
                <Text style={[style.middleText, style.kbFont, { margin: 7, color: "#FFA824" }]}>{props.text}</Text>
            </TouchableOpacity>
        )
    }
}

function JackPotHandler(props) {
    return(
        <View style={[props.style, style.jackPotHandllerContainer]}>
            <TouchableOpacity 
                onPress={() => { props.onPress() }}
            >
                <Image style={{width: 36, height: 113, resizeMode: 'contain'}} source={require('./asset/ReRoll.png')}/>
            </TouchableOpacity>
            <Text style={[style.kbFont, style.smallText, {color: "#3E3E3E"}]}> 다시 돌려!! </Text>
        </View>
    )
}

function AdView(props) {
    return(
        <View style={[props.style, style.centerAlign, { marginTop: 10, marginBottom: 10 }]}>
            <Image source={require('./asset/advertisement.png')} style={{flex:1, resizeMode: 'cover'}}/>
        </View>
    )
}

function Footer(props) {
    return(
        <View style={[props.style, {flexDirection: "row", marginBottom: 20, alignItems:'flex-end', justifyContent: 'flex-end'}]}>
            <Text style={[style.kbFont, style.largeText, {color: "#3E3E3E"}]}>뭐 먹지?</Text>
            <Text style={[style.kbFont, style.smallText, {marginLeft: 10 , color: "#3E3E3E"}]}>Made By Vintz</Text>
        </View>
    )
}

function App(props){
    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={[{flex: 1, backgroundColor: "#F8F8F8"}, style.marginSide]}>
                <WhereView style={{flex: 1}}></WhereView>
                <JackPotSelector style={{flex: 1}}></JackPotSelector>
                <AdView style={{flex: 1.5}}></AdView>
                <Footer style={{flex: 0.2}}></Footer>
            </View>
        </SafeAreaView> 
    );
}

export default App;
