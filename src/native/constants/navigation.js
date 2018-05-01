
export default {
  navbarProps: {
    navigationBarStyle: { backgroundColor: 'rgba(252,200,0,1.0)' },
    titleStyle: {
      alignSelf: 'center',
      letterSpacing: 2,
      color: 'rgba(255,255,255,1)',
    },
  },
  topNavbarProps: {
    navigationBarTitleImage: require('../../images/logo.png'),
    navigationBarTitleImageStyle: {
      width: '60%',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    rightButtonTextStyle: {
      color: 'rgba(0,0,0,1)',
      fontWeight: 'bold',
      fontSize: 13,
      marginRight: 10,
    },
  },
  tabProps: {
    activeTintColor: 'rgba(0,0,0,1.0)',
    inactiveTintColor: 'rgba(146,146,146,1.0)',
    swipeEnabled: false,
    activeBackgroundColor: 'rgba(247,247,247,0.1)',
    inactiveBackgroundColor: 'rgba(247,247,247,1.0)',
    tabBarStyle: { backgroundColor: 'rgba(247,247,247,1.0)' },
  },

  icons: {
    size: 25,
    style: { color: 'black' },
  },
};
