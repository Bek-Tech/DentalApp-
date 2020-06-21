import React, { useState, useRef, useEffect } from 'react'
import { Text, View, Animated, TouchableOpacity, Dimensions, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import styled from 'styled-components/native'
import { TextInput } from 'react-native-gesture-handler';
import { LineChart } from "react-native-chart-kit";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Entypo, FontAwesome5, MaterialIcons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;






const RootContainer = ({ children, title, addButton, newDeliveryButton }) => {

    const [handleScroll, setHandleScroll] = useState(false)

    // const fadeAnimIn = useRef(new Animated.Value(0)).current
    const AnimationY = new Animated.Value(0)
    const resizeAnim = useRef(new Animated.Value(0)).current
    const animOpacity = useRef(new Animated.Value(0)).current
    const resizeHeader = useRef(new Animated.Value(0)).current
    const resizeRadius = useRef(new Animated.Value(0)).current
    const resizeAddButton = useRef(new Animated.Value(0)).current
    const topAddButton = useRef(new Animated.Value(0)).current
    const rightAddButton = useRef(new Animated.Value(0)).current
    const resizeButton = useRef(new Animated.Value(0)).current



    const fadeAnimOut = (new Animated.Value(1))

    handleScroll ?
        Animated.add(
            Animated.timing(
                animOpacity,
                {
                    toValue: 1,
                    duration: 1000,
                }
            ).start(),
            Animated.timing(
                resizeAnim,
                {
                    toValue: 0,
                    duration: 500,
                }
            ).start(),
            Animated.timing(
                resizeAddButton,
                {
                    toValue: 100,
                    duration: 1000,
                }
            ).start(),
            Animated.timing(
                rightAddButton,
                {
                    toValue: 0,
                    duration: 1000,
                }
            ).start(),
            Animated.timing(
                topAddButton,
                {
                    toValue: 10,
                    duration: 500,
                }
            ).start(),
            Animated.timing(
                resizeButton,
                {
                    toValue: 40,
                    duration: 1000,
                }
            ).start(),
            Animated.timing(
                resizeRadius,
                {
                    toValue: 0,
                    duration: 500,
                }
            ).start(() => {
                Animated.timing(resizeHeader,
                    {
                        toValue: 0,
                        duration: 500,
                    }
                ).start()
            })

        )
        : Animated.add(
            Animated.timing(
                animOpacity,
                {
                    toValue: 0,
                    duration: 1000,
                }
            ).start(),
            Animated.timing(resizeHeader,
                {
                    toValue: 300,
                    duration: 1000,
                }
            ).start(),
            Animated.timing(resizeRadius,
                {
                    toValue: windowWidth,
                    duration: 1200,
                }
            ).start()
            ,
            Animated.timing(resizeAnim,
                {
                    toValue: 100,
                    duration: 800,
                }
            ).start(),
            Animated.timing(
                resizeAddButton,
                {
                    toValue: 150,
                    duration: 1600,
                }
            ).start(),
            Animated.timing(
                topAddButton,
                {
                    toValue: 200,
                    duration: 500,
                }
            ).start(),
            Animated.timing(
                rightAddButton,
                {
                    toValue: 0,
                    duration: 1000,
                }
            ).start(),
            Animated.timing(
                resizeButton,
                {
                    toValue: 0,
                    duration: 1000,
                }
            ).start(),
            Animated.timing(
                resizeRadius,
                {
                    toValue: windowHeight,
                    duration: 500,
                }
            ).start()
        )

    const fadeOutTrigger = () => {
        Animated.timing(
            fadeAnimOut,
            {
                toValue: 0,
                duration: 1000,
            }
        ).start()
    }

    const fadeInTrigger = () => {
        Animated.timing(
            fadeAnimIn,
            {
                toValue: 1,
                duration: 1000,
            }
        ).start()
    }

    const addButtonRight = AnimationY.interpolate({
        inputRange: [0, 50, 50000],
        outputRange: [50, 3, 3]
    })




    const addButtonTop = AnimationY.interpolate({
        inputRange: [30, 150, 50000],
        outputRange: [150, 17, 17]
    })

    const scrollTextSize = AnimationY.interpolate({
        inputRange: [0, 100, 50000],
        outputRange: [60, 30, 30],
        extrapolate: 'clamp'
    })

    const scrollTextDivWidth = AnimationY.interpolate({
        inputRange: [0, 100, 50000],
        outputRange: [windowWidth, (windowWidth / 3), (windowWidth / 3)]
    })
    const scrollHeaderButtonsDivWidth = AnimationY.interpolate({
        inputRange: [0, 100, 50000],
        outputRange: [0, 2 * (windowWidth / 4), 2 * (windowWidth / 4),]
    })

    const scrollOvalHeaderHeight = AnimationY.interpolate({
        inputRange: [0, 50, 300, 20000],
        outputRange: [300, 300, 0, 0]
    })

    const scrollHeaderRadius = AnimationY.interpolate({
        inputRange: [0, 200, 90000],
        outputRange: [windowWidth, 0, 0]
    })

    const scrollHeaderContainerHeight = AnimationY.interpolate({
        inputRange: [0, 150, 10000],
        outputRange: [100, 60, 60]
    })

    const scrollButtonSize = AnimationY.interpolate({
        inputRange: [0, 40, 150, 500000],
        outputRange: [60, 60, 0, 0]
    })
    const scrollButtonSizeReverse = AnimationY.interpolate({
        inputRange: [0, 100, 200, 50000],
        outputRange: [0, 0, 40, 40]
    })




    // useEffect(() => {
    //     fadeInTrigger()
    // }, [])



    // const [chart, setChart] = useState(false)




    return (
        <SafeAreaView
            style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}
        >

            <BodyContainer>
                <ImageBackground source={require("../assets/background.jpg")}
                    style={{
                        flex: 1,
                        resizeMode: "cover",
                        justifyContent: "center"
                    }}>





                    {/* __________________________________________ */}
                    {/* <View style={styles.ovalChild}>
                        <Animated.Text style={{
                            color: "black",
                            fontSize: scrollTextSize,
                            justifyContent: "center",
                            alignItems: "center"
                        }}>{title}</Animated.Text>
                        <Animated.View
                            style={{
                                ...styles.AnimatedButtonDiv,
                                height: scrollButtonSizeReverse,
                                width: scrollButtonSizeReverse,
                                opacity: fadeAnimIn,
                            }}
                        >
                           
                        </Animated.View>
                    </View>

                </View> */}

                    {/* _______________ScrollView___________________________________________________ */}

                    <Animated.ScrollView
                        style={{
                            flex: 1,
                            paddingTop: 300,
                            paddingBottom: 100
                        }}
                        scrollEventThrottle={5}

                        onScroll={Animated.event(
                            [{
                                nativeEvent: {
                                    contentOffset: {
                                        y: AnimationY
                                    }
                                }
                            }], {
                            listener: (event) => {
                                event.nativeEvent.contentOffset.y > 200 ?
                                    handleScroll ? null : setHandleScroll(true) :
                                    handleScroll ? setHandleScroll(false) : null
                            }
                        })
                        }
                    // onMomentumScrollBegin={() => resizeAnimTrigger()}
                    // onMomentumScrollEnd={() => fadeInTrigger()}
                    // onScrollToTop={() => resizeAnimTrigger()}
                    >




                        <View style={{
                            height: 20,
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center"
                        }} >


                            {/* {chart ? <View>
                                <LineChart
                                    data={{
                                        labels: ["January", "February", "March", "April", "May", "June", "july", " august", "september", "oktober"],
                                        datasets: [
                                            {
                                                data: [
                                                    Math.random() * 100, 44, 55, 22, 4, 64, 73, 23, 44, 10
                                                ]
                                            }
                                        ]
                                    }}
                                    width={windowWidth - 20}
                                    height={windowHeight / 7}
                                    yAxisLabel=""
                                    yAxisSuffix=""
                                    yAxisInterval={1} // optional, defaults to 1
                                    chartConfig={{
                                        backgroundColor: "black",
                                        backgroundGradientFrom: "grey",
                                        backgroundGradientTo: "black",
                                        decimalPlaces: 2, // optional, defaults to 2dp
                                        color: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
                                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                        style: {
                                            borderRadius: 16
                                        },
                                        propsForDots: {
                                            r: "3",
                                            strokeWidth: "2",
                                            stroke: "white"
                                        }
                                    }}
                                    bezier
                                    style={{
                                        marginVertical: 8,
                                        borderRadius: 16
                                    }}
                                />
                            </View> : null} */}

                        </View>
                        <ListContainer>
                            {children}
                        </ListContainer>
                        <View style={{ height: 200 }}></View>

                    </Animated.ScrollView>

                    {/* ___________________________________________oval header____________________________________________________________ */}

                    <Animated.View style={{
                        ...styles.headerContainerStyle,
                        height: resizeHeader
                    }} >
                        <Animated.View style={{ height: scrollOvalHeaderHeight }}></Animated.View>
                        <Animated.View style={{
                            ...styles.ovalHeaderContainer,
                            borderRadius: scrollHeaderRadius,

                        }} >
                            <View style={styles.headerItem}>

                                <Animated.Text style={{
                                    color: "white",
                                    fontSize: scrollTextSize,
                                    fontWeight: "bold"
                                }}>{title}</Animated.Text>
                                {/* __________________________________________________________________ search  */}
                                <View style={{
                                    width: windowWidth / 1.2,
                                    height: 60,
                                    marginLeft: 10,
                                    marginRight: 10,
                                    backgroundColor: "black",
                                    opacity: 0.4,
                                    borderRadius: 30,
                                    justifyContent: 'center',
                                    alignItems: "center"
                                }}>
                                    <TextInput placeholder="search" style={{
                                        width: windowWidth / 1.3,
                                        height: 50,
                                    }} />
                                </View>
                                <OvalHeaderRowDiv>
                                    <Animated.View
                                        style={{
                                            ...styles.AnimatedButtonDiv,
                                            height: scrollButtonSize,
                                            width: scrollButtonSize,
                                            // opacity: fadeAnimIn,
                                        }}
                                    >
                                        <CircleButton>
                                            <Entypo name="arrow-down" size={27} color="green" />
                                        </CircleButton>
                                    </Animated.View>
                                    <Animated.View
                                        style={{
                                            ...styles.AnimatedButtonDiv,
                                            height: scrollButtonSize,
                                            width: scrollButtonSize,
                                            // opacity: fadeAnimIn,
                                        }}
                                    >
                                        <CircleButton>
                                            <Entypo name="arrow-down" size={27} color="green" />
                                        </CircleButton>
                                    </Animated.View>
                                    <Animated.View
                                        style={{
                                            ...styles.AnimatedButtonDiv,
                                            height: scrollButtonSize,
                                            width: scrollButtonSize,
                                            // opacity: fadeAnimIn,
                                        }}
                                    >
                                        <CircleButton onPress={newDeliveryButton}>
                                            <MaterialCommunityIcons name="truck-fast" size={30} color="white" />
                                        </CircleButton>
                                    </Animated.View>
                                </OvalHeaderRowDiv>

                            </View>
                        </Animated.View>
                    </Animated.View>




                    {/* __________________________________header________________________________________________________ */}
                    <Animated.View style={{
                        ...styles.animatedHeader,
                        height: scrollHeaderContainerHeight,
                        backgroundColor: "black",
                        opacity: animOpacity
                    }}>
                        <HeaderRowDiv>
                            <Animated.View style={{
                                width: scrollTextDivWidth,
                                justifyContent: 'flex-end',
                                alignItems: "center"
                            }}>
                                <Animated.Text style={{
                                    color: "white",
                                    fontSize: scrollTextSize,
                                    fontWeight: "bold"
                                }}>{title}</Animated.Text>
                            </Animated.View>
                            <Animated.View style={{
                                width: scrollHeaderButtonsDivWidth,
                                flexDirection: 'row',

                            }}>
                                <HeaderRowDiv>
                                    <Animated.View
                                        style={{
                                            ...styles.AnimatedButtonDiv,
                                            marginRight: 10,
                                            width: resizeButton,
                                            height: resizeButton,

                                        }}
                                    >

                                        <CircleButton>
                                            <Entypo name="arrow-down" size={27} color="green" />
                                        </CircleButton>
                                    </Animated.View>
                                    <Animated.View
                                        style={{
                                            ...styles.AnimatedButtonDiv,
                                            width: resizeButton,
                                            height: resizeButton,
                                            // opacity: fadeAnimIn,
                                        }}
                                    >
                                        <CircleButton onPress={newDeliveryButton}>
                                            <MaterialCommunityIcons name="truck-fast" size={25} color="white" />
                                        </CircleButton>
                                    </Animated.View>
                                </HeaderRowDiv>
                            </Animated.View>

                        </HeaderRowDiv>
                    </Animated.View>

                    {/* _______________________add button______________________________________________________ */}
                    <Animated.View style={{
                        ...styles.addButtonDiv,
                        width: resizeAddButton,
                        height: resizeAddButton,
                        right: rightAddButton,
                        top: topAddButton
                    }}>
                        <CircleAddButton onPress={addButton}>
                            <Ionicons name="ios-add" size={70} color="black" />
                        </CircleAddButton>
                    </Animated.View>
                </ImageBackground>
            </BodyContainer>
        </SafeAreaView>
    )
}



