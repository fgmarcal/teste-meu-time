import React from 'react';
import {Layout} from 'antd';
import Login from '../../components/login-form';

const { Header, Content, Footer } = Layout;

const img = require('./assets/background-soccer.jpg');

const Home: React.FC = () => {

    return (
        <Layout >
            <Header />
                <Content style={{backgroundColor:'#fff'}}>
                    <div style={{backgroundImage: `url(${img})`, backgroundRepeat:'no-repeat', backgroundPosition:'center'}}>
                        <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', margin:'4rem 0'}}>
                            <h1 style={{background:'#fff', borderRadius:4, padding:'0 1rem'}}> Bem vindo ao MEU TIME </h1>
                        </div>
                        <div style={{marginTop: '6rem', marginLeft: '30%',marginRight:'30%', padding: '3rem'}}>
                            <Login />
                        </div>
                    </div>
                </Content>
            <Footer style={{backgroundColor:'#fff'}}/>    
        </Layout>
    );
    };

export default Home;