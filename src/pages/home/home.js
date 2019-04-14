import Taro, {Component } from '@tarojs/taro'
import {View, Text,Image, ScrollView } from '@tarojs/components'
import { Loading } from '@tarojs/redux'
import {connect } from '@tarojs/redux'
import * as actions from '@actions/home'
import Banner from './banner'


import './home.scss'


@connect(state=> state.home, {...actions})

class Home extends Component {
    config = {
        navigationBarTitleText: '我的myTaro'
    }

    state = {
        loaded: false,
        loading: false,
        lastItemed: 0,
        hasMore: true,
        list:[
            {rank:"001",
            img:"https://img.ziroom.com/pic/house_images/g2m2/M00/08/FE/CtgFCFyCNneAErCWAANLVj4Afb463.jpeg_C_240_180_Q100.jpeg"
            }
        ]
    }

    componentDidMount() {
        this.props.dispatchHome().then((res)=>{
            //this.setState({loaded:true})
        })
        this.props.dispatchSearchCount()
    }

    render ( ) {
        const {homeInfo, searchCount } = this.props
        return (
            <View className='home'>
                <View className='home_search'>
                    <View className='home_search-wrap' onClick=''>
                        <Image className='home_search-img' />
                        <Text className='home_search-txt'>
                            {`搜索商品，共${searchCount}款好物`}
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
                        <View>
                             <Banner list = {homeInfo.focus} />
                     
                        </View>
                    


                </ScrollView>
            </View>
        )
    }
 
}


export default Home