export default RootContainer

const styles = StyleSheet.create({
    addButtonDiv: {
        overflow: "hidden",
        borderWidth: 2,
        borderColor: "black",
        position: "absolute",

    },
    animatedHeader: {
        position: "absolute",
        top: 0,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: 'black'
    },
    headerContainerStyle: {
        alignSelf: 'center',
        overflow: 'hidden',
        position: "absolute",
        top: 0,
        width: windowWidth,
        // borderColor: "blue",
        // borderWidth: 2,
    },
    ovalHeaderContainer: {
        height: windowHeight * 2,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOpacity: 0.5,
        shadowRadius: 6.3,
        elevation: 10,
        justifyContent: "center",
        alignItems: "baseline",
        // borderColor: "red",
        // borderWidth: 2,
        position: 'absolute',
        bottom: 0,
        overflow: 'hidden',
        backgroundColor: "blue",
        width: windowWidth * 2,
        marginLeft: -(windowWidth / 2),
    },
    headerItem: {
        height: windowWidth / 1.3,
        width: windowWidth,
        position: 'absolute',
        bottom: 0,
        marginLeft: windowWidth / 2,
        backgroundColor: 'black',
        justifyContent: "center",
        alignItems: "center",
    },
    AnimatedButtonDiv: {
        overflow: "hidden",
        justifyContent: "center",
        justifyContent: "center",

        // borderColor: "black",
        // borderWidth: 2
    },

})


