import { Box, Typography, styled } from "@mui/material"
import { emptyChatImage } from "../../../costants/data"
const Component = styled(Box)`
    background : #f8f9fa;
    padding : 30xpx 0;
    text-align : center;
    height : 100%;
    max-height : 100%
`
const Container = styled(Box)`
    padding : 0 200px
`
const Image = styled("img")({
    width : 400,
    marginTop : 100
})
const Title = styled(Typography)`
    font-size : 32px;
    margin : 25px 0 10px 0;
    font-family : inherit;
    font-weight : 300;
    color : #41525d;
`
const Text = styled(Typography)`
    font-size : 14px;
    color : #667781;
    font-weight : 400;
    font-family : inherit;
`
const Empty = () => {
    return (
        <Component>
            <Container>
                <Image src={emptyChatImage} alt="" />
                <Title>WhatsApp Web</Title>
                <Text>Make calls, share your screen and get a faster experience when you download the Windows app.</Text>
            </Container>
        </Component>
    )
}
export default Empty