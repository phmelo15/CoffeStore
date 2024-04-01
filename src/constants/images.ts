export type ImageKey =
  | 'onBoarding'
  | 'profile'
  | 'iconPlus'
  | 'iconCappuccino'
  | 'iconLocation'
  | 'iconBell'
  | 'lupaIcon'
  | 'iconFilter'
  | 'iconCappuccino2'
  | 'Cappuccino'
  | 'coffeMilk'
  | 'iceTea'
  | 'Expresso'
  | 'MyPhoto'
  | 'cappuccinoBackground';

export type ImagesType = {
  [key in ImageKey]: any;
};

const images: ImagesType = {
  onBoarding: require('../assets/Onboarding.png'),
  profile: require('../assets/Profile.png'),
  iconPlus: require('../assets/Icons/plus.png'),
  iconCappuccino: require('../assets/Icons/Cappuccino.png'),
  iconLocation: require('../assets/Icons/location.png'),
  iconBell: require('../assets/Icons/VectorBell.png'),
  lupaIcon: require('../assets/Icons/lupaIcon.png'),
  iconFilter: require('../assets/Icons/iconFilter.png'),
  iconCappuccino2: require('../assets/Icons/Cappuccino2.png'),
  Cappuccino: require('../assets/cappuccino1.png'),
  coffeMilk: require('../assets/coffeMilk.png'),
  iceTea: require('../assets/iceTea.jpg'),
  Expresso: require('../assets/espresso.jpg'),
  cappuccinoBackground: require('../assets/cappuccinoBackground.png'),
  MyPhoto: require('../assets/MyPhoto.jpeg'),
};

export default images;
