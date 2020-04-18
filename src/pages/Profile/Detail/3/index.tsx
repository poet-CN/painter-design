import React, { Component } from 'react';

import Profile3Section1 from '@/assets/profile_detail/3/section1.jpg';
import Profile3Section2 from '@/assets/profile_detail/3/section2.jpg';
import Profile3Section3 from '@/assets/profile_detail/3/section3.jpg';
import Profile3Section4 from '@/assets/profile_detail/3/section4.jpg';
import Profile3Section5 from '@/assets/profile_detail/3/section5.jpg';

class ProfileDetail3 extends Component<{}, {}>{
    render() {
        return (
            <div className="profile_detail_wrapper">
                <img src={Profile3Section1} alt="加载失败"/>
                <img src={Profile3Section2} alt="加载失败"/>
                <img src={Profile3Section3} alt="加载失败"/>
                <img src={Profile3Section4} alt="加载失败"/>
                <img src={Profile3Section5} alt="加载失败"/>
            </div>
        );
    }
}

export default ProfileDetail3;
