import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
    Route,
    Link
} from 'react-router-dom'
import { Dispatch } from 'redux';
import {login, LoginAction} from '../../redux/actions/login.action'
import { Layout, Menu } from 'antd';
import { UploadOutlined, SoundOutlined, BankOutlined,GlobalOutlined,TransactionOutlined,HeartOutlined ,RocketOutlined,PlusOutlined} from '@ant-design/icons';
import New from '../new/index'
import {LOGIN} from "../../redux/const/const";
import './index.scss'
interface props{
    isTrue:boolean,
    arr: Array<number>,
    array: Array<any>,
    getName: fnc
}
interface state {
    username: string
}
interface fnc {
    (source: string, subString: string): boolean;
}

class Home extends React.Component<props,state>{
    constructor(props: Readonly<props>) {
        super(props);
    }
    public State = {
        count: 1,
    }
    componentDidMount(): void {
        // @ts-ignore
        const {history}=this.props;
        const {pathname}=history.location;
        console.log(pathname)
        if(pathname=='/home'){
            history.push({pathname: '/home/new'})
        }
    }
    add=()=>{
        // @ts-ignore
        const {add}=this.props;
        add({username:"Herry"})
    }
    render() {
        // @ts-ignore
        const {state,match}=this.props;
        const {user}=state;
        const { Header, Content, Footer, Sider } = Layout;
        return (
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<SoundOutlined />}>
                            <Link to={`${match.path}/new`}>产品介绍</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<BankOutlined />}>
                            成功案例
                        </Menu.Item>
                        <Menu.Item key="3" icon={<HeartOutlined />}>
                            公司介绍
                        </Menu.Item>

                    </Menu>
                </Sider>
                <Layout>
                    <Header className="site-layout-sub-header-background" style={{ padding: 0 }}>
                        欢迎光临上海马哥公司
                    </Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            <Route path={`${match.path}/new`} component={New}/>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
}

const mapStateToProps = (state: state) => ({
    state
})

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = (dispatch:Dispatch) => ({
    add:(data: any)=>dispatch(login(data))
})

// @ts-ignore
export default connect( mapStateToProps, mapDispatchToProps)(Home);