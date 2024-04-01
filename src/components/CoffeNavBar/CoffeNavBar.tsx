import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {Container} from './styles';
import CoffeButton from './CoffeButtonNav/CoffeButtonNav';
import images from '../../constants/images';
import {Colors} from '../../constants/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

interface ICoffeNavBar {
  returnCoffeType: (val: string) => void;
}

const CoffeNavBar = ({returnCoffeType}: ICoffeNavBar) => {
  const [toggleColor, setToggleColor] = useState<string>('Cappuccino');

  const toggleColorFunction = (coffe: string) => {
    setToggleColor(coffe);
    returnCoffeType(coffe);
  };

  return (
    <Container>
      <CoffeButton
        title="Cappuccino"
        icon={
          <Image
            source={images.iconCappuccino}
            style={
              toggleColor === 'Cappuccino'
                ? {tintColor: Colors.white}
                : {tintColor: Colors.black}
            }
          />
        }
        onpress={() => toggleColorFunction('Cappuccino')}
        typeCoffe={toggleColor}
      />
      <CoffeButton
        title="Iced tea"
        onpress={() => toggleColorFunction('Iced tea')}
        typeCoffe={toggleColor}
        icon={
          <Entypo
            name="cup"
            color={toggleColor === 'Iced tea' ? Colors.white : Colors.black}
            size={22}
          />
        }
      />
      <CoffeButton
        title="Expresso"
        onpress={() => toggleColorFunction('Expresso')}
        typeCoffe={toggleColor}
        icon={
          <Feather
            name="coffee"
            color={toggleColor === 'Expresso' ? Colors.white : Colors.black}
            size={22}
          />
        }
      />
    </Container>
  );
};

export default CoffeNavBar;
