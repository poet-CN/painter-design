import React, { Component } from 'react';

import Profile4Section1 from '@/assets/profile_detail/coat-rack/section1.jpg';
import Profile4Section2 from '@/assets/profile_detail/coat-rack/section2.jpg';
import Profile4Section3 from '@/assets/profile_detail/coat-rack/section3.jpg';
import Profile4Section4 from '@/assets/profile_detail/coat-rack/section4.jpg';
import Profile4Section5 from '@/assets/profile_detail/coat-rack/section5.jpg';

class ProfileDetail4 extends Component<{}, {}>{
    render() {
        return (
            <div className="profile_detail_wrapper">
                <img src={Profile4Section1} alt="加载失败"/>
                <img src={Profile4Section2} alt="加载失败"/>
                <img src={Profile4Section3} alt="加载失败"/>
                <img src={Profile4Section4} alt="加载失败"/>
                <img src={Profile4Section5} alt="加载失败"/>
            </div>
        );
    }
}

export default ProfileDetail4;
