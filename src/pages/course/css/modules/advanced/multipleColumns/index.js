import React, { Fragment } from 'react';
import DisplayBox from '../../../../../../components/DisplayBox';
import Title from '../../../../../../components/Title';
import Layout from '../../../../../../components/Layout';
import Container from '../../../../../../components/Container';
import Image from '../../../../../../components/Image';
import "./multiplecolumns.css";
import multipleColumns from './assets/multipleColumns.png';
import multipleColumns2 from './assets/multipleColumns2.png'

export default function MultipleColumns() {
    return (
        <Fragment>
            <Layout type="column">
                <Container>
                    <Title>1. Multiple Columns</Title>
                    <DisplayBox>
                        <div class="newspaper">
                        <h2>Lorem Ipsum Dolor Sit Amet</h2>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.
                        </div>
                    </DisplayBox>
                    <Image image={multipleColumns} alt="variants"></Image>
                    <Image image={multipleColumns2} alt="variants"></Image>
                </Container>
            </Layout>
        </Fragment>
    );
}