import React, { Component } from 'react';

import Profile9Section1 from '@/assets/profile_detail/pre-examination/section1.jpg';
import Profile9Section2 from '@/assets/profile_detail/pre-examination/section2.jpg';
import Profile9Section3 from '@/assets/profile_detail/pre-examination/section3.jpg';
import Profile9Section4 from '@/assets/profile_detail/pre-examination/section4.jpg';
import Profile9Section5 from '@/assets/profile_detail/pre-examination/section5.jpg';

class ProfileDetail8 extends Component<{}, {}>{
    render() {
        return (
            <div className="profile_detail_wrapper">
                <img src={Profile9Section1} alt="加载失败"/>
                <img src={Profile9Section2} alt="加载失败"/>
                <img src={Profile9Section3} alt="加载失败"/>
                <img src={Profile9Section4} alt="加载失败"/>
                <img src={Profile9Section5} alt="加载失败"/>
            </div>
        );
    }
}

export default ProfileDetail8;