const ListContainer = styled.View`
             flex: 1 
            backgroundColor: white
            
             margin: 5px
             margin-bottom: 60px
             padding: 15px   0px
               shadow-color: #000

            shadow-opacity: 0.5
            shadow-radius: 6.3px
            elevation: 10
`

const BodyContainer = styled.View`
flex: 1
width: 100%

`
const CircleButton = styled.TouchableOpacity`
flex: 1
align-items:center
justify-content: center
border-radius: 50px
background: rgba(43, 43, 43, 0.8)
margin : 0px
shadow-color: #000
${'' /* shadow-offset: {width: 0, height: 2} */}
 shadow-opacity: 0.5
shadow-radius: 6.3px
 elevation: 10
 `
const HeaderRowDiv = styled.View`
            width: 100%
 ${'' /* borderColor: black
   borderWidth: 2px */}
            padding-right: 50px
            flex-direction: row
            justify-content: flex-end
            align-items: center
            
            `
const CircleAddButton = styled.TouchableOpacity`
flex:1
align-items:center
justify-content: center
margin: 15px
border-radius: 100px
borderWidth:2px
borderColor: black
background:white
shadow-color: #000
${'' /* shadow-offset: {width: 0, height: 2} */}
 shadow-opacity: 0.5
shadow-radius: 6.3px
 elevation: 10
 `
const OvalHeaderRowDiv = styled.View`
            width: ${windowWidth - 120}px
            marginRight: 120px
 ${'' /* borderColor: black
   borderWidth: 2px */}
            ${'' /* padding: 5px */}
            flex-direction: row
            justify-content: space-evenly
            align-items: center
            
            `


const RowDiv = styled.View`
            marginTop: 30px
            width: 100%
 ${'' /* borderColor: black
   borderWidth: 2px */}
            ${'' /* padding: 5px */}
            flex-direction: row
            justify-content: space-evenly
            align-items: center
            
            `

















