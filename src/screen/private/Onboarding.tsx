import React, { useRef, useState, useEffect } from 'react'
import { View, Text, StatusBar, SafeAreaView, TouchableOpacity, FlatList, ImageBackground, Dimensions, useWindowDimensions } from 'react-native'
// import { COLORS, SIZES } from '../constants/index'
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import { COLORS } from '../../styles';

const data = [
    {
        _id: '1',
        title: 'Find the best doctors in your vicinity',
        description:
            'With the help of your intelligent algorithms, now locate the best doctors around your vicinity at total ease.',
        img: 'https://img.freepik.com/premium-vector/professional-photographer-with-camera_225067-106.jpg?w=740',
    },
    {
        _id: '2',
        title: 'Schedule appointments with exports doctors',
        description: 'Find experienced specialist doctors with expert rating and review and book your appointments hassle-free',
        img: 'https://img.freepik.com/premium-vector/people-pet-illustration_93083-523.jpg?w=740           ',
    },
    {
        _id: '3',
        title: 'Book face-to-face appointments',
        description: 'Cant go the hospital? Book video call appointments with doctor within the app ina few minutes.',
        img: 'https://img.freepik.com/premium-vector/touch-your-face-man-using-face-mask-outdoor-avoid-touching-your-face-coronavirus-covid19-prevention_24877-68754.jpg?w=740',
    },
]

const Onboarding = () => {

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
            // animated: true,
            index: currentPage + 1,
        });
    };

    const handleBack = () => {
        if (currentPage == 0) return;
        flatlistRef.current?.scrollToIndex({
            // animated: true,
            index: currentPage - 1,
        });
    };

    const handleSkipToEnd = () => {
        flatlistRef.current?.scrollToIndex({
            // animated: true,
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
                                            ? '#881337'
                                            : '#ffff' + '20',
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
                                    backgroundColor: COLORS.PRIMARY
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
                                paddingHorizontal: 20
                                ,
                                height: 60,
                                borderRadius: 30,
                                backgroundColor: COLORS.PRIMARY,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
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
                        style={{ width: 335, height: 335 }}
                    />
                </View>
                <View style={{ paddingHorizontal: 20, marginVertical: 20 }}>
                    <Text style={{ fontSize: 30, textAlign: 'center', fontWeight: 'bold' }}>
                        {item.title}
                    </Text>
                    <Text style={{
                        fontSize: 18,
                        opacity: 0.4,
                        textAlign: 'center',
                        marginTop: 15,
                        lineHeight: 28
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
            backgroundColor: COLORS.PRIMARY,
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
