import React, { Fragment } from 'react';
import Title from '../../../../../../components/Title';
import Layout from '../../../../../../components/Layout';
import Description from '../../../../../../components/Description';
import Container from '../../../../../../components/Container';
import Image from '../../../../../../components/Image';
import "./textEffects.css";
import TextEffectsImage from './assets/textEffects.png';
import DisplayBox from '../../../../../../components/DisplayBox';

export default function Variables() {
    return (
        <Fragment>
            <Layout type="column">
                <Container>
                    <Title>1. Text Effects Types</Title>
                    <Description>
                        <p>The 4 text effects properties are</p>
                        <Image image={TextEffectsImage}></Image>
                    </Description>
                </Container>
                <Container>
                    <Title>1. text-overflow</Title>
                    <Description>
                        <p>The CSS text-overflow property specifies how overflowed content that is not displayed should be signaled to the user.</p>
                    </Description>
                    <DisplayBox>
                        <div className="overflow ellipsis">This paragraph contains some text. This line will-break-at-hyphens.</div>
                        <br />
                        <div className="overflow clip">This paragraph contains some text. The lines will break at any character.</div>
                    </DisplayBox>
                </Container>
                <Container>
                    <Title>2. word-wrap</Title>
                    <Description>
                        <p>The CSS word-wrap property allows long words to be able to be broken and wrap onto the next line.</p>
                    </Description>
                    <DisplayBox>
                        <p className="wordWrap"> This paragraph contains a very long word: thisisaveryveryveryveryveryverylongword. The long word will break and wrap to the next line.</p>
                    </DisplayBox>
                </Container>
                <Container>
                    <Title>3. word-break</Title>
                    <Description>
                        <p>The CSS word-break property specifies line breaking rules.</p>
                    </Description>
                    <DisplayBox>
                        <p className="wordBreak1">This paragraph contains some text. This line will-break-at-hyphens.</p>
                        <br />
                        <p className="wordBreak2">This paragraph contains some text. The lines will break at any character.</p>
                    </DisplayBox>
                </Container>
                <Container>
                    <Title>4. writing-mode</Title>
                    <Description>
                        <p>The CSS writing-mode property specifies whether lines of text are laid out horizontally or vertically.</p>
                    </Description>
                    <DisplayBox>
                        <p className="writingMode1">Some text with default writing-mode.</p>
                        <br />
                        <p className="writingMode2">Some text with writing-mode: vertical-rl.</p>
                    </DisplayBox>
                </Container>
            </Layout>
        </Fragment>
    );
}
