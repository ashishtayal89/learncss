import React from 'react';
import DisplayBox from '../../../../../../components/DisplayBox';
import Title from '../../../../../../components/Title';
import Layout from '../../../../../../components/Layout';
import Container from '../../../../../../components/Container';
import Image from '../../../../../../components/Image';
import Wedding from './assets/wedding.jpg';
import Underwater from './assets/underwater.jpg';
import Rocks from './assets/rocks.jpg';
import Paris from './assets/paris.jpg';
import Ocean from './assets/ocean.jpg';
import Nature from './assets/nature.jpg';
import MountainSkies from './assets/mountainskies.jpg';
import Mist from './assets/mist.jpg';
import Falls from './assets/falls2.jpg';
import "./examples.css";

export default function Examples() {
    return (
        <div className="flexExamples">
            <Layout type="column">
                <Container>
                    <Title>1. Fluid Images</Title>
                    <DisplayBox>
                        <div className="row">
                            <div className="column">
                                <Image image={Wedding} />
                                <Image image={Rocks} />
                                <Image image={Falls} />
                                <Image image={Paris} />
                                <Image image={Nature} />
                                <Image image={Mist} />
                                <Image image={Paris} />
                            </div>
                            <div className="column">
                                <Image image={Underwater} />
                                <Image image={Ocean} />
                                <Image image={Wedding} />
                                <Image image={MountainSkies} />
                                <Image image={Rocks} />
                                <Image image={Underwater} />
                            </div>
                            <div className="column">
                                <Image image={Wedding} />
                                <Image image={Rocks} />
                                <Image image={Falls} />
                                <Image image={Paris} />
                                <Image image={Nature} />
                                <Image image={Mist} />
                                <Image image={Paris} />
                            </div>
                            <div className="column">
                                <Image image={Underwater} />
                                <Image image={Ocean} />
                                <Image image={Wedding} />
                                <Image image={MountainSkies} />
                                <Image image={Rocks} />
                                <Image image={Underwater} />
                            </div>
                        </div>
                    </DisplayBox>
                    <DisplayBox>
                        <div className="row">
                            <div className="column">
                                <Image image={Wedding} />
                                <Image image={Rocks} />
                                <Image image={Falls} />
                            </div>
                            <div className="column">
                                <Image image={Underwater} />
                                <Image image={Ocean} />
                                <Image image={Wedding} />
                            </div>
                            <div className="column">
                                <Image image={Wedding} />
                                <Image image={Rocks} />
                                <Image image={Falls} />
                                <Image image={Paris} />
                            </div>
                            <div className="column">
                                <Image image={Underwater} />
                                <Image image={Ocean} />
                                <Image image={Wedding} />
                            </div>
                        </div>
                    </DisplayBox>
                </Container>
            </Layout>
        </div>
    )
}
