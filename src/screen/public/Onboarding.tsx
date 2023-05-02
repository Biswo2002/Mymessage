import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import React, { useRef, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import {
    useWindowDimensions,
    TouchableOpacity,
    ImageBackground,
    SafeAreaView,
    Dimensions,
    StatusBar,
    FlatList,
    View,
    Text,
} from 'react-native'
import { PublicNavigationProps } from '../../types/AllRoutes';
import { COLORS } from '../../styles';

const data = [
    {
        _id: '1',
        title: 'Find the best doctors in your vicinity',
        description:
            'With the help of your intelligent algorithms, now locate the best doctors around your vicinity at total ease.',
        img: 'https://img.freepik.com/free-vector/strategic-consulting-concept-illustration_114360-9336.jpg?w=740&t=st=1683049609~exp=1683050209~hmac=7a3bd08bde2fc2572594e7da633ea713cfb1a1a1f5fa71cd20790b1c1b636e10',
    },
    {
        _id: '2',
        title: 'Schedule appointments with exports doctors',
        description: 'Find experienced specialist doctors with expert rating and review and book your appointments hassle-free',
        img: 'https://img.freepik.com/free-vector/new-message-concept-landing-page_52683-26980.jpg?w=740&t=st=1683049927~exp=1683050527~hmac=162f2890fbeef772e2da5ebaefc93cd930be5e7b58273fdc58ffd7109118b7be',
    },
    {
        _id: '3',
        title: 'Book face-to-face appointments',
        description: 'Cant go the hospital? Book video call appointments with doctor within the app ina few minutes.',
        img: 'https://img.freepik.com/premium-vector/person-monitoring-chart-flat-illustration-data-analyst_203633-6604.jpg?w=740',
    },
]

const Onboarding = () => {
    const { navigate } = useNavigation<PublicNavigationProps>();
    const flatlistRef = useRef<FlatList>(null);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [viewableItems, setViewableItems] = useState<any>([]);
    const WINDOW_WIDTH = useWindowDimensions();
    const handleViewableItemsChanged = useRef(({ viewableItems }: any) => {
        setViewableItems(viewableItems);
    });
    useEffect(() => {
        if (!viewableItems[0] || currentPage === viewableItems[0].index) return;
        setCurrentPage(viewableItems[0].index);
    }, [viewableItems]);
    const handleNext = () => {
        if (currentPage == data.length - 1) return;

        flatlistRef.current?.scrollToIndex({
            animated: true,
            index: currentPage + 1,
        });
    };

    const handleBack = () => {
        if (currentPage == 0) return;
        flatlistRef.current?.scrollToIndex({
            animated: true,
            index: currentPage - 1,
        });
    };

    const handleSkipToEnd = () => {
        flatlistRef.current?.scrollToIndex({
            animated: true,
            index: data.length - 1,
        });
    };

    const renderTopSection = () => {
        return (
            <SafeAreaView>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 30
                }}>
                    {/* Back button */}
                    <TouchableOpacity
                        onPress={handleBack}
                        style={{
                            padding: 20
                        }}>
                        {/* Back icon */}
                        {/* Hide back button on 1st screen */}
                        <AntDesignIcons name="left" style={{
                            fontSize: 25,
                            color: '#000',
                            opacity: currentPage == 0 ? 0 : 1
                        }} />
                    </TouchableOpacity>

                    {/* Skip button */}
                    {/* Hide Skip button on last screen */}
                    <TouchableOpacity onPress={handleSkipToEnd}>
                        <Text style={{
                            fontSize: 18,
                            color: '#000',
                            opacity: currentPage == data.length - 1 ? 0 : 1
                        }}>Skip</Text>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
        )
    }

    const renderBottomSection = () => {
        return (
            <SafeAreaView>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: 50,
                    paddingVertical: 50
                }}>
                    {/* Pagination */}
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {
                            // No. of dots
                            [...Array(data.length)].map((_, index) => (
                                <View
                                    key={index}
                                    style={{
                                        width: 10,
                                        height: 10,
                                        borderRadius: 5,
                                        backgroundColor: index == currentPage
                                            ? '#4c0519'
                                            : '#6366f1',
                                        marginRight: 8
                                    }} />
                            ))
                        }
                    </View>

                    {/* Next or GetStarted button */}
                    {/* Show or Hide Next button & GetStarted button by screen */}
                    {
                        currentPage != data.length - 1 ? (
                            <TouchableOpacity
                                onPress={handleNext}
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: 60,
                                    height: 60,
                                    borderRadius: 30,
                                    backgroundColor: '#9f1239'
                                }}
                                activeOpacity={0.8}
                            >
                                <AntDesignIcons name="right"
                                    style={{ fontSize: 18, color: COLORS.SECONDARY, opacity: 0.3 }} />
                                <AntDesignIcons
                                    name="right"
                                    style={{ fontSize: 25, color: COLORS.SECONDARY, marginLeft: -15 }}
                                />
                            </TouchableOpacity>
                        ) : (
                            // Get Started Button
                            <TouchableOpacity style={{
                                paddingHorizontal: 20,
                                height: 60,
                                borderRadius: 30,
                                backgroundColor: COLORS.PRIMARY,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                                onPress={() => navigate('Welcome')}
                            >
                                <Text style={{
                                    color: COLORS.SECONDARY,
                                    fontSize: 18,
                                    marginLeft: 2
                                }}>Get Started</Text>
                                <AntDesignIcons name="right"
                                    style={{ fontSize: 18, color: COLORS.SECONDARY, opacity: 0.3, marginLeft: 20 }} />
                                <AntDesignIcons
                                    name="right"
                                    style={{ fontSize: 25, color: COLORS.SECONDARY, marginLeft: -15 }}
                                />
                            </TouchableOpacity>
                        )
                    }

                </View>
            </SafeAreaView>
        )
    }

    const renderFlatlistItem = ({ item }: any) => {
        return (
            <View style={{
                width: Dimensions.get('window').width,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <View style={{
                    alignItems: 'center',
                    marginVertical: 20
                }}>
                    <ImageBackground
                        source={{ uri: item.img }}
                        style={{ width: 420, height: 335 }}
                    />
                </View>
                <View style={{ paddingHorizontal: 20, marginVertical: 20 }}>
                    <Text style={{
                        fontSize: 30,
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: COLORS.PRIMARY
                    }}>
                        {item.title}
                    </Text>
                    <Text style={{
                        fontSize: 18,
                        opacity: 0.4,
                        textAlign: 'center',
                        marginTop: 15,
                        lineHeight: 28,
                        color: '#000'
                    }}>
                        {item.description}
                    </Text>
                </View>

            </View>
        )
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.SECONDARY,
            justifyContent: 'center'
        }}>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.PRIMARY} />

            {/* TOP SECTION - Back & Skip button */}
            {renderTopSection()}

            {/* FLATLIST with pages */}
            <FlatList
                data={data}
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item._id}
                renderItem={renderFlatlistItem}
                ref={flatlistRef}
                onViewableItemsChanged={handleViewableItemsChanged.current}
                viewabilityConfig={{ viewAreaCoveragePercentThreshold: 100 }}
                initialNumToRender={1}
                extraData={Dimensions.get('window').width}
            />

            {/* BOTTOM SECTION - pagination & next or GetStarted button */}
            {renderBottomSection()}

        </View>
    )
}

export default Onboarding
