import React, { FC, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../res/colors';



let ItemSelectionListScreen = (props:{onPressCheckout: Function}) => {

    let [items, setItems] = useState([
        {
            name: "Cough Syrup",
            category: "Medicine",
            quantity: 10,
            price: 10
        },
        {
            name: "Bandaid",
            category: "First aid supplies",
            quantity: 10,
            price: 10
        },
        {
            name: "Gauze",
            category: "First aid supplies",
            quantity: 10,
            price: 10
        },
        {
            name: "Sleeping Pills",
            category: "Medicine",
            quantity: 10,
            price: 10
        },
        {
            name: "Elixer",
            category: "Medicine",
            quantity: 0,
            price: 10
        },
    ])

    let [cartItems, setCartItems] = useState<Array<any>>([])

    let [outOfStockModalOpen, setOutOfStockModalOpen] = useState(false)
    let [addToCartModalOpen, setAddToCartModalOpen] = useState(false);

    let addItemToCart = (itemIndex: number) => {
        if (items[itemIndex].quantity > 0) {
            let temp = [...cartItems, { name: items[itemIndex].name, category: items[itemIndex].category, price: items[itemIndex].price }];
            setCartItems([...temp])
            items[itemIndex].quantity -= 1;
            setAddToCartModalOpen(true)
        } else {
            setOutOfStockModalOpen(true)
        }
    }

    let totalPrice = () => {
        let total = 0;
        if(cartItems.length>0){
            cartItems.forEach(item=> {
                total = total + item.price;
            })
        }
        return total
    }

    return (
        <View style={styles.page_container}>
            {/* <View>
                <Text>Select an</Text>
            </View> */}
            <View
                style={{
                    padding: 20,
                    flex: 1,
                    paddingRight: 10
                }}
            >

                <FlatList
                    ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                    data={items}
                    renderItem={({ item, index }) => <ItemCard name={item.name} category={item.category} onPress={() => addItemToCart(index)} />}
                    keyExtractor={(item, index) => `item-${index}`}
                />
            </View>
            <View style={{
                padding: 20,
                paddingLeft: 10,
                flex: 2
            }}>
                <View style={{ height: '100%' }}>
                    <View style={{ width: '100%', height: 45, backgroundColor: "#343a40", borderTopLeftRadius: 8, borderTopRightRadius: 8, padding: 10 }}>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: "500",
                            color: "#fff"
                        }}>Your Items</Text>
                    </View>

                    <View style={{
                        width: '100%',
                        height: 280,
                        borderWidth: 2,
                        borderBottomLeftRadius: 8,
                        borderBottomRightRadius: 8,
                        borderColor: '#e5e5e5',
                        backgroundColor: "#fff",
                        display: 'flex'
                    }}>
                        <View style={{
                            flex: 3,
                            padding: 10
                        }}>
                            <FlatList
                                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                                data={cartItems}
                                renderItem={({ item, index }) => <CartListItem itemName={item.name}/>}
                                keyExtractor={(item, index) => `cart-item-${index}`}
                            />
                            {/* <CartListItem /> */}
                        </View>
                        <View style={{
                            flex: 1,
                            marginLeft: 20,
                            marginRight: 20,
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexDirection: 'row'
                        }}>

                            <Text style={{
                                fontSize: 18,
                                fontWeight: '500'
                            }}>
                                Total: 
                                <Text style={{
                                    color: COLORS.green1
                                }}>{`  $${totalPrice()}`}</Text>
                            </Text>
                            <TouchableOpacity
                                onPress={()=>props.onPressCheckout()}
                                disabled={cartItems.length < 0}
                                style={{
                                    height: 50,
                                    width: 200,
                                    backgroundColor: cartItems.length > 0 ? COLORS.green1 : '#e5e5e5',
                                    borderRadius: 8,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 18,
                                        fontWeight: '500',
                                        color: '#fff'
                                    }}
                                >Checkout</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

            {outOfStockModalOpen && <Modal>
                <InfoModalCard
                    headerText={"Notifcation"}
                    bodyText={"Selected Item is out of stock!"}
                    button1Text={"Close"}
                    onPress={() => setOutOfStockModalOpen(!outOfStockModalOpen)}
                />
            </Modal>}
            {addToCartModalOpen && <Modal>
                <InfoModalCard
                    headerText={"Notifcation"}
                    bodyText={"Selected Item was added to your card!"}
                    button1Text={"Close"}
                    onPress={() => setAddToCartModalOpen(!addToCartModalOpen)}
                />
            </Modal>}
        </View>
    )
}

export let CartListItem = (props: {itemName: string}) => {
    return (
        <View style={{ padding: 10, width: '100%', borderColor: '#e5e5e5', borderWidth: 2, borderRadius: 8 }}>
            <Text>{props.itemName}</Text>
        </View>
    )
}

let ItemCard = (props: { name: string, category: string, onPress: Function }) => {
    return (
        <TouchableOpacity onPress={() => props.onPress()} style={styles.item_card}>
            <Text style={styles.item_card_name}>{props.name}</Text>
            <Text style={styles.item_card_category}>{props.category}</Text>
        </TouchableOpacity>
    )
}

let Modal: FC = (props) => {
    return (
        <View style={styles.modal_background}>
            {props.children}
        </View>
    )
}

let InfoModalCard = (props: { headerText: string, bodyText: string, button1Text: string, onPress: Function }) => {
    return (
        <View style={styles.moda_card_container}>
            <View style={styles.modal_card_header_container}>
                <Text style={styles.moda_card_header_text}>{props.headerText}</Text>
            </View>
            <View style={styles.modal_card_body_container}>
                <Text style={styles.modal_card_body_text}>{props.bodyText}</Text>
            </View>
            <View style={styles.modal_card_button_container}>
                {/* <TouchableOpacity
                    style={{
                        height: 50,
                        width: 170,
                        borderColor: COLORS.green1,
                        borderWidth: 2,
                        borderRadius: 8,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: '500',
                            color: COLORS.green1
                        }}
                    >Checkout</Text>
                </TouchableOpacity> */}

                <TouchableOpacity
                    onPress={() => props.onPress()}
                    style={{
                        height: 50,
                        width: 170,
                        backgroundColor: COLORS.green1,
                        borderRadius: 8,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: '500',
                            color: '#fff'
                        }}
                    >{props.button1Text}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

let styles = StyleSheet.create({
    page_container: {
        backgroundColor: "#f8f9fa",
        height: '100%',
        display: 'flex',
        flexDirection: 'row'
    },

    item_list_component: {
        borderWidth: 2,
        borderRadius: 8,
        height: '100%',
        width: '100%',
        borderColor: '#e5e5e5',
        backgroundColor: "#fff"
    },

    item_card: {
        borderWidth: 2,
        borderColor: "#e5e5e5",
        width: '100%',
        height: 80,
        borderRadius: 8,
        padding: 10,
        backgroundColor: "#fff"
    },
    item_card_name: {
        fontSize: 18,
        fontWeight: "400",
        color: "#000"
    },
    item_card_category: {

    },

    //Modal code
    modal_background: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    moda_card_container: {
        height: 250,
        width: 400,
        backgroundColor: '#fff',
        borderRadius: 8,
        display: 'flex',
        padding: 20
    },
    modal_card_header_container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal_card_body_container: {
        flex: 3,
        display: 'flex',
        alignItems: 'center'
    },
    modal_card_button_container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    moda_card_header_text: {
        fontSize: 18,
        fontWeight: '500',
        color: '#000'
    },
    modal_card_body_text: {
        fontSize: 18,
        fontWeight: '300',
        // color: '#000'
    }

})

export default ItemSelectionListScreen;