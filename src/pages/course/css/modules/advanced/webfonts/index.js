import React, { Fragment } from 'react';
import Title from '../../../../../../components/Title';
import Layout from '../../../../../../components/Layout';
import Description from '../../../../../../components/Description';
import Container from '../../../../../../components/Container';
import Image from '../../../../../../components/Image';
import "./webfonts.css";
import DisplayBox from '../../../../../../components/DisplayBox';

export default function WebFonts() {
    return (
        <Fragment>
            <Layout type="column">
                <Container>
                    <Description>
                        <p>Browser searches is the required font specified using font-family is there in the browser or not. If yes it serves the font otherwise it downloads and caches it.</p>
                    </Description>
                    <DisplayBox>
                        <div className="light">This is using sansation_light.woff</div>
                        <div className="bold">Font specific to font weight found. This is using sansation_bold.woff</div>
                        <div className="fontWeightNotFound">Font is found but nothing specific to font-weight. This is using sansation_light.woff but browser inbuilt font-weight</div>
                        <div className="fontStyleNotFound">Font is found but nothing specific to font-style. This is using sansation_light.woff but browser inbuilt font-style</div>
                        <div className="fontStyleWeightFound">Font,style and weight found</div>
                        <div className="fontNotFound">This is when the font-family or font is not available. Browser default font.</div>
                    </DisplayBox>
                </Container>
            </Layout>
        </Fragment>
    );
}