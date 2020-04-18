import React, { Component } from 'react';
import { Link } from 'umi';

class NotFound extends Component<{}, {}> {
    render() {
        return (
            <div className="ta_c" style={{ marginTop: '100px' }}>
                <p>您好，此页面不存在，您可以点此<Link to="/">返回首页</Link></p>
            </div>
        );
    }
}

export default NotFound;
