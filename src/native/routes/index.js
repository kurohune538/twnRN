import React from 'react';
import { Scene, Tabs } from 'react-native-router-flux';
// import { Icon } from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import DefaultProps from '../constants/navigation';
import AppConfig from '../../constants/config';

import SearchComponent from '../components/pages/Search';
import FindComponent from '../components/pages/Find';
import MylistComponent from '../components/pages/Mylist';
import JoboobComponent from '../components/pages/Joboob';
import OthersComponent from '../components/pages/Others';

const Index = (
  <Scene>
    <Scene hideNavBar>
      <Tabs
        key="tabbar"
        swipeEnabled
        type="replace"
        showLabel="true"
        {...DefaultProps.tabProps}
      >
        <Scene
          key="search"
          tabBarLabel="さがす"
          initial="true"
          onRight={() => {}}
          rightTitle="東京都"
          title={AppConfig.appName.toUpperCase()}
          icon={() => <FeatherIcons name="search" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
          {...DefaultProps.topNavbarProps}
          component={SearchComponent}
        />
        <Scene
          key="find"
          tabBarLabel="みつかる"
          title="みつかる"
          icon={() => <EntypoIcon name="heart-outlined" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
          component={FindComponent}
        />
        <Scene
          key="mylist"
          tabBarLabel="マイリスト"
          title="タウン枠子"
          icon={() => <SimpleLineIcon name="emotsmile" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
          component={MylistComponent}
        />
        <Scene
          key="joboob"
          tabBarLabel="ジョブーブ"
          title="ジョブーブ"
          icon={() => <MaterialCommunityIcon name="cow" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
          component={JoboobComponent}
        />
        <Scene
          key="others"
          tabBarLabel="その他"
          title="その他"
          icon={() => <SimpleLineIcon name="options" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
          component={OthersComponent}
        />
      </Tabs>
    </Scene>
  </Scene>
);

export default Index;
