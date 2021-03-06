import React, { Component } from 'react';

import Profile1Section1 from '@/assets/profile_detail/game-city/section1.jpg';
import Profile1Section2 from '@/assets/profile_detail/game-city/section2.jpg';
import Profile1Section3 from '@/assets/profile_detail/game-city/section3.jpg';
import Profile1Section4 from '@/assets/profile_detail/game-city/section4.jpg';
import Profile1Section5 from '@/assets/profile_detail/game-city/section5.jpg';
import Profile1Section6 from '@/assets/profile_detail/game-city/section6.jpg';
import Profile1Section7 from '@/assets/profile_detail/game-city/section7.jpg';
import Profile1Section8 from '@/assets/profile_detail/game-city/section8.jpg';

class ProfileDetail1 extends Component<{}, {}> {
    render() {
        return (
            <div className="profile_detail_wrapper">
                <img src={Profile1Section1} alt="加载失败"/>
                <img src={Profile1Section2} alt="加载失败"/>
                <img src={Profile1Section3} alt="加载失败"/>
                <img src={Profile1Section4} alt="加载失败"/>
                <img src={Profile1Section5} alt="加载失败"/>
                <img src={Profile1Section6} alt="加载失败"/>
                <img src={Profile1Section7} alt="加载失败"/>
                <img src={Profile1Section8} alt="加载失败"/>
            </div>
        );
    }
}

export default ProfileDetail1;
