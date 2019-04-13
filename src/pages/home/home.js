import Taro, {Component } from '@tarojs/cli'
import {View, Text,Image, ScrollView } from '@tarojs/components'
import { Loading } from '@tarojs/redux'
import  { connect } from "@tarojs/redux"
import * as actions from '@actions/home'
import Banner from './banner'


import './home.scss'



@connect(state => state.home, { ...actions, dispatchCartNum })


class Home extends Component {
    config = {
        navigationBarTitleText: '网易严选'
    }

    state = {
        loaded: false,
        loading: false,
        lastItemed: 0,
        hasMore: true
    }

    componentDidMount() {
        //
    }

    render ( ) {
        const {homeInfo, searchCount} = this.props; 
        return (
            <View className='home'>
                <View className='home_search'>
                    <View className='home_search-wrap' onClick=''>
                        <Image className='home_search-img' src={searchIcon}/>
                        <Text className='home_search-txt'>
                            {`搜索商品，共6款好物`}
                        </Text>
                    </View>
                </View>  
                {/**以下为下拉刷新 */}
                <ScrollView
                    scrollY
                    className='home_wrap'
                    onScrollToLower={this.loadRecommend}
                    style={{height: '580Px'}}
                    >
                    <View >
                        <Banner list={homeInfo.focus}/>
                    </View>
                </ScrollView>
            </View>
        )
    }
 
}


export default Home