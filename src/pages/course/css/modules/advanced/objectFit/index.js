import React, { Fragment } from 'react';
import DisplayBox from '../../../../../../components/DisplayBox';
import Title from '../../../../../../components/Title';
import Layout from '../../../../../../components/Layout';
import Description from '../../../../../../components/Description';
import Container from '../../../../../../components/Container';
import Image from '../../../../../../components/Image';
import "./objectFit.css";
import ParisImage from './assets/paris.jpg';

export default function ObjectFit() {
    return (
        <Fragment>
            <Layout type="column">
                <Container>
                    <Title>CSS The object-fit Property</Title>
                    <DisplayBox>
                        <h1>The object-fit Property</h1>
                        <div className="objectFit">
                            <h2>No object-fit:</h2>
                            <Image image={ParisImage} style={{"width":"200px","height":"400px"}}/>

                            <h2>object-fit: fill (this is default):</h2>
                            <Image className="fill" image={ParisImage} style={{"width":"200px","height":"400px"}}/>

                            <h2>object-fit: contain:</h2>
                            <Image className="contain" image={ParisImage} style={{"width":"200px","height":"400px"}}/>

                            <h2>object-fit: cover:</h2>
                            <Image className="cover" image={ParisImage} style={{"width":"200px","height":"400px"}}/>

                            <h2>object-fit: scale-down:</h2>
                            <Image className="scale-down" image={ParisImage} style={{"width":"200px","height":"400px"}}/>

                            <h2>object-fit: none:</h2>
                            <Image className="none" image={ParisImage} style={{"width":"200px","height":"400px"}}/>
                        </div>
                    </DisplayBox>
                    <Description>
                        <div>
                            The CSS object-fit property is used to specify how an {`<img>`} or {`<video>`} should be resized to fit its container.
                        </div>
                    </Description>
                </Container>
            </Layout>
        </Fragment>
    );
}
