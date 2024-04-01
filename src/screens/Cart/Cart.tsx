import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import CoffeButton from '../../components/CoffeButton/CoffeButton';
import CoffeCard from '../../components/CoffeCard/CoffeCard';
import {ICoffeInfo} from '../../models/coffeModels';
import CartService from '../../services/CartService/CartService';
import CoffeService from '../../services/CoffeService/CoffeService';
import {useUserState} from '../../store/userState';
import {Container} from './styles';

const Cart = () => {
  const [coffeInfo, setCoffeInfo] = useState<ICoffeInfo[]>([]);
  const {user} = useUserState();

  const getCart = async () => {
    try {
      const response = await CartService.getCart(parseInt(user.id));
      const responseCoffe = response.map((item: any) => {
        return item.coffeId;
      });
      getAllCafes(responseCoffe);
    } catch (error) {
      console.error(error);
    }
  };

  const getAllCafes = async (cart: any) => {
    try {
      const response = await CoffeService.getAllCafes();
      const filtered = response.filter((item: any) => cart.includes(item.id));
      setCoffeInfo(filtered);
    } catch (error) {
      console.error(error);
    }
  };

  const renderItem: ListRenderItem<ICoffeInfo> = ({
    item,
    index,
  }: {
    item: ICoffeInfo;
    index: number;
  }) => {
    return (
      <CoffeCard
        data={item}
        onpress={() => null}
        isFavorite
        updateCoffe={() => {
          // deleteFavorite(item.id);
        }}
      />
    );
  };

  useFocusEffect(
    useCallback(() => {
      getCart();
    }, []),
  );

  return (
    <Container>
      <FlatList
        data={coffeInfo}
        renderItem={renderItem}
        keyExtractor={(item, index) => 'key' + index}
      />
      {coffeInfo.length > 0 && (
        <CoffeButton
          onPress={() => null}
          title="Finalizar compra"
          width="90%"
        />
      )}
    </Container>
  );
};

export default Cart;
